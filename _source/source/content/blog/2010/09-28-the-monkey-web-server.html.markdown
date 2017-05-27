---
title: The Monkey Web Server
date: 2010-09-28
tags: php,roundcube,"web server"
---
I tried out the Monkey web server last night to discover if it could easily run the PHP needed for RoundCube.

Alas, the version of Monkey in Debian is 0.9.x, while PHP support via the *Palm* plugin / protocol / spawn-fcgi / thingamajig is only available in 0.11.

What's that you say? Of course I didn't give up! I was trying to find a web server that could easily run PHP. If I have to clone a git repository, disassemble a .deb package or two, **big deal!**

So yes, I did exactly that. I almost got it working, but ran into this error:

<pre class="sh_sh">
Built : Sep 27 2010 20:30:57 (gcc 4.3.5)
Home  : http://www.monkey-project.com
(null) => Invalid memory reference
.
</pre>

Doh! I have no clue about that one. Granted, this is a total hackjob! I'll have to spend some more time reviewing debian/rules and should probably build it manually before I continue taking shots in the dark.

OK, cool! I manually built it and its running fine. Must be something funky with how debian/rules builds it.

<pre class="sh_sh">
albertlash@dev-48-gl:~/src/monkey-project/tmp/monkey-0.11.1$ bin/monkey
Monkey HTTP Daemon 0.11.1
Built : Sep 28 2010 21:45:48 (gcc 4.3.5)
Home  : http://www.monkey-project.com
* Process ID is 25545
* Server socket listening on Port 2001
* 5 threads, 101 client connections per thread, total 505
</pre>

OK, sweet! I actually got it running after building the debian package, but it will need more work, as I had to manually copy over the conf, and kept on having to remove symlinks that the package was trying to create. For future reference:

<pre class="sh_sh">
rm /var/www/php
rm /var/www/docs
rm /var/www/index.html
rm /var/www/cgi-bin
rm /var/www/imgs
</pre>

