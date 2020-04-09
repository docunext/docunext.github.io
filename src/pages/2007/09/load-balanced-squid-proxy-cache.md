---
title: Load Balanced Squid Proxy Cache
date: 2007-09-08
tags: none
author: Albert Lash
---
Squid isn't just a proxy server, its also a cache server. That means that while squid can do handle http or ftp requests for clients <em>transparently</em>, it can also save the response for other clients.

This is great - it can seriously speed up network access, but what if the squid server crashes or becomes overloaded? To prevent a total outage, you can setup several squid servers and load balance between them. That's what I did using <a href="http://www.docunext.com/2007/09/06/pfsense-local-load-balancer/">pfsense as a local network load balancer</a>. So far its working really well, and I can take down one of the machines without any consequence. Its pretty neat actually, the pfsense bridge pings each server occasionally to test whether it is alive or not.
