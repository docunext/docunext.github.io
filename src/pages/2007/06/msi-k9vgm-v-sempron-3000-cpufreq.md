---
title: MSI K9VGM V Sempron 3000 cpufreq
date: 2007-06-12
tags: acpi,amd,bios,debian,energy,lvm,raid,ubuntu
---

I'm trying to get a cpufreq driver loaded for a Sempron 3000+ in an MSI K9VGM-V barebones to reduce power consumption. Doesn't look good, but I'm installing a new kernel from debian now. I keep getting the following errors:

<pre class="sh_sh">powernow-k8: Power state transitions not supported</pre>

Darn, I'm convinced that this won't be working out as I planned, but still the machine is really nice. One thing I don't really like about the machine is the power supply. Luckily I had a SeaSonic lying around I'm using instead.

<pre class="sh_sh">lspci
00:00.0 Host bridge: VIA Technologies, Inc. K8M890CE Host Bridge
00:00.1 Host bridge: VIA Technologies, Inc. K8M890CE Host Bridge
00:00.2 Host bridge: VIA Technologies, Inc. K8M890CE Host Bridge
00:00.3 Host bridge: VIA Technologies, Inc. K8M890CE Host Bridge
00:00.4 Host bridge: VIA Technologies, Inc. K8M890CE Host Bridge
00:00.5 PIC: VIA Technologies, Inc. K8M890CE I/O APIC Interrupt Controller
00:00.7 Host bridge: VIA Technologies, Inc. K8M890CE Host Bridge
00:01.0 PCI bridge: VIA Technologies, Inc. VT8237 PCI bridge [K8T800/K8T890 South]
00:02.0 PCI bridge: VIA Technologies, Inc. K8T890 PCI to PCI Bridge Controller
00:03.0 PCI bridge: VIA Technologies, Inc. K8T890 PCI to PCI Bridge Controller
00:0f.0 RAID bus controller: VIA Technologies, Inc. VT8237A SATA 2-Port Controller (rev 80)
00:0f.1 IDE interface: VIA Technologies, Inc. VT82C586A/B/VT82C686/A/B/VT823x/A/C PIPC Bus Master IDE (rev 07)
00:10.0 USB Controller: VIA Technologies, Inc. VT82xxxxx UHCI USB 1.1 Controller (rev a0)
00:10.1 USB Controller: VIA Technologies, Inc. VT82xxxxx UHCI USB 1.1 Controller (rev a0)
00:10.2 USB Controller: VIA Technologies, Inc. VT82xxxxx UHCI USB 1.1 Controller (rev a0)
00:10.3 USB Controller: VIA Technologies, Inc. VT82xxxxx UHCI USB 1.1 Controller (rev a0)
00:10.4 USB Controller: VIA Technologies, Inc. USB 2.0 (rev 86)
00:11.0 ISA bridge: VIA Technologies, Inc. VT8237A PCI to ISA Bridge
00:11.7 Host bridge: VIA Technologies, Inc. VT8251 Ultra VLINK Controller
00:12.0 Ethernet controller: VIA Technologies, Inc. VT6102 [Rhine-II] (rev 7c)
00:13.0 Host bridge: VIA Technologies, Inc. VT8237A Host Bridge
00:13.1 PCI bridge: VIA Technologies, Inc. VT8237A PCI to PCI Bridge
00:18.0 Host bridge: Advanced Micro Devices [AMD] K8 [Athlon64/Opteron] HyperTransport Technology Configuration
00:18.1 Host bridge: Advanced Micro Devices [AMD] K8 [Athlon64/Opteron] Address Map
00:18.2 Host bridge: Advanced Micro Devices [AMD] K8 [Athlon64/Opteron] DRAM Controller
00:18.3 Host bridge: Advanced Micro Devices [AMD] K8 [Athlon64/Opteron] Miscellaneous Control
01:00.0 VGA compatible controller: VIA Technologies, Inc. Unknown device 3230 (rev 11)
03:00.0 RAID bus controller: Silicon Image, Inc. SiI 3132 Serial ATA Raid II Controller (rev 01)
04:04.0 RAID bus controller: Silicon Image, Inc. PCI0680 Ultra ATA-133 Host Controller (rev 02)
04:05.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL-8169 Gigabit Ethernet (rev 10)</pre>

