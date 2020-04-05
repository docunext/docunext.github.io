---
title: My Experience Runing pfSense 1.2 on a Verizon FIOS Powered Network
date: 2008-03-05
tags: alix,c7,fios,pfsense,via
---
Now that pfSense 1.2 is out and I finally hav FIOS, I'm planning a new router based on either an ALIX board or  a VIA C7 board. I'm leaning towards the VIA C7, as it has padlock support as well as PATA / SATA support for a real hard drive. I recently tested out the Squid cache package for pfSense and was pleased with how it worked, so I'll probably set that up as well.

I happen to have two of the same ALIX and C7 boards, so I would like to setup CARP failover, but that is definitely unchartered territory for me. I just read <a href="http://olddoc.pfsense.org/index.php/Setting_up_CARP_with_pfSense">here</a> that you need one real IP address for each CARP member, and since I only have 1 IP address (Verizon wants $20 / 5 ips / month!), I guess that answers my question.

The only thing about the C7 board that I'm concerned about is the power and heat factor. The C7 is efficient, but not as efficient as the Geode LX. The board I have uses about 20 watts by itself, so if I added a hard drive, that would also consume power. Maybe I'll use a laptop hard drive.
