---
title: Memcachedb for Voting Polling Systems
date: 2010-07-21
tags: sinatra
---
I recently setup a polling system for a client and when I was planning the design, I decided to use memcachedb thanks to the atomic increment functionality.

I'm using Sinatra and Ruby for most web-based applications I develop these days, and I ran into an issue with [marshal data too short](http://www.docunext.com/) in the memcached client, but that was an easy fix.

I chose memcachedb instead of memcache for the obvious reason that I need the data to be persistent.

