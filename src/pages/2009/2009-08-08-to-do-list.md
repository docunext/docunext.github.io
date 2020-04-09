---
title: To Do List Plus XML dbrs2xml erubis MySQL FastCGI
comments:
  - author: http://www.openid.albertlash.com/openid/
    email:
    date: 08/09/2009 01:10:10 AM
    text: >
      Related goodness:<br/><br/><a href="http://www.xml-info.com/blog/2009/08/xhtml2xsl-and-how-to-handle-xhtml-and-xsl-namespaces-in-nokogiri.html" rel="nofollow">XHTML2XSL, and how to Handle XHTML and XSL Namespaces in Nokogiri</a>
date: 2009-08-08
tags: erb,eruby,fastcgi,nginx,ruby,xslt
---
Here's a few items on my to-do list:

<ul><li>Write a module for NGINX
</li><li>Switch to using Ruby as my primary high-level programming language</li><li>Create a qDecoder debian package for my own use (I have no clue how to get a package into the official repositories)</li><li>Examine various non-XSL template syntax for plain-text output (ERB, Lesscss, TT, macros?)</li></ul>
The last item is an interesting thought, and I've just spent the last thirty minutes thinking and researching it. I don't like the idea of moving away from XML, but I don't think I will. While it is certainly possible to output plain text from XSL, it is isn't very elegant.

One idea would be to use XSLT to convert an XML source document to a language specific data file. This worked well for lua, and some languages have support for "simplexml", which quickly convert an XML document to a language specific data structure.

OK, enough technical garbledeegook... how about a real world example?

I have <a href="http://www.informedbanking.com/">a large database of banks</a>,
and I'm trying to make the data more navigable, as well as potentially
render it as static content. So, I've come up with a plan:

<ul><li>create an xml file of every state (440 / state average)</li><li>create an xml file of each starting letter, f would be huge</li><li>number of branches:</li><ul><li>1 - 10</li><li>11 - 100</li><li>101 - 500</li><li>501 - 1000</li><li>1001 +

    </li></ul></ul>
Simple enough, but there is a fair amount of work involved. Thanks to
programming, it shouldn't be that bad - it might even be fun!

First off, I'm using dbrs2xml to convert data from a MySQL result set to XML. Its a FastCGI binary coded in C, but it can run as a command line application with two environment variables: SQL_NAME and SQL_QUERY. The SQL_NAME is used for the XML document, and SQL_QUERY is the SQL_QUERY. I have an XML document of all fifty states in the US, so I'm going to use Ruby's simplexml to parse it. Here's a snibbet of the states.xml file:

<pre class="sh_xml">&lt;states&gt;
&lt;state label="Alabama" value="AL"&gt;Alabama&lt;/state&gt;
&lt;state label="Alaska" value="AK"&gt;Alaska&lt;/state&gt;&lt;/states&gt;</pre>

Simple enough, now let's create some commands from that data set with Ruby and an eRuby template.

<b>sqlcommands.eruby template</b>

<pre class="sh_ruby">&lt;% for item in list %&gt;
SQL_NAME="banks_get_all" SQL_QUERY="SELECT name,address_line_1,city,state,zip,offices,website FROM banks WHERE state='&lt;%= item['value'] %&gt;'"  ./dbrs2xml.fcgi &gt; &lt;%= item['value'].downcase %&gt;.xml
&lt;% end %&gt;</pre>

<b>myprocessor.rb Ruby code:</b>

<pre class="sh_ruby">require 'xmlsimple'
require 'erubis'
list = XmlSimple.xml_in('states.xml', { })['state']
input = File.read('sqlcommands.eruby')
eruby = Erubis::Eruby.new(input)
puts eruby.result(binding())
</pre>

The result is a shell script which when run will produce 50 xml files, one for each state. Cool huh? I can then use xsltproc to convert those to html/xhtml if I like - I can even include the xsltproc commands in the eruby template. And using some similar templates and processes, I'll be able to finish the rest of the goals in my plan. Not bad at all!

¥

