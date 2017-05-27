---
title: Say No to Strings
date: 2009-03-22
---
I'm sticking with XSL, XML and DOM, so I'm trying to free myself of strings. I had a tough time dropping disable-output-escaping, as I first tried xsl:copy-of, which resulted in an empty xmlns attribute in xhtml docs.

I finally remembered that the nodes just have to be rebuilt, either using xsl:element or the new elements entirely. Now to try and keep things flexible, I'll need to craft up some xsl:templates for common html elements. So far I've got script and link, but of course I'll need a whole bunch more than that.

Also, <a href="http://www.xml.com/pub/a/2000/08/02/xslt/index.html">attribute sets</a>!

Hah, well its actually not that difficult. All that was needed was an identity transform which avoids copy and copy-of. Thanks to <a href="http://www.edginet.org/">Ben</a>, its really quite simple!

<pre class="xml"><xsl:template match="node()"><xsl:element name="{name()}"><xsl:apply-templates select="@*|node()"/></xsl:element></xsl:template><xsl:template match="@*|text()|comment()|processing-instruction()"><xsl:copy/></xsl:template></pre>

