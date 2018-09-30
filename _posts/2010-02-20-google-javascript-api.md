---
title: Google Javascript API
date: 2010-02-20
tags: api,google,jquery
---
Sketch99.com is now using the Google Javascript API for loading jQuery. I don't see any astounding advantages from using it yet, but I was curious so I decided to give it a try.

On the other hand, I'm not noticing any downsides, either.

UPDATE: I found a downside in that the jsapi resource is forced to never cache. If I load jQuery manually, it might take a little longer, but it can then cache for a much longer time. That's worthwhile to me.

Here are the HTTP headers for jsapi:

<pre class="sh_desktop">
HTTP/1.x 200 OK
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Pragma: no-cache
Expires: Fri, 01 Jan 1990 00:00:00 GMT
Date: Mon, 22 Feb 2010 03:05:52 GMT
Content-Type: text/javascript; charset=utf-8
Content-Encoding: gzip
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Length: 5391
Server: GSE
X-XSS-Protection: 0
</pre>

