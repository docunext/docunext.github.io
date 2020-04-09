---
title: Power Saving Macbook with Debian GNU Linux
date: 2008-05-15
tags: none
author: Albert Lash
---
Its been a few weeks since I installed debian on my Macbook. First I had to take care of the obvious - getting a right click method, wifi, etc.

Now I'm working on controlling the heat, as this machine gets HOT!

I noticed that I should use acpi_cpufreq instead of speedstep_centrino, so I set that up, and then decided to take powertop for a spin. Here's what I setup from the results: /etc/rc.local

<pre lang="bash">echo "ondemand" > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governorecho "ondemand" > /sys/devices/system/cpu/cpu1/cpufreq/scaling_governorhal-disable-polling --device /dev/cdromhciconfig hci0 down ; rmmod hci_usbecho 1000 > /proc/sys/vm/dirty_writeback_centisecs</pre>/etc/fstab

<pre lang="bash">proc            /proc           proc    defaults        0       0/dev/sda3       /               ext3    noatime,errors=remount-ro 0       1/dev/sda4       none            swap    sw              0       0tmpfs           /dev/shm            tmpfs   size=64M        0 0tmpfs           /tmp            tmpfs   size=64M        0 0</pre>

I decided to remove the cdrom entries because my cdrom is broken. :-(

I also added applesmc to my /etc/modules file, and this to my /etc/rc.local:

<pre lang="bash">echo "3000" > /sys/devices/platform/applesmc.768/fan1_min </pre>

Graphics:

<a href="http://www.thinkwiki.org/wiki/How_to_reduce_power_consumption#Graphic_controllers">http://www.thinkwiki.org/wiki/How_to_reduce_power_consumption#Graphic_controllers</a>
<h4>More on reducing heat:</h4>

By far, the hottest part of the laptop is the top left hand corner, by the plug. I took a look at some pictures of the inside of a Macbook, and it looks like the wifi is there, and maybe the graphics controller? So now I'm trying to reduce the power consumed by the graphics controller, to reduce heat. I've changed the default depth to 16 from 24, and disabled DRI. Hopefully that will help. The lesswatts.org website mentions framebuffer compression, but not how to enable it. Just checked my Xorg logs, looks like its enabled already:

<pre lang="bash">tail /var/log/Xorg.0.log -n 1000 | grep compression(**) intel(0): Framebuffer compression enabled</pre>

NOTE: Disabling DRI caused x to crash for me.
