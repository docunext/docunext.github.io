---
title: Random XSL Notes and a Link
date: 2009-09-30
tags: xsl
---
Rejoice! I learned that it is possible to use jQuery's metadata plugin within XSL today. I had previously been stymied because the metadata plugin uses curly brackets: { }.

Trying to use these within an attribute tries to access an XPath node, and that's not the goal here. Thankfully, you can "escape" these curly brackets by simply using two: {{ }}!

<pre class="sh_xml">
&lt;th colspan="2" class="{{sorter: false}}" /&gt;
</pre>

I'm using the metadata.js plugin to set features of tablesorter.

New XSL related link: [http://sourceforge.net/projects/xslet/](http://sourceforge.net/projects/xslet/)

