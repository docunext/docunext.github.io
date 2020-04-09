---
title: Defending against Unsolicited Commercial Email UCE also known as Spam Page 2 Postfix
date: 2006-12-13
tags: postfix,rbldns,spam
---
Postfix has some great Spam control settings, but they are confusing! Here's what I think I've figured out:

<div>
<ul><li>smtpd authentication is now commonplace, likely using sasl</li> 	<li>sasl authentication takes place at the RCPT TO step, meaning you can easily block a legitimate request if you have smtpd_delay_reject turned off</li>	<li>based on the last comment, if you do have the delay turned off, you should have most of your rules in smtpd_recipient_restrictions, where the RCPT TO step and sasl authentication happens</li>	<li>the postfix page separates the restrictions based upon client, sender, and recipient, but the filters do not have to be separate, therefore you can put a reject_rbl_client in the smtpd_recipient_restrictions section.</li></ul>
</div>

What follows are my postfix UCE settings in main.cf. There are <b>many</b> alternatives, but I've found this setup to work well. I'm going to take these one restriction at a time, followed by an explanation. However, I'm starting with some general settings which affect the other restrictions or are general restrictions in themselves.

<b>General Settings</b>

<pre>
disable_vrfy_command = yes
smtpd_delay_reject = no
smtpd_helo_required = yes
address_verify_map = btree:/var/db/verify/verify_db
</pre>

