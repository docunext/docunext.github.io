---
title: XSL Namespace Aliases
date: 2009-12-07
tags: xml,xsl
---
I've been using XSL for a long time, and I know I've used XSL in the past to generate XSL, but today I found a very handy technique for doing so: namespace aliases!

Here's the articles I found which explain how its done:

<a href="http://www.xml.com/pub/a/2001/04/04/trxml/index.html" rel="nofollow">http://www.xml.com/pub/a/2001/04/04/trxml/index.html</a>

<a href="http://www.xml.com/pub/a/2003/11/05/xslt.html" rel="nofollow">http://www.xml.com/pub/a/2003/11/05/xslt.html</a>

In a nutshell, this is it:
<pre class="sh_xml">
&lt;xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:xslo="http://www.w3.org/1999/XSL/TransformAlias"
>
&lt;xsl:namespace-alias stylesheet-prefix="xslo" result-prefix="xsl"/>
&lt;xsl:template match="/">
&lt;xslo:stylesheet version="1.0">
&lt;xslo:template match="/">
&lt;xslo:value-of select="//name"/>
&lt;/xslo:template>
&lt;/xslo:stylesheet>
&lt;/xsl:template>
&lt;/xsl:stylesheet>
</pre>

