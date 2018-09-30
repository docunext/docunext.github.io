---
title: Updating drbd modules for new kernel
date: 2007-06-12
tags: debian,drbd,kernel,linux
---
I've updated the kernel on one of the debian/gnu linux machines that I'm running distributed redundant block devices (drbd) on, and now I have to rebuild the drbd module.

Using module-assistant (m-a), the process is easy!

<pre class="sh_sh">cd /usr/src/
module-assistant
choose prepare
choose select -> drbd-0.7
choose build, confirm install</pre>

