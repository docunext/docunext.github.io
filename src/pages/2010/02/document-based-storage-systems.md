---
title: Document Based Storage Systems
date: 2010-02-25
tags: c++,couchdb,erlang,json,memcache,nosql
---
After posting [Redis, MemcacheDB, or CouchDB?](http://www.docunext.com/2010/02/redis-memcachedb-or-couchdb/), I did some work with MemcacheDB.

The convenience was really cool, but the limitations became quickly apparent.

I found myself managing my own index of documents; i.e. no fun. That might be ok in some cases, but not for browsing documents. It might be possible to eventually and *easily* automate indexing, but I decided to read up again on the other NoSQL projects.

I'm surprised with how many of these are written in erlang! Of them all, **CouchDB** (erlang) and **MongoDB** (C++) look the most impressive. They are way more than a key/value storage system; but could be used as such, as long as the documents are in JSON format.

Since the documents are stored in JSON, they have some inherent key/value pairs. Thus, these keys can be used for some tentative relationships, aka views.

While I prefer erlang to java, its still a fairly big dependency for a database. Thankfully, mongodb is written in C++ and there are debian packages available, as well as in the official debian "sid" repository.

So it looks like I'll eventually be switching from memcachedb to mongodb.

NOTE: I think its awesome that the mongodb developers chose the AGPL for the license!

UPDATE: A big difference between CouchDB and MongoDB is that CouchDB uses a REST style interface, while MongoDB does not, it uses language specific drivers. However, as the MongoDB docs state, a REST interface can be created in the future, and it appears there are some projects which make this possible, like [sinatra_resource](http://github.com/djsun/sinatra_resource).

#### MongoDB Web Monitor Output

<div>
<h2>mongodb dev-48-gl.savonix.com:27017 </h2><p>
<pre>db version v1.3.3-, pdfile version 4.5
git hash: nogitversion
sys info: Linux domU-12-31-39-09-BE-63 2.6.21.7-2.fc8xen-ec2-v1.0 #2 SMP Tue Sep 1 10:04:29 EDT 2009 i686 BOOST_LIB_VERSION=1_35

dbwritelocked:  0 (initial)
uptime:    93667 seconds

assertions:

replInfo:

Clients:
<table border=1><tr align='left'><th>Thread</th><th>OpId</th><th>Active</th><th>LockType</th><th>Waiting</th><th>SecsRunning</th><th>Op</th><th>NameSpace</th><th>Query</th><th>client</th></tr>
<tr><td>initandlisten</td><td>0</td><td></td><td>1</td><td></td><td></td><td>2004</td><td>local.system.namespaces</td><td>{ name: /^local.temp./ }</td><td>0.0.0.0:0</td></tr><tr><td>snapshotthread</td><td>0</td><td></td><td>0</td><td></td><td></td><td>0</td><td></td><td></td><td>0.0.0.0:0</td></tr><tr><td>websvr</td><td>2</td><td></td><td>-1</td><td></td><td></td><td>2004</td><td>admin.system.users</td><td>{}</td><td>0.0.0.0:0</td></tr></table>
time to get dblock: 0ms
# databases: 2
Cursors byLoc.size(): 0

<b>replication</b>
master: 0
slave:  0
initialSyncCompleted: 1

<b>DBTOP  (occurences|percent of elapsed)</b>
<table border=1><tr align='left'><th>NS</th> <th>total</th> <th>Reads</th><th>Writes</th> <th>Queries</th><th>GetMores</th><th>Inserts</th><th>Updates</th><th>Removes</th> </tr><tr><th>GLOBAL</th><td>0|0.00%</td><td>0|0.00%</td><td>0|0.00%</td><td>0|0.00%</td><td>0|0.00%</td><td>0|0.00%</td><td>0|0.00%</td><td>0|0.00%</td></tr></table>
</div>

Related Posts:

* [Interesting MongoDB Ruby Gems](http://www.docunext.com/2010/02/interesting-mongodb-ruby-gems/)
* [dm-mongo-adapter versus the Bare MongoDB Driver](http://www.docunext.com/2010/02/dm-mongo-adapter-versus-the-bare-mongodb-driver/)

