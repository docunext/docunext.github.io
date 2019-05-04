---
title: phpmyadmin error 2013
date: 2009-01-29
tags: none
author: Albert Lash
---
<pre>#2013 - Lost connection to MySQL server at 'reading initial communication packet', system error: 111</pre>

This was caused by the remote server I was trying to connect to being bound to the local loopback address. I commented out the bind-address line, restarted, and it worked OK.