dmesg output:

<pre>Bootdata ok (command line is root=/dev/md2 ro )
Linux version 2.6.18-4-amd64 (Debian 2.6.18.dfsg.1-12etch2) (dannf@debian.org) (gcc version 4.1.2 20061115 (prerelease) (Debian 4.1.1-21)) #1 SMP Thu May 10 01:01:58 UTC 2007
BIOS-provided physical RAM map: BIOS-e820: 0000000000000000 - 000000000009a000 (usable) BIOS-e820: 000000000009a000 - 00000000000a0000 (reserved) BIOS-e820: 00000000000f0000 - 0000000000100000 (reserved) BIOS-e820: 0000000000100000 - 000000007bef0000 (usable) BIOS-e820: 000000007bef0000 - 000000007bef3000 (ACPI NVS) BIOS-e820: 000000007bef3000 - 000000007bf00000 (ACPI data) BIOS-e820: 00000000e0000000 - 00000000f0000000 (reserved) BIOS-e820: 00000000fec00000 - 0000000100000000 (reserved)
DMI 2.4 present.
ACPI: RSDP (v000 K8M890                                ) @ 0x00000000000f7ce0
ACPI: RSDT (v001 K8M890 AWRDACPI 0x42302e31 AWRD 0x00000000) @ 0x000000007bef3040
ACPI: FADT (v001 K8M890 AWRDACPI 0x42302e31 AWRD 0x00000000) @ 0x000000007bef30c0
ACPI: _HPT (v001 K8M890 AWRDACPI 0x42302e31 AWRD 0x00000098) @ 0x000000007befa080
ACPI: MCFG (v001 K8M890 AWRDACPI 0x42302e31 AWRD 0x00000000) @ 0x000000007befa100
ACPI: MADT (v001 K8M890 AWRDACPI 0x42302e31 AWRD 0x00000000) @ 0x000000007bef9fc0
ACPI: DSDT (v001 K8M890 AWRDACPI 0x00001000 MSFT 0x0100000e) @ 0x0000000000000000
Scanning NUMA topology in Northbridge 24
Number of nodes 1
Node 0 MemBase 0000000000000000 Limit 000000007bef0000
NUMA: Using 63 for the hash shift.
Using node hash shift of 63
Bootmem setup node 0 0000000000000000-000000007bef0000
On node 0 totalpages: 499688  DMA zone: 3036 pages, LIFO batch:0  DMA32 zone: 496652 pages, LIFO batch:31
ACPI: PM-Timer IO Port: 0x408
ACPI: Local APIC address 0xfee00000
ACPI: LAPIC (acpi_id[0x00] lapic_id[0x00] enabled)
Processor #0 15:15 APIC version 16
ACPI: LAPIC (acpi_id[0x01] lapic_id[0x01] disabled)
ACPI: LAPIC_NMI (acpi_id[0x00] high edge lint[0x1])
ACPI: LAPIC_NMI (acpi_id[0x01] high edge lint[0x1])
ACPI: IOAPIC (id[0x02] address[0xfec00000] gsi_base[0])
IOAPIC[0]: apic_id 2, version 3, address 0xfec00000, GSI 0-23
ACPI: IOAPIC (id[0x03] address[0xfecc0000] gsi_base[24])
IOAPIC[1]: apic_id 3, version 3, address 0xfecc0000, GSI 24-47
ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl)
ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 low level)
ACPI: IRQ0 used by override.
ACPI: IRQ2 used by override.
ACPI: IRQ9 used by override.
Setting APIC routing to physical flat
Using ACPI (MADT) for SMP configuration information
Allocating PCI resources starting at 80000000 (gap: 7bf00000:64100000)
SMP: Allowing 2 CPUs, 1 hotplug CPUs
Built 1 zonelists.  Total pages: 499688
Kernel command line: root=/dev/md2 ro
Initializing CPU#0
PID hash table entries: 4096 (order: 12, 32768 bytes)
time.c: Using 3.579545 MHz WALL PM GTOD PIT/TSC timer.
time.c: Detected 1600.006 MHz processor.
Console: colour VGA+ 80x25
Dentry cache hash table entries: 262144 (order: 9, 2097152 bytes)
Inode-cache hash table entries: 131072 (order: 8, 1048576 bytes)
Checking aperture...
CPU 0: aperture @ d0000000 size 128 MB
Memory: 1990348k/2030528k available (1930k kernel code, 39772k reserved, 868k data, 176k init)
Calibrating delay using timer specific routine.. 3202.05 BogoMIPS (lpj=6404109)
Security Framework v1.0.0 initialized
SELinux:  Disabled at boot.
Capability LSM initialized
Mount-cache hash table entries: 256
CPU: L1 I Cache: 64K (64 bytes/line), D cache 64K (64 bytes/line)
CPU: L2 Cache: 256K (64 bytes/line)
CPU 0/0 -> Node 0
SMP alternatives: switching to UP code
ACPI: Core revision 20060707
Using local APIC timer interrupts.
result 12500062
Detected 12.500 MHz APIC timer.
Brought up 1 CPUs
testing NMI watchdog ... OK.
migration_cost=0
checking if image is initramfs... it is
Freeing initrd memory: 5208k freed
NET: Registered protocol family 16
ACPI: bus type pci registered
PCI: Using MMCONFIG at e0000000
PCI: No mmconfig possible on device 0:18
ACPI: Interpreter enabled
ACPI: Using IOAPIC for interrupt routing
ACPI: PCI Root Bridge [PCI0] (0000:00)
PCI: Probing PCI hardware (bus 00)
Boot video device is 0000:01:00.0
PCI: Transparent bridge - 0000:00:13.1
ACPI: PCI Interrupt Routing Table [\_SB_.PCI0._PRT]
ACPI: PCI Interrupt Routing Table [\_SB_.PCI0.PEXG._PRT]
ACPI: PCI Interrupt Routing Table [\_SB_.PCI0.PEX0._PRT]
ACPI: PCI Interrupt Routing Table [\_SB_.PCI0.P2PB._PRT]
ACPI: PCI Interrupt Link [LNKA] (IRQs 3 4 6 *7 10 11 12)
ACPI: PCI Interrupt Link [LNKB] (IRQs 3 4 6 7 *10 11 12)
ACPI: PCI Interrupt Link [LNKC] (IRQs 3 4 6 7 10 11 12) *5
ACPI: PCI Interrupt Link [LNKD] (IRQs 3 4 6 7 10 *11 12)
ACPI: PCI Interrupt Link [LNKE] (IRQs 3 4 6 7 10 11 12) *0, disabled.
ACPI: PCI Interrupt Link [LNKF] (IRQs 3 4 6 7 10 11 12) *0, disabled.
ACPI: PCI Interrupt Link [LNK0] (IRQs 3 4 6 7 10 11 12) *0, disabled.
ACPI: PCI Interrupt Link [LNK1] (IRQs 3 4 6 7 10 *11 12)
ACPI: PCI Root Bridge [PCI1] (0000:80)
PCI: Probing PCI hardware (bus 80)
ACPI: PCI Interrupt Routing Table [\_SB_.PCI1._PRT]
Linux Plug and Play Support v0.97 (c) Adam Belay
pnp: PnP ACPI init
pnp: ACPI device : hid PNP0A08
pnp: ACPI device : hid PNP0C02
pnp: ACPI device : hid PNP0C02
pnp: ACPI device : hid PNP0200
pnp: ACPI device : hid PNP0B00
pnp: ACPI device : hid PNP0800
pnp: ACPI device : hid PNP0C04
pnp: ACPI device : hid PNP0700
pnp: ACPI device : hid PNP0501
pnp: ACPI device : hid PNP0501
pnp: ACPI device : hid PNP0F13
pnp: ACPI device : hid PNP0303
pnp: ACPI device : hid PNP0C02
pnp: ACPI device : hid PNP0C02
pnp: ACPI device : hid PNP0A08
pnp: ACPI device : hid PNP0C01
pnp: PnP ACPI: found 16 devices
usbcore: registered new driver usbfs
usbcore: registered new driver hub
PCI: Using ACPI for IRQ routing
PCI: If a device doesn't work, try "pci=routeirq".  If it helps, post a report
PCI-DMA: Disabling IOMMU.
pnp: the driver 'system' has been registered
pnp: match found with the PnP device '00:01' and the driver 'system'
pnp: 00:01: ioport range 0x400-0x47f could not be reserved
pnp: 00:01: ioport range 0x500-0x50f has been reserved
pnp: match found with the PnP device '00:02' and the driver 'system'
pnp: match found with the PnP device '00:0c' and the driver 'system'
pnp: match found with the PnP device '00:0d' and the driver 'system'
pnp: match found with the PnP device '00:0f' and the driver 'system'
PCI: Bridge: 0000:00:01.0  IO window: e000-efff  MEM window: dd000000-deffffff  PREFETCH window: c0000000-cfffffff
PCI: Bridge: 0000:00:02.0  IO window: d000-dfff  MEM window: dfc00000-dfcfffff  PREFETCH window: dfb00000-dfbfffff
PCI: Bridge: 0000:00:03.0  IO window: c000-cfff  MEM window: dfe00000-dfefffff  PREFETCH window: dfd00000-dfdfffff
PCI: Bridge: 0000:00:13.1  IO window: b000-bfff  MEM window: dfa00000-dfafffff  PREFETCH window: df900000-df9fffff
PCI: Setting latency timer of device 0000:00:01.0 to 64
GSI 16 sharing vector 0xA9 and IRQ 16
ACPI: PCI Interrupt 0000:00:02.0[A] -> GSI 27 (level, low) -> IRQ 169
PCI: Setting latency timer of device 0000:00:02.0 to 64
GSI 17 sharing vector 0xB1 and IRQ 17
ACPI: PCI Interrupt 0000:00:03.0[A] -> GSI 31 (level, low) -> IRQ 177
PCI: Setting latency timer of device 0000:00:03.0 to 64
PCI: Setting latency timer of device 0000:00:13.1 to 64
NET: Registered protocol family 2
IP route cache hash table entries: 65536 (order: 7, 524288 bytes)
TCP established hash table entries: 262144 (order: 10, 4194304 bytes)
TCP bind hash table entries: 65536 (order: 8, 1048576 bytes)
TCP: Hash tables configured (established 262144 bind 65536)
TCP reno registered
audit: initializing netlink socket (disabled)
audit(1181720246.948:1): initialized
VFS: Disk quotas dquot_6.5.1
Dquot-cache hash table entries: 512 (order 0, 4096 bytes)
Initializing Cryptographic API
io scheduler noop registered
io scheduler anticipatory registered
io scheduler deadline registered
io scheduler cfq registered (default)
PCI: Setting latency timer of device 0000:00:02.0 to 64
assign_interrupt_mode Found MSI capability
Allocate Port Service[0000:00:02.0:pcie00]
Allocate Port Service[0000:00:02.0:pcie01]
Allocate Port Service[0000:00:02.0:pcie02]
Allocate Port Service[0000:00:02.0:pcie03]
PCI: Setting latency timer of device 0000:00:03.0 to 64
assign_interrupt_mode Found MSI capability
Allocate Port Service[0000:00:03.0:pcie00]
Allocate Port Service[0000:00:03.0:pcie01]
Allocate Port Service[0000:00:03.0:pcie02]
Allocate Port Service[0000:00:03.0:pcie03]
Real Time Clock Driver v1.12ac
Linux agpgart interface v0.101 (c) Dave Jones
Serial: 8250/16550 driver $Revision: 1.90 $ 4 ports, IRQ sharing enabled
serial8250: ttyS0 at I/O 0x3f8 (irq = 4) is a 16550A
serial8250: ttyS1 at I/O 0x2f8 (irq = 3) is a 16550A
pnp: the driver 'serial' has been registered
pnp: match found with the PnP device '00:08' and the driver 'serial'
00:08: ttyS0 at I/O 0x3f8 (irq = 4) is a 16550A
pnp: match found with the PnP device '00:09' and the driver 'serial'
00:09: ttyS1 at I/O 0x2f8 (irq = 3) is a 16550A
RAMDISK driver initialized: 16 RAM disks of 65536K size 1024 blocksize
pnp: the driver 'i8042 kbd' has been registered
pnp: match found with the PnP device '00:0b' and the driver 'i8042 kbd'
pnp: the driver 'i8042 aux' has been registered
pnp: match found with the PnP device '00:0a' and the driver 'i8042 aux'
PNP: PS/2 Controller [PNP0303:PS2K,PNP0f13:PS2M] at 0x60,0x64 irq 1,12
serio: i8042 AUX port at 0x60,0x64 irq 12
serio: i8042 KBD port at 0x60,0x64 irq 1
mice: PS/2 mouse device common for all mice
TCP bic registered
NET: Registered protocol family 1
NET: Registered protocol family 17
NET: Registered protocol family 8
NET: Registered protocol family 20
ACPI: (supports S0 S1 S4 S5)
Freeing unused kernel memory: 176k freed
input: AT Translated Set 2 keyboard as /class/input/input0
ACPI Exception (acpi_processor-0681): AE_NOT_FOUND, Processor Device is not present [20060707]
ACPI: Getting cpuindex for acpiid 0x1
SCSI subsystem initialized
libata version 2.00 loaded.
Uniform Multi-Platform E-IDE driver Revision: 7.00alpha2
ide: Assuming 33MHz system bus speed for PIO modes; override with idebus=xx
VP_IDE: IDE controller at PCI slot 0000:00:0f.1
PCI: VIA IRQ fixup for 0000:00:0f.1, from 255 to 0
VP_IDE: chipset revision 7
VP_IDE: not 100% native mode: will probe irqs later
VP_IDE: VIA vt8237a (rev 00) IDE UDMA133 controller on pci0000:00:0f.1    ide0: BM-DMA at 0xfa00-0xfa07, BIOS settings: hda:DMA, hdb:pio    ide1: BM-DMA at 0xfa08-0xfa0f, BIOS settings: hdc:pio, hdd:pio
Probing IDE interface ide0...
USB Universal Host Controller Interface driver v3.0
via-rhine.c:v1.10-LK1.4.1 July-24-2006 Written by Donald Becker
hda: WDC WD800JB-00JJC0, ATA DISK drive
ide0 at 0x1f0-0x1f7,0x3f6 on irq 14
Probing IDE interface ide1...
GSI 18 sharing vector 0xD1 and IRQ 18
ACPI: PCI Interrupt 0000:00:10.0[A] -> GSI 20 (level, low) -> IRQ 209
PCI: VIA IRQ fixup for 0000:00:10.0, from 7 to 1
uhci_hcd 0000:00:10.0: UHCI Host Controller
uhci_hcd 0000:00:10.0: new USB bus registered, assigned bus number 1
uhci_hcd 0000:00:10.0: irq 209, io base 0x0000f900
usb usb1: configuration #1 chosen from 1 choice
hub 1-0:1.0: USB hub found
hub 1-0:1.0: 2 ports detected
hda: max request size: 128KiB
hda: 156301488 sectors (80026 MB) w/8192KiB Cache, CHS=65535/16/63, UDMA(100)
hda: cache flushes supported hda: hda1 hda2 hda3 hda4 &lt; hda5 >
GSI 19 sharing vector 0xD9 and IRQ 19
ACPI: PCI Interrupt 0000:00:10.1[B] -> GSI 22 (level, low) -> IRQ 217
PCI: VIA IRQ fixup for 0000:00:10.1, from 10 to 9
uhci_hcd 0000:00:10.1: UHCI Host Controller
uhci_hcd 0000:00:10.1: new USB bus registered, assigned bus number 2
uhci_hcd 0000:00:10.1: irq 217, io base 0x0000f800
usb usb2: configuration #1 chosen from 1 choice
hub 2-0:1.0: USB hub found
hub 2-0:1.0: 2 ports detected
GSI 20 sharing vector 0xE1 and IRQ 20
ACPI: PCI Interrupt 0000:00:10.2[C] -> GSI 21 (level, low) -> IRQ 225
PCI: VIA IRQ fixup for 0000:00:10.2, from 5 to 1
uhci_hcd 0000:00:10.2: UHCI Host Controller
uhci_hcd 0000:00:10.2: new USB bus registered, assigned bus number 3
uhci_hcd 0000:00:10.2: irq 225, io base 0x0000f700
usb usb3: configuration #1 chosen from 1 choice
hub 3-0:1.0: USB hub found
hub 3-0:1.0: 2 ports detected
GSI 21 sharing vector 0xE9 and IRQ 21
ACPI: PCI Interrupt 0000:00:10.3[D] -> GSI 23 (level, low) -> IRQ 233
PCI: VIA IRQ fixup for 0000:00:10.3, from 11 to 9
uhci_hcd 0000:00:10.3: UHCI Host Controller
uhci_hcd 0000:00:10.3: new USB bus registered, assigned bus number 4
uhci_hcd 0000:00:10.3: irq 233, io base 0x0000f600
usb usb4: configuration #1 chosen from 1 choice
hub 4-0:1.0: USB hub found
hub 4-0:1.0: 2 ports detected
sata_via 0000:00:0f.0: version 2.0
ACPI: PCI Interrupt 0000:00:0f.0[B] -> GSI 21 (level, low) -> IRQ 225
sata_via 0000:00:0f.0: routed to hard irq line 10
ata1: SATA max UDMA/133 cmd 0xFF00 ctl 0xFE02 bmdma 0xFB00 irq 225
ata2: SATA max UDMA/133 cmd 0xFD00 ctl 0xFC02 bmdma 0xFB08 irq 225
scsi0 : sata_via
ata1: SATA link up 1.5 Gbps (SStatus 113 SControl 300)
ata1.00: ATA-7, max UDMA/133, 160836480 sectors: LBA48 NCQ (depth 0/32)
ata1.00: ata1: dev 0 multi count 16
ata1.00: configured for UDMA/133
scsi1 : sata_via
ata2: SATA link down 1.5 Gbps (SStatus 0 SControl 300)
ATA: abnormal status 0x7F on port 0xFD07  Vendor: ATA       Model: HDS728080PLA380   Rev: PF2O  Type:   Direct-Access                      ANSI SCSI revision: 05
sata_sil24 0000:03:00.0: version 0.3
GSI 22 sharing vector 0x32 and IRQ 22
ACPI: PCI Interrupt 0000:03:00.0[A] -> GSI 28 (level, low) -> IRQ 50
PCI: Setting latency timer of device 0000:03:00.0 to 64
ata3: SATA max UDMA/100 cmd 0xFFFFC20000020000 ctl 0x0 bmdma 0x0 irq 50
ata4: SATA max UDMA/100 cmd 0xFFFFC20000022000 ctl 0x0 bmdma 0x0 irq 50
scsi2 : sata_sil24
SCSI device sda: 160836480 512-byte hdwr sectors (82348 MB)
sda: Write Protect is off
sda: Mode Sense: 00 3a 00 00
SCSI device sda: drive cache: write back
SCSI device sda: 160836480 512-byte hdwr sectors (82348 MB)
sda: Write Protect is off
sda: Write Protect is off
sda: Mode Sense: 00 3a 00 00
SCSI device sda: drive cache: write back sda: sda1 sda2 sda3 sda4 &lt; sda5 sda6 >
sd 0:0:0:0: Attached scsi disk sda
ata3: SATA link up 1.5 Gbps (SStatus 113 SControl 300)
ata3.00: ATA-7, max UDMA/133, 160836480 sectors: LBA48 NCQ (depth 31/32)
ata3.00: ata3: dev 0 multi count 16
ata3.00: configured for UDMA/100
scsi3 : sata_sil24
ata4: SATA link down (SStatus 0 SControl 300)  Vendor: ATA       Model: HDS728080PLA380   Rev: PF2O  Type:   Direct-Access                      ANSI SCSI revision: 05
SCSI device sdb: 160836480 512-byte hdwr sectors (82348 MB)
sdb: Write Protect is off
sdb: Mode Sense: 00 3a 00 00
SCSI device sdb: drive cache: write back
SCSI device sdb: 160836480 512-byte hdwr sectors (82348 MB)
sdb: Write Protect is off
sdb: Mode Sense: 00 3a 00 00
SCSI device sdb: drive cache: write back sdb: sdb1 sdb2 sdb3 sdb4 &lt; sdb5 sdb6 >
sd 2:0:0:0: Attached scsi disk sdb
ACPI: PCI Interrupt 0000:00:10.4[C] -> GSI 21 (level, low) -> IRQ 225
PCI: VIA IRQ fixup for 0000:00:10.4, from 5 to 1
ehci_hcd 0000:00:10.4: EHCI Host Controller
ehci_hcd 0000:00:10.4: new USB bus registered, assigned bus number 5
ehci_hcd 0000:00:10.4: irq 225, io mem 0xdffff000
ehci_hcd 0000:00:10.4: USB 2.0 started, EHCI 1.00, driver 10 Dec 2004
usb usb5: configuration #1 chosen from 1 choice
hub 5-0:1.0: USB hub found
hub 5-0:1.0: 8 ports detected
ACPI: PCI Interrupt 0000:00:12.0[A] -> GSI 23 (level, low) -> IRQ 233
eth0: VIA Rhine II at 0x1f200, 00:19:db:89:f0:0a, IRQ 233.
eth0: MII PHY found at address 1, status 0x786d advertising 01e1 Link cde1.
SiI680: IDE controller at PCI slot 0000:04:04.0
GSI 23 sharing vector 0x3A and IRQ 23
ACPI: PCI Interrupt 0000:04:04.0[A] -> GSI 17 (level, low) -> IRQ 58
SiI680: chipset revision 2
SiI680: BASE CLOCK == 133
SiI680: 100% native mode on irq 58    ide2: MMIO-DMA , BIOS settings: hde:pio, hdf:pio    ide3: MMIO-DMA , BIOS settings: hdg:pio, hdh:pio
Probing IDE interface ide2...
hde: WDC WD800JB-00JJC0, ATA DISK drive
ide2 at 0xffffc20000006080-0xffffc20000006087,0xffffc2000000608a on irq 58
hde: max request size: 64KiB
hde: 156301488 sectors (80026 MB) w/8192KiB Cache, CHS=65535/16/63, UDMA(100)
hde: cache flushes supported hde: hde1 hde2 hde3 hde4 &lt; hde5 >
Probing IDE interface ide3...
r8169 Gigabit Ethernet driver 2.2LK-NAPI loaded
GSI 24 sharing vector 0x42 and IRQ 24
ACPI: PCI Interrupt 0000:04:05.0[A] -> GSI 18 (level, low) -> IRQ 66
eth0: RTL8169sb/8110sb at 0xffffc2000001c000, 00:06:4f:4a:44:d1, IRQ 66
Probing IDE interface ide1...
Probing IDE interface ide3...
md: md driver 0.90.3 MAX_MD_DEVS=256, MD_SB_DISKS=27
md: bitmap version 4.39
md: raid0 personality registered for level 0
md: raid1 personality registered for level 1
raid5: automatically using best checksumming function: generic_sse   generic_sse:  4929.000 MB/sec
raid5: using function: generic_sse (4929.000 MB/sec)
raid6: int64x1   1439 MB/s
raid6: int64x2   1917 MB/s
raid6: int64x4   1813 MB/s
raid6: int64x8   1278 MB/s
raid6: sse2x1    2154 MB/s
raid6: sse2x2    2946 MB/s
raid6: sse2x4    3034 MB/s
raid6: using algorithm sse2x4 (3034 MB/s)
md: raid6 personality registered for level 6
md: raid5 personality registered for level 5
md: raid4 personality registered for level 4
md: md0 stopped.
md: bind&lt;hde1>
md: bind&lt;sdb1>
md: bind&lt;hda1>
raid1: raid set md0 active with 3 out of 3 mirrors
md: md1 stopped.
md: bind&lt;hde2>
md: bind&lt;sda2>
md: bind&lt;sdb3>
md: bind&lt;hda2>
md1: setting max_sectors to 128, segment boundary to 32767
raid0: looking at hda2
raid0:   comparing hda2(979840) with hda2(979840)
raid0:   END
raid0:   ==> UNIQUE
raid0: 1 zones
raid0: looking at sdb3
raid0:   comparing sdb3(979840) with hda2(979840)
raid0:   EQUAL
raid0: looking at sda2
raid0:   comparing sda2(979840) with hda2(979840)
raid0:   EQUAL
raid0: looking at hde2
raid0:   comparing hde2(979840) with hda2(979840)
raid0:   EQUAL
raid0: FINAL 1 zones
raid0: done.
raid0 : md_size is 3919360 blocks.
raid0 : conf->hash_spacing is 3919360 blocks.
raid0 : nb_zone is 1.
raid0 : Allocating 8 bytes for hash.
md: md2 stopped.
md: bind&lt;hde3>

