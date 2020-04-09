---
title: debian rules distcc
date: 2009-02-05
tags: none
author: Albert Lash
---
As docunext readers know, I'm a fan of debian and distcc. I've used <a href="http://www.docunext.com/2007/10/11/more-distcc-and-ccache-notes/">distcc to aid with building debian kernels</a>, and now I'm using it with building patched packages.

<pre>
debian/rules binary CC=distcc CONCURRENCY_LEVEL=40</pre>

Not too bad, huh? Works for me.

And now with ccache:

<pre>
CCACHE_PREFIX='distcc' CONCURRENCY_LEVEL=40 MAKEFLAGS='CC=ccache\ gcc-4.1' make-kpkg --revision=2.6.26-13 --bzimage kernel_image</pre>

