---
title: OpenVPN between pfSense and Debian GNU Linux
date: 2010-06-29
tags: openvpn
---
I wish I'd thought of this setup earlier - its a sweet combo! I've definitely used IPSec between linux and pfSense, but for single external nodes, the common site-to-site IPSec configuration wasn't necessary for me.

OpenVPN servers use a DHCP-like system for distributing private IP addresses to clients. This setup required me to use the public key infrastructure setup (PKI) as opposed to the shared key, which I've come to learn is used with only one client at a time.

Since I had a handful of clients, I setup a C-class, 192.168.x.0/26, 255.255.255.192 subnet - that provides me with a maximum of 62 hosts which is plenty, even though apparently some OpenVPN configurations use up a lot of IP space when supporting Windows clients. I am not, so I used the **ifconfig-pool-linear** option on the server.

I've got three Debian GNU/Linux clients setup with this configuration and plan to use it in a variety of ways... but first I'm going to make sure everything is super stable. I've definitely had to do some tweaking since I first setup it up, so there may be more. I've definitely learned a lot in the process!

For more information on my setup, check out the [Docunext OpenVPN wiki page where I've uploaded screenshots](http://www.docunext.com/wiki/OpenVPN).
