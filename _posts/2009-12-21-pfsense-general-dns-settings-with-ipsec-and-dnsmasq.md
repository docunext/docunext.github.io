---
title: pfSense General DNS Settings with IPSec and dnsmasq
date: 2009-12-21
tags: dns,dnsmasq,ipsec,pfsense
---
I just found that I had mis-configured my General DNS settings on my pfSense firewall.

I had set the first entry to a DNS Server I have setup on a server on a network which I can connect to via IPSec. I don't think that the dnsmasq running on my firewall is able to access that server, and that was causing the dnsmasq server to be non-responsive. I'm not sure why it is unable to access the server, but I guess it might have something to do with which interface it is bound to, and whether or not the firewall or the default routes will allow traffic from it over IPSec.

Anyway, on the General settings page, I removed the DNS entry for the VPN accessible server. After that, the dnsmasq server was again accessible from my lan.

Cool. Probably not a common mistake that people make, but important to note nonetheless.

