---
title: X11 Iceweasel Display Fix
date: 2009-03-31
tags: none
author: Albert Lash
---
I was reading up on Webkit optimizations and one of the suggestions was to use hardware acceleration on the video card. I've experimented extensively with graphics acceleration on my Everex Via C7 notebooks, but I've refrained from toying with the xorg.conf on my <a href="http://www.my-tech-deals.com/blog/2008/08/399-laptop-pictures-acer-extensa-5620z.html">Acer Extensa 5620Z</a>, simple because it worked out of the box with debian and I had no complaints.

I figured I'd give is a shot, found an <a href="http://www.docunext.com/965_xorg.conf">xorg.conf configuration which said it was for the Intel Corporation Mobile GM965/GL960 Integrated Graphics Controller</a>, and lo and behold, a strange bug which had been plaguing my Iceweasel for months went away. I'm not sure if the two are related, but I'm *so* glad that the bug is gone.

I would have tried to track down the source of the problem before, but the problem is tough to describe. It only affected background images, and only affected them sometimes. The would appear 50% vertically offset - or so it would seem, something funky was going on with them.

I'm hoping that the new configuration actually enables some hardware acceleration, and maybe even cause my laptop to run a little cooler? Is that too much to ask for?

