---
title: Memory Consumption and a G5 Intel Transition Gone Bad
date: 2007-05-24
tags: none
author: Albert Lash
---
I've been noticing my iMac lagging REALLY bad when trying to sync my machines with unison. I investigated, and here's what I found:

 <pre><code>212 MacFusion    0.0%  0:00.17   4   105   152  1.96M  4.15M  5.18M   208M221 Terminal     1.0%  0:02.14   6    95   147  2.09M  12.7M  12.3M   225M204 Dock         0.0%  0:00.38   2    90   157   928K  11.1M  2.86M   186M199 TabletDriv   0.0%  0:00.20   3    87    99   972K  2.75M  2.83M   197M</code></pre>That's just a few of the processes that are eating up WAY too much memory (RAM). The tablet driver needs an update (for my Wacom tablet for when I'm feeling <a href="http://www.artisticbot.com/">artistic</a>).

<a href="http://www.wacom.com/productsupport/download.cfm?id=174&amp;product=XD" rel="nofollow">http://www.wacom.com/productsupport/download.cfm?id=174&amp;product=XD</a>

Downloaded and installed, but now I have two processes eating serious memory:

<pre><code>  296 TabletDriv   0.0%  0:00.03   1    55    91   536K  2.87M  6.29M   194M   295 WacomTable   0.0%  0:00.12   2    95   107   956K  7.42M  8.57M   197M</code></pre>Maybe a restart will help. I found the ATI Monitor, it was being started in the User Login Items. I removed it by loading up the system preferences, selecting my user, then login items, then selecting "ATI Monitor" then clicking the minus sign (-) at the bottom. Now a restart is called for. OK, no more ATI Monitor, but I noticed Universal Access using 4MB of RAM. What's that? Some goofy bellwhistle that Apple added for giggles - see this thread about <a href="http://forums.macnn.com/90/mac-os-x/336608/universal-access-app/" rel="nofollow">Universal Access App and how to turn it off</a>.

How about the "pbs" process? I searched for "pbs mac os x system process" which reveals that it is the paste board server, documented by Apple. I'll keep the pbs process going. Looks like ATSServer is legit too. Now what about DiskImages UI Agent? Or loginagent? I quit DiskImages UI Agent and everything seems OK. I think that is the process that runs to pay attention to when you insert a disk. I don't do that enough to merit its using 5MB of RAM. Though I do use USB flash drives from time to time. Just tested it, and it works fine without DiskImages UI Agent running. I think I need the diskimages-helper process running though. This looks a lot better, let's see how well unison runs now:


Unison is still running poorly compared to my Macbook. Now I'm running a memory test with <a href="http://www.kelleycomputing.net:16080/rember/"  rel="nofollow">rember</a>.
