---
title: Middleware versus Pipelines
date: 2009-08-29
tags: ruby,xsl
---
What is Middleware?
----------------------------

Middleware, in the context of web frameworks, refers to processing components which reside between the end user and the web application. Depending upon the setup and configuration, middleware may:

* catch errors
* alter the content
* track sessions

There are some web server standards like WSGI and WSAPI which support middleware, as well as some web application servers, like Ruby Rack.

What are Pipelines?
---------------------------
Pipelines is a term which is sometimes used to refer to XSL pipelines. XSL pipelines are a series of transformations which may or may not be applied to an XML document.

As opposed to web server apis, XSL pipelines are quite simple to implement, though as far as I can tell, they are fairly uncommon. I've seen them used with Nexista, Cocoon, and NXINX.

