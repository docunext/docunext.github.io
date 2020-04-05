---
title: Serving Cookie Less Content with Varnish when Backends Are Sick
date: 2010-08-21
tags: none
author: Albert Lash
---
This is one of the more complicated configurations I've set out to achieve with Varnish.

Over the past couple of years using Varnish, I've had it humming along perfectly, caching results from remote servers or providing load balancing and caching, serving stale content gracefully when a backend is unreachable or is taking too long to respond. I've even set it up to cache non-private, but user-specific data that is identified with a cookie. For example, I administer a website which allows users to select a theme for their visit, and the theme is then saved in a cookie.

To be continued...
