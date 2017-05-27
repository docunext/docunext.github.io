---
title: Javascript Libraries
date: 2007-12-24
tags: javascript,json,xml
---

I started this post several months ago and finally got around to examining some of these libraries. So far, I really like the jQuery library, and of course Sarissa. I like the idea of XSL transformations in Javascript, but it doesn't really work that well as far as I can tell. Its possible with jquery and sarissa, but its a little cludgy. With jQuery, you can interact with the DOM in pretty clean manner, so maybe XSLT isn't the best choice for client side.

Prototype looks good too, but I haven't explored it too much.

* http://docs.jquery.com/Main_Page
* http://script.aculo.us/
* http://simonwillison.net/2006/Jun/26/libraries/
* http://developer.yahoo.com/yui/
* http://edevil.wordpress.com/2005/11/14/javascript-libraries-roundup/
* http://www.howtocreate.co.uk/jslibs/

I think that for my use XML and XSL will stay on the server, and the client side will only use JSON.

Good article on XML, HTML, and JSON:

* http://www.quirksmode.org/blog/archives/2005/12/the_ajax_respon.html

There are some nice json libraries:

* http://www.ibm.com/developerworks/xml/library/x-xml2json/
* http://us3.php.net/json
* http://undefined.org/python/#simplejson
* http://pear.php.net/pepr/pepr-proposal-show.php?id=198

E4X looks interesting too, but of course Microsoft lacks support for this standard:

* http://www.w3schools.com/e4x/e4x_browsers.asp

I'm having a blast with jQuery. I just added tablesorter to PBooks and 1. it was easy and 2. it works really well. I then found this:

* <http://malsup.com/jquery/taconite/>

which might be the right solution for me. I've been wavering between XML and JSON for updating content, and I think this might clinch the deal for XSL. I don't think I'll be doing many heavy AJAX data downloads, instead downloading all the data in one fell swoop and then perusing it with a method like the tablesorter pager.

