---
title: Open Source Drivers for Computer Hardware
date: 2007-07-26
tags: hardware,"open source"
---
These two chipsets are important to consider when you are looking to <a href="http://www.my-tech-deals.com/blog/motherboards/">buy a motherboard</a>, especially when you are looking to build a free and open source based machine (for example FreeBSD or linux).

The north bridge is what connects the cpu to the RAM, and potentially the AGP graphics card.

The south bridge is what connects the cpu to the PCI bus and your peripherals, including your network and your disk I/O controller (PATA, SATA, SCSI, or SAS).

#### Network Interface Card (NIC) Driver Support

If you plan on doing as much networking as I do, then both bridges are very important, and the south bridge to the network can be a challenge to get working properly. First off, there are two pieces here, the southbridge chipset and the actual network interface chipset, both of which need to be considered. Here's an incomplete list of chipset manufacturers:

<strong>SouthBridge Chipset Manufacturers</strong>

<ul><li>Intel</li><li>VIA</li><li>NVidia</li></ul>

<strong>Networking Chipset Manufacturers</strong>

<ul><li>Intel</li><li>VIA</li><li>NVidia</li><li>Realtek</li><li>3Com</li><li>Davicom</li></ul>

As I said earlier, this is an incomplete list of southbridge and network chipset manufacturers - there's a lot out there to choose from!

#### Software RAID versus Hardware RAID

For disk IO, I mostly use software based RAID setups, which leverage the CPU's processing power, so you won't find me grappling with the south bridge chipset trying to get hardware RAID working. Most of the time, southbridge chipsets are what are known as "fakeraid", meaning they end up using software configurations anyway, and leverage the CPU to do the heavy lifting. You can also use a hardware based RAID solution, which if its a "real hardware raid", will work great too.

#### Open Source Drivers Released by the Manufacturer

Ubuntu has been doing a great job raising awareness about the "openness" of video cards, but what about network chipsets? First and foremost, here's a big thank you to Donald Becker who wrote and released a lot of open source network drivers! Second, kudos to Intel for recognizing the marketplace and opening their drivers. Here's a list of manufacturers who have contributed code to open source networking device driver projects:

<ul><li>Intel</li><li>NVidia forcedeth - took them long enough!</li></ul>

Related Links:

<a href="http://linuxmafia.com/faq/Hardware/sata.html">http://linuxmafia.com/faq/Hardware/sata.html</a>

<a href="http://www.hailfinger.org/carldani/linux/patches/forcedeth/">http://www.hailfinger.org/carldani/linux/patches/forcedeth/</a> - author of the Nvidia forcedeth driver, to which Nvidia contributed to years afterwards for gigabit support

<a href="http://www.freebsd.org/releases/6.2R/hardware-i386.html#ETHERNET">http://www.freebsd.org/releases/6.2R/hardware-i386.html#ETHERNET</a>

<a href="http://www.dailywireless.org/2006/12/28/open-source-wifi-drivers/">http://www.dailywireless.org/2006/12/28/open-source-wifi-drivers/</a> - good list of open source wifi drivers, as well as those manufacturers who won't allow freebsd to distribute firmware for :-( I was surprised to see Intel in the offenders list, but its interesting to see these companies going the open route: Amtel, Zylink, and Zydas.

<a href="http://www.thejemreport.com/mambo/content/view/293/">http://www.thejemreport.com/mambo/content/view/293/</a>

<a href="http://sound-on-sound2.infopop.net/2/OpenTopic?a=tpc&amp;s=215094572&amp;f=153102642&amp;m=180102092">List of Open Source compatible motherboard, including manufacturers who offer at least drivers for linux</a>

<a href="http://www.phoronix.com/scan.php?page=article&amp;item=753&amp;num=1">Open Source ATI Driver</a>

<a href="http://linux.slashdot.org/article.pl?sid=07/05/13/1659245">AMD Promises open source graphics drivers?</a>

<a href="http://www.crynwr.com/on-being-proprietary.html">Why manufacturers should provide their device drivers with open source.</a>

<a href="http://en.wikipedia.org/wiki/Donald_Becker">The man, the myth: Donald Becker</a>

<a href="http://en.wikipedia.org/wiki/Graphics_hardware_and_FOSS">More than you wanted to know about open source graphics drivers</a>

