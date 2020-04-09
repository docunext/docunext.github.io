---
title: QEMU vde Notes Revisited
date: 2007-07-10
tags: debian,freebsd,kqemu,qemu,tap,tun,vde
---
It is happening again... so here are lots of lots of notes on setting up QEMU, VDE, FreeBSD, Debian, tun/tap.

QEMU direct to a host bridge via tap0 only allows for one guest per tunnel. That's no good! We want vde_switch to connect to tap0, and for QEMU guests to connect to vde_switch.

Don't forget:

mknod /dev/kqemu c 250 0

chmod 666 /dev/kqemu

Here's some updated <a href="http://www.docunext.com/2007/07/qemu-notes.html">QEMU notes</a>:<ol><li>vde_switch -tap tap0 -daemon</li><li>ifconfig tap0 up</li><li>brctl addif br0 tap0</li><li>sudo vdeqemu -m 512 -vnc :2 -net nic,macaddr=00:11:22:ee:ff:44 -net vde deb4vde.raw &</li></ol>

NOTE: You will have to come up with unique mac addresses for each virtual machine you attach to the vde switch!

Here is a new entry on the network when I do an nmap scan:

<pre>Host 192.168.0.188 appears to be up.
MAC Address: 52:54:00:12:34:56 (QEMU virtual NIC)</pre>

Also, I still need to put the follow in /etc/qemu-ifup:

<pre>#!/bin/sh
echo "Executing /etc/qemu-ifup"
echo "Bringing up $1 for bridged mode..."
sudo /sbin/ifconfig $1 0.0.0.0 promisc up
echo "Adding $1 to br0..."
sudo /usr/sbin/brctl addif br0 $1
sleep 2</pre>

On FreeBSD:
kldload if_bridge
ifconfig bridge create
ifconfig bridge0 addm sis0 addm tap0 up

<pre>vdeqemu -vnc :1 -net nic,macaddr=12:43:12:12:23:32 -net nic,vlan=3 \ -net vde /usr/jail/root/m0n0jab/work/image.bin</pre>

Make sure to use the VLAN tag otherwise you'll get some serious broadcast storms.

Related:

<a href="http://lists.debian.org/debian-user/2006/01/msg01598.html">http://lists.debian.org/debian-user/2006/01/msg01598.html</a>

<a href="http://compsoc.dur.ac.uk/~djw/qemu.html">http://compsoc.dur.ac.uk/~djw/qemu.html QEMU - Debian - Linux - TUN/TAP - network bridge</a>

