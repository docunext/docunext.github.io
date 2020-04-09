---
title: Encore Gigabit Ethernet PCI Card
date: 2007-06-11
tags: hardware
---
I'm trying out an Encore Gigabit Ethernet card I bought from Newegg in an ASUS Terminator C3. The card uses the Realtek chip, which uses the r8169 driver. I keep getting an error when I try to activate the card though.

I updated the kernel and it now works! Debian rules.

<pre class="sh_sh">eth0: RTL8169sb/8110sb at 0xcf830000, 00:06:4f:4a:44:cc, IRQ 11
eth0: VIA Rhine II at 0x1e000, 00:15:f2:15:c4:23, IRQ 11.
eth0: MII PHY found at address 1, status 0x786d advertising 05e1 Link cde1.</pre>
