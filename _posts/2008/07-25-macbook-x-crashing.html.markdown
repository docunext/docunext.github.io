---
title: Macbook X Crashing
date: 2008-07-25
tags: crash logs,mac
---
I'm having some problems with X crashing on my Macbook which runs Debian:

From /var/log/Xorg.log:

<pre class="sh_log">Jul 25 10:56:24 diamondshell acpid: client connected from 3740[0:0]
Jul 25 10:56:34 diamondshell gdm[3733]: WARNING: gdm_slave_xioerror_handler: Fatal X error - Restarting :0
Jul 25 10:56:37 diamondshell acpid: client connected from 3754[0:0]
Jul 25 10:56:47 diamondshell gdm[3752]: WARNING: gdm_slave_xioerror_handler: Fatal X error - Restarting :0
Jul 25 10:56:50 diamondshell acpid: client connected from 3771[0:0]
Jul 25 10:57:00 diamondshell gdm[3767]: WARNING: gdm_slave_xioerror_handler: Fatal X error - Restarting :0
Jul 25 10:57:02 diamondshell gdm[3732]: WARNING: Failed to start X server several times in a short time period; disabling display :0
Jul 25 10:57:05 diamondshell gdm[3732]: WARNING: main daemon: Got SIGABRT. Something went very wrong. Going down!
Jul 25 10:57:05 diamondshell gdm[3732]: GLib-CRITICAL: g_hash_table_lookup_extended: assertion `hash_table != NULL' failed
Jul 25 10:57:05 diamondshell gdm[3732]: WARNING: Request for invalid configuration key xdmcp/Enable=false
</pre>
And the segfault from dmesg:

<pre class="sh_log">[   50.968499] [drm] Initialized drm 1.1.0 20060810
[   50.348948] ACPI: PCI Interrupt 0000:00:02.0[A] -&gt; GSI 16 (level, low) -&gt; IRQ 16
[   50.348948] PCI: Setting latency timer of device 0000:00:02.0 to 64
[   50.348948] [drm] Initialized i915 1.6.0 20060119 on minor 0
[   52.879335] appletouch: incomplete data package (first byte: 2, length: 4).
[   94.708087] usbcore: deregistering interface driver hci_usb
[   96.539034] ACPI: PCI interrupt for device 0000:01:00.0 disabled
[   96.663554] ACPI: PCI interrupt for device 0000:03:03.0 disabled
[   96.663568] firewire_ohci: Removed fw-ohci device.
[ 1156.502334] gdm[2989]: segfault at 7672657f ip b78183c2 sp bf9723a0 error 6 in libglib-2.0.so.0.1600.3[b77c5000+af000]
</pre>

After it happened, I decided to apt-get dist-upgrade, which turned out to be a bad idea ( I hadn't had my <a href="http://www.the-coffee-blog.com/blog/">coffee</a> yet! ). First my keyboard was non-responsive, then my madwifi drivers were missing in action. Ooop! I did get it straightened out, but I think the X11 issue is still there.

