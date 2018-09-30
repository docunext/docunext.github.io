---
title: Debugging and Reducing I O Wait
date: 2009-10-29
tags: debug,linux,performance
---
**CDROM Problems?**
-------------------------------
<pre class="sh_sh">
rmmod ide_cd_mod
</pre>

<pre class="sh_sh">
[11720813.923100] hda: task_in_intr: status=0x51 { DriveReady SeekComplete Error }
[11720813.923100] hda: task_in_intr: error=0x04 { AbortedCommand }
[11720813.923100] ide: failed opcode was: 0xec
</pre>

<a href="http://www.linuxforums.org/forum/debian-linux-help/61930-weird-kernel-behavior.html" rel="nofollow">http://www.linuxforums.org/forum/debian-linux-help/61930-weird-kernel-behavior.html</a>

/boot/grub/menu.list
<pre>
# defoptions=hda=noprobe scheduler=deadline
</pre>

<pre>
update-grub
</pre>

<a href="http://www.lesswatts.org/tips/disks.php" rel="nofollow">http://www.lesswatts.org/tips/disks.php</a>

**VM Problems?**
-------------------------

<pre class="sh_sh">
apt-get install sysstat
pidstat -d 5
echo 1 > /proc/sys/vm/block_dump
dmesg | egrep "READ|WRITE|dirtied" | egrep -o '([a-zA-Z]*)' | sort | uniq -c | sort -rn | head
</pre>

VERY USEFUL:
[http://www.westnet.com/~gsmith/content/linux-pdflush.htm](http://www.westnet.com/~gsmith/content/linux-pdflush.htm)

MY OLD SETTINGS:
<pre class="sh_sh">
echo "100" > /proc/sys/vm/dirty_writeback_centisecs
echo '10' > /proc/sys/vm/dirty_ratio
echo '5' > /proc/sys/vm/dirty_background_ratio
</pre>

NEW: (defaults)
<pre class="sh_sh">
echo '500' > /proc/sys/vm/dirty_writeback_centisecs
echo '40' > /proc/sys/vm/dirty_ratio
echo '10' > /proc/sys/vm/dirty_background_ratio
</pre>

CONSIDER:
<pre class="sh_sh">
echo '8' > /proc/sys/vm/dirty_background_ratio
</pre>

**Correct I/O Scheduler?**
-------------------------------------

tw_cli
<pre>
//pro-12-gl> info c4

Unit  UnitType  Status         %Cmpl  Stripe  Size(GB)  Cache  AVerify  IgnECC
------------------------------------------------------------------------------
u0   RAID-5    OK             -      64K     1117.52   ON     OFF      OFF
</pre>

<pre>
cat /sys/block/sda/queue/scheduler
noop anticipatory deadline [cfq]
echo deadline > /sys/block/sda/queue/scheduler
</pre>

* [http://kerneltrap.org/node/431](http://kerneltrap.org/node/431)

**Filesystem Configuration**
---------------------------------------
On my setup, kjournald is one busy beaver:
<pre>
# pidstat -d 5
Linux 2.6.26-2-openvz-686 (pro-12-gl.savonix.com) 	10/29/2009 	_i686_	(2 CPU)

11:19:41 PM       PID   kB_rd/s   kB_wr/s kB_ccwr/s  Command
11:19:46 PM      1895      0.00     23.06      0.00  kjournald
11:19:46 PM      7309      0.00      0.80      0.00  syslog-ng
11:19:46 PM     21404      0.00      0.80      0.00  tlsmgr

11:19:46 PM       PID   kB_rd/s   kB_wr/s kB_ccwr/s  Command
11:19:51 PM     18208      0.00      0.80      0.00  syslog-ng

11:19:51 PM       PID   kB_rd/s   kB_wr/s kB_ccwr/s  Command
11:19:56 PM      1895      0.00      9.60      0.00  kjournald
11:19:56 PM     17120      0.00      1.60      0.00  tlsmgr
11:19:56 PM     27257      0.00      1.60      0.00  apache2

11:19:56 PM       PID   kB_rd/s   kB_wr/s kB_ccwr/s  Command
11:20:01 PM       423      0.00      0.80      0.00  apache2
11:20:01 PM      1851      0.00      0.80      0.00  nginx
11:20:01 PM      1895      0.00      8.80      0.00  kjournald

11:20:01 PM       PID   kB_rd/s   kB_wr/s kB_ccwr/s  Command
11:20:06 PM      1895      0.00      8.80      0.00  kjournald
11:20:06 PM      1898      0.00      0.80      0.00  courierpop3d

11:20:06 PM       PID   kB_rd/s   kB_wr/s kB_ccwr/s  Command
11:20:11 PM       928      0.00     13.60      0.00  kjournald
11:20:11 PM      1895      0.00      3.20      0.00  kjournald
11:20:11 PM      7309      0.00      1.60      0.00  syslog-ng
</pre>

Turns out there are some settings which can be set to change the way kjournald behaves:

* [Ext3 filsystem tips at Arch Linux Wiki](http://wiki.archlinux.org/index.php/Ext3_Filesystem_Tips#Using_The_tune2fs_and_e2fsck_Utilities)
* [Daniel Robbins of Gentoo Fame Article on Filesystems at IBM.com](http://www.ibm.com/developerworks/linux/library/l-fs8.html)

A lot of the information I'm reading about tuning ext3 involves the linux 2.4 kernel, so I'm not going to do any tune2fs tweaking tonight.

UPDATE: While making these changes, it appears that my iowait has settled to an acceptable level. I'm no longer getting messages from monit about resource limits getting matched.

UPDATE 2: I noticed a potential cause of high iowait in general may have been rsync. To remedy this I've changed /etc/default/rsync to include:
<pre>
RSYNC_NICE='10'
</pre>

