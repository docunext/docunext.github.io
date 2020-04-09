---
title: FreeBSD on intel s Little Valley D201GLY
comments:
  - author: Liquid
    email: liquid@liquid.cz
    date: 11/08/2007 04:20:14 PM
    text: >
      Hi, im trying to get working the same motherboard with FBSD 6.2. But im in trouble when im trying to get working 4port NIC on PCI. Only 1 port function. On another system works great. I thing, this is problem about plug ang play, or IRQ around bios and FBSD. Have you any tips what can i do to have working all 4 port of nic? No plug and play options is in bios. :-(
  - author: admin
    email: albert.lash@savonix.com
    date: 11/08/2007 04:36:32 PM
    text: >
      Hi Liquid, are you by chance using a natsemi nic from soekris, or is it an HP? If its a natsemi from soekris I might be able to help as I have some 2-ports from them, and I know they have 4-port models.<br/><br/>However, if its an HP, you might be unhappy. There exists an HP 4-port nice which only has one controller, the rest are just bridged ports like in a switch.<br/><br/>Please follow-up, and thanks for commenting!
  - author: Liquid
    email: liquid@liquid.cz
    date: 11/13/2007 02:27:22 PM
    text: >
      Hi,<br/><br/>no im not using soerkis. Im tryin to get working Routeroad 44G 4 port nic.<br/><a href="http://routerboard.com/rb44.html" rel="nofollow">http://routerboard.com/rb44.html</a><br/><br/>It has Realtek 8169SC chipset.<br/><br/>re driver found only the last port.<br/><br/>pcib2:  at device 5.0 on pci0<br/>pci2:  on pcib2<br/>pci2:  at device 8.0 (no driver attached)<br/>pci2:  at device 9.0 (no driver attached)<br/>pci2:  at device 10.0 (no driver attached)<br/>re0:  port 0x1000-0x10ff mem 0x4a000000-0x4a0000ff irq 16 at device 11.0 on pci2<br/>miibus1:  on re0<br/>rgephy0:  on miibus1<br/>rgephy0:  10baseT, 10baseT-FDX, 100baseTX, 100baseTX-FDX, 1000baseTX, 1000baseTX-FDX, auto<br/>re0: Ethernet address: 00:0c:42:07:36:3b<br/>re0: [FAST]
  - author: admin
    email: albert.lash@savonix.com
    date: 11/13/2007 05:14:43 PM
    text: >
      Hi Liquid, ah well in that case I have no clue. Those routerboard products look cool though.
date: 2007-08-19
tags: d201gly,freebsd,intel,kernel
---
Just a quick note, I've been running FreeBSD 6.2-RELEASE FreeBSD 6.2-RELEASE #0 on the intel little valley for several months and it works great. I'm not running X, so I don't know how the video driver works, but for me the network, IDE, and all the basics work. I haven't experienced any problems so far.

Here's a dmesg:
<pre class="sh">Copyright (c) 1992-2007 The FreeBSD Project.
Copyright (c) 1979, 1980, 1983, 1986, 1988, 1989, 1991, 1992, 1993, 1994        The Regents of the University of California. All rights reserved.
FreeBSD is a registered trademark of The FreeBSD Foundation.
FreeBSD 6.2-RELEASE #0: Sat Jul 21 04:46:25 UTC 2007:/usr/obj/usr/src/sys/GENERIC
ACPI APIC Table:
&lt;INTEL  DG965CO &gt;
Timecounter "i8254" frequency 1193182 Hz quality 0
CPU: Intel(R) Celeron(R) CPU          215  @ 1.33GHz (1333.39-MHz 686-class CPU)  Origin = "GenuineIntel"  Id = 0x6e8  Stepping = 8  Features=0xafe9fbff
&lt;FPU,VME,DE,PSE,TSC,MSR,PAE,MCE,CX8,APIC,SEP,MTRR,PGE,MCA,CMOV,PAT,CLFLUSH,DTS,ACPI,MMX,FXSR,SSE,SSE2,SS,TM,PBE&gt;  Features2=0xc109
&lt;SSE3,MON,TM2,
&lt;b14&gt;,
&lt;b15&gt;&gt;  AMD Features=0x100000
&lt;NX&gt;
real memory  = 1038565376 (990 MB)
avail memory = 1006194688 (959 MB)
ioapic0: Changing APIC ID to 4
ioapic0
&lt;Version 1.4&gt; irqs 0-23 on motherboard
kbd1 at kbdmux0
ath_hal: 0.9.17.2 (AR5210, AR5211, AR5212, RF5111, RF5112, RF2413, RF5413)
acpi0:
&lt;INTEL DG965CO&gt; on motherboard
acpi0: Power Button (fixed)
Timecounter "ACPI-fast" frequency 3579545 Hz quality 1000
acpi_timer0:
&lt;24-bit timer at 3.579545MHz&gt; port 0x808-0x80b on acpi0
cpu0:
&lt;ACPI CPU&gt; on acpi0
acpi_throttle0:
&lt;ACPI CPU Throttling&gt; on cpu0
pcib0:
&lt;ACPI Host-PCI bridge&gt; port 0xcf8-0xcff iomem 0xfff00000-0xffffffff on acpi0
pci0:
&lt;ACPI PCI bus&gt; on pcib0
pcib1:
&lt;ACPI PCI-PCI bridge&gt; at device 1.0 on pci0
pci1:
&lt;ACPI PCI bus&gt; on pcib1
pci1:
&lt;display, VGA&gt; at device 0.0 (no driver attached)
isab0:
&lt;PCI-ISA bridge&gt; at device 2.0 on pci0
isa0:
&lt;ISA bus&gt; on isab0
atapci0:
&lt;SiS 964 UDMA133 controller&gt; port 0x1f0-0x1f7,0x3f6,0x170-0x177,0x376,0x2280-0x228f at device 2.5 on pci0
ata0:
&lt;ATA channel 0&gt; on atapci0
ata1:
&lt;ATA channel 1&gt; on atapci0
pci0:
&lt;multimedia, audio&gt; at device 2.7 (no driver attached)
ohci0:
&lt;SiS 5571 USB controller&gt; mem 0x4a104000-0x4a104fff irq 20 at device 3.0 on pci0
ohci0: [GIANT-LOCKED]
usb0: OHCI version 1.0, legacy support
usb0:
&lt;SiS 5571 USB controller&gt; on ohci0
usb0: USB revision 1.0
uhub0: SiS OHCI root hub, class 9/0, rev 1.00/1.00, addr 1
uhub0: 3 ports with 3 removable, self powered
ohci1:
&lt;SiS 5571 USB controller&gt; mem 0x4a103000-0x4a103fff irq 21 at device 3.1 on pci0
ohci1: [GIANT-LOCKED]
usb1: OHCI version 1.0, legacy support
usb1:
&lt;SiS 5571 USB controller&gt; on ohci1
usb1: USB revision 1.0
uhub1: SiS OHCI root hub, class 9/0, rev 1.00/1.00, addr 1
uhub1: 3 ports with 3 removable, self powered
ohci2:
&lt;SiS 5571 USB controller&gt; mem 0x4a102000-0x4a102fff irq 22 at device 3.2 on pci0
ohci2: [GIANT-LOCKED]
usb2: OHCI version 1.0, legacy support
usb2:
&lt;SiS 5571 USB controller&gt; on ohci2
usb2: USB revision 1.0
uhub2: SiS OHCI root hub, class 9/0, rev 1.00/1.00, addr 1
uhub2: 2 ports with 2 removable, self powered
ehci0:
&lt;EHCI (generic) USB 2.0 controller&gt; mem 0x4a101000-0x4a101fff irq 23 at device 3.3 on pci0
ehci0: [GIANT-LOCKED]
usb3: waiting for BIOS to give up control
usb3: timed out waiting for BIOS
usb3: EHCI version 1.0
usb3: companion controllers, 3 ports each: usb0 usb1 usb2
usb3:
&lt;EHCI (generic) USB 2.0 controller&gt; on ehci0
usb3: USB revision 2.0
uhub3: SiS EHCI root hub, class 9/0, rev 2.00/1.00, addr 1
uhub3: 8 ports with 8 removable, self powered
sis0:
&lt;SiS 900 10/100BaseTX&gt; port 0x2000-0x20ff mem 0x4a100000-0x4a100fff irq 19 at device 4.0 on pci0
miibus0:
&lt;MII bus&gt; on sis0
ukphy0:
&lt;Generic IEEE 802.3u media interface&gt; on miibus0
ukphy0:  10baseT, 10baseT-FDX, 100baseTX, 100baseTX-FDX, auto
sis0: Ethernet address:
pcib2:
&lt;PCI-PCI bridge&gt; at device 31.0 on pci0
pci2:
&lt;PCI bus&gt; on pcib2
acpi_button0:
&lt;Power Button&gt; on acpi0
atkbdc0:
&lt;Keyboard controller (i8042)&gt; port 0x60,0x64 irq 1 on acpi0
atkbd0:
&lt;AT Keyboard&gt; irq 1 on atkbdc0
kbd0 at atkbd0
atkbd0: [GIANT-LOCKED]
ppc0:
&lt;ECP parallel printer port&gt; port 0x378-0x37f,0x778-0x77b irq 7 on acpi0
ppc0: SMC-like chipset (ECP/EPP/PS2/NIBBLE) in COMPATIBLE mode
ppc0: FIFO with 16/16/9 bytes threshold
ppbus0:
&lt;Parallel port bus&gt; on ppc0
plip0:
&lt;PLIP network interface&gt; on ppbus0
lpt0:
&lt;Printer&gt; on ppbus0
lpt0: Interrupt-driven port
ppi0:
&lt;Parallel I/O&gt; on ppbus0
sio0:
&lt;16550A-compatible COM port&gt; port 0x2f8-0x2ff irq 3 flags 0x10 on acpi0
sio0: type 16550A
pmtimer0 on isa0
orm0:
&lt;ISA Option ROMs&gt; at iomem 0xc0000-0xcffff,0xd0000-0xd9fff on isa0
sc0:
&lt;System console&gt; at flags 0x100 on isa0
sc0: VGA
&lt;16 virtual consoles, flags=0x300&gt;
vga0:
&lt;Generic ISA VGA&gt; at port 0x3c0-0x3df iomem 0xa0000-0xbffff on isa0
Timecounter "TSC" frequency 1333387980 Hz quality 800
Timecounters tick every 1.000 msec
ad0: 76318MB
&lt;WDC WD800JB-00JJC0 05.01C05&gt; at ata0-master UDMA100
Trying to mount root from ufs:/dev/ad0s1a
</pre>

¥

