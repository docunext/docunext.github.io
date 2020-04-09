---
title: VMWare vs. Parallels vs. QEMU
comments:
  - author: Johan
    email: johan@mothugg.se
    url: http://www.mothugg.se
    date: 08/24/2007 08:51:08 AM
    text: >
      How does Q compare to Parallels and VMWare? I've tried both VMWare and Parallels, but would o course prefer something open sourced, to run WinXP and Ubuntu on a MacBook Pro.
  - author: admin
    date: 08/24/2007 11:37:47 AM
    text: >
      Q is much slower unfortunately. It is possible to run Windows and Ubuntu on Q, but in my opinion too slow. I only have a Macbook, so your pro model might fare better. I tried compiling KQEMU on Mac OS X but couldn't figure it out:<br/><br/><a href="http://www.osxcentral.com/blog/2007/07/01/messing-with-darwin/" rel="nofollow">http://www.osxcentral.com/blog/2007/07/01/messing-with-darwin/</a><br/><br/>If and when that happens, you'll be able to run Q with Windows and Ubuntu at much faster speeds.
date: 2007-06-28
tags: kqemu,mac,parallels,qemu,vmware
---
#### <b>VMWare Fusion</b>

I was right about VMWare on Mac OS X - they are going to charge for it.  Its actually not a bad price though, $79 or $39 if you pre-order.

The nice thing about VMWare Fusion for Mac OS X is that they have all sorts of other products that can work with it. I believe they also use an open format for their disk images.

#### <b>Parallels</b>

These factors make VMWare a compelling alternative to Parallels, which has worked very well for me, but due to its proprietary disk format, it losing its luster.

#### <b>QEMU, KQEMU, and "Q"</b>

My favorite of all these virtualization systems is QEMU. It is open source, runs on a wide variety of platforms (even FreeBSD!), and offers a wide range of processors to emulate. The main problem I have with it right now is that the kqemu kernel module has not yet been ported to Mac OS X. I've considered running ubuntu in a VMWare or Parallels vm, and then trying to run kqemu inside of that, but that's just crazy talk.

What would be optimal would be to run VMWare Fusion on Mac OS X, and run QEMU w/ KQEMU on everything else. However, while it is possible to convert VMWare .vmdk's to qcows, QEMU and VMWare cannot run both types of files (AFAIK).

So what to do? My gut is telling me that since KQEMU is now GPL, it will   likely get ported to Mac OS X at some point in the near future. As it stands, running Q on Mac OS X without hardware acceleration isn't terrible. My gut is also telling me that the vde package which QEMU can work with is really awesome. I think it is even available on Mac OS X via MacPorts.

I may end up purchasing an advance copy of VMWare Fusion just so for the convenience factor, but going forward I'm planning to use QEMU.

¥

