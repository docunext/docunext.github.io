---
title: More Compact Flash Annoyances
date: 2007-07-08
tags: compact flash,debian,pfsense
---
I'm trying to use debian on a compact flash card, but keep running into dma problems. I'm surprised this is such a pain in the neck. This looks helpful though:

<a rel="nofollow" href="http://www.debianhelp.org/node/5042">http://www.debianhelp.org/node/5042</a>

I run into the same problem with pfsense.

The new /etc/mkinitrd/modules file:

<pre class="sh_sh">
modprobe -k  tulip
modprobe -k  sis900
modprobe -k  vesafb &gt; /dev/null 2&gt;&amp;1
modprobe -k  fbcon 2&gt; /dev/null
modprobe -k  unix 2&gt; /dev/null
modprobe -k  pdc202xx_new &gt; /dev/null 2&gt;&amp;1
modprobe -k  aec62xx &gt; /dev/null 2&gt;&amp;1
modprobe -k  alim15x3 &gt; /dev/null 2&gt;&amp;1
modprobe -k  amd74xx &gt; /dev/null 2&gt;&amp;1
modprobe -k  atiixp &gt; /dev/null 2&gt;&amp;1
modprobe -k  cmd64x &gt; /dev/null 2&gt;&amp;1
modprobe -k  cs5520 &gt; /dev/null 2&gt;&amp;1
modprobe -k  cs5530 &gt; /dev/null 2&gt;&amp;1
modprobe -k  cy82c693 &gt; /dev/null 2&gt;&amp;1
modprobe -k  generic &gt; /dev/null 2&gt;&amp;1
modprobe -k  hpt34x &gt; /dev/null 2&gt;&amp;1
modprobe -k  hpt366 &gt; /dev/null 2&gt;&amp;1
modprobe -k  ns87415 &gt; /dev/null 2&gt;&amp;1
modprobe -k  opti621 &gt; /dev/null 2&gt;&amp;1
modprobe -k  pdc202xx_old &gt; /dev/null 2&gt;&amp;1
modprobe -k  piix &gt; /dev/null 2&gt;&amp;1
modprobe -k  rz1000 &gt; /dev/null 2&gt;&amp;1
modprobe -k  sc1200 &gt; /dev/null 2&gt;&amp;1
modprobe -k  serverworks &gt; /dev/null 2&gt;&amp;1
modprobe -k  siimage &gt; /dev/null 2&gt;&amp;1
modprobe -k  sis5513 &gt; /dev/null 2&gt;&amp;1
modprobe -k  slc90e66 &gt; /dev/null 2&gt;&amp;1
modprobe -k  triflex &gt; /dev/null 2&gt;&amp;1
modprobe -k  trm290 &gt; /dev/null 2&gt;&amp;1
modprobe -k  via82cxxx &gt; /dev/null 2&gt;&amp;1
modprobe -k  ide-generic
modprobe -k  ide-disk
</pre>

The original /etc/mkinitrd/modules file:

<pre class="sh_sh">
modprobe -k  loop
modprobe -k  ext3
modprobe -k  jbd
modprobe -k  ide-generic
modprobe -k  ide-disk
modprobe -k  ide-scsi
modprobe -k  ide-cd
modprobe -k  ehci-hcd
modprobe -k  ohci-hcd
modprobe -k  uhci-hcd
modprobe -k  sd-mod
modprobe -k  usb-storage
modprobe -k  8139too
modprobe -k  mii
modprobe -k  af-packet
modprobe -k  unix
modprobe -k  ds
modprobe -k  yenta-socket
modprobe -k  vesafb &gt; /dev/null 2&gt;&amp;1
modprobe -k  fbcon 2&gt; /dev/null
modprobe -k  unix 2&gt; /dev/null
</pre>

Interesting. By following the setup from the original initrd, I was able to avoid the dma issue

<pre class="sh_sh">
mount -t cramfs /boot/initrd.img-2.4.27-3-686 /mnt/initrd -o loop
</pre>

(<a href="http://kernel-handbook.alioth.debian.org/ch-initramfs.html" rel="nofollow">initrd archive at debian.org</a>)

The original debian image is from <a href="http://shopping.hacom.net/catalog/" rel="nofollow">Hacom</a>. Their server is really slow so I'll offer the images that I altered here when they are ready .

Actually, the modules lists above don't need the "modprobe -k". Here's what I used to recreate the initrd.img:

<pre class="sh_sh">
loop
ext3
jbd
ide-generic
ide-disk
ide-scsi
ide-cd
ehci-hcd
ohci-hcd
uhci-hcd
sd-mod
usb-storage
mii
unix
fbcon 2&gt; /dev/null
unix 2&gt; /dev/null
</pre>

In the future, I plan to <a href="http://www.my-tech-deals.com/blog/2007/07/compact-flash-as-a-hard-drive.html">buy this compact flash card for use as a hard drive</a>.

