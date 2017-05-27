---
title: pfSense Experiments and Fixes
date: 2008-08-27
---
I've been working on my portable VPN gateway, and I have to admin its been a tough nut to crack. Not only did something get screwed up with my compact flash card, but I managed to totally disable two compact flash cards. I didn't have a compact flash card, so what was I to do?

Thankfully, the new ALIX boards can PXE boot. I did this using debian, and then downloaded the pfSense image and flashed it to the compact flash card. So far so good!

My raw notes:

<pre>
Having a heck of a time with my portable wifi VPN firewall setup. Not sure if

this type of thing is possible, if not, that's too bad.

Infrastructure - a connection to the internet - a client to other wireless provider

Ad-Hoc - a mesh node

Access point - a "Server" for wireless clients=== Upgrading Embedded ===

Had to upload file via command page, then used /tmp/filename to upgrade via

the terminal.

console=ttyS0,38400n8

http://www.debian-administration.org/articles/478

http://cmrg.fifthhorseman.net/wiki/embedded/alix

http://linux-sxs.org/internet_serving/pxeboot.html

http://www.sigsegv.cx/diskless-2.html</pre>

