---
title: Koutech PCI Express Giga LAN PEN120
date: 2007-07-05
tags: iperf,networking,ubuntu
---
#### <strong>Using the sky2 kernel driver with the Koutech PCI-Express Giga LAN PEN120</strong>

This card works in linux, but does have some issues. I just found this thread about the <a href="https://bugs.launchpad.net/linux/+bug/83009">sky2 driver at launchpad</a>, and chimed in with my own experience:

<blockquote>I am experiencing similar problems. I downloaded Marvell's sk98lin driver, compiled and installed without problems besides those already mentioned (headers symbolic link and #!/bin/bash).

Perhaps related is my inability to resume from S3 via wake on lan using other ethernet card - nvidia gige on mainboard. WOL works from S5 with said card, and resume from keyboard works from S3, with no LAN connectivity. When using sky2 driver, resume from S3 from keyboard would result in no interfaces being detected at all, whereas with sk98lin both are detected, but unusable.

2.6.20-16-generic (root@terranova) (gcc version 4.1.2 (Ubuntu 4.1.2-0ubuntu4))

eth0: forcedeth.c: subsystem: 01019:1b51 bound to 0000:00:0a.0

Ethernet controller: Marvell Technology Group Ltd. 88E8053

eth1: Marvell Yukon 88E8053 Gigabit Ethernet Controller

Seems to be working well when I pump lots of iperf through it:
<pre class="sh_sh">inet6 addr: fe80::200:5aff:fe00:305/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
          RX packets:2592311 errors:0 dropped:0 overruns:0 frame:0
          TX packets:5390320 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:181493629 (173.0 MiB) TX bytes:3873149222 (3.6 GiB)
          Interrupt:20 Memory:fdbfc000-0
</pre></blockquote>

