---
title: pfSense Hackathon
date: 2009-03-23
tags: none
author: Albert Lash
---
The pfSense hackathon is over, and I'm skimming through the change logs. Looks like most of the changes were to the 2.0 branch, which I've only tried on a virtual machine, but it looked nice.

Clog is gone, replaced by fifolog, and is it true? Ftp proxy is gone? Nice, I never liked that. Instead I use NAT for a few hundred ports in the 65000 range, and that seems to work much better. I set the same range in proftpd.conf and its good to go. Looks like they are using the prototype javascript framework ( I prefer <a href="http://www.docunext.com/">jQuery</a> ).

In other news, the pfSense folks are adding some services to the pfSense offering, and so far it looks terrific. There is now (or soon to be) the ability to save your configuration to a secure service. Nice work people!

I should also note that the <a href="http://www.docunext.com/2009/02/freebsd-glxsb/">glxsb (Geode LX Security Block) kernel module</a> continues to run well on my ALIX board. Excellent!

