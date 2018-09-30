---
title: mdadm raid kernel panic resync
date: 2007-06-03
tags: errors,kernel,mdadm,raid
---
For whatever reason, my file server crash last night. I'm now trying to fix it. I booted into single user mode (had to cancel the fsck that was trying to happen at the same time as a raid sync, which made for slow progress).

Here's the output of "cat /proc/mdstat":


Seems to moving right along, its now at 24.7%. Good!

UPDATE: BAD!

Turns out the machine is throwing a kernel panic at about 47.3% through the raid resync. Not only is it a kernel panic, it is a machine check error = hardware failure. While what I've read so far says that MCEs are usually caused by chips, I think this one is caused by a hard drive.

<a href="http://kerneltrap.org/node/4993">http://kerneltrap.org/node/4993</a>

When I upgraded last night, I noticed that a new initrd was installed. Why? I don't know, but I booted with the original kernel and now the resync is almost at 50%, which could mean the MCE was caused by the new initrd. A possible cause? I've been running the system using "unstable" for a long time, and then switched to "testing". On the other hand, I am also copying a lot of files from the file server, causing the resync to slow to its limit of 1000, maybe that is allowing it to go further?


This screenshot says:

HARDWARE ERROR

CPU 0: Machine Check Exception 4 Bank 4: b2000000000000070f0f

TSC 1c3469a27ae

This is not a software problem!

Run through mcelog --ascii to decode and contact your hardware manufacturer

Kernel panic - not syncing: machine check.


Sorry, I'm not going to type out what that error says. Maybe Google will get OCR working one of these days.

UPDATE: Though the resync did not go all the way through, it threw a whole bunch of errors, but then started over again. :-) At least I can continue trying to remove what I had on there. This time the resync seems to be getting a little further... we're up to 49.4%!

HOORAY:

<pre>Personalities : [raid0] [raid1] [raid5]
md0 : active raid1 sda1[0] sdd1[3] sdc1[2] sdb1[1]      32000 blocks [4/4] [UUUU]
md2 : active raid1 sdc2[0] sdd2[1]      9767424 blocks [2/2] [UU]
md4 : active raid5 sda6[4](F) sdd6[3] sdc6[2] sdb6[1]      348666432 blocks level 5, 64k chunk, algorithm 2 [4/3] [_UUU]
md5 : active raid5 sda7[0] sdd7[3] sdc7[2] sdb7[1]      348666432 blocks level 5, 64k chunk, algorithm 2 [4/4] [UUUU]
md3 : active raid1 sda5[0] sdd5[3] sdc5[2] sdb5[1]      1951744 blocks [4/4] [UUUU]
md1 : active raid1 sda2[0] sdb2[1]      9767424 blocks [2/2] [UU]
unused devices: &lt;none></pre>

Now I've rebooted and am letting fsck do its thing.

After that, I had the same problems, but fsck went all the way through. I noticed that the initramfs-tools was still having trouble with the new initramfs.img, and low and behold the /boot/ partition was full. UGH! I fixed that, and now the newer kernel is working correctly again. However, my raid array is still degraded. Hmmm.

<pre>cat /proc/mdstat
Personalities : [raid1] [raid6] [raid5] [raid4]
md0 : active raid1 sda1[0] sdd1[3] sdc1[2] sdb1[1]      32000 blocks [4/4] [UUUU]
md2 : active raid1 sdc2[0] sdd2[1]      9767424 blocks [2/2] [UU]
md3 : active raid1 sda5[0] sdd5[3] sdc5[2] sdb5[1]      1951744 blocks [4/4] [UUUU]
md4 : active raid5 sdb6[1] sdd6[3] sdc6[2]      348666432 blocks level 5, 64k chunk, algorithm 2 [4/3] [_UUU]
md5 : active raid5 sda7[0] sdd7[3] sdc7[2] sdb7[1]      348666432 blocks level 5, 64k chunk, algorithm 2 [4/4] [UUUU]
md1 : active raid1 sda2[0] sdb2[1]      9767424 blocks [2/2] [UU]
unused devices: &lt;none></pre>

I added the missing partition:

<pre>mdadm /dev/md4 -a /dev/sda6</pre>

then the raid started rebuilding again:

<pre>cat /proc/mdstat
Personalities : [raid1] [raid6] [raid5] [raid4]
md0 : active raid1 sda1[0] sdd1[3] sdc1[2] sdb1[1]      32000 blocks [4/4] [UUUU]
md2 : active raid1 sdc2[0] sdd2[1]      9767424 blocks [2/2] [UU]
md3 : active raid1 sda5[0] sdd5[3] sdc5[2] sdb5[1]      1951744 blocks [4/4] [UUUU]
md4 : active raid5 sda6[4] sdb6[1] sdd6[3] sdc6[2]      348666432 blocks level 5, 64k chunk, algorithm 2 [4/3] [_UUU]      [>....................]  recovery =  0.1% (191348/116222144) finish=50.5min speed=38269K/sec
md5 : active raid5 sda7[0] sdd7[3] sdc7[2] sdb7[1]      348666432 blocks level 5, 64k chunk, algorithm 2 [4/4] [UUUU]
md1 : active raid1 sda2[0] sdb2[1]      9767424 blocks [2/2] [UU]
unused devices: &lt;none></pre>

#### CONCLUSION?

The fact that this went down the way it did screams the fact that redundancy rules, software based RAID rules, and mdadm rules.  'Nuff said.

