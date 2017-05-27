---
title: mod extract forwarded
date: 2009-06-07
---
Lately I've increasingly been using Varnish and NGINX as reverse proxies, and if you have too, you've probably noticed that the log files at the origination of content contain the proxy server ip addresses instead that of the end-user.

Thankfully there are some existing resources I've found which have helped me work around this. I first make sure that the proxies are setting up the X-Forwarded-For header correctly, even if there are multiple proxies. Then I started using mod_extract_forwarded on the origination of content server, which in my case is an Apache 2.2 server, otherwise I wouldn't be able to use the extract forwarded module!

Its not a debian package (yet), but it was easy enough for me to configure. I've written my notes down at the Docunext Wiki, so check 'em out if you're interested:

<a href="http://www.docunext.com/wiki/Mod_extract_forwarded">mod_extract_forwarded notes at the Docunext Wiki</a>

