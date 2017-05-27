---
title: Trying out mod wombat an in development LUA Module for Apache2
date: 2008-06-30
tags: apache,lua,mysql,xml
---
I'm finally trying to setup mod_wombat:

<pre>sudo apt-get install apache2-threaded-dev liblua5.1-0-dev libapreq2-dev
cd /usr/src/
svn co http://svn.apache.org/repos/asf/httpd/mod_wombat/trunk/ ./mod_wombat
cd ./mod_wombat./buildconf./configure --with-mpm=worker --enable-so --with-apxs=/usr/bin/apxs2 --with-apreq2=/usr/</pre>

Some configure warnings, but then make gives an error:

<pre>/usr/share/apr-1.0/build/libtool --silent --mode=compile --tag=disable-static i486-linux-gnu-gcc -prefer-pic -DLINUX=2 -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -D_LARGEFILE64_SOURCE -D_REENTRANT -I/usr/include/apr-1.0 -I/usr/include/openssl -I/usr/include/postgresql -I/usr/include/xmltok -pthread     -I/usr/include/apache2  -I/usr/include/apr-1.0   -I/usr/include/apr-1.0 -I/usr/include/postgresql -Wall -Werror -I/usr//include/apreq2 -I/usr/include/lua5.1  -c -o config.lo config.c &amp;&amp; touch config.slo
config.c:197:2: error: no newline at end of file
apxs:Error: Command failed with rc=65536.
make: *** [mod_wombat.la] Error 1</pre>

I added ";\n" to the end, ( a real newline ), and it compiled. With a sudo make install, seems to be OK.  I just tried out the Hello World example, and it worked!

<blockquote>
<h4>Hello Lua World!</h4></blockquote>

I couldn't get the script to execute in a non-public directory, but I didn't go through the configuration directives with a fine toothed comb. This is a great little tool, it bridges the gap between mod_rewrite  / varnish and mod_perl / aolserver. :-)

NOTE: I've got to remember that Lua is also used with mysql_proxy.

If this is something that you are interested in, you might want to check out the work <a href="http://code.google.com/soc/2008/asf/appinfo.html?csaid=552311F7C8B469E">Maxime Petazonni is doing for the Google Summer of Code</a>.

Other external links:

* http://lua-users.org/wiki/LuaXml
* http://asbradbury.org/projects/lua-xmlreader/

