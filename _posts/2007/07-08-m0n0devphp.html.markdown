---
title: m0n0dev.php
date: 2007-07-08
tags: askozia,m0n0dev,m0n0wall,php
---
I'm working with <a href="http://askozia.com/m0n0dev" rel="nofollow">m0n0dev.php from Askozia</a>, and I'm running into a problem:


The generic-pc image isn't able to find the kernel. The smp image works though. Strange.

Just sent this to the pbx-users list:

<blockquote class="svxlb"><pre>
Hi,

I'm using m0n0dev and am running into an issue when I build the image for m0n0wall. I've use the smp build successfully, but when I try the generic pc the bootloader can't find the kernel. ls reveals there is a file there called kernel.gz. Is it supposed to be compressed? Maybe mine is corrupt. Rebuilding now...
</pre></blockquote>

OK I just rebuilt everything and still no luck. Darn.

Related links:

<a href="http://www.docunext.com/blog/2007/06/m0n0wall-development-environment.html">m0n0wall development environment</a>

