---
title: MySQL Low memory
date: 2006-12-02
tags: none
author: Albert Lash
---
Here's what I use for Mysql low memory setups (still has a 1MB query cache):

<pre>[mysqld]

port            = 3306

socket          = /var/run/mysqld/mysqld.sock

skip-locking

key_buffer = 16K

max_allowed_packet = 16K

table_cache = 1

sort_buffer_size = 16K

read_buffer_size = 16K

read_rnd_buffer_size = 1K

net_buffer_length = 1K

thread_stack = 16K# Don't use berkeley db

skip-bdb# Use myisam

skip-innodb

query_cache_limit       = 1048576

query_cache_size        = 1048576

query_cache_type        = 1[mysqldump]

quick

max_allowed_packet = 16M[mysql]

no-auto-rehash[isamchk]

key_buffer = 16K

sort_buffer_size = 16K[myisamchk]

key_buffer = 16K

sort_buffer_size = 16K[mysqlhotcopy]

interactive-timeout</pre>

