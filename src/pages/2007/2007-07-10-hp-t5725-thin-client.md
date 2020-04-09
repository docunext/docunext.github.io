---
title: HP t5725 Thin Client
comments:
  - author: cruel
    email: alexey.suslikov@gmail.com
    date: 07/11/2007 11:46:14 AM
    text: >
      Can you provide full dmesg? Thanks.
  - author: admin
    email: albert.lash@savonix.com
    date: 07/11/2007 08:20:46 PM
    text: >
      # dmesg<br/>Linux version 2.6.18-4-486 (Debian 2.6.18.dfsg.1-12) (waldi@debian.org) (gcc version 4.1.2 20061115 (prerelease) (Debian 4.1.1-21)) #1 Mon Mar 26 16:39:10 UTC 2007<br/>BIOS-provided physical RAM map:<br/> BIOS-e820: 0000000000000000 - 000000000009fc00 (usable)<br/> BIOS-e820: 000000000009fc00 - 00000000000a0000 (reserved)<br/> BIOS-e820: 00000000000f0000 - 0000000000100000 (reserved)<br/> BIOS-e820: 0000000000100000 - 000000001eff0000 (usable)<br/> BIOS-e820: 000000001eff0000 - 000000001eff3000 (ACPI NVS)<br/> BIOS-e820: 000000001eff3000 - 000000001f000000 (ACPI data)<br/> BIOS-e820: 00000000fec00000 - 00000000fec01000 (reserved)<br/> BIOS-e820: 00000000fee00000 - 00000000fee01000 (reserved)<br/> BIOS-e820: 00000000ffff0000 - 0000000100000000 (reserved)<br/>495MB LOWMEM available.<br/>found SMP MP-table at 000f5200<br/>On node 0 totalpages: 126960<br/>  DMA zone: 4096 pages, LIFO batch:0<br/>  Normal zone: 122864 pages, LIFO batch:31<br/>DMI 2.3 present.<br/>ACPI: RSDP (v000 AWARD                                 ) @ 0x000f74f0<br/>ACPI: RSDT (v001 AWARD  AWRDACPI 0x42302e31 AWRD 0x00000000) @ 0x1eff3040<br/>ACPI: FADT (v001 AWARD  AWRDACPI 0x42302e31 AWRD 0x00000000) @ 0x1eff30c0<br/>ACPI: SSDT (v001 AWARD  AWRDACPI 0x42302e31 AWRD 0x00000000) @ 0x1eff66c0<br/>ACPI: MADT (v001 AWARD  AWRDACPI 0x42302e31 AWRD 0x00000000) @ 0x1eff6640<br/>ACPI: DSDT (v001 AWARD  AWRDACPI 0x00001000 MSFT 0x0100000e) @ 0x00000000<br/>ACPI: PM-Timer IO Port: 0x1008<br/>ACPI: Local APIC address 0xfee00000<br/>ACPI: LAPIC (acpi_id[0x00] lapic_id[0x00] enabled)<br/>Processor #0 6:8 APIC version 16<br/>ACPI: LAPIC_NMI (acpi_id[0x00] high edge lint[0x1])<br/>ACPI: IOAPIC (id[0x02] address[0xfec00000] gsi_base[0])<br/>IOAPIC[0]: apic_id 2, version 20, address 0xfec00000, GSI 0-23<br/>ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl)<br/>ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 dfl dfl)<br/>ACPI: IRQ0 used by override.<br/>ACPI: IRQ2 used by override.<br/>ACPI: IRQ9 used by override.<br/>Enabling APIC mode:  Flat.  Using 1 I/O APICs<br/>Using ACPI (MADT) for SMP configuration information<br/>Allocating PCI resources starting at 20000000 (gap: 1f000000:dfc00000)<br/>Detected 1000.091 MHz processor.<br/>Built 1 zonelists.  Total pages: 126960<br/>Kernel command line: root=/dev/mapper/vg-lv ro<br/>mapped APIC to ffffd000 (fee00000)<br/>mapped IOAPIC to ffffc000 (fec00000)<br/>Enabling fast FPU save and restore... done.<br/>Enabling unmasked SIMD FPU exception support... done.<br/>Initializing CPU#0<br/>PID hash table entries: 2048 (order: 11, 8192 bytes)<br/>Console: colour VGA+ 80x25<br/>Dentry cache hash table entries: 65536 (order: 6, 262144 bytes)<br/>Inode-cache hash table entries: 32768 (order: 5, 131072 bytes)<br/>Memory: 495568k/507840k available (1502k kernel code, 11700k reserved, 601k data, 256k init, 0k highmem)<br/>Checking if this processor honours the WP bit even in supervisor mode... Ok.<br/>Calibrating delay using timer specific routine.. 2001.29 BogoMIPS (lpj=4002588)<br/>Security Framework v1.0.0 initialized<br/>SELinux:  Disabled at boot.<br/>Capability LSM initialized<br/>Mount-cache hash table entries: 512<br/>CPU: After generic identify, caps: 0383fbff c1cbfbff 00000000 00000000 00000000 00000000 00000000<br/>CPU: After vendor identify, caps: 0383fbff c1cbfbff 00000000 00000000 00000000 00000000 00000000<br/>CPU: L1 I Cache: 64K (64 bytes/line), D cache 64K (64 bytes/line)<br/>CPU: L2 Cache: 256K (64 bytes/line)<br/>CPU: After all inits, caps: 0383fbff c1cbfbff 00000000 00000420 00000000 00000000 00000000<br/>Compat vDSO mapped to ffffe000.<br/>CPU: AMD Athlon(tm) Processor stepping 01<br/>Checking 'hlt' instruction... OK.<br/>ACPI: Core revision 20060707<br/>ENABLING IO-APIC IRQs<br/>..TIMER: vector=0x31 apic1=0 pin1=2 apic2=-1 pin2=-1<br/>checking if image is initramfs... it is<br/>Freeing initrd memory: 4713k freed<br/>NET: Registered protocol family 16<br/>EISA bus registered<br/>ACPI: bus type pci registered<br/>PCI: PCI BIOS revision 2.10 entry at 0xfa690, last bus=1<br/>PCI: Using configuration type 1<br/>Setting up standard PCI resources<br/>ACPI: Interpreter enabled<br/>ACPI: Using IOAPIC for interrupt routing<br/>ACPI: PCI Root Bridge [PCI0] (0000:00)<br/>PCI: Probing PCI hardware (bus 00)<br/>ACPI: Assume root bridge [\_SB_.PCI0] bus is 0<br/>Uncovering SIS963 that hid as a SIS503 (compatible=0)<br/>Enabling SiS 96x SMBus.<br/>PCI: Ignoring BAR0-3 of IDE controller 0000:00:02.5<br/>Boot video device is 0000:01:00.0<br/>ACPI: PCI Interrupt Routing Table [\_SB_.PCI0._PRT]<br/>ACPI: PCI Interrupt Link [LNKA] (IRQs 3 4 5 7 9 10 *11 12 14 15)<br/>ACPI: PCI Interrupt Link [LNKB] (IRQs 3 4 5 7 9 10 11 12 14 15) *0, disabled.<br/>ACPI: PCI Interrupt Link [LNKC] (IRQs 3 4 5 7 9 *10 11 12 14 15)<br/>ACPI: PCI Interrupt Link [LNKD] (IRQs 3 4 5 7 9 10 11 12 14 *15)<br/>ACPI: PCI Interrupt Link [LNKE] (IRQs 3 4 5 7 *9 10 11 12 14 15)<br/>ACPI: PCI Interrupt Link [LNKF] (IRQs *3 4 5 7 9 10 11 12 14 15)<br/>ACPI: PCI Interrupt Link [LNKG] (IRQs 3 4 5 7 9 10 11 12 14 15) *0, disabled.<br/>ACPI: PCI Interrupt Link [LNKH] (IRQs 3 4 *5 7 9 10 11 12 14 15)<br/>Linux Plug and Play Support v0.97 (c) Adam Belay<br/>pnp: PnP ACPI init<br/>pnp: PnP ACPI: found 9 devices<br/>PnPBIOS: Disabled by ACPI PNP<br/>PCI: Using ACPI for IRQ routing<br/>PCI: If a device doesn't work, try "pci=routeirq".  If it helps, post a report<br/>PCI: Ignore bogus resource 6 [0:0] of 0000:01:00.0<br/>PCI: Bridge: 0000:00:01.0<br/>  IO window: d000-dfff<br/>  MEM window: ec000000-ec0fffff<br/>  PREFETCH window: e0000000-e7ffffff<br/>NET: Registered protocol family 2<br/>IP route cache hash table entries: 4096 (order: 2, 16384 bytes)<br/>TCP established hash table entries: 16384 (order: 4, 65536 bytes)<br/>TCP bind hash table entries: 8192 (order: 3, 32768 bytes)<br/>TCP: Hash tables configured (established 16384 bind 8192)<br/>TCP reno registered<br/>audit: initializing netlink socket (disabled)<br/>audit(1184144429.208:1): initialized<br/>VFS: Disk quotas dquot_6.5.1<br/>Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)<br/>Initializing Cryptographic API<br/>io scheduler noop registered<br/>io scheduler anticipatory registered<br/>io scheduler deadline registered<br/>io scheduler cfq registered (default)<br/>isapnp: Scanning for PnP cards...<br/>isapnp: No Plug & Play device found<br/>Serial: 8250/16550 driver $Revision: 1.90 $ 4 ports, IRQ sharing enabled<br/>serial8250: ttyS0 at I/O 0x3f8 (irq = 4) is a 16550A<br/>00:07: ttyS0 at I/O 0x3f8 (irq = 4) is a 16550A<br/>RAMDISK driver initialized: 16 RAM disks of 8192K size 1024 blocksize<br/>PNP: No PS/2 controller found. Probing ports directly.<br/>serio: i8042 AUX port at 0x60,0x64 irq 12<br/>serio: i8042 KBD port at 0x60,0x64 irq 1<br/>mice: PS/2 mouse device common for all mice<br/>EISA: Probing bus 0 at eisa.0<br/>Cannot allocate resource for EISA slot 1<br/>Cannot allocate resource for EISA slot 4<br/>EISA: Detected 0 cards.<br/>TCP bic registered<br/>NET: Registered protocol family 1<br/>NET: Registered protocol family 17<br/>NET: Registered protocol family 8<br/>NET: Registered protocol family 20<br/>Using IPI Shortcut mode<br/>ACPI: (supports S0 S5)<br/>Freeing unused kernel memory: 256k freed<br/>Time: tsc clocksource has been installed.<br/>ACPI: Fan [FAN] (on)<br/>ACPI Error (psargs-0355): [RBYT] Namespace lookup failure, AE_NOT_FOUND<br/>ACPI Error (psparse-0537): Method parse/execution failed [\RTMP] (Node c1453d24), AE_NOT_FOUND<br/>ACPI Error (psparse-0537): Method parse/execution failed [\_TZ_.THRM._TMP] (Node c1453c20), AE_NOT_FOUND<br/>Uniform Multi-Platform E-IDE driver Revision: 7.00alpha2<br/>ide: Assuming 33MHz system bus speed for PIO modes; override with idebus=xx<br/>SIS5513: IDE controller at PCI slot 0000:00:02.5<br/>ACPI: PCI Interrupt 0000:00:02.5[A] -> GSI 16 (level, low) -> IRQ 169<br/>SIS5513: chipset revision 0<br/>SIS5513: not 100% native mode: will probe irqs later<br/>SIS5513: SiS 962/963 MuTIOL IDE UDMA133 controller<br/>    ide0: BM-DMA at 0x4000-0x4007, BIOS settings: hda:DMA, hdb:pio<br/>Probing IDE interface ide0...<br/>usbcore: registered new driver usbfs<br/>usbcore: registered new driver hub<br/>ohci_hcd: 2005 April 22 USB 1.1 'Open' Host Controller (OHCI) Driver (PCI)<br/>via-rhine.c:v1.10-LK1.4.1 July-24-2006 Written by Donald Becker<br/>hda: 512MB ATA Flash Disk, ATA DISK drive<br/>ide0 at 0x1f0-0x1f7,0x3f6 on irq 14<br/>ACPI: PCI Interrupt 0000:00:03.0[A] -> GSI 20 (level, low) -> IRQ 177<br/>ohci_hcd 0000:00:03.0: OHCI Host Controller<br/>ohci_hcd 0000:00:03.0: new USB bus registered, assigned bus number 1<br/>ohci_hcd 0000:00:03.0: irq 177, io mem 0xec100000<br/>hda: max request size: 128KiB<br/>hda: 1000944 sectors (512 MB) w/1KiB Cache, CHS=993/16/63, DMA<br/>hda: cache flushes not supported<br/> hda: hda1 hda2<br/>usb usb1: configuration #1 chosen from 1 choice<br/>hub 1-0:1.0: USB hub found<br/>hub 1-0:1.0: 3 ports detected<br/>ACPI: PCI Interrupt 0000:00:03.1[B] -> GSI 21 (level, low) -> IRQ 185<br/>ohci_hcd 0000:00:03.1: OHCI Host Controller<br/>ohci_hcd 0000:00:03.1: new USB bus registered, assigned bus number 2<br/>ohci_hcd 0000:00:03.1: irq 185, io mem 0xec101000<br/>usb usb2: configuration #1 chosen from 1 choice<br/>hub 2-0:1.0: USB hub found<br/>hub 2-0:1.0: 3 ports detected<br/>ACPI: PCI Interrupt 0000:00:03.2[D] -> GSI 23 (level, low) -> IRQ 193<br/>ehci_hcd 0000:00:03.2: EHCI Host Controller<br/>ehci_hcd 0000:00:03.2: new USB bus registered, assigned bus number 3<br/>PCI: cache line size of 64 is not supported by device 0000:00:03.2<br/>ehci_hcd 0000:00:03.2: irq 193, io mem 0xec102000<br/>ehci_hcd 0000:00:03.2: USB 2.0 started, EHCI 1.00, driver 10 Dec 2004<br/>usb usb3: configuration #1 chosen from 1 choice<br/>hub 3-0:1.0: USB hub found<br/>hub 3-0:1.0: 6 ports detected<br/>ACPI: PCI Interrupt 0000:00:0a.0[A] -> GSI 19 (level, low) -> IRQ 201<br/>eth0: VIA Rhine III at 0x1e400, 00:18:71:86:14:36, IRQ 201.<br/>eth0: MII PHY found at address 1, status 0x786d advertising 05e1 Link 45e1.<br/>Probing IDE interface ide1...<br/>device-mapper: ioctl: 4.7.0-ioctl (2006-06-24) initialised: dm-devel@redhat.com<br/>kjournald starting.  Commit interval 5 seconds<br/>EXT3-fs: mounted filesystem with ordered data mode.<br/>ACPI: PCI Interrupt 0000:00:02.7[C] -> GSI 18 (level, low) -> IRQ 209<br/>input: PC Speaker as /class/input/input0<br/>intel8x0_measure_ac97_clock: measured 54650 usecs<br/>intel8x0: clocking to 48000<br/>sis96x_smbus 0000:00:02.1: SiS96x SMBus base address: 0x10c0<br/>parport: PnPBIOS parport detected.<br/>parport0: PC-style at 0x378 (0x778), irq 7, dma 3 [PCSPP,TRISTATE,COMPAT,ECP,DMA]<br/>Real Time Clock Driver v1.12ac<br/>pci_hotplug: PCI Hot Plug PCI Core version: 0.5<br/>shpchp: Standard Hot Plug PCI Controller Driver version: 0.4<br/>Intel 810 + AC97 Audio, version 1.01, 17:02:08 Mar 26 2007<br/>Linux agpgart interface v0.101 (c) Dave Jones<br/>agpgart: Detected SiS 741 chipset<br/>agpgart: AGP aperture is 64M @ 0xe8000000<br/>EXT3 FS on dm-0, internal journal<br/>loop: loaded (max 8 devices)<br/>eth0: link up, 100Mbps, full-duplex, lpa 0x45E1<br/>ACPI: Power Button (FF) [PWRF]<br/>ACPI: Power Button (CM) [PWRB]<br/>ACPI: Sleep Button (CM) [FUTS]<br/>NET: Registered protocol family 10<br/>lo: Disabled Privacy Extensions<br/>IPv6 over IPv4 tunneling driver<br/>eth0: no IPv6 routers present
  - author: shunt
    email: trackrabbit@yahoo.com
    date: 01/09/2008 11:50:06 PM
    text: >
      Is it possible to change this unit with a nic (say a quad port) in that PCI slot and pfsense a CF card?
  - author: Albert
    email: albert.lash@savonix.com
    date: 01/10/2008 12:08:30 PM
    text: >
      Hi Shunt, unfortunately the t5725 requires an additional component to use the PCI card, but if you buy it, another nic can be added. I'm not sure if it is full height or half height though.<br/><br/>What's your application? I'd recommend the PC Engines ALIX, which comes with either 1, 2, or 3 ethernet ports, uses very little power, and has an AES accelerator as well as a hardware RNG.
