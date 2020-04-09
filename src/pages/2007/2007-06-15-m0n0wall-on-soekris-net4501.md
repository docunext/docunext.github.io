---
title: m0n0wall on Soekris net4501
comments:
  - author: Chris Buechler
    email: cbuechler@gmail.com
    url: http://chrisbuechler.com
    date: 06/17/2007 04:08:55 PM
    text: >
      A 4501 is, of course, drastically slower than a WRAP. You're talking about a 486 133 MHz vs. a 586 266 MHz. A WRAP is more than twice as fast of a CPU. m0n0wall runs much better than anything else I've ever tried on a 4501, though the page load times are a bit slow for some pages.<br/><br/>The problem with SSH connections dying over VPN is MTU related.
  - author: admin
    email: albert.lash@savonix.com
    date: 06/20/2007 01:28:57 PM
    text: >
      Thanks for commenting Chris, and thanks for your help on the m0n0wall lists. The 4501 is a great little device, and I'm really getting into m0n0wall. I can't believe I've survived this long without it!
date: 2007-06-15
tags: m0n0wall,networking,soekris
---
<pre class="sh_sh">Jun 15 23:17:45 	/kernel: avail memory = 50819072 (49628K bytes)
Jun 15 23:17:45 	/kernel: Preloaded elf kernel "kernel" at 0xc0e0f000.
Jun 15 23:17:45 	/kernel: Preloaded mfs_root "/mfsroot" at 0xc0e0f0a8.
Jun 15 23:17:45 	/kernel: md0: Preloaded image </mfsroot> 11534336 bytes at 0xc030d43c
Jun 15 23:17:45 	/kernel: md1: Malloc disk
Jun 15 23:17:45 	/kernel: Timecounter "ELAN" frequency 8333333 Hz
Jun 15 23:17:45 	/kernel: npx0: <math processor> on motherboard
Jun 15 23:17:45 	/kernel: npx0: INT 16 interface
Jun 15 23:17:45 	/kernel: pcib0: <AMD Elan SC520 host to PCI bridge> on motherboard
Jun 15 23:17:45 	/kernel: pci0: <PCI bus> on pcib0
Jun 15 23:17:45 	/kernel: sis0: <NatSemi DP83815 10/100BaseTX> port 0xe000-0xe0ff mem 0xa0000000-0xa0000fff irq 10 at device 18.0 on pci0
Jun 15 23:17:45 	/kernel: sis0: Ethernet address: 00:00:24:c8:7b:b0
Jun 15 23:17:45 	/kernel: miibus0: <MII bus> on sis0
Jun 15 23:17:45 	/kernel: ukphy0: <Generic IEEE 802.3u media interface> on miibus0
Jun 15 23:17:45 	/kernel: ukphy0: 10baseT, 10baseT-FDX, 100baseTX, 100baseTX-FDX, auto
Jun 15 23:17:45 	/kernel: sis1: <NatSemi DP83815 10/100BaseTX> port 0xe100-0xe1ff mem 0xa0001000-0xa0001fff irq 11 at device 19.0 on pci0
Jun 15 23:17:45 	/kernel: sis1: Ethernet address: 00:00:24:c8:7b:b1
Jun 15 23:17:45 	/kernel: miibus1: <MII bus> on sis1
Jun 15 23:17:45 	/kernel: ukphy1: <Generic IEEE 802.3u media interface> on miibus1
Jun 15 23:17:45 	/kernel: ukphy1: 10baseT, 10baseT-FDX, 100baseTX, 100baseTX-FDX, auto
Jun 15 23:17:45 	/kernel: sis2: <NatSemi DP83815 10/100BaseTX> port 0xe200-0xe2ff mem 0xa0002000-0xa0002fff irq 5 at device 20.0 on pci0
Jun 15 23:17:45 	/kernel: sis2: Ethernet address: 00:00:24:c8:7b:b2
Jun 15 23:17:45 	/kernel: miibus2: <MII bus> on sis2
Jun 15 23:17:45 	/kernel: ukphy2: <Generic IEEE 802.3u media interface> on miibus2
Jun 15 23:17:45 	/kernel: ukphy2: 10baseT, 10baseT-FDX, 100baseTX, 100baseTX-FDX, auto
Jun 15 23:17:45 	/kernel: isa0: <ISA bus> on motherboard
Jun 15 23:17:45 	/kernel: orm0: <Option ROM> at iomem 0xc8000-0xd0fff on isa0
Jun 15 23:17:45 	/kernel: pmtimer0 on isa0
Jun 15 23:17:45 	/kernel: ata0 at port 0x1f0-0x1f7,0x3f6 irq 14 on isa0
Jun 15 23:17:45 	/kernel: ata1 at port 0x170-0x177,0x376 irq 15 on isa0
Jun 15 23:17:45 	/kernel: sio0 at port 0x3f8-0x3ff irq 4 flags 0x30 on isa0
Jun 15 23:17:45 	/kernel: sio0: type 16550A, console
Jun 15 23:17:45 	/kernel: sio1 at port 0x2f8-0x2ff irq 3 on isa0
Jun 15 23:17:45 	/kernel: sio1: type 16550A
Jun 15 23:17:45 	/kernel: Elan-mmcr driver: MMCR at 0xc597e000
Jun 15 23:17:45 	/kernel: BRIDGE 020214 loaded
Jun 15 23:17:45 	/kernel: IPsec: Initialized Security Association Processing.
Jun 15 23:17:45 	/kernel: IP Filter: v3.4.35 initialized. Default = block all, Logging = enabled
Jun 15 23:17:45 	/kernel: ad0: 245MB <SanDisk SDCFB-256> [980/16/32] at ata0-master BIOSPIO
Jun 15 23:17:45 	/kernel: Mounting root from ufs:/dev/md0c
Jun 15 23:17:48 	dnsmasq[100]: started, version 2.35 cachesize 150
Jun 15 23:17:48 	dnsmasq[100]: compile time options: no-IPv6 GNU-getopt ISC-leasefile no-DBus no-I18N
Jun 15 23:17:48 	dnsmasq[100]: setting --bind-interfaces option because of OS limitations
Jun 15 23:17:48 	dnsmasq[100]: setting --bind-interfaces option because of OS limitations
Jun 15 23:17:48 	dnsmasq[100]: reading /etc/resolv.conf
Jun 15 23:17:49 	dnsmasq[100]: using nameserver 64.25.80.130#53
Jun 15 23:17:49 	dnsmasq[100]: using nameserver 4.2.2.1#53
Jun 15 23:17:49 	dnsmasq[100]: read /etc/hosts - 2 addresses
Jun 15 23:17:53 	/kernel: ipfw2 initialized, divert disabled, rule-based forwarding enabled, default to accept, logging disabled
Jun 15 23:17:55 	/kernel: DUMMYNET initialized (011031)</pre>

