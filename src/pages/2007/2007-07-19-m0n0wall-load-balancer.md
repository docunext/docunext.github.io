---
title: m0n0wall Load Balancer
date: 2007-07-19
tags: none
author: Albert Lash
---
Chris responded to my inquiry at the <a href="http://forum.m0n0.ch/index.php/topic,773.0.html">m0n0wall forums</a> that m0n0wall uses IPF 3.x on 1.2x and IPF 4 on 1.3x. I was wondering because I'd like to use a load balancer on m0n0wall.

Based upon that information, I found pen:

<a href="http://www.freshports.org/net/pen/">http://www.freshports.org/net/pen/</a>

thanks to:

<a href="http://redundancy.org/fbsd_lb.html">http://redundancy.org/fbsd_lb.html</a>

Chris also responded to my <a href="http://forum.m0n0.ch/index.php/topic,718.0.html">inquiry about config backups with a link to the manual</a>:

<a href="http://doc.m0n0.ch/handbook/thirdparty-automatedbackups.html">http://doc.m0n0.ch/handbook/thirdparty-automatedbackups.html</a>

This is a great script to backup config files to a CVS repository. Since I use subversion, I'll modify it and post it back to the mailing list. In fact, I'll probably setup something similar for several of our servers, since I already store the config files for each machine in subversion! :-)
