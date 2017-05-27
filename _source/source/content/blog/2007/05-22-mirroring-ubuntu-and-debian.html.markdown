---
title: Mirroring Ubuntu and Debian 
date: 2007-05-22
---

I've decided to download and mirror the entire ubuntu and debian packages and distributions. That way I can sync them late at night and have faster access to the packages and distros when I need them.

To do so, I'm using the Argonne National Laboratory for ubuntu and debian:

<pre>rsync://mirror.anl.gov/ubuntu/</pre>

<pre>rsync://mirror.anl.gov/debian/</pre>

How cool is that? Wish I had enough bandwidth to be a mirror too, but alas, all I have is downstream pipes right now. :-(

UPDATE: More than 16 hours into the mirroring process... still going!

UPDATED Commands:

<pre>
rsync -av --include=*i386* --include=*amd64* --exclude=* rsync://mirror.mcs.anl.gov/ubuntu-iso/CDs-Xubuntu/7.04/release/

rsync -av --include=*i386* --include=*amd64* --exclude=* rsync://mirror.mcs.anl.gov/ubuntu-iso/CDs-Ubuntu/.pool/ .

rsync -av --progress --partial --include='*businesscard*.iso' --include='*netinst*.iso' --exclude='*.iso' --exclude=alpha/ --exclude=arm/ --exclude=hppa/ --exclude=hurd/ --exclude=ia64/ --exclude=m68k/ --exclude=mips/ --exclude=mipsel/ --exclude=powerpc/ --exclude=s390/ --exclude=sh/ --exclude=sparc/ --exclude='bt-*' --exclude='*-dvd/' --exclude=source/ --exclude=trace/ --exclude=multi-arch/ --exclude='jigdo-*' mirrors.kernel.org::debian-cd/current/ debian-cd/current/</pre>

