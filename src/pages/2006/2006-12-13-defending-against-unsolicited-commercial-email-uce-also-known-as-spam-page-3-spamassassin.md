---
title: Defending against Unsolicited Commercial Email UCE also known as Spam Page 3 Spamassassin
date: 2006-12-13
tags: spam
---
Now that an email has traversed its way through the maze of iptables and postfix restrictions, we can open up the envelope and look inside to see if the contents are junk. This process is more intensive than all that's come before.

Spamassassin is pretty easy to install and setup, but its use can be confusing. Let's start by explaining how it works. Spamassassin scans an email, and runs the contents through a series of tests. Each test will add or subtract a certain amount to the likelihood that the email is in fact spam. In addition to the rules, spamassassin also has a "trained" ruleset, called bayesian filtering, which is uses to identify spam. For now, think of bayesian filtering is an abstract ruleset. As such, it requires a certain number of training sessions before it can reliably identify spam (at least 200).

Spamassassin can include dnsrbl checks in its filtering process, so you can include more aggressive lists here, or lists that do not support postfix, <a href="http://bl.csma.biz/">like the spam blacklist graciously provided by McFadden Associates</a>.

But... how do we get spamassassin to actually scan the messages? There are several ways. In our postfix setup, we use the maildrop transport, and in turn use maildrop to filter the each message through spamassassin, using the spamc client.

<pre lang="bash">if ( $SIZE < 1048576 ){        exception {                xfilter "/usr/bin/spamc"        }}</pre>

The best part about the spamassassin + maildrop setup is that maildrop will separate the spam messages into a separate folder, so that they won't distract you, and you can review them when you have time. I also plan to setup courier to automatically delete the contents of the spam folder at regular intervals.

At some point, I'll publish yet another tutorial on howto setup postfix, mysql, squirrelmail, courier-imap, spamassassin, and saslauthd, but for now, I'll direct you to <a href="http://www.gentoo.org/doc/en/virt-mail-howto.xml">Gentoo's Virtual Mailhosting System with Postfix Guide</a>.

One last note: I use spamassassin sitewide, as I'm really the only user who is able to report. Therefore, I use this command:

<pre lang="bash">sa-learn --spam -C /etc/mail/spamassassin --showdots --dir </pre>

Referenced from this page:

<a href="http://wiki.apache.org/spamassassin/SiteWideBayesSetup">http://wiki.apache.org/spamassassin/SiteWideBayesSetup</a>

I also noted that spamd sometimes uses a lot of CPU power, I looked it up and found this:

<a href="http://mail-archives.apache.org/mod_mbox/spamassassin-users/200412.mbox/%3C20041202193253.GA32575@mail.herk.net%3E">spamd process using to much cpu</a>

Where the author suggests moving bayesian databases to mysql, which I think is a great idea. This looks good: <a href="http://www200.pair.com/mecham/spam/debian-spamassassin-sql.html">Migrating our Debian Anti-Spam Anti-Virus Gateway Email Server's Bayes database to MySQL</a> at Pair.com. <center>

<a href="/blog/2006/12/13/defending-against-unsolicited-commercial-email-uce-also-known-as-spam-page-2-postfix/" title="previous">Previous: Blocking spam with Postfix</a>

<a href="/blog/2006/12/13/defending-against-unsolicited-commercial-email-uce-also-known-as-spam-page-4-mail-clients/" title="next">Next: Blocking spam with Email Clients</a></center>

Spamassassin-Specific References:

<a href="http://spamassassin.apache.org/">The Apache SpamAssassin Project</a>
