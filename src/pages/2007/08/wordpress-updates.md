---
title: Wordpress Updates
date: 2007-08-28
---
I've got a couple of Wordpress updates in my mind... a trigger which clears the WP-Cache when someone posts a comment.

While not really an update, I'm planning to also have a trigger which changes the database host when a post is made, enabling the use of replicated databases for selects, and a primary host for updates, deletes, or inserts.

UPDATE: I'm now using multiple databases with wordpress. A local database for reading, and a master which is hosted on another computer for inserts, updates, and deletes, as described above. It works AWESOME! So fast, highly distributed and available, and generally cool.

UPDATE 2: For remote updates, I'd like to turn on compression. Apparently PHP is able to do so with the <a href="http://www.php.net/function.mysql-connect">MYSQL_CLIENT_COMPRESS flag in the mysql_connect function</a>.

UPDATE 3: I'm getting a lot of problems with spam karma 2 and a multi-database setup. I'll have to either rework spam karma 2, rework the wordpress config files, or setup sql-relay.

UPDATE 4 November 24, 2007: I finally got around to creating the trigger which flushes all the cached files when an ANY edit is made. I also am using a custom cache location, and need to make that configurable before sharing.
