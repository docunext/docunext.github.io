---
title: Web Publishing Technologies
date: 2009-10-24
tags: templates,"web publishing",xsl
---
I'm reviewing some of the ways we publish HTML to the internet.

Here's some of the ways we currently publish documents:

* static html files
* static source documents processed with a dynamic filter: XSLT, server side includes, or similar
* dynamic scripts which process static source documents
* dynamic scripts which gather source information from a database and process it for output

Static html files are the fastest and most efficient means. Filtered documents are also very efficient as caches support them quite well if they are configured correctly.

Server side includes are very simple and efficient, but caching can be very tricky.

Dynamic scripts are almost always the most inefficient manner of publishing data to the web. On the other hand, since many web pages are dependent upon user input they are the only way to go.

There are three primary ways of running dynamic scripts:

* [FastCGI](http://www.docunext.com/wiki/FastCGI)
* [CGI](http://www.docunext.com/wiki/CGI)
* Web server modules or built in processors

There is also a "SpeedyCGI" method of running scripts, but as far as I'm aware, it can only be used on Perl scripts.

