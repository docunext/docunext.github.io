---
title: XML Schema and Trang
date: 2009-11-25
tags: xml
---
I'm working on database models defined in XML, aka data model schema, and I've decided to use XML schema to specify how they should be modeled.

A little background: I'm basing the model off of how MDB2 from PHP's PEAR generates an XML representation of a data model. I've made some minor modifications, and want to document them.

In learning about XML schema (xsd), I found trang. Its a Java utility which can infer an XML schema from an XML document. Cool! It can even generate a DTD!

Here's how I used it:
<pre class="sh_sh">
trang -I xml -O xsd data_model.xml data_model.xsd
</pre>

The result can be found at github.com:

[datamodel.xsd](http://github.com/docunext/0945a8a54c/blob/master/xsd/datamodel.xsd)

SIDE NOTE: Its unfortunate that the word schema is causing a clash here. Its a useful word in both contexts but they really refer to different concepts.

