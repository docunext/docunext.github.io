---
title: Debian 2.6.22 Kernel
date: 2007-07-17
tags: debian,kernel,via
---
Looks like the 2.6.22 kernel is almost in unstable for debian. I'm looking to install this as it supposedly has support for the VIA C7 Eden chip. Currently available in unstable are the following:

<pre>linux-doc-2.6.22 - Linux kernel specific documentation for version 2.6.22
linux-manual-2.6.22 - Linux kernel API manual pages for version 2.6.22
linux-patch-debian-2.6.22 - Debian patches to version 2.6.22 of the Linux kernel
linux-source-2.6.22 - Linux kernel source for version 2.6.22 with Debian patches
linux-support-2.6.22-1 - Support files for Linux 2.6.22
linux-tree-2.6.22 - Linux kernel source tree for building Debian kernel images</pre>

Also, here's the <a href="http://packages.qa.debian.org/l/linux-2.6.html">debian package page for the 2.6 kernel</a>.

UPDATE: Bummer - I just installed the 2.6.22 kernel and e_powersaver isn't able to cut down on the voltages or frequency of the Eden chip. Here's a snip from dmesg:

<pre>eps: Detected VIA Eden
eps: Current voltage = 796mV
eps: Current multiplier = 4
eps: Highest voltage = 796mV
eps: Highest multiplier = 4
eps: Lowest voltage = 796mV
eps: Lowest multiplier = 4</pre>

and this error:

FATAL: Error inserting e_powersaver (/lib/modules/2.6.22-1-686/kernel/arch/i386/kernel/cpu/cpufreq/e_powersaver.ko): Invalid argument

