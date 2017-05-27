---
title: Migrating only part of an SVN repository
date: 2007-08-24
tags: none
author: Albert Lash
---
I wanted to split an SVN repository into pieces:

<pre>
svnadmin dump repository > dumpfile_2007-09-17

cat dumpfile_2007-09-17 | svndumpfilter include blahablh > newdumpfile_2007-09-17

svnadmin create blahablh

svnadmin load blahablh < dumpfile_2007-09-17

trac-admin resync</pre>

