---
title: Kurobox and more embedded device thoughts
date: 2007-02-22
tags: none
author: Albert Lash
---

<h3>Kurobox</h3>

As an alternative and "midpoint" to the NSLU2 and the Thecus n2100 there is the kurobox. The kurobox is especially designed by Revolution as a box to hack, the "consumer" version is the link station.

The nice thing about the Kurobox is the price: its $150 + s/h for a 200mhz powerpc chip, plus 128mb ram, room for one pata drive, a network interface, and a couple of usb ports. Good enough. The drawback is that it is powerpc. Supposedly they have better efficiency at this level, but it could be marginal, because the XScales are pretty lean as it is. The Thecus with 2 drives and two fans operates at around 26 watts idle, up to 60 watts full bore. Not bad, imho.
<h3>Linkstation Pro</h3>

Even better than the Kurobox is the Linkstation Pro. It runs on the ARM platform at 400Mhz, comes with 128MB of RAM, and a hard drive. You can get LS-250GL which comes with the 250GB drive from Newegg.com for $175.99. It can run <a href="http://www.linkstationwiki.net/index.php?title=Category:FreeLink">Freelink</a>, a Debian distribution for the Linkstation.
<h3>NSLU2</h3>

Other alternatives are like the NSLU2: no room for an internal drive. In some instances that is a plus. For instance, on my NSLU2, I just run debian on a 2GB Flash Jump drive. It works great and only consumes 4 watts of power. What to use it for? Either a jabber server or internal, private network dns server.
<h3>PC Engines Wrap</h3>

There is also the PC Engines Wrap platform. I have one setup as a firewall running M0n0wall, and I just ordered two more. These are also very low power devices, supposedly around 4 or 5 watts with no moving parts. These are a bit pricier though: $215 unassembled. The specs are nice: AMD Geode processor, 128MB ram, 256MB flash drive, mini-pci slot, 3 nics, you get the idea. Its designed to be a router. So far, I really like m0n0wall, and can't wait for the other two m1n1walls I ordered to arrive so I can setup a VPN and not have to fiddle with my network all the time anymore. That will be awesome!
<h3>Soekris</h3>

Can't forget about Soekris! They are the first embedded device I found that I was seriously interested in picking up. The problem is that they are hard to find to buy! I think Netgate carries one but it is more expensive than the PC Engines WRAP appliance.

As I see it, there are three types of embedded network appliances I have at my disposal:

<ul><li><strong>NSLU2</strong> - cheapest option, readily available, low power, no storage  - use for isolating basic low-volume services.</li><li><strong>Kurobox</strong> - medium price range, storage, memory, and processor speed - use for medium level services - like a development machine (but does the ppc platform affect anything?).</li><li><strong>Thecus n2100</strong> - the obvious benefits here are the storage and memory capacity and processor. Should be used for file servers, though I need to investigate the throughput bottleneck.</li></ul>(All the devices mentioned above can run Debian with some effort!)

