---
title: Web Server Thoughts
comments:
  - author: Vidar
    email: vidar@hokstad.com
    ip: 82.70.200.181
    url: http://www.hokstad.com/
    date: 01/23/2008 07:08:10 AM
    text: >
      I've done both client and server-side XSL at several websites, most recently at Edgeio, where all templating was done using XSL. We transformed it serverside mainly because of a few problems:<br/> * Third party code, particularly Google Adsense, can severely screw up the client side transformation. If you use XSL clientside via javascript for AJAX you won't run into this, but if you try serving a page as pure XML the page might not even display at all if you use Adsense.<br/> * Various browser incompatibilities (no big surprise there)<br/> * Limitations on "unquoting" CDATA. If you have user supplied data that's not valid XML (meaning most user supplied HTML...) you'll need to go to a lot of trouble serverside to clean it up before serving it, at least in Firefox, as you can't serve it as CDATA and output it unquoted and rely on Firefox to handle the HTML properly. If you're first doing this server-side you might as well do the whole transformation serverside where you can use an XSL processor that doesn't have that limitation (yes, it's an optional features so technically it isn't a bug, but it makes the Firefox XSL support far less useful)<br/><br/>What we did, though, was add a switch to turn XSL transformations on/off, so that when debugging the app we could see the raw XML. It also allowed us to stream out various debug data into the XML that clients wouldn't have to download when the transformation was done serverside, but that's easily visible when in debug mode.<br/><br/>Another factor in using XSL was actually what people often complains about: Complex logic in XSL is hard. I wanted something that would discourage people from putting logic in the presentation layer beyond simple composition of parts and simple conditionals unless they really, really had a good reason to.
date: 2007-12-22
tags: web server
---

I like the idea of running numerous lightweight daemons behind a larger, multi-threaded server.

Other issues:

* What's the best way to connect to a database?  PHP?
* Object persistence? Python WSGI? Larger object persistence.
* Perform transformations, sort, etc. - XSL enabled browser?

Lightweight AJAX response handler? - POST of JSON?

#### Web Server

* Authenticate mod\_digest
* Serve static files
* Serve applications with built-in authentication (squirrelmail) over https
* Serve data - php: db i/o, caching, xml, xsl transformations, etc. ; sessions
* Receive POST data - need a good parser - php if no manipulation is required, python is the data being sent is a more sophisticated object
* Manipulate data - python,superior object handling

#### Factors -

* XSL Stylesheets are already static, don't need to download them over and over
* The data is what is private
* SQL would need to be adjusted for various amounts of data output

It is tempting to perform xsl transformations on the client side, but once there, what's the benefit? From the javascript perspective, the document it has access to is an HTML document, right? My guess is that by loading compressed XML, caching the XSL with an expires value, and caching the XML with a last-modified value, the performance would be sweet.

On the flip side, using javascript / ajax to update and manipulate browser content can be effective, but maybe a little messy. However, the user experience is nice, especially when only sending updates to the server, not downloading any new data.

So again to reiterate what I was saying before about the server, the client will user AJAX to POST data to the webserver, behind the scenes, yet use XSL and XML transformations to GET data from the server.

I would like to be able to create pages through both Javascript / AJAX actions, as well as through URIs.

¥

