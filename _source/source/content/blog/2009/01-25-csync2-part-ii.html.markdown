---
title: Csync2 Part II
comments:
  - author: Albert
    email: albert.lash@savonix.com
    ip: 192.168.8.12
    url:
    date: 01/27/2009 09:51:51 PM
    text: >
      I again got it to work by using my old certificates. Hmmm.
date: 2009-01-25
tags: debian
---
I tried csync2 again tonight for simpler stuff than what I would use puppet for. Seems like there is a big bug with csync2 and ssl:

<a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=501289">http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=501289</a>

I'm just not using ssl for now:

<pre class="sh_sh">nossl * *;
group serverfarm{...}</pre>

Hopefully it gets fixed soon!

I had gotten it to work last year as described here: <a href="http://www.docunext.com/blog/2008/03/csync2-on-debian.html">http://www.docunext.com/blog/2008/03/csync2-on-debian.html</a>

¥

