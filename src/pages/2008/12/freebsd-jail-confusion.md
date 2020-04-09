---
title: FreeBSD Jail Confusion
date: 2008-12-30
---
I'm confused about a FreeBSD jail I've setup. I'm using the <a href="http://www.nodows.com/trac/browser/trunk/files/freebsd/minichroot.sh">ultradesic minichroot.sh script</a> to enter the jail, but it doesn't seem to affect what's happening. I run a kldstat (kind of like lsmod in linux) in the host environment, and get this output:

<pre># kldstat

Id Refs Address    Size     Name 1    7 0xc0400000 906518   kernel 2    1 0xc0d07000 6a32c    acpi.ko 3    1 0xc1d8a000 22000    linux.ko</pre>

And then I enter the jail and do the same thing:

<pre># ./minichroot.sh /usr/jail6

MiniBSD6 / # kldstat

Id Refs Address    Size     Name

kldstat: can't stat file id 1: Invalid argument

kldstat: can't stat file id 2: Invalid argument

kldstat: can't stat file id 3: Invalid argument</pre>

I wouldn't be bothering with this, but I'm trying to mount a disk image:

<pre>
MiniBSD6 / # mdconfig -a -t malloc -s 1m

mdconfig: failed to load geom_md module: No such file or directory</pre>

Doh!
