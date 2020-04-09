---
title: More Python Explorations TinyERP
date: 2007-10-29
---
<a href="http://www.docunext.com/2007/10/29/more-python-explorations-tinyerp/">

In my work with <a href="http://www.pbooks.org/">PBooks</a>, I occasionally do some research on <a href="http://www.pbooks.org/blog/open-source-accounting/">other bookkeeping programs</a>. I was encouraged by a forum member to examine tinyerp, and although I had come across it in the past, I didn't investigate too deeply as I didn't know too much about python at the time.

Recently I've had some positive experiences with trac, which is written in python, so I decided to take another look. Tinyerp isn't so tiny, its pretty big and complicated in my opinion, and has a lot of components and dependencies. I was able to install the server easily enough thanks to debian having it in their repository, but the web client is still in active development so that was a manual task.

I learned about the python cheese shop, which I guess is sort of like PHP's PEAR, perl's CPAN, and Ruby's GEMs. With that, I installed some "eggs": TurboGears, CherryPy, and matplotlib.

After that, I did a little exploring of the python site, the python package index, and read up on what CherryPy is all about. Its a web application server, and it seems pretty cool, but I'm more apt to use Apache and fastcgi, like I do with trac.

From there I looked up some XSLT libraries for python and its nice to know there is a great interface from python to the quality libxml and libxslt libraries, and that those C libraries come with python bindings.
