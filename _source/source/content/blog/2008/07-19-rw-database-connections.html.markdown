---
title: R W Database Connections
date: 2008-07-19
---
R/W database connections don't work too well with FastCGI, so I've been using <a href="http://www.docunext.com/wiki/Mysql-proxy">mysql-proxy</a> instead.

That works pretty well, but I'm not sure what the best solution is, yet.

With regular CGI, the DBPost setting works fine, and then on the other hand, MySQL compression does not work with mysql-proxy, as far as I know.

