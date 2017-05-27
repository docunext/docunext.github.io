---
title: Static NAT over IPSec with pfSense won t work for me 
date: 2008-10-23
tags: none
author: Albert Lash
---
I've been trying to setup static NAT (1:1 mapping) over IPSec, but I just can't get it to work. I'm not sure what the problem is, but I believe the issue is due in part to my limited understanding of IPSec.

I think GRE tunneling might help, but one end of the IPSec VPN is powered by pfSense, which doesn't yet have support for GRE.

UPDATE: It likely has a little more overhead, but what I'm instead using is <a href="/wiki/Rinetd" title="Docunext Wiki page on Rinetd">rinetd</a>.

