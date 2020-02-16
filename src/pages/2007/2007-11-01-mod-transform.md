---
title: mod transform
date: 2007-11-01
tags: apache,xml,xsl
---
<a href="http://www.docunext.com/blog/2007/11/mod-transform.html">

Yes! <a href="http://www.outoforder.cc/projects/apache/mod_transform/docs/">mod_transform</a> works great. :-)

It is super simple and works as you'd expect. There are a couple of interesting features - XSL caching, the ability to turn on / off the module announcement (compare that to mod_xslt!), and the ability to map any includes to the webserver documentroot. Oh how that has bugged the heck out of me in my work with <a href="http://www.nexista.org/">nexista</a>! It uses the same xslt library as php, but as <a href="http://www.docunext.com/blog/2007/10/apache2-xslt.html#comment-4044">niq points out, without the overhead</a>.

Question though, what's the mod_transform license?

UPDATE November 3, 2007: I am having problems with mod_transform and http caching. If neither the xml nor the xsl document has been modified since the last request, Apache sends a 304 response, but for some reason, the browser gets a 200 response, and fails. Not sure what the problem is though. I just set the Apache header to no-store, and no-cache, and its working now, so I guess you just can't use modification times. I remember reading something about that for server side includes. If you are going to have static-enough data, you might as well render it to html, or use a proxy cache of sorts.
