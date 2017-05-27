---
title: DRBD and OCFS2
date: 2007-09-02
tags: debian,drbd8,ocfs2
---
I'm testing out DRBD and OCFS2. When both machines are running and drbd is primary on both machines, everything works fine. However, when I bring down one machine, the other one still works fine, but when I bring the other machine back up, both seems to crash.

When I bring one machine down, the other one says this:

<pre class="terminal">
SVN Revision: 2947 build by root@deb4vde, 2007-09-02 15:46:47 0: cs:WFConnection st:Primary/Unknown ds:UpToDate/DUnknown C
r---    ns:404949 nr:240 dw:535 dr:405156 al:0 bm:72 lo:0 pe:0 ua:0 ap:0
        resync: used:0/31 hits:25256 misses:36 starving:0 dirty:0 changed:36
        act_log: used:0/257 hits:343 misses:0 starving:0 dirty:0 changed:0
</pre>

then when the other one comes up:

<pre class="terminal">
version: 8.0.4 (api:86/proto:86)
SVN Revision: 2947 build by root@deb4vde, 2007-09-02 15:46:47 0: cs:Connected st:Primary/Secondary ds:UpToDate/UpToDate C
r---    ns:429606 nr:240 dw:622 dr:429789 al:0 bm:79 lo:0 pe:0 ua:0 ap:0
        resync: used:0/31 hits:26787 misses:43 starving:0 dirty:0 changed:43
        act_log: used:0/257 hits:419 misses:0 starving:0 dirty:0 changed:0
</pre>

So then, I need to synchronize them. Actually, I guess I just needed to do this:

drbdadm primary r0

on the machine which was brought down and back up again. Then I need to do: /etc/init.d/o2cb online xcluster

and

<pre class="terminal">
mount -t ocfs2 /dev/drbd0 /mnt/
</pre>

Strange - when I restart the second machine, my shell on the first machine is killed and the the drbd device is unmounted, pretty much depleting any value this system could have. :-(

I'm now trying:

<pre class="terminal">
         after-sb-0pri   discard-older-primary;
        after-sb-1pri   consensus;
</pre>

That seems to help a little with the automatic rebuilding process, but one of the vm's still reboots (the current primary) when the secondary comes back online and starts to resync. That could very likely be caused by the fact that these are virtual machines, and not the real deal.

<pre class="terminal">
Message from syslogd@deb4vde at Sun Sep  2 22:25:41 2007 ...
deb4vde kernel: Disabling IRQ #11
</pre>

Grrr.

Seems to be working better with just one split brain setting:

<pre class="terminal">
after-sb-0pri discard-older-primary;
</pre>

and a very low extants setting:  al-extents 7;

This causes more writes to the meta-data, but faster resync. In my case, I'll use gigE and fast drives to counter the performance hit. With these settings, I can have the drbd device mounted via ocfs2 on both machines, reboot one, and maintain the mount on the other throughout the reboot process. Once the rebooted machine is backup, it quickly connects, synchronizes, and becomes a secondary. At that point, I can manually bring it into primary mode again, mount it, and verify that it has the updated content and restore redundancy.

With a little tweaking and tuning here and there, this DRBD / OCFS2 setup will be a terrific solution for high availability. I'm amazed at how well its working on QEMU virtual machines. I can only expect better results with the real deal.

http://listas.softwarelivre.org/pipermail/psl-go/2005-December/002462.html

<a href="http://www.docunext.com/wiki/DRBD8">DRBD8 + OCFS2 on Debian Howto / Disorganized Notes</a>

