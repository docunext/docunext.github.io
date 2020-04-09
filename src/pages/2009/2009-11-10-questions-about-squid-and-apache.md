---
title: Questions about Squid and Apache
comments:
  - author: Niko2
    email: nicolas.marot@gmail.com
    date: 03/06/2010 03:58:04 PM
    text: >
      I use squid3 for reverse proxy<br/>Options are not well documented, but it works.<br/>Varnish or nginx are better, but it works with squid (even 2.7)
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/06/2010 10:21:34 PM
    text: >
      Hi Niko2, I totally agree. In my opinion, nothing beats Varnish when it comes to the reverse proxy cache. For hybrid reverse proxy and fastcgi cache, nginx is tough to beat because it can handle connections and serve static files so well.<br/><br/>For forward proxies, Squid is nice because it has so many configuration options. But that's a double edged sword. It does almost too much in many situations!!<br/><br/>Other alternatives to Squid are tinyproxy and polipo, but they are very simple.<br/><br/>And there are plenty of reverse proxy caches too... pound (quite nice for ssl), or lighttpd.
date: 2009-11-10
tags: apache,nginx,proxies,squid,varnish
---
I recently setup a [Squid proxy to provide me with convenient access to my intranet behind a firewall while I'm travelling](http://www.vpnzen.com/blog/2009/10/vpn-versus-http-proxy.html). It works really well!

Previously I'd used squid2, and this time I used squid3. I was very pleased with how I was able to easily specify proxy / "routing" rules for different domains. I noted how Squid also has very good configuration support for access controls and dns resolvers.

All this made me wonder why Squid, which is an incredibly powerful _forward_ proxy, bothers to support reverse proxy features at all? To reverse proxy, I use NGINX, Pound, Apache, and Varnish.

On the flip side, I have to wonder why Apache supports forward proxy features? Seems to me its really a non-feature, even more of a security risk than anything else. If I recall correctly, the forward proxy features are disabled by default, which is a good thing!

¥

