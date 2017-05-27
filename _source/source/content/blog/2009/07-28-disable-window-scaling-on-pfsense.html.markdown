---
title: Disable Window Scaling on pfSense
date: 2009-07-28
tags: freebsd,pfsense,tcp
---
I am still getting that wacky "<b>TCP Treason Unclocked</b>" kernel message from time-to-time, so I'm disabling window scaling on my pfSense firewall.

pfSense is a FreeBSD derivative, so I looked up the procedures for doing so, and decided to add this to /etc/systctl.conf:

<pre>net.inet.tcp.inflight.enable=0
net.inet.tcp.path_mtu_discovery=0
net.inet.tcp.rfc1323=0
</pre>

I haven't tested this setup extensively yet.

