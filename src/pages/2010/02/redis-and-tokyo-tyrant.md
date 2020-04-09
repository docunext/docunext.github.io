---
title: Redis and Tokyo Tyrant 
date: 2010-02-27
tags: nosql,redis
---
**Redis** and **Tokyo Tyrant** are the last servers I'm trying out as I explore document-based storage systems, aka NoSQL.

#### Redis

I had tried Redis once before, but for some reason I didn't keep testing it out. I seem to think I had some problems setting up the server or the Ruby gem I was trying to use. Whatever the issue was, its no longer apparent, and I was able to get up and running right away!
Based on my limited experience with Redis so far, it seems a lot like memcachedb, but with some additional native data types (in addition to strings):

* lists
* sets
* increment / decrement counters

Memcachedb can of course do this too with a bit of serialization / marshaling. As such, even though those data types are supported, it might be better to use an abstraction layer interface between the data store and program logic, so if for some reason it makes sense to switch between redis and memcachedb or vice-versa, it won't require a massive recode.

#### Tokyo Tyrant

I'd heard of [Tokyo Cabinet](http://1978th.net/tokyocabinet/) (the storage file format behind [Tokyo Tyrant](http://1978th.net/tokyotyrant/), the network interface) before, but at the time it was fairly new and not widely available. Its now available on Debian, which is awesome because its just about as awesome as Daniel J. Bernstein's CDB file format in terms of speed and efficiency. I'd even hoped for a network interface to CDB!

Unfortunately Tokyo Tyrant is still in Debian "Sid", the unstable repositories, but still that's a very good sign of things to come.

I didn't realize this before, but Tokyo Tyrant supports the memcached protocol. That is a **huge** benefit in my opinion, but as it turns out, there are many really awesome benefits to Tokyo Tyrant:

* The server can embed Lua
* A RESTful interface for access over plain old HTTP
* Replication

## Docunext Wiki Pages
* [Tokyo Tyrant](http://www.docunext.com/)
* [Redis](http://www.docunext.com/)

## External Links
* [MemcacheDB, Tokyo Tyrant, Redis performance test](http://timyang.net/data/mcdb-tt-redis/)

