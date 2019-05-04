---
title: PEAR Channel Take II
date: 2008-03-13
tags: nexista,pear,php
---
I'm working on setting up a PEAR channel again. Here's my old notes: <a href="http://www.docunext.com/blog/2007/10/pear-channel-server.html">PEAR Channel Server</a>.

First off, some basics:

* User passwords are stored at md5 hashes
* To components to Chiara PEAR_Server: admin (frontend), and backend - the actual server which the command line pear command can talk to

