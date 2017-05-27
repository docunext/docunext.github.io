---
title: XSL Notes
date: 2006-09-18
tags: xsl
---

<h3>Embed doctype in an xslt document for outputting xhtml</h3>

Finally found a way to correctly output xhtml with a valid doctype, thanks to: <a href="http://www.stylusstudio.com/xsllist/200402/post90170.html">http://www.stylusstudio.com/xsllist/200402/post90170.html</a>

<pre class="sh_xml">&lt;xsl:output method="xml" indent="yes" encoding="UTF-8" omit-xml-declaration="yes" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN"/></pre>

