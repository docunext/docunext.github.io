---
title: Kernel Patches
date: 2009-02-07
tags: kernel,nodows
---
Mindeb is now using a totally custom kernel, with the following patches:

* OpenVZ
* Aufs
* Squashfs
* Entropy Patch

It is also setup with fewer modules than the default debian kernel. There is no support for graphics or multimedia, no support for ham radio, and limited hardware support. I hope to support as much commonly used hardware as possible, so feedback is appreciated!

<strong>OpenVZ?</strong>

Why does a minimal project such as mindeb use OpenVZ? The answer is simple, its a great way to keep the base host environment as stable as possible, allowing lots of changes to the virtual environment, without the risk of breaking anything fatally.

I'm not yet sure of the best practices for the virtual environment. I need to do some more testing with squashfs, aufs, and a writable layer.

<strong>Squashfs</strong>

Squashfs remains a great way to compress a file system. Its popular with LiveCD's and is now included in the kernel. Let's hope that LZMA is included soon too!

<strong>Aufs</strong>

I was wondering whether or not to use unionfs or aufs. This <a href="http://unionfs.org/">page</a> has some compelling reasons for aufs. Ironically it is <a href="http://unionfs.org/">unionfs.org</a>! I started with unionfs, then switched to aufs with debian modules, then had trouble using aufs manually, but then finally found a way to make it work. I'm going to stick with aufs for the foreseeable future unless there is a compelling reason to switch back to unionfs.

<strong>Entropy Patch</strong>

This is just a very simple patch to allow entropy to be gathered from network and serial console interrupts. Click <a href="http://www.nodows.com/src/view/pre/trunk/files/debian/kernel-patches/entropy_patch">here</a> to view the patch file.

