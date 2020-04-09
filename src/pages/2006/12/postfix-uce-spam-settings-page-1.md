---
title: Unsolicited Commercial Email UCE Spam Defenses
comments:
  - author: admin
    date: 07/23/2007 02:32:24 AM
    text: >
      This is a good page on Postfig configuration:<br/><br/><a href="http://www.pantz.org/email/postfix/postfixconfigfiles.shtml" rel="nofollow">http://www.pantz.org/email/postfix/postfixconfigfiles.shtml</a><br/><br/>and this looks cool too:<br/><a href="http://k2net.hakuba.jp/targrey/index.en.html" rel="nofollow">http://k2net.hakuba.jp/targrey/index.en.html</a>
date: 2006-12-13
tags: iptables,postfix,spam
---
The spam fighting process I use (in order):

<pre>
+- 1: iptables - Block spammers from connecting to port 25, consider logging their attempts.
|+- 2: postfix - postfix has a many effective spam controls and plugins
|   +----+ 2.1: client_restrictions - the client is the machine connecting to your smtp server
|   +----+ 2.2: helo_restrictions - the helo is the identification that machine provides
|   +----+ 2.2: sender_restrictions - the sender is the "from" address
|   +----+ 2.2: recipient_restrictions - the recipient is the "to" address
|        +- spamassassin - spamassassin is an effective bayesian and rules-based filter to identify spam
| +- Thunderbird or Mac Mail - these mail clients (and perhaps others) use training to identify and separate spam
</pre>

<b>iptables</b> - iptables is an extreme method of blocking email. From the sender's perspective, the host is down. However, in several cases, it can be used effectively, like blocking certain countries and eternally black holes. See <a href="http://www.okean.com/">http://www.okean.com/</a> for more information.

On page 2 in this series, we'll discuss <a href="http://www.docunext.com/2006/12/defending-against-unsolicited-commercial-email-uce-also-known-as-spam-page-2-postfix.html" rel="next">fighting spam with Postfix with client, helo, sender, and recipient restrictions</a>.

¥

