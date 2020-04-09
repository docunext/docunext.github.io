---
title: Thecus n2100
comments:
  - author: admin
    date: 02/03/2007 05:35:00 PM
    text: >
      Just sent this to Martin:<br/><br/>Hi Martin,<br/><br/>Thanks for putting together the info to run Debian the the Thecus n2100. I got it installed and was hoping to setup a raid but there is a kernel mismatch between the installer image and the current udebs available. I was wondering what the usual method of dealing with this would be? Would I install the new kernel on the installer image, or would I compile the md modules for the installer kernel version?<br/><br/>Thanks again!<br/><br/>Albert<br/><br/>PS - Here's my Thecus info, and I posted some stuff to the Debonaras wiki too.  :-)
  - author: admin
    date: 02/05/2007 02:23:10 PM
    text: >
      Martin just wrote back:<br/><br/>"This problem will go away soon when RC2 will be out and the N2100 will be officiall supported.<br/><br/>For now, you can simply open a shell in the installer and then type:<br/><br/>wget <a href="http://snapshot.debian.net/archive/2006/12/08/debian/pool/main/l/linux-kernel-di-arm-2.6/md-modules-2.6.18-3-iop32x-di_1.6_arm.udeb" rel="nofollow">http://snapshot.debian.net/archive/2006/12/08/debian/pool/main/l/linux-kernel-di-arm-2.6/md-modules-2.6.18-3-iop32x-di_1.6_arm.udeb</a><br/>udpkg -i md-mod*.udeb<br/><br/>Then RAID should work."
date: 2007-02-03
tags: none
author: Albert Lash
---
The Thecus n2100 is a pretty sweet machine. I'm pleased with it already. It can really run debian! I also have an NSLU2 which I've installed Debian on as well.

The Thecus I have came with a 9-pin console port which I was able to connect to (thank goodness!), and then I was able to see what I did wrong when following the install instructions. This was actually a really amazing process for me - I've connected to a Cisco switch via minicom, but never another linux machine. I'm sure this will come in handy again soon.

Here's the links I collected in researching the n2100:

<a href="http://archive.netbsd.se/?ml=openbsd-arm&a=2006-12&t=2679840">Shows startup over serial</a>

<a href="http://www.cyrius.com/debian/iop/n2100/install.html">Debian Install on n2100</a>

<a href="http://gnumonks.org/~laforge/weblog/2006/02/24/#20060224-thecus">GPL Violations by thecus</a>?

<a href="http://www.debonaras.org/wiki/Info/ThecusN2100">Debonaras Thecus 2100 page</a>

<a href="http://lists.debian.org/debian-arm/2006/10/msg00024.html">Mailing list archive</a>

<a href="http://david.thg.se/n2100/">Outdated install debian on thecus 2100</a>

<a href="http://onbeat.dk/thecus/index.php/N2100_Recovering_from_a_bad_config_change">http://onbeat.dk/thecus/index.php/N2100_Recovering_from_a_bad_config_change</a>

My mistake: not changing the hostname on the thecus before installing the installer!

http://alcopop.org/log/debian/ - this page mentions the process for using a raid on the thecus with debian, you need the kernel modules. Unfortunately the udebs have advanced past the binary kernel version available from the debian team.

¥
