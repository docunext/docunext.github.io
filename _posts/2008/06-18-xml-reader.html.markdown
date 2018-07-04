---
title: XML Reader
date: 2008-06-18
---
I've been working on a mod_perl version of <a href="http://www.nexista.org/blog/">Nexista</a>, called Aortica, and instead of just simple XML and DOM XML, I'm also using the newer style XML reader parser. Its similar to SAX processing, but for me it was a lot simpler to understand.

I needed something that would parse an XML string in order, and not consume a lot of memory. XML Reader is working flawlessly so far.

