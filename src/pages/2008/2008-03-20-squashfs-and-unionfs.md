---
title: SquashFS and UnionFS
date: 2008-03-20
tags: file systems,hp,nfs,nodows,ram,squashfs
---
Today I upgraded an <a href="http://www.docunext.com/wiki/hardware/hp/hp_t5725/">HP t5725 thin client</a> to use as a desktop at my office. Previously this machine was configured as a server, but considering its graphics capabilities and silent nature, I decided it was better as a desktop machine.

Since it came with only a 512MB Flash drive, I decided to use NFS to store the /usr/, /var/lib/ and /var/cache directories. That got me thinking about SquashFS and UnionFS again.

If you are not familiar with SquashFS, its a read-only compressed filesystem, which when combined with UnionFS, can do some pretty cool stuff. Unfortunately, SquashFS is not yet in the mainline kernel, but if you are running debian you can use module-assistant to build the kernel modules fairly easily.

If you aren't familiar with UnionFS, it allows you to take a read-only filesystem like SquashFS and overlay a read/write filesystem, like a RAM-based tmpfs, or a small compact flash / NAND storage device, and create a usable root filesystem.

Some people think this is boring, but I think its great! Many computers share a vast majority of similar contents on their hard drive, and only a small percentage of it is customized for each system.

These filesystems don't do much for what most people think of when they think about storage on their computers - their files: MP3s, papers, etc. That stuff I would prefer storing on a real hard drive (preferably a RAID-based storage device).

<a href="http://www.nodows.com/blog/">NODOWS</a> is a project which plans to use a setup like this as its open distribution model, but I'm waiting a little while to see if anything goes on with SquashFS, UnionFS, and the kernel anytime soon.
