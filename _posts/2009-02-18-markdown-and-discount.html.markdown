---
title: Markdown a Light HTML Syntax and Discount a Fast Markdown Implementation in C
date: 2009-02-18
---
I like Markdown because it allows text files to look normal, and then makes nice HTML out of them. Discount is a fast Markdown translator written in C. Unfortunately, it won't compile on my debian development machine:

<pre>
cc -L. -o markdown main.o -lmarkdown ./libmarkdown.a(markdown.o): In function `listblock':

markdown.c:(.text+0x1166): undefined reference to `isdefinition'

collect2: ld returned 1 exit status

make: *** [markdown] Error 1</pre>

Hmmm. Aha - I was using an outdated version, the latest version (1.3.1 as of Feb 2009) compiles fine.

