---
title: Gentoo Notes
date: 2006-04-29
tags: none
author: Albert Lash
---
<p>Right now I'm thinking about how to convert from selinux to regular linux.</p>
<p>Also, I'm wondering how to convert from 64 bit to 32 bit.</p>
<p>Are these tasks possible without a total rebuild?</p>
<p>It doesn't look like this is possible. Probably not worth it anyway.</p>
<p>Amd64 runs fine on XEON processor, but I did run into a problem with ejabberd. The binary was looking for libncurses in /lib32/, but the only library my machine had was in /lib64/. So I compiled a 32bit version of ncurses, following this guide:</p>
<p><a href="http://www.gentoo.org/proj/en/base/amd64/technotes/index.xml?part=1&chap=4" rel="nofollow">http://www.gentoo.org/proj/en/base/amd64/technotes/index.xml?part=1&chap=4</a></p>
<p>I essentially just downloaded the libnurses library from gnu.org and manually compiled the library with &quot;-m32&quot;. The gentoo folks advise NEVER to use this flag with portage, or you could seriously screw things up. The only problem I ran into was this:</p>
<p>ldconfig: libraries libncurses.so.5.4 and libncurses.so.5.5 in directory /emul/linux/x86/lib have same soname but different type.</p>
<p>Which is output when I try to run ldconfig.</p><h3 id="toc1">Follow-Up to Gentoo Notes</h3><p>I no longer use Gentoo for our servers. We still have two that we support, but I've since switched to debian. </p>
