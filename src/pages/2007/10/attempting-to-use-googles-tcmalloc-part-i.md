---
title: Attempting to use Google s Thread Caching Memory Allocator tcmalloc Part I
comments:
  - author: Albert
    date: 02/11/2008 05:27:02 PM
    text: >
      I'm canceling my plans to compile PHP with links to tcmalloc. While PHP itself is threadsafe, many of its extensions are not, so there isn't much point at this point in time.
date: 2007-10-26
tags: none
author: Albert Lash
---
<a href="http://www.docunext.com/2007/10/26/attempting-to-use-googles-tcmalloc-part-i/">

I'm getting more interested in some of the more technical parts of computing, and so I decided to take a shot at compiling and using Google's tcmalloc.

I'll try <a href="http://www.csamuel.org/2006/12/15/now-using-googles-tcmalloc/">Chris Samuel's method</a>, as well as trying to compile custom apps using tcmalloc.

I just tried installing the debian package, but it depends on something I can't find...

So I compiled that, but I'm not sure how to let dpkg know its installed. In compiling the perftools, I read the INSTALL document and it recommended running make check, which I did, though first I tried make test because that's what I'm used to. The check appears quite in-depth.

The conclusion:

<pre>
PASS: profiler_unittest.sh===================

All 21 tests passed===================</pre>

The INSTALL also mentioned that the library can be used on RedHat, Ubuntu, and FreeBSD, but omitted debian, which I find strange.

Aha, so all I had to do was view all the downloads from the Google page, choose the non-dev version of the debian packages, and I was able to dpkg -i that. :-) Cool, now I don't have to hack /var/lib/dpkg!

Hmm. OK, I added:

export LD_PRELOAD=/usr/lib/libtcmalloc.so

to /etc/default/apache2, but I have no idea if Apache2 is indeed using this new lib. Good ol' debugging technique of testing for an obvious error by adding an extra character to the filename proves it is at least loading:

<pre>
ERROR: ld.so: object '/usr/lib/libtcmalloce.so' from LD_PRELOAD cannot be preloaded: ignored. * Forcing reload of web server (apache2)...

ERROR: ld.so: object '/usr/lib/libtcmalloce.so' from LD_PRELOAD cannot be preloaded: ignored.

apache2: Could not reliably determine the server's fully qualified domain name, using 127.0.1.1 for ServerName

ERROR: ld.so: object '/usr/lib/libtcmalloce.so' from LD_PRELOAD cannot be preloaded: ignored.</pre>

<a href="http://code.google.com/p/google-perftools/">http://code.google.com/p/google-perftools/</a>

UPDATE November 21, 2007: I'm now using tcmalloc on a low-traffic, semi-production server, and so far its working.

UPATE February 10, 2008: I've compiled <a href="http://www.docunext.com/2008/02/06/swiftweasel-on-the-via-c7/">Iceweasel to link with Google's tcmalloc</a>, and plan to do more, including PHP, expat, libxml2, and libxslt.

¥
