---
title: OpenVZ Ignored by pfSense slbd
date: 2008-04-20
tags: openvz,pfsense,tcp
---
This problem - <a href="http://www.docunext.com/blog/2008/01/pfsense-load-balancer-and-openvz.html">when an openvz restart causes slbd to mark the load balanced node to get marked down and stay down after its back up</a> - still plagues me.

I thought switching to TCP from ICMP might help, but alas, it does not. I think the problem might have something to do with the sysctl settings on the OpenVZ host. Not sure really...

