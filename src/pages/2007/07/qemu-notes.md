---
title: QEMU and VDE Notes
date: 2007-07-04
tags: bridging,debian,qemu,vde,virtualization
---
<b>UPDATE</b>

These notes have been succeeded by <a title="QEMU machines connected to a virtual switch connected to tap0 bridged with a LAN-connected nic card." href="http://www.docunext.com/2007/07/qemu-vde-notes-revisited.html">QEMU  vde Notes Revisited</a>


#### <b>Note to self</b>
To restart setup like you had before, use these commands: <ol><li>vde_switch -tap qtap0 -daemon</li><li>vdeqemu -m 1024 -boot c -net nic -net vde -vnc 1 -k en-us deb4vde.raw (can use qemu when bridging - first edit /etc/qemu-ifup (see <a href="#bridging">qemu bridging specifics below</a>) then try qemu -m 96 -vnc :1 -net nic,vlan=0 -net tap,vlan=0,ifname=tap0,script=/etc/qemu-ifup deb4vde.raw)</li><li>sudo dnsmasq --log-queries --user=nobody --dhcp-leasefile=/var/tmp/dnsmasq-leasefile --dhcp-range=10.111.111.129,10.111.111.199,255.255.255.0,10.111.111.255,8h --interface=qtap0 --domain=qemu.lan - (not needed when bridging)</li></ol>

You'll also have to get vde_switch, br0 (aptitude install bridge-utils) kqemu going again. Follow notes below.

#### <b>Now back to QEMU Networking Notes</b>

vde:

vde_switch is the command to use to setup the virtual switch. It will get plugged into the tap0 interface.

dnsmasq:

you probably only want this running on the tap0 interface

qemu:

use vdeqemu wrapper instead.

kqemu:

mknod /dev/kqemu c 250 0

chmod 666 /dev/kqemu

Not so surprisingly, qemu works pretty darn well even over wan links (768k) with nomachine's freenx. I have my setup configured like this:

* Host machine - serving freenx and qemu
* LAN
* m0n0wall VPN router
* INTERNET
* m0n0wall VPN router w/ wireless
* Mac OS X nomachine client running xfce terminal and launching qemu from within it. Loads a "MacOSX" window with QEMU inside of it.

This setup works better than the qemu vnc, as that server doesn't have much when it comes to compression (no tightVNC).

AWESOME! I got it to work with vde. There were a few gotchas:

* Couldn't run qemu or vdeqemu as root or via sudo, the boot would freeze around nic / hd detection.
* To run vdeqemu as normal user, I had to allow access to vde.ctl as described <a href="http://alien.slackbook.org/dokuwiki/doku.php?id=slackware:vde">here</a>, but using /tmp/vde.ctl as target on ubuntu:

<pre>sudo chmod -R a+rwx /tmp/vde.ctl</pre>

* I mainly used the <a href="https://help.ubuntu.com/community/KVM">Ubuntu docs for KVM (which also covers qemu and vde)</a>
* Similar to the superuser boot freezes, I experienced issues when trying to use other networking options, including vlans and the realtek virtual card.

I built as small a debian installation as I could. It is based on Debian etch, uses a 300MB raw hard drive (for rough compatibility with Parallels), and no swap. The base install uses about 250MB of memory so there isn't much room left over for other stuff, but if you need more room you can always use an nfs export or something.

As the slackware docs put it, this is a "serious networking powerhouse".

#### <b>Bridging with QEMU</b>

Now I'm trying to figure out <a href="http://www.faqs.org/docs/Linux-HOWTO/BRIDGE-STP-HOWTO.html">how bridging works</a>. I just took my little dectop down by creating a bridge, then adding the only ethernet interface to it. Must be a problem with the USB ethernet stick (or I brought the network interface down accidentally).

After a cold hard reboot, I added the bridging configuration to /etc/network/interfaces and rebooted again. I first forgot to add "auto br0" so I added that and here's what it finally looks like:

<pre class="sh_sh">auto br0
iface br0 inet dhcp
        bridge_ports eth0
        bridge_maxwait 2
        #kvm has to have this set to 0.0.0.0 to work... not sure why
        #not sure if promisc is necessary
        up /sbin/ifconfig eth0 inet 0.0.0.0
#set to something random, br0 initialization will undo this
iface eth0 inet static
        address 172.16.5.0
        netmask 255.255.255.0
</pre>

Amazingly, it works! Now this machine is the little <a href="http://www.docunext.com/2007/06/dectop-debian-tips.html">dectop running debian</a>, so I'm a little wary about running QEMU / KQEMU on it, but what the heck - I did just increase the RAM to 256MB, and the hard drive to 80GB! A 300MB QEMU file shouldn't be too much to handle. <div id="bridging">QEMU Bridging Specifics

Phenomenal! Even the dectop can do virtualization. :-) And oh so cool. Bridging brings the virtual machines into the real world lan, no need to have another lan behind another NAT layer. This is really really cool. I used some <a href="http://compsoc.dur.ac.uk/~djw/qemu.html">debian qemu directions</a> on how to setup the bridge to connect with qemu. I'm running vde_switch, but I'm not sure if I need to be. Here's the command I eventually used after modifying /etc/qemu-ifup:

<pre class="sh_sh">qemu -m 96 -vnc :1 -net nic,vlan=0 -net tap,vlan=0,ifname=tap0,script=/etc/qemu-ifup deb4vde.raw</pre><b>
Weird Clock Bug?</b>
TSC appears to be running slowly. Marking it as unstable

Time: pit clocksource has been installed. <b>Related Links</b>

http://geekpit.blogspot.com/2006/03/using-qemu-and-kqemu-under-debian-or.html

http://compsoc.dur.ac.uk/~djw/qemu.html

http://alien.slackbook.org/dokuwiki/doku.php?id=slackware:vde

http://base91.sourceforge.net/qemu/

http://lists.gnu.org/archive/html/qemu-devel/2004-09/msg00150.html

https://help.ubuntu.com/community/KVM

