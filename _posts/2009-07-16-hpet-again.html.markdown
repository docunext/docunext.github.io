---
title: HPET Again
date: 2009-07-16
tags: none
author: Albert Lash
---
I'm once again on the hunt for low power computing. After running powertop on "smurfbot" - an old headless Toshiba laptop, use of HPET was suggested.

The machine has an ICH4 southbridge which supports hpet:
  <pre>[    0.147219] pci 0000:00:1f.0: quirk: region ee00-ee7f claimed by ICH4 ACPI/GPIO/TCO
[    0.147225] pci 0000:00:1f.0: quirk: region eec0-eeff claimed by ICH4 GPIO
[    2.536283] ICH3M: IDE controller (0x8086:0x248a rev 0x02) at  PCI slot 0000:00:1f.1
[    2.536312] ICH3M: not 100% native mode: will probe irqs later
</pre>

It has to be enabled via kernel boot parameters by adding hpet=force. With that, it can be validated with dmesg | grep -i hpet:
<pre>
[    0.000000] Kernel command line: root=UUID=af56e319-0b5f-4cd9-92dc-d8c9782e439b ro quiet hpet=force
[    0.147207] pci 0000:00:1f.0: Force enabled HPET at 0xfed00000
[    0.156193] hpet clockevent registered
[    0.156202] hpet0: at MMIO 0xfed00000, IRQs 2, 8, 0
[    0.156209] hpet0: 3 64-bit timers, 14318180 Hz
</pre>
Sweet!

Although it works on Smurfbot, it doesn't work on my little valleys. Oh well.

