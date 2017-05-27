---
title: fail2ban iptable.conf action
comments:
  - author: admin
    email: albert.lash@savonix.com
    ip: 72.70.93.44
    url: http://www.docunext.com/
    date: 12/13/2006 07:35:22 AM
    text: >
      I also want to mention that on both gentoo and debian the init scripts don't seem to work that well. I have much better luck with the commands:<br/><br/>fail2ban-client stop<br/>fail2ban-client start
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 11/27/2007 04:10:03 PM
    text: >
      As of more recent versions, the init scripts on both debian and gentoo are working much better.
date: 2006-12-08
tags: open source
---
I need to contribute this to fail2ban if they'll take it:

<a href="http://www.netfilter.org/documentation/FAQ/netfilter-faq-3.html#ss3.11">iptables -L takes a very long time to display the rules</a>

Just posted this to the <a href="http://fail2ban.sourceforge.net/wiki/index.php/Fail2ban:Community_Portal">fail2ban wiki community portal</a>:

<blockquote>Fail2ban is one of the best projects I've encountered - I love it! One suggestion: in 0.7+, the iptables.conf action uses pre-ban command"

<pre>iptables -L....</pre>

Is there a reason for this? Maybe ip spoofing? At any rate, this can cause fail2ban to take forever in implementing its actions if the iptables chains are big, because it causes DNS lookups for each entry. I suggest adding the "n" flag to the command, to speed things up, like this:

<pre>iptables -nL....</pre>

See:

<a href="http://www.netfilter.org/documentation/FAQ/netfilter-faq-3.html#ss3.11 netfilter">FAQ: iptables -L takes a very long time to display the rules</a></blockquote>

¥

