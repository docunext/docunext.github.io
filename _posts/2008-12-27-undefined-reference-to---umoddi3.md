---
title: undefined reference to umoddi3 
date: 2008-12-27
tags: kernel
---
Couldn't figure this one out for awhile.... I am trying to build a custom kernel for nodows (2.6.18) and it worked fine for awhile, then I started to get this error:

<pre class="sh_sh">(.text+0xee26): undefined reference to `__umoddi3'</pre>

So I searched and found some mixed reports that a KBUILD_SFLAGS will might help:

<pre class="sh_sh">CFLAGS_KERNEL="-fno-tree-scev-cprop"</pre>

That didn't work, so I'm using gcc-4.1 instead:

<pre class="sh_sh">DISTCC_HOSTS="localhost nfs-iron dev-2" MAKEFLAGS="CC=distcc\ gcc-4.1" make -j 12</pre>

