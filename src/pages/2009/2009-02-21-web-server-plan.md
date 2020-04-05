---
title: Web Server Plan
date: 2009-02-21
---
I've started working on a new web server plan. Its based on the fact that I've relied upon PHP for way too long and come to realize that some of the very simple components common in many web servers (like autoindex) are incredible useful. While PHP is a very convenient way to get dynamic web pages going, I want more intimate control over how my application servers run and operate while keeping them running as efficiently as possible.

The new plan is also based upon my recent, wonderful experience with NGINX and its new xslt module. Its just awesome. And its also based upon my less recent, yet still wonderful experience with MovableType Open Source and the results of publishing static files.

Some other positive influences include Varnish, qDecoder, SQLite, Lua, FastCGI, Markdown, DAV, and jQuery.
<h3>Go Forth and Filter</h3>

My goals for this new setup will be more efficiency, lesser chances of things going wrong, and easier maintenance. A big part of this is <strong>filtering</strong>. Filtering content, or more specifically transforming content, is an easy way to allow customized presentation while leveraging the truly powerful "file" capabilities of modern operating systems. To be clear, I've learned that modern operating systems can handle files really really well, and the capability can aid quality web serving. Filtering those files allows on-the-fly customization, when necessary. Example filters or transformers can include a Markdown converter, a source-to-highlighted HTML filter, and of course my favorite an XSLT stylesheet.

The concept here is that the "file" has the potential to change, but the filter would be expected to remain the same, at least for a certain period of time. Therefore, if the file hasn't changed, the operating systems, web servers, in-between proxies, and http clients can all rest assured that their caches are intact. This is a very good thing. Alternatively, its much more difficult for an operating system to constantly be aware of whether a database record on an off-site system has been updated or remains the same. To discover that, it has to go fetch the record, requiring much more time and effort. There of course will be scenarios where dynamic content is required, but for a lot of the situations I encounter, this is the exception rather than the rule. For these cases, I'm planning to come up with a few strategies to deal with them, and attempt to optimize them accordingly. For example, here are two simple cases: web server public directory indexes and web-based subversion browsing. I've tried a bunch of different methods for these cases and found that mod_perl worked the best for my needs - specifically AutoIndex::XSLT and Web::SVN.

Other situations include wikis and blogs. Currently I'm using MediaWiki, MoinMoin, Wordpress and MovableType Open Source, but I'm considering using ikiwiki and converting more of my blogs to MTOS. Alternatively, I may continue using these engines as-is for administration purposes, and instead render their output to static XML files and transform them with XSLT.

One very cool thing about filters like markdown and source-highlight is that it can take plain text files and make them valid XML documents. That is a beautiful thing, as it enables the ability to really transform the data in so many ways after that.

And a quick note relating to my general web server plans - my path prefixes: * /a/ = admin and/or application pages, usually password protected* /s/ = static files, can be sent with public cache headers and longer expires* /p/ = proxied data, mainly for filtering purposes

UPDATE: Yes, even <a href="http://www.docunext.com/wiki/Apache2_mod_ext_filter_and_Imagemagick">imagemagick can be used to dynamically resize images via an Apache mod_ext_filter</a>.
