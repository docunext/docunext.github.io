---
title: OpenVPN Documentation
date: 2006-05-01
---
There are some good websites on OpenVPN. One of course being the OpenVPN website itself.

I am using tun instead of tap. From what I gathered, tun allows you to use NAT instead of bridging, which is what TAP uses.

Tun is a virtual device like eth0. So whenI set this up, I had to edit my firewall and network address translation (NAT) / ip_masquerade rules to provide for the new device. So far things are looking good.

One thing that really impresses me about OpenVPN is its speed. It is very fast!

The configuration can be a little tricky, thought I think with some planning and thinking, we can get clients connected easily. * When I connected to OpenVPN from home over this past weekend, I accidentally took down the LAN. Was it because tun0-00 had the same ip # as the LAN gateway - eth1? Stopping the OpenVPN fixed the problem.

