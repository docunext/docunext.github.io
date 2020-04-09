---
title: Customizing NGINX Debian Build
date: 2009-02-04
---
I'm building a more recent version of NGINX to take advantage of its xsl module, and while I'm at it I'm customizing the gcc flags, since the installation target is embedded, low-power systems, where every little bit counts!

The usual:

<pre>
apt-get source nginx</pre>

Then I downloaded the source from the internet manually, copied over the debian/ directory, changed a few version numbers, and then did some internal adjusting:

<pre>
vim auto/cc/gcc</pre>

I added these:

<pre>
NGX_GCC_OPT="-Os"

CPU_OPT="-march=geode"</pre><del>I also added "-mtune=geode" to the debian/rules file</del>. In the case that I use a machine with an intel atom (i686 or the like) or a via c7[1] (-march=i686 -mmmx -msse -msse2 -msse3), I would obviously change the -march flag. [<a href="http://gcc.gnu.org/onlinedocs/gcc/i386-and-x86_002d64-Options.html">2</a>]

I also removed the ssl module from the configure line in debian/rules as I want to use pound as an ssl proxy - it can use specific openssl engines, as described <a href="http://www.docunext.com/">here</a>[<a href="http://www.docunext.com/wiki/Via_Padlock_OCF-Linux_Integration">3</a>]. I also removed the flv module.

Example resulting command:

<pre>
gcc -c -Os -pipe -march=geode -Os -W -Wall -Wpointer-arith -Wno-unused-parameter -Wno-unused-function -Wunused-variable -Wunused-value -Werror -g -mtune=geode -I src/core -I src/event -I src/event/modules -I src/os/unix -I /usr/include/libxml2 -I objs \		-o objs/src/os/unix/ngx_user.o \		src/os/unix/ngx_user.c</pre>

References:

1. <a href="http://en.gentoo-wiki.com/wiki/Safe_Cflags">http://en.gentoo-wiki.com/wiki/Safe_Cflags</a>

2. <a href="http://gcc.gnu.org/onlinedocs/gcc/i386-and-x86_002d64-Options.html">http://gcc.gnu.org/onlinedocs/gcc/i386-and-x86_002d64-Options.html</a>

3. <a href="http://www.docunext.com/">Via Padlock OCF-Linux Integration</a>

