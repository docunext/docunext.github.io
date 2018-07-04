---
title: Up Front Varnish or NGINX 
date: 2009-08-22
tags: nginx,varnish
---
After trying out <a href="http://www.docunext.com/blog/2009/08/heroku.html">Heroku</a>, I was impressed, and read up on their architecture. Lots of good decisions were made, though I was a little surprised that they put NGINX facing the internet, in front of Varnish.

After thinking about this at length, I agree with their decision. I had previously put NGINX behind Varnish so that compressed versions of each page could be stored. By putting NGINX in front of Varnish, NGINX can serve local static files more quickly than files which have to be fetched and cached. It also frees up Varnish to do ESI, because that cannot be performed on compressed data.

I'm glad I tried out Heroku and did some thinking about this. Along the same lines, I've been thinking seriously about how awesome static files are, especially when combined with AJAX.

