---
title: Let s Try out a new Linux Filesystem BTRFS
date: 2009-02-07
tags: debian,"file systems"
---
This looks like a major step forward for linux file systems: BTRFS. Its not ready yet, but I'm going to try it out. Here's what I'm doing:

* Downloaded kernel source
* Downloaded btrfs source (0.16 worked for me, 0.17 did not)
* Build btrfs
* Downloaded and built btrgs-progs

<pre class="sh_sh"># dd if=/dev/zero of=btrfs.img bs=1024k count=400
# losetup /dev/loop0 /home/albertlash/btrfs.img
# fdisk /dev/loop0
# ./mkfs.btrfs /dev/loop0
fs created label (null) on /dev/loop0	nodesize 4096 leafsize 4096 sectorsize 4096 size 400.00MB
Btrfs Btrfs v0.16
# mount /dev/loop0 /mnt/0/
# mount/dev/loop0 on /mnt/0 type btrfs (rw)</pre>

Cool!

#### <strong>btrfsctl defrag</strong>

<pre class="sh_sh"># ./btrfsctl -d /mnt/0/
operation complete
Btrfs Btrfs v0.16</pre>

#### <strong>btrfsctl resize</strong>

<pre># df/dev/loop0            399M   98M  302M  25% /mnt/0
# ./btrfsctl -r -1M /mnt/0/
operation complete
Btrfs Btrfs v0.16
# df/dev/loop0            398M   98M  301M  25% /mnt/0</pre>

I can create a snap, but then I can't find it, or figure out what to do with it. I should really figure out how to use snapshots with LVM too!

