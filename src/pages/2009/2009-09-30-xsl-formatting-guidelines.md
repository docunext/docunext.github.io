---
title: XSL Formatting Guidelines
date: 2009-09-30
tags: xsl
---
I've finally come up with my guidelines for XSL based XHTML template that I'm very pleased with:

* Keep everything within 80 characters wide, life feed at attributes with no indent.
* Separate XHTML-only and XHTML+XSL blocks with one line feed.
* Include two line feeds after &lt;xsl:template&gt; lines and before &lt;/xsl:template&gt; blocks.
* Use two spaces for indentation.
* Don't use XPath for i18n. I've done it in the past and while its reliable and robust, it makes XSL templates look like garbage.

I'm writing these down for my own personal use.