date: 2007-07-10
tags: hp
---
</a>

I just received an HP t5725 Thin Client and it consumes about 25 watts of power for normal operations. I was hoping for much better! It has Windows XP on it right now, and I can't seem to do much about it because I can't get the machine to boot off of a USB CD. Grrr.

</a>

For whatever reason, booting the t5725 off of a CD-ROM works now. I'm trying to squeeze debian etch onto a 256MB disk on module. Will it work? We'll see. It might be possible because I have 512MB of RAM, only used 1% for extra space when setting up the partition, and didn't include a swap partition. As the debian manual puts it:

<blockquote>A minimal base installation, without the âStandard systemâ task selected, will take 225MB.
</blockquote>

Also saying that:

<blockquote>In both cases this is the actual disk space used after the installation is finished and any temporary files deleted. It also does not take into account overhead used by the file system, for example for journal files. This means that significantly more disk space is needed both during the installation and for normal system use.
</blockquote>

So while it is possible to install debian onto a 256MB drive, there is so little you can do with it once you're done, its just not worth it. I've now moved on to installing over the 512MB compact flash card that originally had Windows on it.

Using powernow-k7, I've been able to reduce power consumption down to 19 watts. Still not that great. But the processor does have pretty good stats. Not as good at the celeron 215, but better than the c7:

