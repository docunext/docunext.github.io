---
title: Shared var cache apt
date: 2008-03-25
tags: caching,debian,nfs
---
I've tried a few different techniques to cut down on repetitive downloads, but none have worked better than this: using nfs to share /var/cache/apt to several machines.

Other techniques which didn't work too well for me:

* http proxy cache
* apt-cache

