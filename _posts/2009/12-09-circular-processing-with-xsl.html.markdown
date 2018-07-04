---
title: Circular Processing with XSL
date: 2009-12-09
tags: xsl
---
The idea is to feed the output of a stylesheet back into itself, but how can the process be managed, not infinite?

Andrew Welch suggests:

<blockquote>
You can do all the transformations in your pipeline in one stylesheet by
performing transformations within variables, with each variable
operating on the previous one.

So, as top-level variables you could have:

&lt;xsl:variable name="firstVar-rtf">

  &lt;xsl:apply-templates/>

&lt;/xsl:variable>

&lt;xsl:variable name="firstVar" select="exsl:node-set($firstVar-rtf)"/>

&lt;xsl:variable name="secondVar-rtf">

  &lt;xsl:for-each select="$firstVar">

    &lt;xsl:apply-templates/>

  &lt;/xsl:for-each>

&lt;/xsl:variable>

&lt;xsl:variable name="secondVar" select="exsl:nodet-set($secondVar-rtf)"/>

Here $firstVar operates on the source xml, and $secondVar works on the
'result' of the apply-templates in $firstVar.

The final link in the chain is of course:

&lt;xsl:template match="/">

  &lt;xsl:for-each select="$lastVar">

    &lt;xsl:apply-templates/>

  &lt;/xsl:for-each>

&lt;/xsl:template>

All you need to do is separate out your problem into logical steps and
perform each one in a varaible.

I do this a lot when xslt 1.0 struggles to do a task in one go, such as
finding the average of two percentages written as 45% and 55%.

The first variable would translate() the '%' away, the second variable
would find the average.
</blockquote>

Dimitre notes:

<blockquote>
This will select just the root node (/) of the temporary tree contained in
$firstVar

Must be:

    &lt;xsl:for-each select="$firstVar/node()">

>     &lt;xsl:apply-templates/>

>   &lt;/xsl:for-each>

> &lt;/xsl:variable>

> &lt;xsl:variable name="secondVar" select="exsl:nodet-set($secondVar-rtf)"/>

>
> Here $firstVar operates on the source xml, and $secondVar works on the

> 'result' of the apply-templates in $firstVar.

>

> The final link in the chain is of course:

>

> &lt;xsl:template match="/">

>   &lt;xsl:for-each select="$lastVar">

The same problem:

Must be:

    &lt;xsl:for-each select="$lastVar/node()">

Dimitre Novatchev.
</blockquote>

I'm busy trying to figure this out....

* <a href="http://www.biglist.com/lists/xsl-list/archives/200401/msg00044.html">http://www.biglist.com/lists/xsl-list/archives/200401/msg00044.html</a>

Didn't do what I wanted it to, but I did learn something.

<pre>
&lt;xsl:variable name="firstVar-rtf">
  First
  &lt;xsl:apply-templates />
&lt;/xsl:variable>
&lt;xsl:variable name="firstVar" select="exsl:node-set($firstVar-rtf)"/>

&lt;xsl:variable name="secVar-rtf">
Second
  &lt;xsl:for-each select="$firstVar/node()">
    &lt;xsl:copy-of select="."/>
    &lt;xsl:apply-templates />
  &lt;/xsl:for-each>
&lt;/xsl:variable>
&lt;xsl:variable name="secVar" select="exsl:node-set($secVar-rtf)"/>

&lt;xsl:variable name="tripVar-rtf">
Third
  &lt;xsl:for-each select="$secVar/node()">
    &lt;xsl:copy-of select="."/>
    &lt;xsl:apply-templates />
  &lt;/xsl:for-each>
&lt;/xsl:variable>
&lt;xsl:variable name="tripVar" select="exsl:node-set($tripVar-rtf)"/>

&lt;xsl:template match="/">
&lt;div>
  &lt;xsl:for-each select="$tripVar/node()">

    &lt;xsl:copy-of select="."/>
    &lt;xsl:if test="name()='h2'">
    skdlj
    &lt;/xsl:if>

    lakjdfkj
  &lt;/xsl:for-each>
  &lt;/div>
&lt;/xsl:template>
</pre>

