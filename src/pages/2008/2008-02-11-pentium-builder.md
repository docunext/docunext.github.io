---
title: Pentium Builder
date: 2008-02-11
tags: debian
---
This is an interesting package, and I found this interesting post concerning it:

<a href="http://kitenet.net/~joey/blog/entry/ten_years_of_free_software_--_part_8_pentium-builder/">ten years of free software -- part 8 (pentium-builder)</a>

I'm trying it out now with libxml2, but I'm already noticing this:

<pre>`-mcpu=' is deprecated. Use `-mtune=' or '-march=' instead.</pre>

I just edited /usr/bin/gcc and g++ to comment out -march. This is a very cool package. I hope it gets updated, maybe I'll take a look at updating it.

<a href="http://www.docunext.com/wiki/Pentium-builder">Docunext Wiki Page on the Pentium Builder Package</a>
