---
title: Stunnel HTTPS Proxy
date: 2008-02-09
---
I setup a new kind of proxy today. Its only meant for secure access to one host server, but the point was to enable the use of the VIA ACE "wicked-fast" encryption capabilities.

So far so good, I had some issues with the TCP stack, but all in all, I really like the idea of proxying this way.

To be more specific about how its setup, my loopback device and localhost address is the proxy, which accepts socket connections to Stunnel, which has an SSL connection setup with my webmail server. Very cool!

When investigating this, I also found this cool program:

<a href="http://tinyproxy.sourceforge.net/" rel="nofollow">http://tinyproxy.sourceforge.net/</a>

