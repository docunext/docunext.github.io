---
title: Debian kernel distcc and ccache notes
comments:
  - author: Albert
    email: albert.lash@savonix.com
    ip: 192.168.8.12
    url:
    date: 01/27/2009 11:46:00 PM
    text: >
      For manually building kernels, I use this:<br/><br/>make -j12 CC="distcc"
date: 2007-10-11
---
Compiling a <strong>kernel</strong> takes awhile, so I use <strong>distcc</strong> and <strong>ccache on debian.</strong>

<pre>
DISTCC_HOSTS="localhost dev-2" CONCURRENCY_LEVEL=4 \

MAKEFLAGS="CC=distcc" make-kpkg --revision=1 --bzimage --initrd \

kernel_image</pre>

Or:

<pre>
export DISTCC_HOSTS='localhost dev-2 192.168.0.34'

make -j12 CC=distcc</pre>

Even menuconfig works:

<pre>
HOSTCC="ccache" make menuconfig</pre>

Thanks:

<a href="http://gentoo-wiki.com/HOWTO_Compile_Kernel_With_Distcc_and_CCache">1</a>

<a href="http://home.icequake.net/~nemesis/blog/index.php/2006/12/14/compiling-a-linux-kernel-with-distcc/">2</a>

¥

