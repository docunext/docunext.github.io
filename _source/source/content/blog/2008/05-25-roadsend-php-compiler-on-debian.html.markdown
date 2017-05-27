---
title: Roadsend PHP Compiler on Debian
date: 2008-05-25
tags: php
---
I'm trying to install Roadsend PHP compiler on bart, which runs Debian Lenny (testing).

<a href="http://forums.roadsend.com/viewtopic.php?t=268">
http://forums.roadsend.com/viewtopic.php?t=268
</a>

Everything seemed to go ok, but then when I changed directories to /usr/local/bin and tried to run pcc, I got this error:

<pre class="sh_sh">pcc: error while loading shared libraries: libphp-runtime_u-3.0c.so: cannot open shared object file: No such file or directory
</pre>

I guess you have to specify --prefix explicitly because I ran make clean and ./configure without --prefix=/usr/local but it still installed to the same place. I created symlinks for all the pcc libs to /usr/lib and it ran fine:

<pre class="sh_sh">bart111:~# pcc
Roadsend PHP/2.9.7
Usage: pcc [options] [-- script args]
see pcc -h for help with command line options
</pre>

I compiled a simple hello world file:

<pre class="sh_php">echo "hi";?&gt;
</pre>

like this:

<pre class="sh_sh">pcc blah.php
</pre>

which produces "blah" and "blah.o". Then blah can be run as a binary:

<pre class="sh_sh">bart111:~# ./blah
hibart111:~#
</pre>

Awesome. Absolutely awesome!!! This gives the impression that its going to have a substantial impact on the PHP developer community, in a good way. And also for minimalist projects like m0n0wall and pfSense which could seriously benefit from pre-compiled scripts.

Up next, working on building a basic fcgi web application:

<a href="http://code.roadsend.com/pcc-manual/Building-and-Using-Compiled-Web-Applications.html">http://code.roadsend.com/pcc-manual/Building-and-Using-Compiled-Web-Applications.html
</a>

This is really interesting - the resulting fastcgi binary appears to include and preserve the file structures that existed prior to building. Its actually pretty cool - so if you have a file called form.php, its contents would then be available from appname.fcgi/form.php, even though there is no file named form.php being accessed by the webserver.

Also, getting the fcgi binary to work with mod_fcgid was a breeze. I'll write up instructions if anyone is interested.

This is a useful command for me:

<pre class="sh_sh">sudo /etc/init.d/apache2 force-reload &amp;&amp;  sudo cp hello.fcgi libhello_u-3.0c.so /usr/lib/cgi-bin/
</pre>

Here's the output of "phpinfo()":
<iframe width="100%" src="http://www.docunext.com/blog/2008/05/roadsend_phpinfo.html" class="wp-syntax">
</iframe>

So far so good, I've been coding up a little web app, nothing fancy, just to try it out. One strange thing though, when using ob_flush, the output of the HTML includes this:

<pre class="sh_xml">#
&lt;output_string_port&gt;
&lt;/output_string_port&gt;
</pre>

at the very end...

<b>Tracings
</b>

Running strace on the hello.fcgi process:

