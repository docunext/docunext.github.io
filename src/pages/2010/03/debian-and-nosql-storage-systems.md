---
title: Debian and NoSQL Storage Systems
date: 2010-03-01
tags: debian,mongodb,nosql,redis
---
After reviewing a bunch of "NoSQL" style [document-based](http://www.docunext.com/2010/02/redis-memcachedb-or-couchdb/) / [key-value](http://www.docunext.com/2010/02/redis-and-tokyo-tyrant.html) storage systems, I decided to move forward with four of them and install them on production and demonstration machines.

On the production machines, I stuck with Debian's "testing" repository, currently dubbed "Squeeze". As such, I installed MemcacheDB and Redis.

On a demonstration machine, I temporarily added the unstable repository, "Sid", as well as the MongoDB repository for the stable Debian distribution, "Lenny" (which required I add the official Lenny repository as well). With these extra repositories, I was able to install tokyotyrant and mongodb. :-)

