---
title: Debian Proftpd
date: 2007-12-08
---
I'm setting up proftpd on debian, using openbsd-inetd. One glitch so far:

<pre>
Dec  8 17:07:34 little-valley-1-140 proftpd[31772]: Fatal: LoadModule: error loading module 'mod_lang.c': Permission denied on line 38 of '/etc/proftpd/modules.conf' </pre>

I commented that out, and now getting this:

<pre>
Dec 08 17:09:24 little-valley-1-140 proftpd[31821]: warning: unable to determine IP address of 'little-valley-1-140'

Dec 08 17:09:24 little-valley-1-140 proftpd[31821]: error: no valid servers configured

Dec 08 17:09:24 little-valley-1-140 proftpd[31821]: Fatal: error processing configuration file '/etc/proftpd/proftpd.conf'</pre>

In the end I ended up running proftpd in standalone mode, and its working fine.

<a href="http://www.castaglia.org/proftpd/doc/contrib/ProFTPD-mini-HOWTO-DNS.html">ProFTPd howto</a>

