---
title: Installing NetBSD on ALIX 1D
date: 2009-09-18
tags: alix,netbsd
---
I'm dying to get started with NetBSD beyond a virtual machine.

I just happen to have an extra ALIX 1D handy which is perfect for this purpose! I'm going to use a 1GB compact flash card as the storage device.

Here's some instructions for installing NetBSD on a compact flash card:

[http://bsdsupport.org/2007/01/how-to-install-netbsd-on-compact-flash-for-the-soekris-4501/](http://bsdsupport.org/2007/01/how-to-install-netbsd-on-compact-flash-for-the-soekris-4501/)

But its on a Soekris 4501, not an ALIX, and its for NetBSD 3.99, not 5.01.

I ended up going my own route - I used qemu to install to a virtual disk image created from qemu-img and then dd'd the image to the compact flash card. Worked like a charm I'm happy to report!

Couple of minor surprises:

* The NetBSD installer is great - super simple, super easy
* A PS2 keyboard didn't work, but a USB one did
* I'm installing pkgsrc:

<pre class="sh_sh">
ftp ftp://ftp.NetBSD.org/pub/pkgsrc/pkgsrc-2009Q2/pkgsrc-2009Q2.tar.gz
tar -xzf pkgsrc-2009Q2.tar.gz -C /usr
</pre>

