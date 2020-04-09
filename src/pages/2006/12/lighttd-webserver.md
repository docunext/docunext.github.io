---
title: lighttd webserver
date: 2006-12-27
tags: lighttpd,"web server"
---

I just installed my first lighttpd server, and it works fine. Now I'd like to set it up to compress output (gzip), and include appropriate cache headers (expires, last modified, and revalidate).

Magnificient, that was easy. Just edited the conf file:

<pre>
nano /etc/lighttpd/lighttpd.conf
</pre>

uncomment this:

<pre>
"mod_compress",
</pre>

and this:

<pre>
"mod_expire",
</pre>

these:

<pre>
compress.cache-dir          = "/var/tmp/lighttpd/cache/compress/"
compress.filetype           = ("text/plain", "text/html")
</pre>

then create the cache directory and give www-data ownership:

<pre>
mkdir /var/tmp/lighttpd/cache/compress/
chown -R www-data /var/tmp/lighttpd
</pre>

That rocks that the compression is cached, saves a good amount of processing power I'm sure. I actually implemented something similar for the <a href="http://www.docunext.com/2006/12/wordpress-cache-plugin.html">Wordpress cache plugin</a> I made, which uses PEAR's Cache_Lite.

