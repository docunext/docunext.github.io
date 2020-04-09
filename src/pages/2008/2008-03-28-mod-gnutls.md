---
title: mod gnutls
comments:
  - author: Remy
    email: remy@boltblue.com
    date: 05/11/2008 02:25:33 PM
    text: >
      Hi Albert,<br/><br/>Thanks for sharing the info. I'm curious to know how the mod_gnutls is doing in a poduction environment. Have your users reported any untoward behavour? and have you had any downtime?<br/>Would really appreciate your experiences.<br/><br/>Thanks again.
  - author: Albert
    email: albert.lash@savonix.com
    date: 05/12/2008 06:35:16 PM
    text: >
      Hi Remy, I'm only using it in a staging environment at the moment, but the version I'm using (.5 I think) is going great. There are still lots of warnings in the Apache logs, but I don't notice any performance or stability issues.<br/><br/>Now that I think about it, the log errors could be due to Nagios checking it but not fully completing the handshake... something similar happens with postfix tls.<br/><br/>I probably won't use it in production until lenny is released.
  - author: vjt
    email: vjt@openssl.it
    url: http://sindro.me/
    date: 06/11/2009 08:00:43 AM
    text: >
      Take care, the following outstanding issue is a big headache for me: <a href="http://issues.outoforder.cc/view.php?id=95" rel="nofollow">http://issues.outoforder.cc/view.php?id=95</a><br/><br/>The new firefoxes based on xulrunner 1.9 cannot send more than 3kb of POST data while using mod_gnutls :(.
date: 2008-03-28
tags: firefox,tls
---
I'm trying out mod_gnutls and I really like what I see. I installed it on a debian lenny machine without any problems - I'm even using my own self-signed certificate. :-)

What I'm really excited about is its support for SNI:

<a rel="nofollow" href="http://www.outoforder.cc/projects/apache/mod_gnutls/sni/">http://www.outoforder.cc/projects/apache/mod_gnutls/sni/</a>

Yay! I just tried it out and it works! At least with Firefox 3, haven't tried anything else out yet....

So mod_gnutls is in testing, but its an older version. There is another much newer version in sid, but I'm not going there yet. It looks like its actively managed so I won't stress it.

I'm probably not expressing the significance of this tool - its huge! The ability to serve SSL virtual hosts on a single IP addess is phenomenal.

Problems:

<pre class="sh_sh">[Fri Mar 28 20:28:05 2008] [error] GnuTLS: Hanshake Alert (20) 'Bad record MAC'.
[Fri Mar 28 20:28:05 2008] [error] [client 192.168.1.174] GnuTLS: Handshake Failed (-12) 'A TLS fatal alert has been received.'</pre>

<pre class="sh_sh">[Fri Mar 28 19:40:32 2008] [error] GnuTLS: Hanshake Alert (10) 'Unexpected message'.
[Fri Mar 28 19:40:32 2008] [error] [client 192.168.1.174] GnuTLS: Handshake Failed (-12) 'A TLS fatal alert has been received.'
[Fri Mar 28 19:49:09 2008] [notice] child pid 1711 exit signal Segmentation fault (11)</pre>

I finagled 0.5.1 onto my server from sid and its working great! Its setup with some lighter weight encryption and is working really well now. No errors so far... well I am getting these errors in the logs:

<pre class="sh_sh">[Sun Mar 30 00:40:17 2008] [error] [client 192.168.8.1] GnuTLS: Handshake Failed. Hit Maximum Attempts
[Sun Mar 30 00:40:22 2008] [error] [client 192.168.8.1] GnuTLS: Handshake Failed. Hit Maximum Attempts
[Sun Mar 30 00:40:27 2008] [error] [client 192.168.8.1] GnuTLS: Handshake Failed. Hit Maximum Attempts</pre>

but they don't seem to affect the browser.

¥

