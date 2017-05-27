---
title: CIDR Notes
date: 2007-06-03
tags: cidr,ip,networking
---
If you have a CIDR subnet assigned to you from an ISP or a colocation provider, here's how you can understand it better, or at least how I do.

A CIDR block of IPs is contiguous (meaning in a consecutive row, like 1,2,3,etc). If you are assigned 5 addresses, then only 3 are usable, as you'll need the first as the network identifier and the last one as the network broadcast.

However, your ISP might not explain to you that if they give you 13 IP addresses, they probably have allocated 15 for you, and are already using the first and the last for the identifier and broadcast address. At least that's what I believe my situation to be.

