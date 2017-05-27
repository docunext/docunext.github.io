---
title: Names
date: 2009-01-17
---
Over the past few days, I've been working on fixing all the hostnames and DNS records for my internal networks. It had become a bit messy, and over the years I've learned that if you take care of your network, it will take care of you.

Its worth the time to document the topology, organize and plan IP space, and use logical hostnames.

Internally I use dnsmasq, /etc/hosts files, and unbound. Externally I use bind9 and nsd3.

