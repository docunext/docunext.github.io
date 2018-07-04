---
title: Varnish Apache2 and NGINX
date: 2008-06-25
---
I've got them all running together, and so far its pretty cool. I'm using Varnish as the in-memory cache, Apache2 as the sophisticated application server, and NGINX as the static content server. NGINX also compresses the outgoing css, javascript and html, so that it what gets cached by Varnish.

I've only been doing this momentarily, so I haven't fully tested it out, but so far so good.

