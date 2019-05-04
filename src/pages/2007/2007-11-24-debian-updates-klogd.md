---
title: Debian Updates klogd
date: 2007-11-24
tags: debian,kernel
---
I just did a big update on a debian machine running lenny and I'm now unable to stop / start / restart the kernel logger, klogd:

<pre class="sh_sh">
# /etc/init.d/klogd stop
Stopping kernel log daemon... failed!
</pre>

This worked:

<pre class="sh_sh">
# ps -A | grep klog 4845 ?        00:00:00 klogd
#kill -SIGHUP 4845
#/etc/init.d/klogd start
Starting kernel log daemon....
# ps -A | grep klog
29060 ?        00:00:00 klogd
</pre>

Phew!

