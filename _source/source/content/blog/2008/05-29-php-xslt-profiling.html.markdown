---
title: PHP XSLT Profiling
date: 2008-05-29
tags: php,xslt
---
The guys over at <a href="http://blog.liip.ch/">LIIP</a> have patched the xsl extension to provide profiling capabilities. Its not too detailed, but it provide the most important information about what templates are being called, and how long they are taking to be processed:

<pre>
number               match                name      mode  Calls Tot 100
us Avg    0                    /                                    1    202    202    1
thematic-button                3     30     10                         Total                                4    232
</pre>

It may surprise you what comes up! My <a href="http://www.established-sites.com/blog/2008/05/dynamic-css.html">dynamic CSS scripts</a> were taking almost a full second to process because I was including a lot of nodes in the tree that wasn't needed.

