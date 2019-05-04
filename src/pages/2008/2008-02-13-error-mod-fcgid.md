---
title: Error mod fcgid 
date: 2008-02-13
tags: apache,fastcgi,fcgi
---

<pre>(2)No such file or directory: mod_fcgid: Can't create share memory for size %zu byte</pre>

Works now, I added:

<pre>SharememPath /var/lib/apache2/fcgid_shm</pre>

as suggested by:

* <http://lists.opensuse.org/opensuse-bugs/2007-10/msg12368.html>