Unfortunately the webGUI for m0n0wall on the net4501 is REALLY SLOW. I mean molasses. I'm wondering if I have mine configured wrong because it is so slow. Up to a minute for the page to refresh. The WRAP is much much faster. The bridging is fine (I have mine setup as a bridge filter to manage bandwidth).

<pre>
+----------------+
| CABLE MODEM    |
+----------------+
|
+---------------------------+
| SOEKRIS - m0n0wall bridge |
+---------------------------+(LAN - No DHCP)
|                           |
| (OPT1 PUBLIC IPs)         |
|                           |
+------------+              |
| DMZ SWITCH |              |
+------------+-+----+       |
|             SRV1 SRV2..   |
|                           |
+---------------------+     |
| WRAP - m0n0wall vpn |     |
+---------------------+     |
|                           |
|(LAN)                      |
|                           |
+------------+              |
| LAN SWITCH |              |
+------------+--------------+
</pre>

I'm trying to make the net4501 perform a little faster, so I'm disabling most things that I don't need.

I just emailed the m0n0wall lists this question:

<blockquote>I'm loving m0n0wall, nice work! I'm using a soekris net4501 as a filtered bridge to manage bandwidth for a diverse network. I have a /28 subnet of public ips that I'm passing through the net4501 from wan to opt1 to a switch connecting:

* Astlinux (though soon to be askoziaPBX) on WRAP

* m0n0wall on a WRAP acting as a NAT and router for our office lan

* a couple of public servers

This allows our lan computers to access the public servers, which you can't do when using 1:1 or server NAT AFAIK.

Everything is working well, and I have the inner m0n0wall (the one on the WRAP behind the filtered bridge) connecting a VPN out to another network. That still works fine, except I'm noticing some very odd behavior. If I ssh over the VPN to a a device on the remove lan and run one of the following commands:

* ifconfig

* ps -A

something goes haywire and the shell is dropped. The process doesn't die, as I can login through the public ip and watch the top of my user and see sshd and bash continue to run after the screen buffer in the other shell through the vpn stops responding.

I'm wondering if I'm doing something that goes against good network design here, or if this is a sign of something that is mis-configured and needs to be fixed. I appreciate any advice - thanks!</blockquote>

¥

