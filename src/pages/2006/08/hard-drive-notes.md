---
title: Hard Drive Notes
date: 2006-08-13
tags: Apple
---
<strong>SATA Raid 5 Setup</strong>

I use Seagate drives, and I just read on FatWallet and SlickDeals that many Seagate SATA II drives come with a jumper forcing them into SATA I mode, limiting their speed to 1.5Gbit/s!

I just checked our RAID 5 setup and found out we were set to limit. Ouch. I pulled the jumper and it started up fine, so now we're running at twice the speed: 3Gbit/s. Transfers over 1000Mbit Cat5 cables to my Dual G5 Power Mac are the same speed, however I bet this is due to the write speed of the SATA drive in my Mac:

My Mac's SATA 1.0 Drive:

<a rel="nofollow" href="http://www.seagate.com/cda/products/discsales/marketing/detail/0,1081,585,00.html">Seagate</a>

My Mac Specs:

<a rel="nofollow" href="http://www.lowendmac.com/ppc/g5-b.html">Dual G5 Desktop Powermac @ Lowendmac.com</a>

Seagate page on the jumper setting:

<a rel="nofollow" href="http://www.seagate.com/support/kb/disc/faq/sata_lock.html">Seagate SATA lock</a>

Doesn't matter though, there may be multiple people accessing the server at the same time. Along these lines, I've considered adding a second ethernet cable from the server to the switch, in hopes of adding more throughput. I think I'd have to bond the cards together.
