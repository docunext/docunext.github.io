---
title: pfSense Load Balancer and OpenVZ
comments:
  - author: Albert
    email: albert.lash@savonix.com
    date: 01/28/2008 10:57:54 AM
    text: >
      UPDATE: I'm now trying the TCP monitor instead of the ICMP, maybe that will help.
  - author: Al
    email: al11@gmail.com
    url: http://hubshout.com
    date: 01/06/2009 08:34:24 PM
    text: >
      Let us know how that goes. I wish there were more options in the load balancer myself - such as an HTTP check with evaluation of text....
  - author: Albert
    email: albert.lash@savonix.com
    date: 01/06/2009 09:08:54 PM
    text: >
      That would be awesome - I wonder if ldirectord could help:<br/><br/><a href="http://www.vergenet.net/linux/ldirectord/" rel="nofollow">http://www.vergenet.net/linux/ldirectord/</a><br/><br/>Nice site by the way...
date: 2008-01-19
tags: firewall,"load balancer",openvz,pfsense
---
I use pfSense as a load balancer to direct traffic to two different machines. I've experienced strange behavior when I restart the virtual environment, the load balancer marks it as offline, but won't notice when it comes back online. On top of that, I can't ping the firewall from the VE or vice versa, yet all the other machines on the lan segment can talk to one another.

I think I finally figured out how to fix the situation, if I refresh the filters, the IP comes back online. I had tried resetting the states but that didn't work. It could have been a coincidence that the machine came back online when I refreshed the filters, so I'll have to try it again and confirm it next time I restart the VE.

#### State Preservation

While I was working on the firewall, I also set the Advanced -> Traffic Shaper and Firewall Optimization Option to "conservative". The firewall serves mostly email and web traffic, and I've specifically set the web traffic state to expire quickly, so I am trying to improve email performance by increasing the default state time. If it causes any issues, I'll switch it back. The notes for the conservative setting say:

<blockquote>tries to avoid dropping any legitimate connections at the expense of increased memory usage and CPU utilization.</blockquote>

but I have 512MB of memory in the machine, with a 600Mhz PIII Coppermine processor, so I should be OK. Besides, my state table usually has less than 1000 entries out of a maximum of 10000.

¥

