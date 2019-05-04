---
title: VDE QEMU on Ubuntu
date: 2007-06-20
tags: kqemu,qemu,ubuntu,vde
---
<strong>My notes on setting up VDE (virtual distributed ethernet) for use with QEMU on Ubuntu.</strong>

<pre>apt-get install vde
apt-get install qemu</pre>

No kqemu for the moment.

I'm following the instructions at Nexedi, with some minor modifications:

<pre>1. vde_switch
2. slirpvde -d -n 192.168.254.0 &
3. QEMU_TMPDIR=~/tmp vdeq /usr/local/bin/qemu \    -cdrom current.iso -m 256 -macaddr 52:54:00:12:34:43</pre>

Seems to work, but I have no idea what to do with it yet!

<a href="http://lists.gnu.org/archive/html/qemu-devel/2005-06/txtDAJWgugtC1.txt">Using VDE with QEMU HOWTO by Jim Brown</a>

<a href="http://people.freebsd.org/~maho/qemu/qemu.html">Running QEMU on FreeBSD</a>

<a href="http://alien.slackbook.org/dokuwiki/doku.php?id=slackware:qemu#networking_your_virtual_machine">Networking your virtual machine</a>

<a href="http://www.nexedi.org/workspaces/project/losqa/how_to_make_a_virtua/view">How to make a virtual network with qemu</a>

