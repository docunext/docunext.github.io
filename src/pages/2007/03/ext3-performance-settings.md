---
title: Ext3 Performance Settings
date: 2007-03-21
---
Just did some Googling on linux filesystem performance, and here's what I gleaned. Most often, ext3 is the best choice. If you know what you're doing and want to spend the time and effort to manage the process, XFS, JFS, and ReiserFS can outperform ext3.

For me, ext3 is the right choice. Reliability, stability, and ubiquity are good things. As usual, I want to get the most bang for my buck, so here are the settings I'm using:

<pre>noatime,data=writeback,commit=7200</pre>

This is really only for a static server which will do more reading than writing. For desktops and interactive servers that write and read at the same time, just noatime is fine.

UPDATE: I've since removed the commit=7200 from the fstab entries!<b>Filesystem Performance Related Links</b>

<a href="http://www-128.ibm.com/developerworks/linux/library/l-fs8.html">http://www-128.ibm.com/developerworks/linux/library/l-fs8.html</a>

<a href="http://ubuntuforums.org/showthread.php?t=107856">http://ubuntuforums.org/showthread.php?t=107856</a>

<a href="http://www.redhat.com/support/wpapers/redhat/ext3/tuning.html">http://www.redhat.com/support/wpapers/redhat/ext3/tuning.html</a>

<a href="http://wiki.archlinux.org/index.php/Ext3_Filesystem_Tips">http://wiki.archlinux.org/index.php/Ext3_Filesystem_Tips</a>
