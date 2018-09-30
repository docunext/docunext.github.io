---
title: TCPDump Notes
date: 2006-11-14
tags: none
author: Albert Lash
---
More fun with Tcpdump:

I'm trying to figure out why there are dns requests being made from my webserver. It is either: * mod_vhost_alias* php

Actually, it was "Allow".

In my Apache configuration, I had allow all and deny none. I read up on the manual for the allow directive, and it turns out that it will do a reverse dns entry to find out if you have the "allow" or "none" names! So I changes all to 0.0.0.0, and remove the nones. Works awesome! No more useless dns requests!

