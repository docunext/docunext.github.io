---
title: sitecopy Error Could not connect to server svn OPTIONS of http could not connect to server http 
date: 2009-06-04
tags: subversion
---
Looks like the new version of sitecopy in Squeeze is having problems. I get this error:

<pre class="sh_sh">sitecopy: Error: Could not connect to server...</pre>
I did a quick search and someone <a href="http://groups.google.com/group/linux.debian.user/browse_thread/thread/70cd11dc96264a84" rel="nofollow">else</a> is having the same problem. Doh!

I downgraded to the one from Etch, which requires libneon26, and that works.

Hmmm, I think whatever is wrong here might be due to libneon27, as I'm not able to use svn either!

This might be the problem: <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=531338">Debian Bug report logs - #531338 :: svn: OPTIONS of 'http://...': could not connect to server (http://...)</a>

Yup, needed to update libneon27 and libneon27-gnutls from sid.

