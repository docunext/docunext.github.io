---
title: Spaghetti Proxies and Edge Side Includes
date: 2009-09-22
tags: nginx,varnish
---
As I've embraced the use of proxies to aid in content distribution, I've created a little bit of a "rat's nest", meaning that there is room for improvement in the way my proxy servers are setup.

The current setup actually works great, but I am always striving for better organization.

My goals for organization are on hold for the moment while I figure out my plan for edge-side-includes ("ESI"). Edge side includes are similar to server-side-includes, but they support caching of documents at content delivery nodes. Varnish supports this - I tested it out and it works great.

The one "gotcha" about ESI is that the content arriving at the proxy must not be encrypted or compressed. This had previously dissuaded me from considering the use of ESI, as I had varnish on the front edge, and Varnish does not support compression of outgoing content.

NGINX, on the other hand, does, and I've recently decided to put NGINX on the front line as the final deliverer of content to clients.

My plan now is to organize by servers and proxies to offer uncompressed and compressed data on different ports. Before I start choosing which ports are for which data streams, I'm going to review my existing guidelines and document my new decisions.

[My Web Server Port Number Configurations](http://www.docunext.com/wiki/Web_Servers#Port_Numbers)