<pre>CPU: L1 I Cache: 64K (64 bytes/line), D cache 64K (64 bytes/line)
CPU: L2 Cache: 256K (64 bytes/line)
</pre>

To help prevent the flash from getting written to too many times, I'm using this fstab addition:

<pre>tmpfs             /tmp             tmpfs     defaults,noatime 0 0
tmpfs             /var/lock         tmpfs     defaults,noatime 0 0
tmpfs             /var/log         tmpfs     defaults,noatime 0 0
tmpfs             /var/run         tmpfs     defaults,noatime 0 0
tmpfs             /var/tmp         tmpfs     defaults,noatime 0 0
</pre>

Here's the output of df -h after a localepurge:

<pre>/dev/mapper/vg-lv     380M  218M  154M  59% /
tmpfs                 245M     0  245M   0% /lib/init/rw
udev                   10M   44K   10M   1% /dev
tmpfs                 245M     0  245M   0% /dev/shm/dev/hda1              89M  6.8M   77M   9% /boot
tmpfs                 245M     0  245M   0% /tmp
tmpfs                 245M     0  245M   0% /var/lock
tmpfs                 245M   88K  245M   1% /var/log
tmpfs                 245M   32K  245M   1% /var/run
tmpfs                 245M     0  245M   0% /var/tmp
</pre>

Thanks to:

<a href="https://www.openfiler.com/community/forums/viewtopic.php?pid=4082" title="/etc/fstab settings for flash drives">https://www.openfiler.com/.../viewtopic.php?pid=4082
</a> (scroll down)

</a>

It is interesting to note here that the t5725 offers the ability to schedule wake up times via the BIOS. That is really cool! I thought only Macs knew how to do that.

</a>

¥

