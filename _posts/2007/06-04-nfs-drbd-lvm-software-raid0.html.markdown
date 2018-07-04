---
title: NFS DRBD LVM Software RAID0
date: 2007-06-04
tags: debian,drbd,nfs,storage
---
I'm planning on building another high availability cluster, this time for storage. My plan is to use basic hardware, and to use software to make it zing.

The plan:

1. Build two normal machines, each one with a 10GB RAID0 md0 block device using LVM.
2. Run DRDB on top of these.
3. Format the drdb partition as ext2.

References:

* <http://www.oclug.on.ca/archives/oclug/2001-September/009680.html>
* <http://aplawrence.com/Linux/lvm.html>
* <http://wiki.linux-ha.org/DRBD/NFS>
* <http://www.howtoforge.com/high_availability_nfs_drbd_heartbeat>
* <http://kylecordes.com/2007/01/27/drbd-ubuntu/>

<a rel="nofollow" title="How to setup NFS client and server on ubuntu and debian"  href="http://ubuntuforums.org/showthread.php?t=249889">http://ubuntuforums.org/showthread.php?t=249889</a>

