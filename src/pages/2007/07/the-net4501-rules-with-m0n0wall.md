---
title: The net4501 Rules with m0n0wall 
comments:
  - author: Ivan
    email: ivan@bloodymayhem.com
    date: 01/03/2011 06:31:14 PM
    text: >
      Great article, Thanks! I just bought one and cant wait to get started using it.
  - author: Albert
    date: 01/08/2011 09:59:51 AM
    text: >
      Thanks Ivan, good luck with it!
date: 2007-07-08
tags: m0n0wall,net4501,soekris
---

If all you need is a simple bridge for bandwidth management, the net4501 is a good choice. While I had some problems with the <a href="http://www.docunext.com/2007/06/soekris-net4501-m0n0wall-error/">net4501 webgui being very slow,</a> an <a href="http://www.docunext.com/2007/06/soekris-net4501-bios-update.html">update to Soekris bios 1.31b - b4501_131b.bin</a> solved the problem, and now it works great. This network appliance is relatively inexpensive, running approximately $175, depending on configurations and quantities.

The nice thing about this machine is that is is pretty much ready to go. You can easily purchase a case and power supply for it, and it includes a compact flash slot for booting an operating system. With the board limited to 64MB of ram, your choices for operating systems are limited, but fortunately there is <a href="http://m0n0.ch/wall/" rel="nofollow">m0n0wall - the rock-solid freeBSD-based firewall system with the power to server</a>.

If you are interested in wireless, the net4501 includes a mini-pci slot as well as a regular pci slot for expansion, however, since m0n0wall runs on an older version of freeBSD, your wireless card options are a little bit limited. For a wider range of hardware, you can try out the newer beta of m0n0wall, which runs on freeBSD 6.2.

In the picture at the top, you'll see a 256MB compact flash card. To run m0n0wall, that is way more than you'll need! Its pretty incredible, but I just replaced that 256MB compact flash card with an old 8MB card that came from a Canon digital camera I bought years ago. Just goes to show that old technology isn't necessarily bad technology.

You might be thinking - why spend $175 on such a slow, limited computer? That's a good question, and there is a good lesson here: performance is not always the most important factor. There are other factors such as reliability, stability, size, and power consumption (even noise emissions!). If you've ever had a computer running in your bedroom for 24 hours a day 365 days a year, you're no doubt aware of how hot it can get, and how noisy it can be. If you have the Soekris net4501 chugging away, you'll never notice. It is silent, only slightly warm, and only consumes about 5 watts of power - a little more than a night light. Furthermore, for networking applications, the network chipsets are important just like the central processing unit. The Soekris comes with 3 interfaces, when combined with a wireless interface is plenty. If you need more, you can always upgrade to the net4801 or higher, but in my humble opinion, those computers are too expensive for their applications. At that price point, I would rather get a mini-itx system which can handle at least a gigabyte of RAM and support much more powerful (and not necessarily more power consumption). However, that's just me. I'm sure there are companies out there that need to support way more vpns and bandwidth traffic than I do where a net4801 or net5501 would be perfect, and a bargain.

¥

