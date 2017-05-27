---
title: High availability and load balancing
date: 2007-07-14
tags: debian,gigabyte,hardware
---
I've been thinking a lot about hardware setups. Its all about low-latency, high response time, high availability, not throughput!

<b>Firewall:</b>

<ul><li>Little Valley - on-board and PCI 10/100/1000 nic, disk-on-module</li><li>OS - m0n0wall or pfsense?
</li></ul>

#### <b>Load balancers: </b>

<ul><li>Little Valley? Fast FSB, processor, and decent sized L2 cache</li><li>Hard drive</li><li>OS - debian etch or pfsense?
</li></ul>

#### <b>NAS:</b>

<ul><li>Gigabyte mainboard with pci-e sata cards and gigE pci-e network card(s)</li><li>RAM - 4GB or more?</li><li>4 hot swap drives = RAID 5
</li></ul>

#### <b>Apache:</b>

<ul><li>gigE for connection to NAS and database</li><li>Hard drives - 2x = RAID 0</li><li>RAM - 4GB</li></ul>
<b>MySQL:</b>

<ul><li>RAM - 4GB</li><li>RAID 5
</li></ul>
<b>DNS:</b>

<ul><li>Low latency</li><li>Little valley with gigE card (limited by PCI) to switch (intel)</li><li>1GB ram</li><li>small case + power supply (iStarUSA)</li><li>Disk on module
</li></ul><b>Jabber:</b>

<ul><li>decTOP!</li><li>Asterisk  / Askozia:</li><li>PC Engines WRAP or t5125 thin client
</li></ul>
<b>General favorites:</b>

<ul><li>Low end: little valley, great price, solid product, good for firewall when paired with second nic (gbE to connect with LAN)</li><li>Medium grade: via EN12000EG - great power consumption, decent speed, decent price, well supported gigE on-board, good for load balancers.</li><li>high end:  MSI Industrial 945GM1 - good RAM capacity, supports great chips with huge caches, dual gigE, good for servers</li></ul>
Where does something like the HP t5725 fit in with 256 MB of RAM and a great processor? DNS server? Load balancer? Askozia server? It is actually cost effective because everything is included, the board, box, ram, and all.

<b>Cases:</b>

<ul><li>istar</li><li>morex</li><li>thermaltake</li></ul><b>Sources:</b>

<ul><li>http://www.techonweb.com/products/productdetail.aspx?id=D75257</li><li>Logic Supply</li><li>Mini-box.com</li><li>newegg</li></ul>
Since originally drafting this post, I've been working with pfSense, which includes a load balancer. I've found it to be much faster and responsive than ultramonkey, and although I'm sure that has something to do with how I configured ultramonkey and the hardware I ran it on, I also found pfSense to be much easier to configure. Since pfSense can also provide high-availability through CARP, I'm going to switch to using it instead of ultramonkey for webserver load balancing.

