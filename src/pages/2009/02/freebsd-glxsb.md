---
title: FreeBSD glxsb pfSense too 
date: 2009-02-13
tags: freebsd,pfsense
---
This is good - the openbsd driver for hardware accelerated aes encryption and the hardware random number generator has been ported to freebsd!

The security block and hwrng can be found on AMD Geode LX chips, such as those featured in PC Engines boards.

I haven't tested it out yet, but I plan to very soon.

Thanks much Patrick Lamaizière!

<a href="http://user.lamaiziere.net/patrick/glxsb-220608.tar.gz">http://user.lamaiziere.net/patrick/glxsb-220608.tar.gz</a>

So the module I just compiled on RELENG_7_1 appears to work...

<pre>glxsb0: &lt;AMD Geode LX Security Block (AES-128-CBC,RNG)&gt; mem 0xefff4000-0xefff7fff irq 9 at device 1.2 on pci0</pre>

and I'm pleased to find someone on the forums <a href="http://forum.pfsense.org/index.php?topic=13875.msg75017">who tried it too</a>. I just updated loader.conf with glxsb_load="YES". Rebooting now... and then I have to change my IPSec algorithms.

