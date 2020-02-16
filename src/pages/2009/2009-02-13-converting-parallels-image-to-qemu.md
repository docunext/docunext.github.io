---
title: Converting Parallels Image to QEMU
date: 2009-02-13
tags: parallels,qemu,virtualization
---
I had spent some serious time trying to get <a href="http://www.docunext.com/blog/2007/06/converting-parallels-machines-to-vmware-fusion.html">qemu-img to convert a parallels image to a more open standard</a>, and thankfully, qemu-img now supports the parallels format!

<pre class="sh_sh">
$ qemu-img
qemu-img version 0.9.1, Copyright (c) 2004-2008 Fabrice Bellard
usage: qemu-img command [command options]
QEMU disk image utility
Command syntax:  create [-e] [-6] [-b base_image] [-f fmt] filename [size]  commit [-f fmt] filename  convert [-c] [-e] [-6] [-f fmt] filename [filename2 [...]] [-O output_fmt] output_filename  info [-f fmt] filename
Command parameters:  'filename' is a disk image filename  'base_image' is the read-only disk image which is used as base for a copy on    write image; the copy on write image only stores the modified data  'fmt' is the disk image format. It is guessed automatically in most cases  'size' is the disk image size in kilobytes. Optional suffixes 'M' (megabyte)    and 'G' (gigabyte) are supported  'output_filename' is the destination disk image filename  'output_fmt' is the destination format  '-c' indicates that target image must be compressed (qcow format only)  '-e' indicates that the target image must be encrypted (qcow format only)  '-6' indicates that the target image must use compatibility level 6 (vmdk format only)
Supported format: parallels qcow2 vvfat vpc bochs dmg cloop vmdk qcow cow host_device raw
</pre>

NTLDR is missing! Of course....  will <a href="http://kb.parallels.com/en/4751">this</a> help?

Whether or not I get this working, <a href="http://qemu-forum.ipi.fi/viewtopic.php?p=12362">this page is awesome</a>!
