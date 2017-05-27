---
title: Varnish CDB
date: 2009-07-29
tags: proxies
---
I added a feature request to the Varnish Trac site recently: the ability to look up values in a cdb file.

That would really be awesome as it would enable fast look ups of key-value pairs. Would it be fast enough for every request? I think it would be, cdb is the fastest hash reference that I'm aware of. It would be nice for keeping urls consistent over time, without having to rely on complex regular expressions for everything. Regular expressions are great for some url rewriting schemes, but sometimes all you need is a simple key-value pair.


