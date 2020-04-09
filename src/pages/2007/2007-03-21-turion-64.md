---
title: Another Turion 64 Desktop Article
comments:
  - author: Me
    email: me@me.com
    url: http://Docunext
    date: 03/21/2007 10:37:24 AM
    text: >
      sensors<br/>k8temp-pci-00c3<br/>Adapter: PCI adapter<br/>Core0 Temp:<br/>             +21°C<br/><br/>w83697hf-isa-0290<br/>Adapter: ISA adapter<br/>VCore:     +1.02 V  (min =  +1.02 V, max =  +1.04 V)<br/>+3.3V:     +3.34 V  (min =  +0.00 V, max =  +2.05 V)       ALARM<br/>+5V:       +4.95 V  (min =  +0.22 V, max =  +3.49 V)       ALARM<br/>+12V:     +12.10 V  (min =  +0.97 V, max =  +7.78 V)       ALARM<br/>-12V:     -11.95 V  (min = -14.91 V, max = -11.87 V)<br/>-5V:       +4.90 V  (min =  -7.31 V, max =  +2.74 V)       ALARM<br/>V5SB:      +5.54 V  (min =  +0.22 V, max =  +0.00 V)       ALARM<br/>VBat:      +3.22 V  (min =  +0.26 V, max =  +0.00 V)       ALARM<br/>fan1:        0 RPM  (min = 3245 RPM, div = 2)              ALARM<br/>fan2:        0 RPM  (min = 675000 RPM, div = 2)              ALARM<br/>temp1:      +124°C  (high =    +8°C, hyst =   -96°C)   sensor = thermistor   ALARM<br/>temp2:     +25.0°C  (high =   +80°C, hyst =   +75°C)   sensor = thermistor           (beep)<br/>alarms:<br/>beep_enable:<br/>          Sound alarm enabled
date: 2007-03-21
tags: none
author: Albert Lash
---
I bought a socket 754 Turion to go with the AOpen XC Cube EX761 I got from newegg.com, but the power consumption is high for the hardware. My setup specs:

<ul><li>One MT-37 Turion 64 processor</li><li>One IDE CD-ROM</li><li>Two Samsung 500GB SATA drives</li><li>One 3Ware 9650SE RAID0/1 Card (Configured as RAID0)</li><li>One GigE Intel Pro Ethernet Card</li></ul>

The system pulls almost 70 watts when the process runs at 800Mhz. To me that is high. I don't see how it could be consuming so much, but I'll have to check the voltage to the processor. Even if the two drives used about 20 watts each, that leaves 50 watts for everything else. Way too much. However, looking here at this Silent PC Review page:

<a href="http://www.silentpcreview.com/article300-page5.html">http://www.silentpcreview.com/article300-page5.html</a>

Shows that their idle system ran at 37 Watts, so its possible I guess that my power consumption specs are correct. While I don't have the machine right in front of me, I do remember that the dmesg output had a 4 different frequency scaling options, I just don't remember if there were voltages listed.

Though they go on to say that the MT-37 was getting the wrong voltage applied to it:

<a href="http://www.silentpcreview.com/article300-page5.html">Turion Voltages</a>

It should be 1.2 V at stock.

My guess is that the voltage supplied is incorrect, but the bios on the Aopen board won't let me alter it. Its cool that is works, but its not optimal. My strategy now is to use the Turion in a different machine, and to get a new processor for the AOpen box. (The AOpen box now has a 3Ware controller, so it doesn't need a lot of processing power.)

Here's what I'm thinking:

