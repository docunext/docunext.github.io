---
title: Network Bridge Causes Wake On Lan WOL to Fail
date: 2007-07-10
tags: acpi,bridging,networking
---
A million and one reasons why wake-on-lan might not work:

Your using the interface in a bridge!

I've added the following line to my /etc/network/interfaces configuration:

<pre>down /usr/sbin/brctl delif br0 eth0</pre>

Let's see if that helps at all. Nope, what is the problem? Reverting to non-bridged setup to find out what the deal is - to see if wol works with a regular network setup. Nope. Maybe the restart will jolt it back into functioning. Yup - it works again. So let's try and figure out a happy medium where the QEMU VMs can join in the real-world network, and the wol will work.

Ultimately I could not get bridging and forcedeth to work, so I added a second ethernet card for bridging. FINALLY that worked. :-) Here's what I have setup:

<ul><li>Gigabyte motherboard w/ NVidia gigabit ethernet adapter using forcedeth driver, set for wake-on-lan using magic packet every boot-up</li><li>No graphics card! Console redirected over serial connection.</li><li>Realtek 8169 chipset nic using r8169 driver, bridged with tun0 for qemu</li></ul>

Now when I start my qemu virtual machines, they can talk directly to the local area network. Now I have to make sure I can have several, and not just one. I might have to start vde_switch, connect that to tun0, connect tun0 to the bridge, and connect the vm's to the vde switch.

Thanks to for confirming my suspicion about bridges and wake on lan (though they are using XEN, not QEMU):

<a title="wol not working with xen bridge" href="http://www.myelin.co.nz/post/2007/6/8/">http://www.myelin.co.nz/post/2007/6/8/</a>

and also to:

<a title="kernel forcedeth driver patch to allow wol to work with promisc" href="http://www.mail-archive.com/git-commits-head@vger.kernel.org/msg14816.html">../git-commits-head@vger.kernel.org/msg14816.html</a>

UPDATE: Well for whatever reason - the wake on lan stopped working again. I disabled the bridge and the second nic card, and it works again. :-/
