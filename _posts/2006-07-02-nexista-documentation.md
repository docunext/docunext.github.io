---
title: Nexista Documentation
date: 2006-07-02
tags: none
author: Albert Lash
---
Not using the php_build script from Joshua anymore, just using Debian packages, in particular:

<pre>
ii  libapache2-mod-php5            5.1.4-0.1             server-side, HTML-embedded scripting languag

ii  php5-common                    5.1.4-0.1             Common files for packages built from the php

ii  php5-curl                      5.1.4-0.1             CURL module for php5

ii  php5-dev                       5.1.4-0.1             Files for PHP5 module development

ii  php5-gd                        5.1.4-0.1             GD module for php5

ii  php5-mcrypt                    5.1.2-1               MCrypt module for php5

ii  php5-memcache                  2.0.1-1               memcache extension module for PHP5

ii  php5-mysql                     5.1.4-0.1             MySQL module for php5

ii  php5-pspell                    5.1.2-1               pspell module for php5

ii  php5-xmlrpc                    5.1.4-0.1             XML-RPC module for php5

ii  php5-xsl                       5.1.4-0.1             XSL module for php5</pre>

Specifically needed php5-dev to compile php_ext. Need to make sure that all the ming functions are built-in.

