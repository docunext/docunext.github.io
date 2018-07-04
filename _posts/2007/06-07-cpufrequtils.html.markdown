---
title: cpufrequtils
date: 2007-06-07
tags: acpi,energy
---
After manually wrestling with cpufreq kernel modules for the longest time, I finally found cpufrequtils. It works great, allowing me to manually set governors and frequencies much easier than the long-handed method.  If you ever work with CPU power saving technologies, I highly suggest you check it out. With the apt-get package manager and an appropriate source, its as easy as:

<pre>apt-get install cpufrequtils</pre>

This will install cpufreq-info and cpufreq-set. That should be enough to get you started, good luck!

