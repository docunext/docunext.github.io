---
title: dd usb
date: 2007-05-18
tags: none
author: Albert Lash
---
I'm trying to duplicate a usb drive I installed debian. To do so, I'm using the dd function, and I'm actually doing it from the Mac OS X command line.

<pre>dd bs=512 if=/dev/disk3 conv=sync,noerror of= ./usb_debian.img</pre>

<a href="http://www.docunext.com/2006/08/15/ghosting-notes/">dd Ghosting / Backup Notes</a>

The final code and output:

<pre>dd bs=512 if=/dev/disk3 conv=sync,noerror of=usb_debian.img

1981440+0 records in

1981440+0 records out

1014497280 bytes transferred in 710.232612 secs (1428401 bytes/sec)</pre>

AWESOME! I just transferred the image to a new, different USB stick, plugged it into an HP t5135, and it booted! That rocks.

