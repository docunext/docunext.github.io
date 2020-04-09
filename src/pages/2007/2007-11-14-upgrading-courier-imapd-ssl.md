---
title: Upgrading Courier Imapd ssl
comments:
  - author: Jiri Barton
    email: jbar@hosting4u.cz
    date: 02/06/2008 06:02:27 PM
    text: >
      This helped indeed. I upgraded some old machines yesterday and that is what happened. I see your page is kind of old but the advice is still valid - for me. Problem solved!
  - author: Albert
    email: albert.lash@savonix.com
    date: 02/06/2008 06:21:54 PM
    text: >
      Thanks for commenting! I'm glad it helped. :-)
date: 2007-11-14
tags: courier,errors,ssl,upgrades
---
<span style="display: inline;">

Just updated courier-imapd-ssl on debian and got this error in the logs and was unable to connect:

<pre class="sh_sh">
connect: error:1408F10B:SSL routines:SSL3_GET_RECORD:wrong version number
</pre>

For some reason, my existing /etc/courier/imap-ssl file had:

<pre class="sh_sh">
TLS_PROTOCOL=SSL3
</pre>

I changed it to:

<pre class="sh_sh">
TLS_PROTOCOL=SSL23
</pre>

And everything worked fine again. Hope that helps!

<a href="http://www.savonix.com/wiki/Courier">Courier page in the Docuwiki</a>

UPDATE: Hit another snag on another update:

<a href="http://www.docunext.com/blog/2008/04/lenny-courier-woes.html">Lenny Courier Woes</a>

¥

