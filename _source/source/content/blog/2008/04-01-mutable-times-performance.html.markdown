---
title: Mutable Times Performance
date: 2008-04-01
---
I originally setup Mutable Times to use a remote MySQL database, but even with some <a href="http://www.cabotplace.net/blog/2008/03/04/fios-is-in-the-place/">pretty fat pipes thanks to FIOS</a>, the performance was almost unbearable.

I moved the Mutable Times install to a server with a 100Mbit connection to the MySQL database and the performance difference is phenomenal.

My guess is that the perl MySQL driver configuration I tried was not optimized for a remote database. Oh well, no big deal.

The fcgid setup works great on both setups though.

