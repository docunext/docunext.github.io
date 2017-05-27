---
title: SQLite PHP
date: 2007-08-21
tags: none
author: Albert Lash
---
With the help of <a href="http://devzone.zend.com/node/view/id/760">Zend's developer zone</a>, I made my first SQLite script:

<pre>#!/usr/local/bin/php<?php

if(!is_file("db.sqlite")) {     $db = new SQLiteDatabase("db.sqlite");    $db = sqlite_open("db.sqlite");

sqlite_query($db , "CREATE TABLE foo (id INTEGER PRIMARY KEY, name CHAR(255))");

sqlite_query($db, "INSERT INTO foo (name) VALUES ('Ilia')");

sqlite_query($db, "INSERT INTO foo (name) VALUES ('Ilia2')");

sqlite_query($db, "INSERT INTO foo (name) VALUES ('Ilia3')");

exit;}$db = sqlite_open("db.sqlite");$result = sqlite_query($db, "SELECT * FROM foo");// iterate through the retrieved rows

while ($row = sqlite_fetch_array($result)) {    echo "<pre>";    print_r($row);    /* each result looks something like this    Array    (        [0] => 1        [id] => 1        [1] => Ilia        [name] => Ilia    )*/}?></pre>

So far, I'm pretty excited about using sqlite. I was concerned about the foreign keys, but I just found <a href="http://www.sqlite.org/cvstrac/wiki?p=ForeignKeyTriggers">this</a>. You can create the equivalent of foreign key constraints with triggers, and triggers are supported by SQLite, Postgres, and MySQL!

Following on that minor progress, I added basic <a href="http://www.nexista.org/blog/2007/08/22/sqlite-support/">SQLite support to the pdo datasource in nexista</a>.

