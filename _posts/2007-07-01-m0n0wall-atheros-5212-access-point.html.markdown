---
title: M0n0wall Atheros 5212 Access Point
date: 2007-07-01
tags: atheros,everex,m0n0wall,wireless
---
I <strong>*finally*</strong> got m0n0wall to work as a wireless access point. :-) And to boot, I used a mini-pci card pilfered from one of the many Everex StepNote notebooks I have. Like the title says, its an Atheros card, and to use this with m0n0wall I had to update to the beta version: 1.3b. It uses a more recent version of freeBSD and includes more drivers.

To use the wireless card, I first had to add the interface via the "assign" page, then activate it, and then it worked. It only supports WEP right now, but I'm OK with that. Most of my important transmissions are encrypted between my computer and the other server.

Because I already had a LAN setup, I'm set the new interface to bridge with the LAN interface, and then turned on filtered bridge on the advanced page.

