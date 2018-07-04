---
title: mod ndb
date: 2007-05-11
tags: none
author: Albert Lash
---
This looks pretty awesome:

<a href="http://code.google.com/p/mod-ndb/">http://code.google.com/p/mod-ndb/</a>

<blockquote>

Mod_ndb is an Apache module that provides a Web Services API for MySQL Cluster. It creates a direct connection from an Apache Web server to the NDB data nodes in a MySQL Cluster (bypassing mysqld, and eliminating the need to create or parse SQL queries). This allows you to query and modify a database over HTTP using GET, POST, and DELETE requests, and retrieve results in a variety of formats, including JSON results that can go 'direct to the browser' in an Ajax application. Mod_ndb is also scriptable, using Apache's subrequest API, so that complex multi-table transactions or joins (even including sort-merge join plans that are currently not possible in MySQL) can be easily created in PHP or Perl.</blockquote>

This reminds me of <a href="http://www.thomas-bayer.com/rest-demo.htm">sqlrest demo</a>.

