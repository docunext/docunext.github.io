---
title: Build Your Own Content Distribution Network
date: 2009-07-02
tags: none
author: Albert Lash
---
Thanks to the advent of virtualization, more specifically Xen and OpenVZ, it is now possible for hosting companies to offer root access virtual servers at a low price.

While this is nice, its really excellent with the addition of a simple program: the Varnish caching <a href="http://www.proxy-sys.com/">proxy</a> server. I've had more positive results with Xen and Varnish.

The combination of these two technologies is what I call a "poor man's content distribution system", not unlike the services offers by Amazon and their Cloudfront service, as well as Akamai and Limelight Networks. Those services are obviously more sophisticated and high performance, but for the price, I'm sticking with the Varnish + Xen combo.

