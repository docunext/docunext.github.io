---
title: m0n0wall VPN
date: 2007-03-12
tags: none
author: Albert Lash
---
I finally got my second m0n0wall device (m1n1wall from Netgate) setup, and I tried to access it remotely from a tunnelled vnc connection, but I'm not getting any response from the https server. Grrr.

<pre>racoon ERROR: give up to get IPsec-SA due to time up to wait</pre>

For me, this was a subnet misconfiguration. I had 192.168.0.1/24 instead of 192.168.0.0/24. Could have been some other glitchy things I was screwing around with, but the beautiful thing is that it works!

Connecting two separate LANs over a VPN is super cool. I'm really liking it, and have plans to do a whole lot more. I can see how useful this type of setup can be. This will fit very nicely into the modularization efforts I'm working on.
