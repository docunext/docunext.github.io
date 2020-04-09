---
title: Redis MemcacheDB or CouchDB 
comments:
  - author: grantmichaels
    email: grantmichaels@hotmail.com
    date: 02/21/2010 11:52:58 AM
    text: >
      fwiw, couchdb is built on erlang and doesn't require java ...<br/><br/>you might also like voldemort, cassandra, neo4j, dynomite, riak ...
  - author: Albert
    email: albert.lash@savonix.com
    date: 02/21/2010 01:32:47 PM
    text: >
      Hi Grant, you are absolutely right. I forgot it was written in Erlang. I will check out those others you mentioned.
date: 2010-02-20
tags: couchdb,memcachedb,redis
---
I'm having a great time exploring lots of cool Ruby stuff and now I'm eager to get into the document-centric (non SQL) databases that are currently the buzz.

These are also known as simple key-value pair databases - a concept that's been around for plenty of time. What makes these newcomers different? They are now on the network, and the "value" they store are full documents. And even the way they are used makes them different, including how a variety of keys can access each document.

There are three different NoSQL servers that I am aware of, though I'm sure there are more:

* Redis
* CouchDB
* MemcacheDB

**Redis** is new to the scene, but its been getting rave reviews.

**CouchDB** is from the awesome folks at the Apache Foundation and can likely support traffic the likes of Facebook, hence more than I need. <del>Its Java based and for me that's a drawback.</del> Its based on Erlang, which is cool with me. Thanks [grant](http://www.docunext.com/blog/2010/02/redis-memcachedb-or-couchdb.html#comment-5213)!

**MemcacheDB** is right up my alley. (I'm actually already using it, though for some fairly simple reasons; not for full "documents".) Its based on the rock solid and simple as can be memcache protocol from the folks at Danga. Its been around for a few years and I see that as a very good thing.

While my curiosity is pulling me towards Redis and CouchDB, I'm going to stick with MemcacheDB for now.

UPDATE: Shortly after posting this, I quickly found a couple more:

* MongoDB
* Tokyo Cabinet

Even on top of all these, I'm sure there are even more!

¥

