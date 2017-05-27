---
title: More OpenVZ Tips
date: 2007-08-26
tags: none
author: Albert Lash
---
<pre>vps-net_add WARNING: arpsend -c 1 -w 1 -D  -e x.x.x.x eth1 FAILED</pre>

I think this is caused by having two network interfaces on the hardware node. I thought I might be able to use only venet, but I believe I'll have to use veth and create a bridge between the desired card and the vm, as described here.

192.168.3.137            *       <from_interface>    MP                    eth0

192.168.3.137            *       <from_interface>    MP                    eth1

For some reason, the upstream gateway is responding to arp requests saying that it has that ip address.  Odd. I'm wondering if that ip address really is taken somewhere up the stream. I doubt it actually, I've tried a few different random strings but they all collide.

<pre># Send ARP request to detect that somebody already have this IP

function vzarpipdetect(){        local DEV        local ip        local cmd        [ -z "${1}" ] && return        [ "${SKIP_ARPDETECT}" = "yes" ] && return        for ip in ${1}; do                cmd="$cmd -e $ip"        done        for DEV in $NETDEVICES; do                ${ARPSEND_CMD} -D ${cmd} $DEV || vzwarning "${ARPSEND_CMD} -D ${cmd} $DEV FAILED"        done}</pre>

Found this in vps-functions.

This definitely occurs due to multiple cards.

Didn't work for me: /sbin/ip rule add from 192.168.3.0/24 table 12/sbin/ip route add default dev eth0 via 192.168.3.1 table 12#ip rule list

0:      from all lookup 255

32765:  from 192.168.3.0/24 lookup 10

32766:  from all lookup main

32767:  from all lookup default

default via 192.168.3.1 dev eth0 # ip route get 4.2.2.1 from 192.168.3.3

4.2.2.1 from 192.168.3.3 via 192.168.3.1 dev eth0     cache  mtu 1500 advmss 1460 hoplimit 64

WORKING CONFIG:#route

Kernel IP routing table

Destination     Gateway         Genmask         Flags Metric Ref    Use Iface

x.x.x.x     *               255.255.255.240 U     0      0        0 eth1

192.168.3.0     *               255.255.255.0   U     0      0        0 eth0

192.168.0.0     192.168.3.1     255.255.255.0   UG    0      0        0 eth0

default         64.25.86.81     0.0.0.0         UG    0      0        0 eth1

franklin:~# ip route show

64.25.86.80/28 dev eth1  proto kernel  scope link  src 64.25.86.83

192.168.3.0/24 dev eth0  scope link

192.168.0.0/24 via 192.168.3.1 dev eth0

default via 64.25.86.81 dev eth1

franklin:~# ip rule show

0:      from all lookup 255

32764:  from all to 4.2.2.0/8 lookup 10

32765:  from 192.168.3.0/24 to 4.2.2.0/8 lookup 10

32766:  from all lookup main

32767:  from all lookup default

franklin:~# ip route show table 10

default via 192.168.3.1 dev eth0

Whoa this was a confusing task. Took me all day! The iproute2 routing rules and tables are great, an pretty similar to iptables, which made them easier for me to grasp.

<blockquote>

route add -net 192.56.76.0 netmask 255.255.255.0 dev eth0 adds  a  route to the network 192.56.76.x via "eth0". The Class C netmask modifier is not really necessary here because 192.* is a Class C IP address. The word "dev" can be omitted here.</blockquote>

Here's what I ended up doing: * added a <a href="http://wiki.openvz.org/Source_based_routing">source based route for on ip as described on openvz wiki</a>* setup a firewall and nat on the vpn gateway as described on the <a href="http://www.gentoo.org/doc/en/home-router-howto.xml">gentoo home router guide</a>

