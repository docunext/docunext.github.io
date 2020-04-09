---
title: Partition and Filesystems Setup for my Notebook
date: 2009-07-18
tags: none
author: Albert Lash
---
For my notebook, I'm using the following partition / fstab / filesystems layout:

<pre>
/dev/sda1       /               ext3    noatime,errors=remount-ro 0       1
/dev/mapper/vg1-lv1 /home           ext3    relatime     0       2
/dev/sda2       none            swap    sw              0       0
/dev/hda        /media/cdrom0   udf,iso9660 user,noauto     0       0
/dev/mapper/vg1-vzg /var/lib/vz/private ext3 noatime 0 0
</pre>

It results in something like this:
<pre>
# df -h
Filesystem            Size  Used Avail Use% Mounted on
/dev/sda1             9.2G  6.8G  2.0G  78% /
tmpfs                1004M     0 1004M   0% /lib/init/rw
udev                   10M  136K  9.9M   2% /dev
tmpfs                  24M     0   24M   0% /dev/shm
/dev/mapper/vg1-lv1    50G   31G   16G  66% /home
tmpfs                1004M  4.0K 1004M   1% /tmp
tmpfs                1004M     0 1004M   0% /var/lock
tmpfs                1004M  136K 1003M   1% /var/run
/dev/mapper/vg1-vzg   7.9G  1.6G  6.0G  21% /var/lib/vz/private
</pre>

I may setup autofs for the vz mount, as I rarely use it. I've just recently started using autofs for NFS mounts and I like it so far. Will it help anything?

To summarize, I usually use a partition of around ten gigabytes for root. I mount /home separately using relatime because apparently mutt is one app which likes atimes. I use ext3 because it has worked for me near 100% of the time. I mount a lot of the tmp folders as tmpfs to keep the disk spun down if possible.

And oh yeah, one more thing - <a href="http://www.docunext.com/">LVM</a> is awesome.

