---
title: PHP Warning Unknown php network getaddresses getaddrinfo failed Name or service not known in Unknown on line 0
date: 2008-06-12
tags: none
author: Albert Lash
---
Uh-oh! I'm getting this error when trying to use the php memcached extension to manage sessions, specifying the memcache server with a host name rather than an ip address. Interesting. I have hostname lookups off in my apache configuration, perhaps that it affecting it.

