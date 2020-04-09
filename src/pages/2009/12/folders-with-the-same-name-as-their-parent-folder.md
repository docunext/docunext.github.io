---
title: Folders with the same name as their parent folder
date: 2009-12-18
tags: sql,xml,xpath
---
I seem to recall a post Joey Hess made within the past few months about the oddity of folders that have the same name as their parent folder. I looked for it, but couldn't find it. Maybe it wasn't Joey who posted it, but its only relevant for background.

I'm writing this post because I agreed. It is an odd occurrence with a surprisingly high frequency, and that it is often unnecessary.

One case where I've found it necessary it with xml nodes that may have one or more child nodes, but as I write this, I'm not sure if they are needed there, either.

For example, I often convert database result sets to XML. The mapping is very simple - rows are nodes with the fields as child nodes that have text nodes for their value and that makes he Xpath to find the value is simple. It can get complicated when the result set can have one or more row.

[Nexista](http://www.nexista.org/) initially implemented it such that the query name would be the result set root node name. If it only had one row, the field nodes would be its direct children, like this extremely simple example:

<pre class="sh_xml">
&lt;query_name>
  &lt;field_name>value&lt;/field_name>
&lt;/query_name>
</pre>

If the result set had more than one child, it would be like this:

<pre class="sh_xml">
&lt;query_name>
  &lt;query_name>
    &lt;field_name>value one&lt;/field_name>
  &lt;/query_name>
  &lt;query_name>
    &lt;field_name>value two&lt;/field_name>
  &lt;/query_name>
&lt;/query_name>
</pre>

For consistency, I altered Nexista to always return record sets like the second example, even if there were only one row.

The problem I've encountered with this is that I end up with really long and redundant Xpaths now!  :-)

<pre class="sh_sh">
//query_name/query_name/field_name
</pre>

On top of that, I name my queries with some fairly descriptive names, like "customer_accounts_get_all".

That gets ugly quick.

One possible solution is to give queries both a name for the parent node as well as the rows. It would require more work, but that's not necessarily a bad thing.

No final answer just yet, just pondering at the moment.
