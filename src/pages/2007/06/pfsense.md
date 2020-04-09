---
title: Quick pfSense Review
date: 2007-06-16
tags: firewall,pfsense,qemu,routing,vmware
---
pfSense is a FreeBSD-based firewall inspired by m0n0wall and after a quick trial run, it  looks very nice. I just tried the VMWare virtual machine for it and was very impressed. I think I'll stick to m0n0wall for the front lines, but then use pfsense for behind the scenes routing and load balancing.

I doubt I'll continue to use VMWare, but it is convenient right now. I'd like to be able to understand the networking stack used with QEMU and the vde. Just did a quick search and this turned up:

<a href="http://alien.slackbook.org/dokuwiki/doku.php?id=slackware:vde">http://alien.slackbook.org/dokuwiki/doku.php?id=slackware:vde</a>

Looks to be exactly what I'm looking for! Its good reading, but I found a typo and I can't fix it, presumably because their wiki has been spammed too many times:

<blockquote>The drawback of user-mode networking is that is is</blockquote>

Should be "it is". Oh well. No big deal.
