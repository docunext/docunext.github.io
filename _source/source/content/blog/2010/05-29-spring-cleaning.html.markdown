---
title: Spring Cleaning
date: 2010-05-29
tags: apple
---
I am cleaning up random files that Machintosh computers create that are useless to other systems, like Linux.

<pre class="sh_sh">
find . -name '*S_Store*' -exec rm -r {} \;
find . -name '.AppleDouble' -exec rm -r {} \;
</pre>

Oh the lame ways to add metadata to file systems....

