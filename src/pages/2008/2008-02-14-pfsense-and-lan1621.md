---
title: pfSense and lan1621
comments:
  - author: Chris Buechler
    email: cbuechler@gmail.com
    url: http://chrisbuechler.com
    date: 02/15/2008 07:55:51 PM
    text: >
      Embedded upgrades work from the console, disabled in the web interface because that way caused problems.<br/><br/>One caveat - there is a known issue that causes multiple binaries to crash right before the system reboots. This isn't an issue on most hardware, it reboots fine regardless. But some hardware hangs during these crashes and never reboots without power cycling. It'll work fine after power cycling.<br/><br/>This will be the case for the lifetime of 1.2. 1.3 will completely change the way the embedded images are built, going back to the same style m0n0wall uses since that should fix all the upgrade issues we've fought forever.
  - author: Albert
    email: albert.lash@savonix.com
    date: 02/15/2008 11:54:14 PM
    text: >
      Hi Chris! Thanks for the information. I'll try the console upgrade...
date: 2008-02-14
tags: firewalls,pfsense
---
I'm trying to get pfSense to work with a soekris lan1621 card which has two sis interfaces. Everything seems fine, but I get incoming errors, no traffic.

Very strange. I am able to get it to work without DHCP on the embedded version of pfSense, but not the full version. Very, very strange.

I'm planning to do more testing tomorrow, so I'll have more details then.

While I'm working on pfSense, I looked into upgrading the 1.2-RC3 I have running on a WRAP at my house. Unfortunately, it appears that pfSense upgrades don't work on the embedded version. Bummer! When researching this, I read on the pfSense blog that 90% of their downloads are for the full version. I'm surprised by this, I would have thought that more people would want the embedded version.

I just posted my experience about this to the pfsense forums:

<blockquote>FYI - When running pfSense full on a PC Chips V21G mainboard (VIA C7, similar to pc2500e) with a Soekris lan1621 card (Natsemi sis driver with 2 ports), the card and ports are recognized, but non-operable.

I am able to assign addresses to sis0 and sis1, but only attain errors on tx. I switched out the card for an intel and it works fine. The same behavior is seen on both the LAN and WAN side.

The onboard nic, a via rhine, works flawlessly.

Also, the lan1621 ports are operable on the embedded version, but do not work with DHCP, as either a client or host.

Seeing how obscure this scenario is, I'm not looking for an answer, but I figured I'd share my experience with the community. I'm going to try out the card on an intel little valley and see how that works. I believe that has an sis port on board.

Nice work on RC5, I'm trying it out now with the intel card! :-)</blockquote>

¥

