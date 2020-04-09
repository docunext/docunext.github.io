---
title: Hooray Successful Trac Edits
date: 2008-01-07
tags: mysql,python,trac
---
I'm celebrating today as I made some significant edits to a "trac hack", proof that I'm actually learning python! The trac hack I edited is the sitemaps plugin, which generates an XML sitemap document for use with search engines. I had it working with trac 0.10.4 but since I upgraded to 0.11 the compatibility broke.

The first problem was with the timestamps. The wiki api changed, and it took a long time to figure out how to fix this. The problem was converting a datetime format to a timestamp, and then converting that back to a datetime format compatible with the sitemaps specification.

After that, I had to figure out how to build the right URLs, which wasn't too hard. The trac web href module made that simple enough.

TODO:

* Publish my changes
* Figure out what's up with the egg format
* Fix the admin ui (not working atm)

