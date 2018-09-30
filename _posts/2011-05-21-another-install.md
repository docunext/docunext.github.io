---
title: Another Ruby Install on Debian
date: 2011-05-21
tags: ruby
---
For reference, an install of Ruby on Debian:

<pre class="terminal">
Get:1 http://cdn.debian.net/debian/ squeeze/main libtidy-0.99-0 i386 20091223cvs-1 [138 kB]
Get:2 http://cdn.debian.net/debian/ squeeze/main libtidy-dev i386 20091223cvs-1 [168 kB]
Get:3 http://cdn.debian.net/debian/ squeeze/main tidy i386 20091223cvs-1 [27.1 kB]
Fetched 333 kB in 2s (139 kB/s)
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
	LANGUAGE = (unset),
	LC_ALL = (unset),
	LANG = "en_US.UTF-8"
    are supported and installed on your system.
perl: warning: Falling back to the standard locale ("C").
locale: Cannot set LC_CTYPE to default locale: No such file or directory
locale: Cannot set LC_MESSAGES to default locale: No such file or directory
locale: Cannot set LC_ALL to default locale: No such file or directory
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously deselected package libtidy-0.99-0.
(Reading database ... 19849 files and directories currently installed.)
Unpacking libtidy-0.99-0 (from .../libtidy-0.99-0_20091223cvs-1_i386.deb) ...
Selecting previously deselected package libtidy-dev.
Unpacking libtidy-dev (from .../libtidy-dev_20091223cvs-1_i386.deb) ...
Selecting previously deselected package tidy.
Unpacking tidy (from .../tidy_20091223cvs-1_i386.deb) ...
Setting up libtidy-0.99-0 (20091223cvs-1) ...
Setting up libtidy-dev (20091223cvs-1) ...
Setting up tidy (20091223cvs-1) ...
root@fatherswork:/home/fatherswork/fatherswork.com# sh dev2.sh
I, [2011-05-21T21:04:46.593551 #9387]  INFO -- : listening on addr=0.0.0.0:3000 fd=3
I, [2011-05-21T21:04:46.593912 #9387]  INFO -- : worker=0 spawning...
I, [2011-05-21T21:04:46.594595 #9387]  INFO -- : master process ready
I, [2011-05-21T21:04:46.596002 #9389]  INFO -- : worker=0 spawned pid=9389
I, [2011-05-21T21:04:46.596394 #9389]  INFO -- : Refreshing Gem list
worker=0 ready
resolving
192.168.99.1 - - [21/May/2011 21:07:01] "GET /site/welcome.mdwn HTTP/1.1" 200 7574 0.1385
192.168.99.1 - - [21/May/2011 21:07:01] "GET /s/js/jquery/plugins/jquery.datepick.js HTTP/1.1" 200 82684 0.0026
192.168.99.1 - - [21/May/2011 21:07:01] "GET /s/css/pkgs/yui-app-theme/css/yuiapp.css HTTP/1.1" 200 4526 0.0012
192.168.99.1 - - [21/May/2011 21:07:01] "GET /s/css/pkgs/yui-app-theme/css/yuiapp-layouts.css HTTP/1.1" 200 101 0.0011
192.168.99.1 - - [21/May/2011 21:07:01] "GET /stylesheets/app.css HTTP/1.1" 200 6478 0.0010
192.168.99.1 - - [21/May/2011 21:07:01] "GET /s/js/jquery/plugins/jquery.droppy.js HTTP/1.1" 200 1544 0.0011
192.168.99.1 - - [21/May/2011 21:07:01] "GET /s/js/fatherswork.js HTTP/1.1" 200 963 0.0010
192.168.99.1 - - [21/May/2011 21:07:02] "GET /s/css/jquery.datepick.css HTTP/1.1" 200 4349 0.0023
192.168.99.1 - - [21/May/2011 21:07:02] "GET /s/img/header_fade.png HTTP/1.1" 200 7400 0.0024
resolving
^CE, [2011-05-21T21:08:32.222464 #9387] ERROR -- : reaped #<Process::Status: pid 9389 SIGKILL (signal 9)> worker=0
I, [2011-05-21T21:08:32.222629 #9387]  INFO -- : master complete
</pre>

