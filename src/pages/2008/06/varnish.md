---
title: Varnish
date: 2008-06-17
tags: caching,proxies,varnish
---
I installed Varnish on my bart "Lenny" testing machine, its a reverse proxy, which as I understand it means it acts a lot like a regular web server, but instead of getting content off a file system, it redirects requests to other web servers, and caches the content.

#### <b>About Varnish</b>
The creators of Varnish put a lot of thought into this program, and I imagine that they've come up with a nice result. I'm interested in trying out the new ESI language (edge-side includes, similar to server-side includes, SSI), as well as the VCL (varnish configuration language). VCL looks like perl, but it is transformed into C and compiled into machine code. Cool!

#### <b>Configuring Varnish</b>
Trying out Varnish is easy. I edited /etc/default/varnish to route requests to bart:80, then loaded up bart:6081/. Bingo, same content served as from port 80. So what's the big deal? VCL can implement regexp url rewriting. :-)


#### <b>Other Reverse Proxies</b>

* Nginx
* Lighttpd
* Apache w/ mod_proxy
* Squid
* Pound
* Perlbal

#### <b>References and External Links</b>

* <a href="http://www.docunext.com/">http://www.docunext.com/wiki/Varnish</a>
* <a href="http://en.wikipedia.org/wiki/Varnish_cache">http://en.wikipedia.org/wiki/Varnish_cache</a>
* <a href="http://www.w3.org/TR/esi-lang">http://www.w3.org/TR/esi-lang</a>
* <a href="http://varnish.projects.linpro.no/">http://varnish.projects.linpro.no/</a>

