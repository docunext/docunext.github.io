---
title: More PHP versus Perl versus Python Notes
date: 2008-07-06
tags: none
author: Albert Lash
---
I've been working with PHP for a long time, and more recently and intensely, Perl and Python. I like all three languages, but since I've heard PHP get bashed so much, I have to say in some ways I expected more from Perl and Python.

They are very nice, but for my uses, all three languages are fairly similar. I'm doing web development using SQL, XML and XSL, so I'd probably end up seeing a bigger difference using Postgres over MySQL, or Xalan-C instead of libxslt.

I've been unable to measure memory consumption of PHP and Python, but for mod_perl I've been using GTop to measure memory consumption. I've been able to measure te execution time requests on each platform, but I only see those numbers as relevant for self comparison, meaning I won't use those numbers to say one language is faster than another in my context, because I can't be sure that the start and stop points are the same within each program.

I have noted a few things in my experience:* mod_perl is good for integrating with Apache. Duh!* python and mod_wsgi is nice for controlling application setups from apache, and the wsgi interface is nice, but otherwise it seems quite similar to mod_fcgid* PHP is of course a very convenient language for getting things going, used with xcache and mod_fcgid, the performance is quite nice too

