---
title: Another PTY allocation request failed on channel 0 
date: 2009-11-03
tags: debian,ssh
---
I thought this fix suggesting the problem was caused by a [missing symlink in /etc/rcS.d](http://www.splatdot.com/2009/05/ubuntu-9-04-jaunty-jackalope-problems-fixed/) but unfortunately that didn't fix the problem.

I have this in my /etc/fstab, but for whatever reason that still isn't working right. I'll have to keep logging in like this:

<pre>ssh mymachine "bash -e"</pre>

and then mounting /dev/pts manually. Strange, but true. FYI, this is on debian machine.

UPDATE: I scanned /var/log/syslog for udev errors and found this:
<pre>
kernel: udev: missing sysfs features; please update the kernel or disable the kernel's CONFIG_SYSFS_DEPRECATED option; udev may fail to work correctly
</pre>

I updated to 2-6-30 and was able to login without any issues. I still have devpts in my fstab, so I guess I should remove it and test it again. I'll do it next week. :-)

RELATED: [Ssh Error: PTY allocation request failed on channel 0](http://www.docunext.com/blog/2009/06/ssh-error-pty-allocation-request-failed-on-channel-0.html)

