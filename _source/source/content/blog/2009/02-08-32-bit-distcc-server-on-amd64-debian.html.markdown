---
title: 32 bit Distcc server on AMD64 Debian 
date: 2009-02-08
---
Is this possible? Probably, either either with an -m32 wrapper script or with a 32-bit chroot environment. Here's my first try:/usr/local/bin/gcc-4.1

<pre>#!/bin/sh/usr/bin/gcc-4.1 -m32 $@</pre>

I just learned that with /usr/local/bin/ its easy to override /bin/ because it usually comes before /bin in the PATH environment variable. Cool!

Not sure if this works just yet, trying it out now. Nope, this didn't work. I'm going the chroot route now. Distccd doesn't want to start for me in the chroot, I'm manually starting it to test.

<strong>Chroot Works!</strong>  (mostly)

I have to manually start distccd because the initscript doesn't work for some reason, must be something about the chroot setup. Here's the command I'm using:

<pre>
distccd --listen 192.168.8.176 --no-detach --allow 192.168.0.0/16 --user=distccd --log-file=/var/log/distccd.log</pre>

The resulting distccd.log:

<pre>
distccd[21746] (dcc_check_client) connection from 192.168.8.91:57915

distccd[21746] compile from rmap.tmp.dev-91-gl.savonix.com.1930.i to tmp.hash.dev-91-gl.savonix.com.1930.o

distccd[21746] (dcc_r_file_timed) 512460 bytes received in 0.045744s, rate 10940kB/s

distccd[21750] (dcc_collect_child) cc times: user 0.288018s, system 0.068004s, 4370 minflt, 0 majflt

distccd[21750] /usr/bin/gcc-4.1 /root/.ccache/libfs.tmp.dev-91-gl.savonix.com.2063.i on localhost completed ok</pre>

<strong>Helpful Links</strong>

<a href="http://alioth.debian.org/docman/view.php/30192/21/debian-amd64-howto.html">http://alioth.debian.org/docman/view.php/30192/21/debian-amd64-howto.html</a>

