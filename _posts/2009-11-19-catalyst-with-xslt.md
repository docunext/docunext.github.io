---
title: Catalyst with XSLT
comments:
  - author: Richard Lewis
    email:
    ip: 207.192.71.184
    url: http://www.richardlewis.me.uk/
    date: 07/17/2012 07:20:48 AM
    text: >
      Just found this post looking for tips on Catalyst and XSLT. Although I'm sure you've either solved your problem or don't care anymore, just thought I'd share that I've been using XML::Generator::PerlData as way of getting data from the database into an XML nodeset. Consequently, I use a SAX-based workflow.
date: 2009-11-19
tags: catalyst,xslt
---
I had refrained from using MVC web application frameworks like Rails because they didn't include View support for XSLT.

Catalyst, an MVC framework written in Perl, does support XSLT views with the help of  <a href="http://www.docunext.com/wiki/Catalyst::View::XSLT">Catalyst::View::XSLT</a>.

I'd tested this out a little before, but now I'm digging with with [EvenBooks](http://www.evenbooks.com/blog/), a port of [PBooks](http://www.pbooks.org/blog/) to Catalyst.

The next quagmire I face is the idea of an ORM that can output an XML tree that XSLT can render. With Nexista, data goes directly form the database to an XML tree, and based on that idea I started to work on [dbrs2xml](http://www.dbrs2xml.com), a FastCGI application which maps uris to sql and responds with XML results sets. However, as many developers know, its often faster and easier to systematically manipulate "smart" and flexible objects than it is to systematically manipulate nodesets of XML data. The latter is certainly possible, I do it all the time, but I definitely feel I'm missing something.

It would be very cool to be able to use an object-relation mapper prior to the insertion of data sets into an XML tree. That's what I'm going to investigate next as I continue work on EvenBooks. Wish me luck!

UPDATE: I just remembered another point I wanted to note about this project: PBooks uses InnoDB to maintain referential integrity between certain tables and I'm curious to learn about how DBIx::Class works with foreign keys, if any different than with MyISAM tables.

¥

