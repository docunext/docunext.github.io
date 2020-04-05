---
title: Embedded Linux Networking Devices
date: 2007-06-08
tags: alix,asterisk,energy,m0n0wall,power,wrap
---
The best use of embedded linux (and bsd!), in my opinion, is for networking devices like firewalls and VPN endpoints. Examples include Astlinux and m0n0wall. I'm using both of those on the WRAP platform, which unfortunately had its end-of-life (EOL) announced recently due to the Geode chips no longer getting manufactured. It will be replaced with a new platform from PC Engines though.

I also just ordered a couple of Soekris net4501 setups. These are actually perfect for m0n0wall, they are relatively low cost (around $200 for a complete device) and low power - very minimalist in fact. Only a 133mhz processor and 64mb of ram. However, that's all that is needed for m0n0wall - really! I'm hoping it consumes less power and emits less heat than the WRAP boards.

I'm glad I'm running Astlinux on the WRAP though as it has a little more juice to it, but not as much as the net4801, but that costs more. The WRAP consumes about 5 watts, but does get a little toasty. For my telephony needs its doing quite well. I'd like to add support for voicemail at some point through the use of nfs though. (You can read more about my <a href="http://www.soggyblogger.com/">asterisk and voip telephony adventures at TelecomRebirth.com</a>).

Another embedded networking device is ACrosser. I just emailed them this morning with an inquiry to their products. It appears they are looking for distributors or OEMs.
