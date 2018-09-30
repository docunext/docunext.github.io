---
title: Xubuntu troubles
date: 2007-09-05
tags: errors,ubuntu,xubuntu
---
I removed xserver-xorg from my xubuntu machine, but now I have no console. :-(

I checked out inittab, and its fine, as well as tried manually launching a getty via an ssh console, and that worked fine too. But after I logged out, it didn't respawn. I noticed an error on boot, but I can't find where or if it was logged. Argh.

OK, I was able to reproduce it:

<pre class="terminal">
# /etc/init.d/console-setup start
* Setting up console font and keymap...
/usr/bin/ckbcomp: Can not find file "rules/xorg" in any known directory
/usr/bin/ckbcomp: Can not find file "rules/xorg" in any known directory   ...done.
</pre>

Tried this:

<pre class="terminal">
dpkg-reconfigure console-setup
* Setting up console font and keymap...
/usr/bin/ckbcomp: Can not find file "rules/xorg" in any known directory
/usr/bin/ckbcomp: Can not find file "rules/xorg" in any known directory   ...done.
update-initramfs: Generating /boot/initrd.img-2.6.20-16-386
W: mdadm: /etc/mdadm/mdadm.conf defines no arrays.
W: mdadm: no arrays defined in configuration file.
W: mdadm: falling back to emergency procedure in initramfs.#dpkg -P mdadm(Reading database ... 69031 files and directories currently installed.)
Removing mdadm ...
* Stopping MD monitoring service mdadm --monitor   ...done.
W: mdadm: I'll update the initramfs, but if you need MD to boot
W: mdadm: with initramfs, you'll be screwed!
update-initramfs: Generating /boot/initrd.img-2.6.20-16-386
</pre>

That's kind of funny. Anyway here's the answer:

https://launchpad.net/ubuntu/+bug/95210

The tty files in /etc/event.d/ttyx were corrupted somehow. They looked like this: /sbin/getty 38400 tty1exec /sbin/getty 38400 tty1

when they should have just looked like:

<pre class="terminal">
exec /sbin/getty 38400 tty1
</pre>

