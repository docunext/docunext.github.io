---
title: High Availability Nodes on the Same Subnet
date: 2007-06-11
tags: drbd,"high availability"
---
If you have more than one set of ha nodes on the same subnet, you might see authentication failures in your logs if you are using broadcast or multicast addressing.

Instead, I'm using **unicast**. This thread about ultramonkey was helpful:

<a href="http://osdir.com/ml/linux.highavailability.ultramonkey/2004-04/msg00015.html">http://osdir.com/ml/linux.highavailability.ultramonkey/2004-04/msg00015.html</a>

Also need to note, when your "cat /proc/drbd" outputs an Unknown, run "drbdadm connect all" on the primary machine. You might be able to run it on either machine, but I've only run it on the primary. Actually this time I had to run it on the secondary machine too.

I will likely use an isolated crossover cable for future heartbeat installations.