md: bind&lt;sda3>
md: bind&lt;sdb2>
md: bind&lt;hda3>
md: md2: raid array is not clean -- starting background reconstruction
raid1: raid set md2 active with 3 out of 3 mirrors
md: syncing RAID array md2
md: minimum _guaranteed_ reconstruction speed: 1000 KB/sec/disc.
md: using maximum available idle IO bandwidth (but not more than 200000 KB/sec) for reconstruction.
md: using 128k window, over a total of 8787456 blocks.
md: md3 stopped.
md: bind&lt;sda5>
md: bind&lt;sdb5>
md: bind&lt;hde5>
md: bind&lt;hda5>
raid5: device hda5 operational as raid disk 0
raid5: device sdb5 operational as raid disk 2
raid5: device sda5 operational as raid disk 1
raid5: allocated 3212kB for md3
raid5: raid level 5 set md3 active with 3 out of 3 devices, algorithm 2
RAID5 conf printout: --- rd:3 wd:3 fd:0 disk 0, o:1, dev:hda5 disk 1, o:1, dev:sda5 disk 2, o:1, dev:sdb5
device-mapper: ioctl: 4.7.0-ioctl (2006-06-24) initialised: dm-devel@redhat.com
Attempting manual resume
kjournald starting.  Commit interval 5 seconds
EXT3-fs: mounted filesystem with ordered data mode.
pci_hotplug: PCI Hot Plug PCI Core version: 0.5
shpchp: Standard Hot Plug PCI Controller Driver version: 0.4
input: PC Speaker as /class/input/input1
FDC 0 is a post-1991 82077
Adding 3919352k swap on /dev/md1.  Priority:-1 extents:1 across:3919352k
input: ImPS/2 Logitech Wheel Mouse as /class/input/input2
EXT3 FS on md2, internal journal
loop: loaded (max 8 devices)
kjournald starting.  Commit interval 5 seconds
EXT3 FS on dm-0, internal journal
EXT3-fs: mounted filesystem with ordered data mode.
kjournald starting.  Commit interval 5 seconds
EXT3 FS on dm-2, internal journal
EXT3-fs: mounted filesystem with ordered data mode.
r8169: eth0: link up
ACPI: Power Button (FF) [PWRF]
ACPI: Power Button (CM) [PWRB]
NET: Registered protocol family 10
lo: Disabled Privacy Extensions
IPv6 over IPv4 tunneling driver
eth0: no IPv6 routers present
md: md2: sync done.
RAID1 conf printout: --- wd:3 rd:3 disk 0, wo:0, o:1, dev:hda3 disk 1, wo:0, o:1, dev:hde3 disk 2, wo:0, o:1, dev:sda3
device-mapper: ioctl: Invalid new logical volume name supplied.
hda: drive_cmd: status=0x51 { DriveReady SeekComplete Error }
hda: drive_cmd: error=0x04 { DriveStatusError }
ide: failed opcode was: 0xef
hda: CHECK for good STATUS
eth1: link up, 100Mbps, full-duplex, lpa 0xCDE1
eth1: no IPv6 routers present
eth1: link up, 100Mbps, full-duplex, lpa 0xCDE1
eth1: no IPv6 routers present
r8169: eth0: link up
eth0: no IPv6 routers present</pre>

I'm using RAID over a few different controllers, plus LVM on top of that for maximum performance plus flexibility.

Oh and by the way, when I was working on this, I noticed a big difference between ubuntu and debian: ubuntu has the "custom dsdt" kernel patch built in, whereas debian does not.

I even updated the BIOS!

