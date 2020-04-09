---
title: XSL CDATA libTidy HTML Comments and Script Elements
date: 2010-05-24
tags: javascript,scripts,xhtml,xslt
---
I have a lot of appreciation for libTidy - its an awesome tool for avoiding issues when dealing with foreign HTML and trying to transform it with XSL.

However, I ran into an issue yesterday that I think is worth mentioning that involves the words in the title of this post:

* XSL
* HTML Comments
* CDATA
* Script Tags (elements)

You may have come across this type of code in the source of an HTML document:

<pre class="sh_html">
&lt;script type="text/javascript">
&lt;!--
var something = '&lt;something&gt;else';
--&gt;
&lt;script>
</pre>

The comment is in there to prevent the (x)HTML processor from processing the javascript, which contains invalid (x)HTML.

LibTidy does something similar, it wraps the inner contents of script tags with CDATA elements. This was problematic for me because I was then trying to process the output with XSL. XSL escaped the CDATA comment tag as:

<pre class="sh_html">
&amp;lt;!--
</pre>

which caused javascript processing to fail.

I was able to work around this first by disabling output escaping in my stylesheet for script tags, but I decided to fix the problem at the root and remove the comment tags.

I read up on when comment or CDATA tags are required for script tags and decided I don't need them if I'm careful about the inline javascript I use - a good practice in its own right!

So now the default behavior is that libTidy is escaping script tag contents with CDATA tags, and libXSLT escapes their content, dropping the CDATA tags. Works fine as long as there aren't any entities in there!

UPDATE: After wrestling with the comment, I found [the strangest bug I've ever encountered](http://www.docunext.com/2010/05/the-strangest-bug-ive-ever-encountered.html).
