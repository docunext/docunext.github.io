---
title: Working on Making My Laptop Cooler Still
date: 2011-03-26
tags: laptop,power
---
This is a never ending challenge for me. Here's my latest effort:

<pre class="sh_sh">
echo 0 > /sys/devices/system/cpu/cpu1/online
echo 15 > /proc/sys/vm/dirty_background_ratio
echo 55 > /proc/sys/vm/dirty_ratio
echo 6000 > /proc/sys/vm/dirty_writeback_centisecs
echo 9000 > /proc/sys/vm/dirty_expire_centisecs
hdparm -B 1 -S12 /dev/sda
echo 1 > /sys/module/snd_hda_intel/parameters/power_save
xbacklight -set 90
hal-disable-polling --device /dev/scd0
# to enable this again:
# hal-disable-polling --device /dev/scd0 --enable-polling
exit 0
</pre>

