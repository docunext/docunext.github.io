---
title: Wordpress and bbpress notes
date: 2007-01-06
tags: none
author: Albert Lash
---
The Informed Banking website uses Wordpress for its <a href="http://blog.informedbanking.com/">bank blog</a> and bbpress for its <a href="http://www.informedbanking.com/resources/forums/">bank forums</a>.

I'm very impressed with these pieces of software. Even Docunext is powered by Wordpress. However, I have some thoughts about what I'd improve.

First, I'd use XSL in its templating system. I love XSL!

Second, I'd setup the database model so that multiple domains could share the same database <i>and</i> tables. Currently, my setup supports multiple domains within the same database, but not the same tables.

Third, I'd setup the databases and software setup to be much more uniform. The way it is now is really confusing when you try to compare the two. It would be fantastic if it were possible to share components of each domain's template with each installation.

