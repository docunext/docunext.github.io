---
title: Apache Reverse Proxy
date: 2007-09-04
---
I finally setup my first reverse proxy with Apache 2.2 and mod_rewrite. Some might say that Apache is bloated, but I'm really pleased with it.

I followed the mod_rewrite URL rewriting guide, which explains that you'll need mod_proxy and http_proxy enabled. To activate the proxy capability for a RewriteRule, all you need to do is add [P] at the end. Its actually very easy.

The danger is having an open proxy, but you can disable this by specifying ProxyRequests off in your apache configuration. That way, only requests you specify will be handled by mod_proxy. You can specify them using proxypass, or a rewriterule.

I'm looking forward to working with mod_proxy a lot in the future. I plan to use it as a layer 7 load balancer. :-)