<pre class="sh_sh">Process 3822 attached - interrupt to quit
accept(0, {sa_family=AF_FILE, path=@}, [2]) = 3
select(4, [3], NULL, NULL, {2, 0})      = 1 (in [3], left {2, 0})
read(3, "\1\1\0\1\0\10\0\0\0\1\0\0\0\0\0\0\1\4\0\1\4\351\0\0\n\24"..., 8192) = 1297
gettimeofday({1211739692, 210660}, {240, 0}) = 0
gettimeofday({1211739692, 219165}, {240, 0}) = 0
write(3, "\1\6\0\1\1l\4\0Content-Length: 316\r\nCon"..., 400) = 400
shutdown(3, 1 /* send */)               = 0
select(4, [3], NULL, NULL, {2, 0})      = 1 (in [3], left {2, 0})
read(3, "", 1024)                       = 0
close(3)                                = 0
accept(0, {sa_family=AF_FILE, path=@}, [2]) = 3
select(4, [3], NULL, NULL, {2, 0})      = 1 (in [3], left {2, 0})
read(3, "\1\1\0\1\0\10\0\0\0\1\0\0\0\0\0\0\1\4\0\1\4\351\0\0\n\24"..., 8192) = 1297
gettimeofday({1211739709, 514093}, {240, 0}) = 0
sigprocmask(SIG_BLOCK, NULL, [])        = 0
gettimeofday({1211739709, 532518}, {240, 0}) = 0
write(3, "\1\6\0\1\1l\4\0Content-Length: 316\r\nCon"..., 400) = 400
shutdown(3, 1 /* send */)               = 0
select(4, [3], NULL, NULL, {2, 0})      = 1 (in [3], left {2, 0})
read(3, "", 1024)                       = 0
close(3)                                = 0
accept(0,
</pre>

Its interesting that the second request includes "sigprocmask". Not sure what that is, but it results in the process requiring more time to complete.

The same uncompiled code run through the php5-cgi intepreter (which is faster, btw) has a much more involved stracing:

<pre class="sh_sh">Process 3821 attached - interrupt to quit
accept(0, {sa_family=AF_FILE, path=""}, [2]) = 3
poll([{fd=3, events=POLLIN, revents=POLLIN}], 1, 5000) = 1
read(3, "\1\1\0\1\0\10\0\0", 8)         = 8
read(3, "\0\1\0\0\0\0\0\0", 8)          = 8
read(3, "\1\4\0\1\5\6\0\0", 8)          = 8
read(3, "\n\31SCRIPT_URL/more_pcc_stuff/inde"..., 1286) = 1286
read(3, "\1\4\0\1\0\0\0\0", 8)          = 8
time(NULL)                              = 1211739842
lstat64("/var", {st_mode=S_IFDIR|0755, st_size=4096, ...}) = 0
lstat64("/var/www", {st_mode=S_IFDIR|0775, st_size=4096, ...}) = 0
lstat64("/var/www/more_pcc_stuff", {st_mode=S_IFDIR|0755, st_size=4096, ...}) = 0
lstat64("/var/www/more_pcc_stuff/index.php", {st_mode=S_IFREG|0644, st_size=269, ...}) = 0
setitimer(ITIMER_PROF, {it_interval={0, 0}, it_value={60, 0}}, NULL) = 0
rt_sigaction(SIGPROF, {0x82ad800, [PROF], SA_RESTORER|SA_RESTART, 0xb7a20e38}, {0x82ad800, [PROF], SA_RESTORER|SA_RESTART, 0xb7a20e38}, 8) = 0
rt_sigprocmask(SIG_UNBLOCK, [PROF], NULL, 8) = 0
time(NULL)                              = 1211739842
open("/var/www/more_pcc_stuff/index.php", O_RDONLY|O_LARGEFILE) = 4
fstat64(4, {st_mode=S_IFREG|0644, st_size=269, ...}) = 0
time(NULL)                              = 1211739842
chdir("/var/www/more_pcc_stuff")        = 0
fstat64(4, {st_mode=S_IFREG|0644, st_size=269, ...}) = 0
mmap2(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xb7f6c000
read(4,
</pre>

I finally got a static binary to compile, I kept getting library linking errors for libcurl. Then I found a reference to curl-config --libs, which informed me of what I needed to know. I added this to my config:

<pre lang="php">; flags passed to ld while linking a binary that uses the named extension(ldflags standard   -lresolv -lm -lcrypt)(ldflags mysql      -L/usr/lib/mysql -lmysqlclient)(ldflags odbc       )(ldflags sqlite     -I/usr/include -lsqlite3)(ldflags curl       -lcurl -L/usr/lib -lcurl -L/usr/lib -lgssapi -lcom_err -lresolv -lidn -lssl -lcrypto -ldl -lssl -lcrypto -lz)(ldflags xml        -lxml2  )(ldflags fastcgi    -lfcgi);(ldflags gtk       @GTK_LIBS@)
</pre>

and then ran:

<pre class="sh_sh"> /usr/bin/pcc -c /usr/etc/pcc.conf -d 2 --force-rebuild --static -O --fastcgi hello footer.php form.php index.php info.php timer.php
</pre>

Although I'm not getting the performance gains I'd hoped (the roadsend compiled binary is still a tad slower than the php interpreted version on my development machine), I have to say that this is really awesome. In some ways I'm comparing apples to oranges, there may be compiler options I can change to optimize the performance for speed, size, or memory.

This page is helpful:

<a href="http://code.roadsend.com/pcc/wiki/Internals">Roadsend PCC Internals
</a>

<b>
</b><div><b>Parrot, PHC, Project Zero, and Quercus?
</b>

In researching this topic, I discovered that there are a few other php implementations out there. Parrot is the new perl 6 vm which is designed to support a variety of interpreted languages, and quercus is a java application server which can also interpret php. Project Zero and Quercus are Java CLI VMs - very interesting. At this point, PHC simply parses PHP code, but does not compile it into anything else, AFAIK.
</div><div>
</div><div><a href="http://www.docunext.com/wiki/Roadsend_PHP_Compiler">Roadsend PHP Compiler</a></div>

