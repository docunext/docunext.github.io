---
title: In My Opinion Using the Varnish Reverse Proxy with Apache2 pfSense and NGINX Is Good
date: 2008-06-18
tags: none
author: Albert Lash
---
Varnish looks like a great reverse proxy - and the next network / server I setup, I'm planning to use it. I'd like to do something like this:

<pre>
PFSENSE -- VARNISH -- APACHE2 / NGINX </pre>

That way, I can firewall and failover with pfSense, cache with Varnish (maybe even failover and/or load balance too?), serve dynamic content with Apache2, and static content with Nginx.

HA! I just realized that since I'm already using pfSense as my firewall it was a trivial task to point the load balancer to port 6081 instead of port 80, and point varnish to port 80 instead of 8080. I'm now running varnish in production! :-)

