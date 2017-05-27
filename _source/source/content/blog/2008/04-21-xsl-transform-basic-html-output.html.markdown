---
title: XSL Transform Basic HTML Output
date: 2008-04-21
---
&lt;xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"&gt;

&lt;xsl:output method="html" indent="yes" encoding="UTF-8" omit-xml-declaration="yes" doctype-public="-//W3C//DTD HTML 4.01 Transitional//EN" doctype-system="http://www.w3.org/TR/html4/loose.dtd"&gt;

&nbsp;&nbsp;&nbsp; &lt;xsl:template match="/"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xsl:apply-templates&gt;
&nbsp;&nbsp;&nbsp; &lt;/xsl:apply-templates&gt;

&nbsp;&nbsp;&nbsp; &lt;xsl:template match="html"&gt;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;link rel="stylesheet" type="text/css" href="/style.css"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;b&gt;b4af&lt;/b&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xsl:for-each select="body/*"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xsl:copy-of select="."&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/xsl:copy-of&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/xsl:for-each&gt;
&lt;/xsl:template&gt;
&lt;/xsl:template&gt;&lt;/xsl:output&gt;&lt;/xsl:stylesheet&gt;

