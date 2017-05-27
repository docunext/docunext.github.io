---
title: mdns gotcha 
date: 2009-02-27
tags: none
author: Albert Lash
---
I don't think its a bug, but its definitely annoying. When I have a gateway with no reverse DNS entry (PTR record), then mdns4 blocks lookups and slows things down quite a bit.

The fix is to create a real reverse dns record, but its also possible to simply remove mdns4 and mdns_minimal from /etc/nsswitch.conf.

<a href="https://bugs.launchpad.net/ubuntu/+source/avahi/+bug/94940 ">https://bugs.launchpad.net/ubuntu/+source/avahi/+bug/94940 </a>

