---
title: Adventures in PXE Land
date: 2009-01-28
tags: none
author: Albert Lash
---
I've been having a great time working with PXE booting machines lately. First I got debian to boot off of a PXE server for an install, then I figured out how to mount a linux root filesystem over NFS from a PXE boot, and now I'm doing my first FreeBSD install over a PXE boot.

The FreeBSD PXE boot configuration seemed quite vague, but it was actually quite simple. Once I get everything clear I'll write up some instructions for all this in the <a href="/wiki/">wiki</a>.

Ack - I take it back! While pxeboot was easy to get going, I just could not get FreeBSD to install correctly. Finally I was able to figure out what was going on. pfSense (my DHCP server) provides two options for pxe booting - server and filename. For filename, I put pxeboot, and pxeboot would load and automatically try to load its root from nfs:/pxeroot. I had put the contents of a full install CD at an NFS shared /pxeroot directory, and so FreeBSD would boot up and present me with a shell. I'd then run "sysintall" and go through the motions. Upon reboot, nothing had happened. Huh?

Finally I RTFM some more and decided to go a different route. I copied boot/mfsroot.gz to the /var/lib/tftpboot/freebsd directory and gunzipped it, and also copied boot/kernel there. ( I also changed /etc/default/tftpd-hpa to use /var/lib/tftpboot/freebsd as its root path. )

Since I still couldn't figure out what was up with /pxeroot, I simply symlinked /pxeroot to /var/lib/tftpboot/freebsd, where I had the following items:

<pre>
dr-xr-xr-x 5 root root     4096 2009-01-28 20:53 boot-r-xr-xr-x 1 root root  7903785 2009-01-29 13:49 kernel-r--r--r-- 1 root root  4423680 2009-01-29 13:50 mfsroot-r--r--r-- 1 root root   223232 2009-01-29 12:40 pxeboot</pre>

When I pxebooted with this, it brought me right to the installer menus and I'm going through it now.

Thanks to:

<a href="http://people.freebsd.org/~dwhite/pxeboot.html">http://people.freebsd.org/~dwhite/pxeboot.html</a> and many others I forgot to link here.
