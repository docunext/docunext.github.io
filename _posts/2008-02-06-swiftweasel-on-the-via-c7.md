---
title: Swiftweasel on the Via C7
comments:
  - author: saulo
    email: aldighieri@gmail.com
    ip: 201.82.134.151
    url:
    date: 06/09/2008 11:22:36 PM
    text: >
      could you please explain these values:<br/><br/>dpkg-buildpackage -b -uc -ai386 -ti686-linux-gnu<br/><br/>why -ai386 and then -ti686-linux-gnu? there is any parameter to compile C7 insted i686?
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 06/10/2008 10:47:23 AM
    text: >
      Hi Saulo, there are no c7-specific gcc optimizations that I know of, but the c7 should be able to take advantage of the same optimizations made for the prescott intel chip.<br/><br/>IIRC - I chose -ai386 -ti686-linux-gnu because that's what dpkg-buildpackage supports. If I were compiling it manually, I'd set mcpu or march (I forget which is deprecated) to prescott.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 06/10/2008 10:48:05 AM
    text: >
      Which C7 are you running? C7-D or C7-M?
date: 2008-02-06
tags: c7,firefox,iceweasel,via
---
Swiftweasel is still a little too heavy for my Via C7 laptop, so I'm trying a new build, the 3.0b2 pentium 4 version. Hopefully that will speed things up a bit.

I had mistakenly assumed that the Pentium 3 version was the right one for the C7, but the C7 has sse2 capabilities, which are omitted from the Pentium 3 swiftweasel builds.

It does feel a little quicker now. To get the the trunk version to run I had to install libsqlite3. In the end I'm continuing to use version 2.0, but the optimized build for the Pentium 4.

I just read this on the gentoo-wiki:

<blockquote>Note: You can verify the chip is a Prescott by looking for pni in the flags section of /proc/cpuinfo. This indicates support for SSE3.</blockquote>

So now I'm going to use the prescott build.

I also found somewhere that this:

<pre>MOZ_DISABLE_PANGO=1</pre>

speeds things up a bit, and I think it does!

Now trying to build my own version of iceweasel, but getting this error:

<pre>configure: error: --enable-application=APP is required</pre>

Duh, Mozilla has helpful hints on this, I needed to choose an app!

Its all about the ~/.mozconfig and environment variables in my case. I finally am compiling iceweasel with my own configurations, I had to export CC and CXX:

<pre>export "CC=ccache distcc gcc"
export "CXX=ccache distcc g++"</pre>

Now I may be able to use debian's dpkg-buildpackage tool.  I'm trying it out now - hopefully it will work this time, it took awhile to figure out how to get ccache and distcc to work, but I think its good now.

Now I'm trying a couple of different ways to set build flags when using dpkg-buildpackage. Kind of like how its done in Gentoo, with packages in mind.

UPDATE: Feb 8, 2008 - using dpkg-buildpackage worked! I edited debian/rules to add more compiler optimization flags, as well as disable more Mozilla features. While canvas and svg are nice and completely normal component, I'm trying to make a really lightweight version for use on the C7.

These pages were helpful too:
* <http://bbs.archlinux.org/viewtopic.php?pid=313876>
* <http://legatvs.wordpress.com/2007/12/09/firefox-distcc/>
* <http://silverwraith.com/papers/build-firefox.php>
* <https://wiki.ubuntu.com/DistCompilerFlags>

This looks cool:

* <http://siliconvista.blogspot.com/2007/11/compiling-firefox-with-tcmalloc.html>

I just compiled Iceweasel to link with tcmalloc, and everything seems to be working OK.

<pre>sudo dpkg-buildpackage -b -uc -ai386 -ti686-linux-gnu</pre>

¥

