---
title: GRE or IPIP Tunnel
date: 2007-02-12
tags: none
author: Albert Lash
---
I'm trying to test out a tunnel.

Couldn't use the gre mode for some reason:

<pre>ioctl: No buffer space available</pre>

And trying to insert the modules on another system resulted in this error:

<pre>FATAL: Error inserting ip_gre (/lib/modules/2.6.16-xen/kernel/net/ipv4/ip_gre.ko): Resource temporarily unavailable</pre>

but I think that's because the kernel already had it in it.

So it actually works! Very very cool.

