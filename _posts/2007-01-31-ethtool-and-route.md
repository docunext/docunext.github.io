---
title: ethtool and route
date: 2007-01-31
---
Couple of quick notes on networking:
<h3>ethtool</h3>

Ethtool is the best tool in my opinion for editing network hardware settings. For example:

<pre>ethtool -s eth1 autoneg off speed 100 duplex full</pre>

That will turn off autonegotiation, and set the speed to 100, full duplex.
<h3>route</h3>

For linux networking, route is the tool for setting up routing tables.

<pre>Kernel IP routing table

Destination     Gateway         Genmask         Flags Metric Ref    Use Iface

192.168.0.1     192.168.0.1     255.255.255.255 UGH   0      0        0 eth1

192.168.0.0     *               255.255.255.0   U     0      0        0 eth1

64.25.86.0      *               255.255.255.0   U     0      0        0 eth0

default         64.25.86.81     0.0.0.0         UG    0      0        0 eth0</pre>

<pre>route add -host 192.168.0.1 gw 192.168.0.1</pre>

