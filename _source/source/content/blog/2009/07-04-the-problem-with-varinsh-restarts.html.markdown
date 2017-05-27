---
title: The Problem with Varinsh Restarts
date: 2009-07-04
---
I've hit a snag with varnish restarts that I need to fix but keep putting off. Under certain circumstances, my varnish servers get chained together and when an error is encountered and the restarts begin, the restart limit is multiplied by the number of varnish proxies in the chain.

I'll have to setup my VCL file to not restart if there is a varnish ahead of it.

UPDATE: This problem actually wasn't caused by Varnish - I had accidentally setup my NGINX xslt server to proxy to apache and back again. It also appears that viewing a page with numerous XML errors can really mess up nginx. N.B.!

