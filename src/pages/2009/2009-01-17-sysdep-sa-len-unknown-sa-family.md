---
title: sysdep sa len unknown sa family
comments:
  - author: Richard
    email: richardgreen1965@gmail.com
    date: 02/02/2010 12:57:07 AM
    text: >
      Same here... a year later... did you ever resolve the issue? Hard to believe amd64 version of isakmpd (debian lenny) is so un-used the problem is not more widely commented upon.<br/><br/><a href="http://ftp.de.debian.org/debian/pool/main/i/isakmpd/isakmpd_20041012-5_amd64.deb" rel="nofollow">http://ftp.de.debian.org/debian/pool/main/i/isakmpd/isakmpd_20041012-5_amd64.deb</a> is the version in lenny, i tried isakmpd_20041012-6_amd64.deb from squeeze, got different issues re. INVALID_PAYLOAD using same config has had been working on an i386 system (which I was replacing with amd64 system).
  - author: Albert
    email: albert.lash@savonix.com
    date: 02/02/2010 12:57:23 PM
    text: >
      Hi Richard, I wasn't ever able to figure this one out. Are you using it on Xen? I was, and figured that was why it wasn't a common problem.
date: 2009-01-17
tags: ipsec,xen
---
I'm trying out isakmpd on a xen box at slicehost, its amd64, and I'm getting this error:

<pre>sysdep_sa_len: unknown sa family</pre>

Not sure what's up. Found <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=412893">this</a>.

¥

