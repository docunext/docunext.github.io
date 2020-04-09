---
title: The Latency Impact of HTTP Proxies
date: 2009-04-14
tags: nginx,proxies,varnish
---
As a follow-up to my last post, I just happened to be doing a little testing on the following proxies:

<ul><li>NGINX</li><li>Varnish</li></ul>

I'm pleased to say that having both of these proxies serve in front of Apache did not cause a serious impact in latency for my purposes. Why do I have a setup like this? I use Apache for complicated stuff. NGINX for handling connections, "routing", static files, and compression. Varnish for connections, routing, and caching.

I'll post more details as I collect them.

