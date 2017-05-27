---
title: pfSense IPSec with Mac OS X Clients
date: 2007-12-24
---
I just got IPSec running from an OS X client to a FreeBSD pfSense server. It won't go natively because the Mac OS X client uses L2TP, but that isn't supported by pfSense at this time.

IP Securitas can use plain IPSec and has enough control over the connections to set what you need to for it to work. I used the m0n0wall directions for roaming clients which are basically the same as those for a tunnel, but you must use aggressive instead of main.