<div>
The most important setting here is the smtpd_delay_reject. Set to no, this will allow postfix to reject a message before the entire message is received. Like most settings, this has pros and cons, the most obvious ones being that the sooner messages are rejected, the less resources that are consumed, and the less information there is to base the rejection upon, potentially increasing the number of false positives (meaning non-spam messages are blocked). The other settings disable postfix from responding to inquiries about whether an address exists or not, force postfix to require a helo, and set the location of the <a href="http://www.postfix.org/ADDRESS_VERIFICATION_README.html">sender address verification</a> database. (Even though I won't verify addresses, I do require some <a href="http://www.monkeys.com/anti-spam/filtering/sender-domain-validate.in">often forged domains</a> to verify their accounts before accepting.)
</div>

<b>Client Restrictions</b>

<pre>
smtpd_client_restrictions =        reject_unauth_pipelining,        permit
</pre>

<div>
With smtpd_delay_reject set to no, you don't want to block too much at this point. However, use reject_unauth_pipelining to prevent poorly written spam clients from bombarding you with smtp commands before they even confirm the server is running an smtpd server!
</div>

<b>Helo Restrictions</b>

<pre>
smtpd_helo_restrictions =        permit_mynetworks,        check_helo_access hash:/etc/postfix/helo_access,        permit
</pre>

Again, there isn't too much we can do at this point, but I use a hash table to block spammers from trying common yet invalid helos. For example:

<pre>
friend                  554 Service unavailable
localhost               554 Service unavailable
localhost.localdomain   554 Service unavailable
</pre>

<div>
Add the ip of the server is running on to that list. If the client is indeed your server, then it will be permitted by "permit_mynetworks". While the helo restrictions are not incredibly helpful, understanding the helo component can be a big help. For example, in my research on the subject, I found this post on the Neohapsis Archives which includes a command to <a href="http://archives.neohapsis.com/archives/postfix/2006-08/0329.html">display the most common rejected helo fields in the mail log</a>:
</div>

<pre>
grep "NOQUEUE" /var/log/mail/mail.log |sed "s/.*helo=\(.*\)/\1/" |sort |uniq -c |sort -rn | more
</pre>

Note: Edited for Debian environment and friendly output.

<b>Sender Restrictions</b>:

<pre>
smtpd_sender_restrictions =           reject_non_fqdn_sender,        permit
</pre>

<div>
While it is possible to do some serious blocking based upon the sender's address, we do not at this point in the process. Remember, these restrictions are made in sequence, corresponding to the order in which the information is received. Accordingly, we try to be as efficient as possible, and have so far avoided doing any resource (time, processor, or bandwidth) intensive restrictions. As you'll see in the next section, there are a couple of highly effective, lightweight restriction we can implement once we get the recipient information, before we start doing any network tests. Check out <a href="http://www.akadia.com/services/postfix_uce.html">akadia.com for a good explanation on how to choose the optimal smtpd restriction levels</a>, as well as this Neohapsis Archive post about <a href="http://archives.neohapsis.com/archives/postfix/2002-11/2584.html">setting smtpd_delay_reject = no</a>.
</div>

<b>Recipient Restrictions</b>

<pre>
smtpd_recipient_restrictions =
  permit_sasl_authenticated,
  permit_mynetworks,
  reject_non_fqdn_recipient,
  check_recipient_access mysql:/etc/postfix/mysql-rcptbl.cf,
  reject_unauth_destination,
  reject_unlisted_recipient,
  check_client_access hash:/etc/postfix/uceprotect.net-dnsbl-access,
  check_policy_service inet:127.0.0.1:60000,
  reject_rhsbl_sender dsn.rfc-ignorant.org,
  reject_rbl_client dnsbl.kempt.net,
  reject_rbl_client sbl.spamhaus.org,
  reject_rbl_client list.dsbl.org,
  reject_rbl_client dul.dnsbl.sorbs.net,
  reject_rbl_client dnsbl.njabl.org,
  reject_rbl_client psbl.surriel.com,
  warn_if_reject,
  reject_unknown_client,
  #warn_if_reject,
  #reject_invalid_hostname,
  warn_if_reject,
  reject_unknown_hostname,
  check_policy_service inet:127.0.0.1:10000,
  warn_if_reject

check_sender_access hash:/etc/postfix/sender_access

permit_mx_backup
</pre>

<div>
This is where the magic happens. First things first, let's permit the good guys, our accounts, to send to whoever they want, as long as they've authenticated or are sending from our network. And let's get an important fact clear: you can permit a restriction using a factor test other than the factor named in the restriction title. Huh? Example, in these recipient_restrictions, we are permitting the action based upon the sender. We'll see more of this momentarily so if it doesn't make sense, it will.
</div>

After those permissions comes our first big blocker:

<pre>
check_client_access hash:/etc/postfix/uceprotect.net-dnsbl-access
</pre>

This checks the client against a hash table of blacklisted ips, provided graciously by <a href="http://www.uceprotect.net/en/">UCE Protect - A Provider of Spam and UCE Defense products and services</a>. My favorite aspect to their offering is the ability to rsync their entire database to your server, hash it, and use it there. As you can imagine, this results in faster results. I'll explain how I do this later, in the meantime you can check out their instructions on how to <a href="http://www.uceprotect.net/en/index.php?m=6&s=10">setup automatic rsync synchronization with their dns blacklist database</a>. When a spammer tries to send your server a spam message, postfix checks the list, and if they are on it, they are denied.

Next up, another local lookup, but now instead of a hash table, we use a database. I use a database here because of its flexibility, and ease of manual or automatic updates. I use this restriction to block mail for domains I host that have no mx record and receive no mail. Spammers sometimes just send email to an A record of a domain, thinking it will find its way into a catch all account somewhere.

<div>
Then a couple of very important postfix restrictions: reject_unauthorized_destination and reject_unlisted_recipient. The first ensures that postfix is the destination for the recipient's domain, and that the address is listed at that domain. The first one will ensure that for the most part, spammers cannot send email to others from your server, which is a serious problem and could result in your ip getting blacklists. This is also called an open relay and is a bad thing. The second is a new restriction, similar to but opposite check_recipient_maps. The restriction check_recipient_maps is automatically called at the end of all restrictions, chances are the recipient is available and the message will go through.
</div>

After that, the last of the inexpensive restrictions, and a very good one I might add: greylisting. I use postgrey, and it has worked very well. The concept is simple, delay the mail for a short period of time. Most spammers won't bother to retry, while any real email server will hold off for a little while, and try again. <a href="http://isg.ee.ethz.ch/tools/postgrey/">As many people have said, <b>this is a very effective method of blocking spam.</b></a> If its so good, why does it come so far into the process? Great question! It is because we have to know the recipient before we can do the testing for it to be accurate. (Note: the default for greylisting in postfix is to continue processing the resrictions even if the message passes the greylisting test - i.e. the message was sent again. This is good as the rest of the tests will be run to see if the message is spam or not.) Here's another Neohapsis email about <a href="http://archives.neohapsis.com/archives/postfix/2004-12/2040.html">when to include the greylisting policy in postfix recipient restrictions</a>.

Next come the blacklist lookups. These are very effective, and take a little time and effort to complete. You should therefore consider running a dns cache of some sort. Remember thes important factors when using dns blacklists:

1. DNS blacklists are not always right.
2. Many DNS blacklists seem to come and go. <a href="http://shopping.declude.com/Articles.asp?ID=97">Here is a list of dns realtime black lists (dnsbl) and their status</a>.
3. Some DNS blacklists are fee based.
4. Spamassassin can also access DNS blacklists, so if you are wary about legitimate email getting blocked, you can use spamassassin to flag them instead of block them.

<div>
Then come several generic postfix restrictions, which you will find in many people's configuration. I have them positioned here because I'm not entirely sure how I feel about them because they resulted in false positives, and that is why I have warn_if_reject is used, rather than removing them entirely. I am certain that many servers and clients have their helo command misconfigured, and some do not have their hostname configured. <b>reject_unknown_client</b> (client restriction)" Reject the request when the client IP address has no PTR (address to name) record in the DNS, or when the PTR record does not have a matching A (name to address) record. The unknown_client_reject_code parameter specifies the response code to rejected requests (default: 450)."
</div>

I <strong>definitely</strong> cannot use this one as ISPs and hosting providers do not always configure their DNS records correctly.

<div>
<b>reject_invalid_hostname</b>

"Reject the request when the client HELO or EHLO parameter has a bad hostname syntax. The invalid_hostname_reject_code specifies the response code to rejected requests (default: 501)."
</div>

<div>
This one appears to be the only possibility, I'm going to continue to include it as a warning and see what happnes. While some clients still misconfigure their helo command, they are either spammers, or legitimate clients who can authenticate with sasl, so they will be OK'd before getting to this restriction. Actually, taking it one step further, I think its cool to use <strong>reject_non_fqdn_hostname</strong> for the same reasons. I'm testing it out now, using the following command to track the mail log rejections:
</div>

<pre>
tail -f /var/log/mail/mail.log -n 400 | grep "NOQUEUE\|reject_warning"
</pre>

<div>
Every warning I've seen from reject_non_fqdn_hostname (as long as it comes after sasl_authenticated) has been rejected for some other reason, like unknown user, or a dns blacklist.

<b>reject_unknown_hostname</b>"Reject the request when the hostname in the client HELO (EHLO) command has no DNS A or MX record. The unknown_hostname_reject_code specifies the response code to rejected requests (default: 450)."
</div>

I cannot use this one, as many clients and ISPs misconfigure their helo parameters.

Next is another policy server which more people should use. I have it this low on the totem pole because not that many people do use it. This is for the sender polify framework (spf) which is designed to prevent domain spoofing, where unauthorized email is sent from a domain that the sender does not have access to. As more people setup spf records for their domains, this policy will become more useful. Here are some <a href="http://fnord.no/sysadmin/mail/greylisting-and-rbl/">helpful instructions on whitelister (spf policy daemon available on debian)</a>. FWIW, here's the <a href="http://www.gentoo.org/doc/en/mailfilter-guide.xml">Gentoo Mailfiltering Guide with some information on SPF</a>.

Lastly I include a warning for unverified sender addresses. Here's what happens, postfix pretends to send an email back to the sender, and if it looks like the address is valid and the email will go, then the email from that address is allowed, if not, meaning there is no address from where the email is coming from, it is rejected. This is an expensive, unreliable, and not generally recommended technique, so I only do this for a subset of commonly forged domains. In my recent experience, the most common forged domain in spam my servers have received is earthlink.com. Ouch for them.

<div>
Wait - one final note, I just learned about another <a href="http://jimsun.linxnet.com/misc/postfix-anti-UCE.txt">postfix anti-uce technique called smtpd_restriction_class</a>. It is very similar to the sender address verification setup mentioned in the last section. It appears more flexible and may allow for more sophisticated combinations of testing and restrictions, such as checking unknown clients or unknown hosts against another lookup table, while bypassing the others. I'm not sure if this would work yet, need to check it out.
</div>

<center>
<a href="/blog/2006/12/postfix-uce-spam-settings-page-1.html" rel="previous">Previous: Blocking spam with Iptables</a>

<a href="/blog/2006/12/defending-against-unsolicited-commercial-email-uce-also-known-as-spam-page-3-spamassassin.html" rel="next">Next: Blocking spam with Spamassassin</a>
</center>

Postfix-Specific References:

* <a href="http://gentoo-wiki.com/HOWTO_Email:_A_Complete_Virtual_System_-_Refining_the_Setup">Gentoo Wiki HOWTO Email: A Complete Virtual System - Refining the Setup</a>
* <a href="http://www.postfix.org/"> The Postfix Home Page</a>
* <a href="http://www.seaglass.com/postfix/faq.html">Comprehensive Postfix FAQ</a>
* <a href="http://linuxmafia.com/faq/Mail/postfix-antispam.html">WSRCC Spam Fighting Page</a>
* <a href="http://www.unixwiz.net/techtips/postfix-HELO.html">Blocking spammers with Postfix HELO controls</a>
* <a href="http://www.marlow.dk/site.php/tech/postfix">ISP Mailserver Solution Howto - Where I found information on using mysql for storing policy data</a>
* <a href="http://www.completewhois.com/statistics/data/ips-bycountry/rirstats/">IP Netranges for all countries</a>
