---
title: libgd2 memory corruption
date: 2009-06-23
tags: none
author: Albert Lash
---
<pre>*** glibc detected *** /usr/lib/cgi-bin/gd.fcgi: malloc(): memory corruption: 0x09332530 ***======= Backtrace: =========/lib/i686/cmov/libc.so.6[0xb7bdee56]/lib/i686/cmov/libc.so.6(__libc_malloc+0x95)[0xb7be05a5]/usr/lib/libgd.so.2(gdMalloc+0x1d)[0xb7cf17dd]/usr/lib/libgd.so.2(gdCacheCreate+0x1e)[0xb7cef32e]/usr/lib/libgd.so.2(gdImageStringFTEx+0x9e)[0xb7cef82e]/usr/lib/libgd.so.2(gdImageStringFT+0x5d)[0xb7cf0edd]/usr/lib/cgi-bin/gd.fcgi[0x80490ef]/lib/i686/cmov/libc.so.6(__libc_start_main+0xe5)[0xb7b83775]/usr/lib/cgi-bin/gd.fcgi[0x8048b91]======= Memory map: ========</pre>
