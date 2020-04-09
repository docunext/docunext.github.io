---
title: Fail2ban for SPAM
comments:
  - author: admin
    email: albert.lash@savonix.com
    date: 11/21/2006 02:51:39 AM
    text: >
      This is actually a very useful setup. Its incredible how relentless spammers are, they just keep trying to send spam even if they get denied. Its nice to just drop their efforts instead of continuously informing them that their mail will not be sent. Saves the dnsbls a little bandwidth too!
  - author: admin
    email: albert.lash@savonix.com
    date: 11/20/2007 04:46:46 PM
    text: >
      I'm reconsidering this method of fighting spammers, wary of the load that log monitoring and scanning requires.
date: 2006-11-19
tags: spam
---
Spammers never learn, even if you block them using DNSBL, they keep trying to send from the same IP. Therefore it makes sense to use fail2ban to block them. Here's where I found the info I needed to do so:

<a href="http://www.the-art-of-web.com/system/fail2ban-sendmail/">Fail2ban sendmail</a><del rel="http://blog.toonarmy.mine.nu/2006/07/20/fail2ban-rule-for-postfix/">Fail2ban rule for postfix</del> - link dead

<a href="http://www.the-art-of-web.com/system/fail2ban/">Fail2ban and iptables</a>

My postfix regexfail rules came out a bit different than the ones that Chris came up with:

<pre>
failregex = NOQUEUE: reject: RCPT from \S*\[(?P<host>\S+)\]: 554</pre>

¥

