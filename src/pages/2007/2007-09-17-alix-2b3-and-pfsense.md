---
title: ALIX 2B3 and pfSense
comments:
  - author: lightswitch
    email: lightswitchenator@gmail.com
    date: 09/30/2007 02:55:31 AM
    text: >
      That's very interesting, i'm also planning on getting this board to do routing serve small internal sites, dns, ntp..., nothing too heavy, anyway, i'd appreciate some help. What's the instruction set? x86? How's the performance/reliability?<br/>I left my email address there,<br/><br/>thanks
  - author: admin
    email: albert.lash@savonix.com
    date: 09/30/2007 04:37:41 PM
    text: >
      Hi lightswitch, this board is awesome! The instruction set is x86, about equivalent to a 586. Very reliable, but not super speedy. For services which can be cached in memory, it will be great, but compiling takes a while. I compiled a custom kernel for it to take advantage of the ocf-linux CryptoAPI device, and it worked fine but took awhile.<br/><br/>Depending on your needs, you might want to evaluate the ALIX "C" class as well. It only has one ethernet port, but has support for VGA graphics, which makes it much easier to get up and running. It also has a PCI slot if you wanted to add more ethernet ports.
  - author: Andrej
    email: andrej@pcklinika.si
    date: 11/22/2007 03:11:28 AM
    text: >
      Great work. Can you give me some directions where can I find working image for ALIX2c0 board?<br/><br/>Regards,<br/><br/>Andrej
  - author: Albert
    email: albert.lash@savonix.com
    date: 11/22/2007 09:24:46 AM
    text: >
      Hi Andrej, I think I used the snapshot version of pfsense. I bet the newer 1.2-RC3 image will work fine. Good luck! Let us know how you make out.
date: 2007-09-17
tags: alix
---
Nice... the new ALIX boards I ordered from PC Engines arrived today! I just fired it up with a pfSense 1.2-RC2 but that didn't work so I downloaded the snapshot as suggested at the <a href="http://blog.pfsense.org/?p=139">pfSense blog</a>, which worked. The board is going great so far.

¥

