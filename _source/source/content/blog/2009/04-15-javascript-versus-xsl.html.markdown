---
title: Javascript versus XSL
date: 2009-04-15
---
One thing I don't like about XSL is the complexity of some simple tasks, so I'm thinking of ways to use Javascript instead.

For example this dropdown list is pretty complicated, just to make sure that the currently selected option is active:

&lt;select name="group_id"&gt;
&nbsp;&nbsp;&nbsp; &lt;xsl:for-each select="//get_account_groups/get_account_groups"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;option value="{id}"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xsl:if test="//account_get_by_id/account_get_by_id/group_id=id"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xsl:attribute name="selected"&gt;selected&lt;/xsl:attribute&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/xsl:if&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xsl:value-of select="name"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/option&gt;
&nbsp;&nbsp;&nbsp; &lt;/xsl:for-each&gt;
&lt;/select&gt;

I bet that I can make it simpler with Javascript.Yes, indeed!

&lt;select name="group_id"&gt;
&nbsp;&nbsp;&nbsp; &lt;xsl:for-each select="//get_account_groups/get_account_groups"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;option value="{id}" id="g_{id}"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xsl:value-of select="name"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/option&gt;
&nbsp;&nbsp;&nbsp; &lt;/xsl:for-each&gt;
&lt;/select&gt;

&lt;script type="text/javascript"&gt;
&nbsp; $("#g_"+&lt;xsl:value-of select="//account_get_by_id/account_get_by_id/group_id"/&gt;).attr("selected","selected");
&lt;/script&gt;

FYI, this code is from <a href="http://www.pbooks.org/blog/">PBooks</a>, and the solution I've proposed uses my favorite Javascript library: jQuery.

