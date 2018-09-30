---
title: An HTTP Proxy Written in PHP Using LibCurl
date: 2010-12-29
tags: php
---
Thanks to PHP, I found it actually quite easy to write a quick and dirty HTTP proxy.

The one I came up with is definitely not a standards compliant proxy that supports all of the HTTP protocol (it might be possible, but I didn't try).

Why would I do such a thing? I had to do so in order to access a remote site that had network based security setup to provide access to content from a specific IP. That's the catch, though. Since the server that is running PHP has tons of IP addresses routed to it, it wasn't a total cakewalk to get PHP to use a specific one of them. How did I manage that? Only thanks to PHP's binding to libCurl.

