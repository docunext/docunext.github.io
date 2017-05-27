---
title: Apache mod cache and mod rewrite
date: 2007-09-13
tags: apache,mod_rewrite
---
I'm having a tough time working with mod_rewrite and mod_cache, I think because my wordpress setup is messing it up.

First off, in my experience today:

* mod_cache looks at the final rewritten url, not the requested url, even PT didn't work for me.
* revalidate requires a last-modified date, which must be sent via php (AFAIK about PHP having to send it)
* I needed to setup the htaccess file for wordpress to include the qeury string in the rewritten url (not with QSA though, I have to use (.asterisk) to add it onto the end)

From my experience today, I can see that mod_proxy and mod_cache can work together to form a really powerful combination for scaling out web services!

My initial thoughts:

* Use the memory cache for often changing information - like that from a database to store small objects like html documents
* Use the disk cache to store larger remote objects that don't change as often, that are retrieved via a proxy

Good news - it works with Internet Explorer too, amazing!

