---
title: Network Interface Cards
date: 2007-03-01
tags: none
author: Albert Lash
---
I'm doing some research on network interface cards, looking at Intel cards to start:

PWLA8490MT - good for Windows servers (offloads tcp processing from cpu) ~ $100+

PWLA8391GT - basic desktop card ~ $30

PILA8470C3 - good for vpn (encryption offloading - windows only?) ~ $60

EXPI9400PT - PCI express, can do some load balancing for busy dual cpu servers ~ $50

Even though its called the desktop adapter, I think it will be good for my servers. Actually, doing a little more research, I am recalling some issues I had with the e1000 driver a little over a year ago. I did some research and found that there were some definite issues with the intel driver. Hopefully they've since been fixed, but its important to note.

http://www.digit-life.com/articles2/gigeth32bit/gig-eth-32bit-2.html

Intel has a great reputation for their cards though, and the issue I had was actually related more to the switch than the intel card. Other than Intel, I've had good luck with Broadcom chips, which are prevalent in SMC products.

If I were to choose a card today, it would be the <a href="http://www.intel.com/network/connectivity/products/pro1000mt_dual_server_adapter.htm">PWLA8492MT</a>.

http://www.digit-life.com/articles2/gigeth32bit/index.html

Other alternatives are to not use a gigabit card, but a fast ethernet (100mbit) card. There are plenty of these that will provide very good performance within linux:

http://www.hpc.sfu.ca/bugaboo/nic-test.html

This shows what a great nic card 3com made. I say "made" because they discontinued the 3c900 series. :-(

http://www.icewalkers.com/Linux/Howto/Ethernet-HOWTO-4.html

I think I will get one Intel dual port card for a server, and some 3com 10/100 cards.

http://www.newegg.com/Product/Product.asp?Item=N82E16833114004 - check this out:

<blockquote>

Reviewed By: softweyr on 2/27/2007 Reviewed By: softweyr on 2/27/2007 Rating + 3Rating + 3Rating + 3

Tech Level Tech Level: high - Ownership: less than 1 day

Pros: Cheap

Cons: Cheap

Other Thoughts: Tait - the limited throughput you saw was not caused by the CPUs, your system and this card are limited by the bandwidth of the PCI bus. The speed you got is actually quite good for PCI; if you need faster than that you will have to upgrade to PCI-X or PCI-Express.</blockquote>

<a href="http://www-gatago.com/linux/kernel/6120374.html">Help: DGE-560T not recognized by Linux</a>

This would be the right one to get:

<strong><a href="http://www.intel.com/network/connectivity/products/pro1000pt_dualport_server_adapter.htm">EXPI9402PT</a></strong> - two ports, pci-express 4x, 82571eb chipset.

http://www.intel.com/design/network/products/lan/controllers/82546.htm

http://www.intel.com/design/network/products/lan/controllers/82571eb.htm

http://www.intel.com/design/network/products/ethernet/linecard_ec.htm - very useful chart showing power consumption!

Since I'm on a serious budget, I will forego the right card, and instead choose the affordable card: the <a href="http://www.intel.com/network/connectivity/products/pro1000gt_desktop_adapter.htm">GT</a> has the power optimized <a href="http://www.intel.com/design/network/products/lan/controllers/82541pi.htm">82541</a> chipset, which only consumes 1 watt, and can decrease to 100mw or 50mw (see following details).

<pre>1.0W at D0 1000Mbps

300mW at D3 100Mbps

50mW at D3 wakeup disabled</pre>

<a href="http://arstechnica.com/articles/paedia/hardware/pcie.ars/1">http://arstechnica.com/articles/paedia/hardware/pcie.ars/1</a>

