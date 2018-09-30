---
title: Installing sshfs on Quantact Debian VPS
date: 2007-02-11
tags: none
author: Albert Lash
---
I use my Quantact VPS for testing of various things, and sshfs-fuse is one of those things. Here's what I did to get it going:

<pre>apt-get install sshfs - installed but module probe failed
apt-get install linux-modules-2.6.18-4-xen-686
</pre>
No go, still getting this error:
<pre>root@vps:~# modprobe -l
FATAL: Could not load /lib/modules/2.6.16-xen/modules.dep: No such file or directory
</pre>
Maybe this will help?

<pre>apt-get install linux-image-2.6.18-4-686
</pre>
Had to run:
<pre>echo 'do_initrd=yes' &gt;&gt; /etc/kernel-img.conf;
</pre>

Nope, now trying:

<pre>wget http://snapshot.debian.net/archive/2006/08/20/debian/pool/main/l/linux-2.6.16/linux-modules-2.6.16-2-xen-686_2.6.16-18_i386.deb
dpkg -i linux-modules*
</pre>
Oh wait now we're getting somewhere:

http://www.quantact.com/wiki/index.php/How_to_compile_kernel_modules

Cool, their wiki is actually useful! Very good to know.

<font style="font-size: 1.25em;"><b>The Solution</b></font>

Beautiful! The pre-built 2.6-16-xen kernel modules provided by Quantact did the trick, it works now and I'm able to mount remote directories via ssh. Totally cool.