EPoX EP-8NPA  for $80 from newegg.com (here's a page on using the <a href="http://translate.google.com/translate?hl=en&sl=it&u=http://www.hwupgrade.it/articoli/skmadri/1374/epox-8npa-sli-sli-con-turion-64_index.html&sa=X&oi=translate&resnum=10&ct=result&prev=/search%3Fq%3D%2BEPoX%2BEP-8NPA%2Bturion%26hl%3Den%26pwst%3D1">EPoX EP-8NPA with the Turion 64</a>)

AMD Sempron for $39 from newegg.com (includes heatsink & fan)

The problem is that the socket 754 is an aging interface. There aren't too many boards left in production for this type of processor.

I just checked another one of my machines and this is the output:

<pre>dmesg | grep powernow

powernow-k8: Found 1 AMD Athlon 64 / Opteron processors (version 1.60.2)

powernow-k8:    0 : fid 0xa (1800 MHz), vid 0x6 (1400 mV)

powernow-k8:    1 : fid 0x2 (1000 MHz), vid 0x12 (1100 mV)</pre>

Its good to see that the voltage goes to 1.1V at the lower frequency. I thought the only way that the voltage would change was via the C-state changes in ACPI. So I'll have to check the voltages for the Turion states in the dmesg output on the AOpen. Argh, the dmesg doesn't output the voltages! Here's the sensord output:

<pre>sensors

k8temp-pci-00c3

Adapter: PCI adapter

Core0 Temp:+21°C

w83697hf-isa-0290

Adapter: ISA adapter

VCore: +1.02 V (min = +1.02 V, max = +1.04 V)+3.3V: +3.34 V (min = +0.00 V, max = +2.05 V) ALARM+5V: +4.95 V (min = +0.22 V, max = +3.49 V) ALARM+12V: +12.10 V (min = +0.97 V, max = +7.78 V) ALARM-12V: -11.95 V (min = -14.91 V, max = -11.87 V)-5V: +4.90 V (min = -7.31 V, max = +2.74 V) ALARM

V5SB: +5.54 V (min = +0.22 V, max = +0.00 V) ALARM

VBat: +3.22 V (min = +0.26 V, max = +0.00 V) ALARM

fan1: 0 RPM (min = 3245 RPM, div = 2) ALARM

fan2: 0 RPM (min = 675000 RPM, div = 2) ALARM

temp1: +124°C (high = +8°C, hyst = -96°C) sensor = thermistor ALARM

temp2: +25.0°C (high = +80°C, hyst = +75°C) sensor = thermistor (beep)

alarms:

beep_enable:

Sound alarm enabled</pre>

Looks like some things are messed up, but I think the voltage is correct as its the same in the bios.
<h4>AOpen XC Cube EX761 and the AMCC 3Ware 9650SE 2 Port SATAII PCIe Card</h4><b>Booo! AMCC Makes Bad</b>

<blockquote>

The AMCC support options for 3ware products have changed.  Technical

support via e-mail is no longer available for 3ware RAID products.  Depending

on your question and urgency, please use one of the following methods...</blockquote>

Duh, I called the support number listened to them tell me to email, but waited on hold for a half hour, left a message, and then emailed. I hate it when companies do stupid things like that. Argh. I expected more and am disappointed with AMCC / 3Ware.

By the way, this is what I sent them:

<blockquote>

When I start my AOpen XC Cube EX761 from off state, the 3ware card does not post. CNTL-ALT-DEL to reboot and it is recognized. My 2 SATA drives are running ubuntu feisty fawn but the reboot issue is killing me. I'm verifying the unit now - maybe that has something to do with it?</blockquote>

Found my own answer:

<a href="http://www.3ware.com/KB/Article.aspx?id=14932">3Ware card cold boot problem</a> - This is crappy. Can't imagine 3Ware would let this happen. I just updated the firmware to the latest release, but it didn't make a difference. Oh well, so I'm leaving it as is. Hopefully they'll release a firmware update at some point to fix the issue. In the meantime, the machine is designed to run all the time, and I have a UPS for it. <b>ext3 issues with 3Ware</b>

I was disappointed to read in the errata while I was upgrading the firmware that in the latest release, ext3 performance is degraded. I've been meaning to find an excuse to try xfs, which is what they suggest as an alternative. <b>Need to setup a PXE boot server</b>

While I was working on this machine, I realized I really need to setup a PXE boot server to make installs and machine builds easier. <b>Related links</b>

<a href="http://angelfall.s39.xrea.com/area2ch/turion-e.html">List of Turion 64 compatible motherboards</a>

<a href="http://www.mobydisk.com/techres/htpc/index.html">HTPC</a> Home Theatre PC

<a href="http://www.silentpcreview.com/article300-page6.html">AMD Turion on the Desktop</a>

<a href="http://www.oreillynet.com/etel/blog/2006/04/changing_turion64_clock_speeds_1.html">Changing Turion64 clock speeds on the MSI RS482M-IL motherboard in my Asterisk system</a>

<a href="http://www.techpowerup.com/cpudb/137/AMD_Turion_64_MT-37.html">MT-37 Specs</a>

¥

