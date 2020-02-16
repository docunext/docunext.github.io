---
title: How When and Why NGINX Rocks
date: 2009-11-05
tags: nginx,"open source"
---
I'm a big fan of NGINX. I've racked up some serious notes on my experience with it on the [NGINX pages of the Docunext wiki](http://www.docunext.com/wiki/NGINX), but just recently, I was even more impressed with NGINX.

I've started using the resource limitation features of NGINX, mostly the rate limiting features but also the connection limiting features. What really struck me was that the documentation explained that the author of NGINX, Igor Sysoev, took the trouble to support hashing the remote ip in binary form, to conserve memory.

I feel this is exemplary of how and why NGINX rocks. I've heard about how NGINX can handle tens of thousands of connections kept alive and barely make an impact on memory usage, but the story didn't hit home for me until I read about the storage of the remove ip address in binary form. **That is awesome.**

It definitely puts things in perspective for me. Whereas I'd come to learn about web servers as application servers, NGINX is really an incredibly powerful application level router, with a honkin' web server built-in.

And its impressive how the feature set really supports its strengths. I started using NGINX because it has rocking proxy capabilities. Then I read up on its FastCGI handling - impressive, but I prefer Apache and mod_fcgid. Then I read up on its handling of kept alive connections - whoa, now we're on another level. Then I read up on its capabilities of limiting resources based on connection and remote ip - this is "carrier grade" software. I don't use that term loosely! :-)

Other great things about NGINX:

* It serves so well, all it needs is last-modified!
* It so efficient that is can run on minimalist machines with impressive performance.
* It has some really cool, and well thought out modules: XSLT, image filtering, precompression content negotiation, and even WebDAV.

Nice work, Igor! You've done a great job with this project. Such a good job that I feel its really going to flourish throughout its lifetime. Bravo!
