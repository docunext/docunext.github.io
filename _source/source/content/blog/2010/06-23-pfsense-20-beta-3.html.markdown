---
title: pfSense 2.0 BETA 3
date: 2010-06-23
tags: load balancer
---

I'm very impressed with the latest version of pfSense: **2.0**!

The feature I've been most looking forward to is the ability to create GRE tunnels, but after installing it on an extra ALIX board I had lying around, I found some other features that are really awesome!


#### Load Balancing

The new version of pfSense uses relayd replaces slbd for load balancing - and that includes the ability to probe pool members with ICMP, TCP, HTTP, HTTPS, or SMTP.


#### GRE Tunnels


The GRE tunnel setup is located in the interfaces section:


#### NanoBSD

I haven't scratched the surface yet with NanoBSD, but from what little I've read on the topic, its great news for the embedded version of pfSense.


#### GLXSB Driver

The new version of pfSense also includes the glxsb driver! This is good news for owners of ALIX boards.

