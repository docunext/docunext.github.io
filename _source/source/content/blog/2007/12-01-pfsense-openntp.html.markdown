---
title: pfSense OpenNTP
date: 2007-12-01
tags: pfsense
---
Can this work on more than one interface at a time? My tests indicate it can only run on one interface. If it can indeed only run on one interface, it should get a single select form element instead of multi, which it has now.

Its tough to debug / diagnose, because NTP won't respond to queries until awhile after its been started. I think this is because the daemon is calculating the server drift, but I'm not sure.

In the end, I ended up just having it listen on the LAN.

