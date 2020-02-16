---
title: AskoziaPBX on an HP t5135
date: 2007-06-26
tags: askozia,asterisk,hp
---
Here are the technical details for the installation of AskoziaPBX on an HP t5135 thin client:

<ol><li>Download generic pc Askozia PBX image</li><li>Download <a href="http://chrisbuechler.com/index.php?id=17">Chris Buechler's m0n0wall Live CD</a></li><li>Copy the AskoziaPBX image onto an MS-DOS formatted usb drive.</li><li>Boot off the CD using a USB CDROM</li><li>Plug in and mount the usb drive: "mount_msdosfs /dev/da0s1 /mnt/tmp/" or something like that</li><li>Follow the regular instructions, targeting the 64MB flash drive which came with the t5135: "gzcat /mnt/tmp/pbx-generic-pc-xx.img | dd of=/dev/ad0 bs=16k", or something like that</li></ol>

These are the steps I took, your situation most likely differs so think about what you are doing before you do it.

The t5135 is actually a pretty nice little device:

<ul><li>128MB RAM</li><li>10/100 LAN (VIA Rhine)</li><li>VIA Eden C7 400Mhz</li><li>64MB Flash drive</li></ul>

Consumes about 11 watts at idle, up to 16 watts (that's the highest I've seen, might go higher).
