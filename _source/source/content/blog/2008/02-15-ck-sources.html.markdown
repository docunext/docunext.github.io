---
title: CK Sources
date: 2008-02-15
tags: kernel
---
As luck would have it, I'm giving the CK kernel source patches a try right when CK quits the kernel development team. Oh well, should be interesting.

I'm also trying some other new settings - a  higher timer frequency, no dynamic ticks, and the aggressive block scheduler.

UPDATE Feb 16, 2008: The new kernel definitely feels faster, even with the ondemand governor. This is good! One thing I'm confused about is that even though I turned off dynamic ticks, I'm still getting this mesage in dmesg:

<pre>[   63.241000] Clocksource tsc unstable (delta = -63768515 ns)</pre>

