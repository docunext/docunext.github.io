---
title: Shared Memory Goodness
date: 2007-09-23
tags: none
author: Albert Lash
---
Shared memory is good stuff! You can access it via memcached, xcache, even the file system. I noticed the PHP function "shmop", and then found the PHP Shared memory class. <a href="http://babelfish.altavista.com/babelfish/trurl_pagecontent?lp=ru_en&url=http%3A%2F%2Fbolk.exler.ru%2Ffiles%2Fshared%2F">Here's the PHP Shared memory class translation from Russian to English.</a>

You can also access shared memory via the /dev/shm partition which is available on some linux distributions, or via memcached.
