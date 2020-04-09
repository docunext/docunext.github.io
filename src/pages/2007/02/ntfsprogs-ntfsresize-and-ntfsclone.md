---
title: ntfsprogs ntfsresize and ntfsclone
comments:
  - author: rolf
    email: superzouz@hotmail.com
    date: 02/11/2009 06:00:05 AM
    text: >
      ntfsclone is getting stuck i the syncing step...<br/>Seriously, open source can be such a pain sometimes...<br/>Yesterday ntfsclone got stuck at 80%, today at syncing, what kind of torture is that...<br/>I wish it would only tell me why, so that i know.
  - author: Albert
    date: 02/11/2009 06:04:29 AM
    text: >
      Hi rolf, I haven't used ntfsclone in awhile, but I hear that there is a new fuse filesystem for ntfs that might help. Good luck!
date: 2007-02-18
tags: none
author: Albert Lash
---
I found out about ntfsprogs from a website about dd, and then I found a great website talking about using ntfsresize and ntfsclone with a Bootcamp partition. After working on 20GB images, I got fed up, compressed one with qcow to 12GB, and now resizing the original partition (yes, on the actual hard drive - yikes!) from 20GB to 8GB. It  took a LONG time, at least an hour. In the last few percentage points, it seemed to hang, but it eventuall cranked up to 100%. This is what it looks like:

<pre>root# sudo ./ntfsresize-intel -s 8000M /dev/disk3s1

ntfsresize v1.13.1 (libntfs 9:0:0)

Device name        : /dev/disk3s1

NTFS volume version: 3.1

Cluster size       : 4096 bytes

Current volume size: 19995619840 bytes (19996 MB)

Current device size: 19995623424 bytes (19996 MB)

New volume size    : 7999996416 bytes (8000 MB)

Checking filesystem consistency ...

100.00 percent completed

Accounting clusters ...

Space in use       : 6252 MB (31.3%)

Collecting resizing constraints ...

Needed relocations : 736487 (3017 MB)

WARNING: Every sanity check passed and only the dangerous operations left.

Make sure that important data has been backed up! Power outage or computer

crash may result major data loss!

Are you sure you want to proceed (y/[n])? y

Schedule chkdsk for NTFS consistency check at Windows boot time ...

Resetting $LogFile ... (this might take a while)

Relocating needed data ...

100.00 percent completed

Updating $BadClust file ...

Updating $Bitmap file ...

Updating Boot record ...

Syncing device ...

Successfully resized NTFS on device '/dev/disk3s1'.

You can go on to shrink the device for example with Linux fdisk.

IMPORTANT: When recreating the partition, make sure that you  1)  create it at the same disk sector (use sector as the unit!)  2)  create it with the same partition type (usually 7, HPFS/NTFS)  3)  do not make it smaller than the new NTFS filesystem size  4)  set the bootable flag for the partition if it existed before

Otherwise you won't be able to access NTFS or can't boot from the disk!

If you make a mistake and don't have a partition table backup then you

can recover the partition table by TestDisk or Parted's rescue mode.</pre>

¥

