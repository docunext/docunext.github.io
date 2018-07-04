---
title: Identity Template
date: 2009-12-15
tags: xml,xsl
---
An important part of learning XSL is understanding the identity template.

**What is the "XSL Identity Template"?**

An XSL identity template will transform an XML document into itself, meaning the input will be the same as the output.

It doesn't sound very important, but it actually is. The importance comes with the ability to change only a tiny bit of the document, or a selection of the document.

The identity template can be implemented many ways. Here's an example:

<pre class="sh_xml">
&lt;!-- XHTML FRIENDLY IDENTITY TEMPLATE FOR ELEMENTS--&gt;
&lt;xsl:template match="node()"&gt;
  &lt;xsl:element name="{name()}"&gt;
    &lt;xsl:apply-templates select="@*|node()"/&gt;
  &lt;/xsl:element&gt;
&lt;/xsl:template&gt;
&lt;!-- XHTML FRIENDLY IDENTITY TEMPLATE FOR CONTENT AND ATTRIBUTES --&gt;
&lt;xsl:template match="@*|text()|processing-instruction()"&gt;
  &lt;xsl:copy/&gt;
&lt;/xsl:template&gt;
&lt;xsl:template match="comment()"&gt;
  &lt;xsl:copy/&gt;
&lt;/xsl:template&gt;
</pre>

