---
title: Dbslayer on debian
date: 2009-02-11
tags: debian,mysql,nexista
---
**DBSlayer**

What is dbslayer? Its a specialized web server that receives urlencoded JSON formatted SQL queries, parses and executes them, and returns a JSON encoded result set over HTTP. Cool huh? I really wish it returned XML instead, and it looks like that might be a possibility, but I'll have to do some digging and tinkering.

I'm compiling dbslayer on debian:

<pre>
cd /usr/src
svn co http://www.dbslayer.org/svn/dbslayer/trunk/ ./dbslayer
apt-get install libapr1-dev libaprutil1-dev libmysqlclient15-dev./configure
make</pre>

The binary is located in server/dbslayer.

<a href="http://code.nytimes.com/projects/dbslayer/wiki/ConfiguringTheDbslayer">Configuring the dbslayer</a>.

Yes, it appears that in more recent versions of dbslayer, it is possible to specify a "FORMAT" argument, however it isn't documented well. Furthermore, its appears to be rather inefficient - the result set is first parsed into json and then serialized into xml, instead of just going straight to xml.

When reading about dbslayer, I found out about mod_ndb. I would really like to combine these two projects!

**What I like about DB Slayer**

* Standalone http server
* Acts as a mysql proxy
* Can perform load balancing

**What I like about mod_ndb**

* RESTful interface - all queries are defined as URLs
* Results can be directly output as XML

Another idea is to use <a href="http://www.nexista.org/">Nexista</a> to receive requests and respond with XML or JSON. The idea comes with some side benefits like intelligent caching, security, and a variety of web servers to choose from. But the requirement of PHP and all the extensions is pretty significant.

UPDATE: <a href="http://www.cherokee-project.com/doc/cookbook_dbslayer.html">The Cherokee web server has integrated dbslayer as a mysql loadbalancer</a>. Very interesting. Unfortunately, no XML output. :-(

