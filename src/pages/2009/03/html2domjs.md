---
title: html2dom.js xhtml2dom.xsl
date: 2009-03-24
---
I've been evaluating different strategies for caching parts of an XHTML page, like a header, footer, or sidebar. I've come to the conclusion that the best way to do this is to store the xhtml as a dom object in javascript. It could also be stored as plain XHTML, but then there are issues with multi-line strings in javascript.

It would be possible to use <a href="http://www.docunext.com/wiki/E4X">E4X (EMCAscript for XML)</a>, but that is not widely supported by browsers yet.

So anyway back to Javascript DOM code. Its not as simple to write as HTML, and there are many convenience packages to help this, but I'm under the impression that may reduce its efficiency.

I did some searching on ways to generate Javascript DOM code from XHTML found <a href="http://html2dom.com/">html2dom</a>. It does exactly what I was looking for, but the code doesn't have an explicit license. The author states on another page that the code is in the public domain, but I would feel more comfortable if that were included in the code itself.

Then there is the issue that I don't have a server-side javascript interpreter setup. These are somewhat rare, though they are getting much more prevalent, and I expect that to continue. Since I'm a big fan of <a href="/wiki/XSLT">XSLT</a>, I've decided to try writing a stylesheet which would convert xhtml to dom code. Its very rough at this point, but I'm checking it into the PBooks repository and will post a link once its published. The only real hurdle I ran into was dealing with multi-line text nodes. As usual, they cause some problems with javascript, but I just used the translate function to remove all newlines. I also ran into an issue that the style attribute is read-only. Not a big deal, I need to refrain from using in-line <a href="/wiki/CSS">CSS</a> anyway. The stylesheet is basically an identity transform that converts <a href="/wiki/XML">XML</a> to Javascript <a href="/wiki/DOM">DOM</a> instructions. Another cool thing about this is that the resulting dom code can be gzipped and cached as long as it doesn't change too much. That is a good thing!

Here is a link to the first revision of <a href="http://www.pbooks.org/trac/browser/trunk/apps/pbooks/templates/js/dom_generator.js.xsl">xhtml2dom.xsl</a>.

I like how this is working. For some reason, I'm now thinking about javascript parsers. Does such a thing exist? I think it would be possible to create one using <a href="/wiki/Ragel">Ragel</a>. Here is one implemented in Ruby: <a href="http://idontsmoke.co.uk/2005/rbnarcissus/">rbNarcissus</a> (and a backup of the code <a href="http://www.docunext.com/wiki/Rbnarcissus.rb">here</a>).

UPDATE: Instead of the translate function for newlines, I'm using the <a href="http://www.xmlplease.com/whitespace">normalize-whitespace function suggested here at xmlplease.com/whitespace</a>.
