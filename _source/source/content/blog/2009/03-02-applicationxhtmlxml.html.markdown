---
title: application xhtml xml
date: 2009-03-02
---
With XHTML, mime type really makes a difference, especially 1.1. At least in my experience it does. I'm finding that pages will render completely different if the mime type is text/html or application/xhtml+xml.

And from what I can tell, application/xhtml+xml is the future! Yay.

In PHP, this can be done like this:

<pre class="php">ini_set('default_mimetype','application/xhtml+xml');</pre>

I was trying to figure this out to use the nice <a href="http://shjs.sourceforge.net/doc/documentation.html">shjs</a> package, but for some reason it wouldn't work without the right mime-type.

Oh, but of course Microsoft Internet Explorer doesn't like this. Thankfully there is a <a href="http://www.w3.org/MarkUp/2004/xhtml-faq#ie">rough fix</a>, but I'll probably just have use a separate stylesheet to render the output as html instead of xml. Good ol' MSIE.

