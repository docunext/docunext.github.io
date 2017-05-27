---
title: Caching with PHP and Apache
date: 2006-11-21
tags: none
author: Albert Lash
---
Since both PHP and Apache can manage cache headers, it is difficult to decide which one should do what.

In my experience, its been best to let Apache set its expires headers. That module is actually very sophisticated and does a lot of the work for you. However, what about dynamic content? You have to let PHP send headers in this regard, as it can check whether or not the information that builds the dynamic content has changed since the cached data was considered fresh. If it was, you can issue the 304 response code: not modified.

I have to send a sincere thanks to these folks:

<a href="http://www.mnot.net/cache_docs/">Mnot's amazing caching resources, including the cacheability engine</a>

<a href="http://www.sitepoint.com/article/php-anthology-2-5-caching">The awesome Sitepoint PHP caching article</a>

