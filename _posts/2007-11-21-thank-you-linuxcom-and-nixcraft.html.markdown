---
title: How to Restart After A Kernel Panic
date: 2007-11-21
tags: kernel,"systems administration"
---
This is awesome. :-)

I just read a note at linux.com, referenced from <a rel="nofollow" href="http://www.cyberciti.biz/tips/reboot-linux-box-after-a-kernel-panic.html">nixcraft.com</a> that you can set a sysctl setting to reboot after a kernel panic. This has caused me problems in the past, so I'm definitely going to use it.

<pre class="sh_sh">
kernel.panic = 10
</pre>

To check the current value:

<pre class="sh_sh">
cat /proc/sys/kernel/panic
</pre>

Just to double check the accuracy, I found these two pages which confirm it:

<a  rel="nofollow" href="http://www.nslu2-linux.org/wiki/HowTo/AutoRebootOnPanic">http://www.nslu2-linux.org/wiki/HowTo/AutoRebootOnPanic</a>

<a rel="nofollow" href="http://www.wlug.org.nz/KernelPanic">http://www.wlug.org.nz/KernelPanic</a>

