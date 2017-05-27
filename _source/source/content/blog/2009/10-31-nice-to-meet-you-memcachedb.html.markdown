---
title: Nice to Meet You MemcacheDB 
date: 2009-10-31
tags: docunext,memcache,memcachedb,ruby
---
When I recently setup some new Docunext network tools, I figured it would be nice to store some of the queries in a hash database and create a "recent queries" list.

It worked fine and I'm pleased with the results, so much that I wanted to expand on the use of such setups. First I wanted to combine all the database files and use key prefixes or something similar to isolate the data. Secondly, I wanted to find if there was any better way to configure my setup.

Today I got my answer: <a href="http://memcachedb.org/" rel="nofollow">MemcacheDB</a>!

So far I've only [experimented with it using the Ruby memcache library](http://www.docunext.com/blog/2009/10/ruby-memcached.html), but the results were as I'd hoped, so I plan to migrate some tools over soon.

Oh yeah, when I was experimenting I realized that memcachedb supports namespaces, which makes everything much easier!

