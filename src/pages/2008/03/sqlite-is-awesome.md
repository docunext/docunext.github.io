---
title: SQLite Is Awesome
date: 2008-03-11
tags: firefox,mysql,sqlite
---
I'm very happy tonight because I was able to get one of my projects (<a href="http://www.pbooks.org/blog/">PBooks</a>) to play nicely (so far...) with SQLite. Previously I had been using only MySQL. Several weeks ago I tried to get PBooks and SQLite to go, but it wasn't happening. Since then, I've been working on <a href="http://www.phunkybb.com/">PhunkyBB</a>, and I've been using a SQLite database for development. That has taught me a lot about it - previously I had only used SQLite for Trac, but I eventually switched to MySQL so that it could be replicated.

SQLite seems like the perfect data storage system for local desktop usage. I love the fact that Firefox is using it as well as GnuCash. I hope GNOME and more of the GNU gang start to embrace SQLite as a data storage mechanism.

I could foresee /etc and ~/.config getting stored in a SQLite database, and even backed up / replicated to a network RDBMS like MySQL or Postgres.

I'm looking forward to working more with SQLite - including figuring out the big differences between version 2 and 3. PBooks only works with 2 as MDB2 only works with 2.
