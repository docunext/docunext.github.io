---
title: Problem Encountered When Upgrading to udev 146 5
date: 2009-10-29
tags: bugs,debian,kernel,linux,udev
---
I just tried updating to udev 146-5. The post-installation script failed with:

<blockquote>"error getting signalfd"</blockquote>

I tried rebooting, but the error persisted, and what's worse, my mouse and wifi no longer worked! :-(

Luckily a live ethernet cable is available on the floor next to my shelves of tech gear. I plugged it in and network-manager did its thing and I was able to search [bugs.debian.org](http://bugs.debian.org/), fruitfully so I might add!

I found this bug:

[error in post-installation script when upgrading to udev 0.146-5](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=552076)

A quick scan of the reports suggested I was having the same problem. I tried grep signalfd /proc/kallsyms as suggested and came up with something that didn't make much sense to me:

<pre class="sh_sh">
ffffffff802c4148 t signalfd_release
ffffffff802c415c t signalfd_read
ffffffff802c44ff T sys_signalfd
ffffffff802c464e t signalfd_poll
ffffffff802c756f T compat_sys_signalfd
</pre>

The bug reports seemed to imply that an upgrade of libc6 to 2.9.25 would fix the problem. I did so, rebooted, and voilà - problem solved!

I'm still getting this message though:

<pre class="sh_log">
udev: missing sysfs features; please update the kernel or disable the kernel's CONFIG_SYSFS_DEPRECATED option; udev may fail to work correctly
</pre>

I'll get around to upgrading my kernel soon, just not tonight!

Note: I've definitely heard of an run into udev before. I still don't know what it does exactly, but I read up a little more on it tonight. Apparently it is an event and hotplug management daemon and is responsible for dynamically managing the /dev directory. On some embedded systems I've worked on where hardware devices attached to the system do not change, I've been able to avoid udev altogether. That was nice, but  I'm not sure how feasible that is on a desktop system. I'm a little confused about udev in general, because some people seem to dislike it very much. For example, a [recent post by Richard R. Link](http://pcpool00.mathematik.uni-freiburg.de/~brl/blog/index.html#40) included this statement: <blockquote>"This is just a reminder for all of you that have packages that depend on the udev package: I hate you."</blockquote> Is that a common sentiment?

