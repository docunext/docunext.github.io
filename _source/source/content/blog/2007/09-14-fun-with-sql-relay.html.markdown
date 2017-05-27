---
title: Fun with SQL Relay
date: 2007-09-14
tags: sql,xml
---
SQL Relay is a connection pooling, load balancing, fail over system for databases. Cool, huh?

I'm trying it out on a debian machine, because debian has a SQL Relay package, actually quite a few of them.

<pre>apt-get install sqlrelay-mysql
Building dependency tree... Done
The following extra packages will be installed:  librudiments0.29 libsqlrelay-0.37
Suggested packages:  librudiments-doc sqlrelay-doc
The following NEW packages will be installed:  librudiments0.29 libsqlrelay-0.37 sqlrelay-mysql
0 upgraded, 3 newly installed, 0 to remove and 5 not upgraded.
Need to get 349kB of archives.
After unpacking 1262kB of additional disk space will be used.
Do you want to continue [Y/n]? </pre>

Hmm, I should probably install sqlrelay itself!

<pre># apt-get install sqlrelay
Reading package lists... Done
Building dependency tree... Done
The following extra packages will be installed:  libxml2-utils
Suggested packages:  sqlrelay-doc sqlrelay-config-gtk sqlrelay-api
The following NEW packages will be installed:  libxml2-utils sqlrelay
0 upgraded, 2 newly installed, 0 to remove and 5 not upgraded.
Need to get 148kB of archives.
After unpacking 532kB of additional disk space will be used.
Do you want to continue [Y/n]?
Get:1 http://ftp.debian.org etch/main libxml2-utils 2.6.27.dfsg-1 [34.5kB]
Get:2 http://ftp.debian.org etch/main sqlrelay 1:0.37.1-3.1 [113kB]
Fetched 148kB in 1s (77.5kB/s)
Selecting previously deselected package libxml2-utils.(Reading database ... 17656 files and directories currently installed.)
Unpacking libxml2-utils (from .../libxml2-utils_2.6.27.dfsg-1_i386.deb) ...
Selecting previously deselected package sqlrelay.
Unpacking sqlrelay (from .../sqlrelay_1%3a0.37.1-3.1_i386.deb) ...
Setting up libxml2-utils (2.6.27.dfsg-1) ...
Setting up sqlrelay (0.37.1-3.1) ...
Adding sqlrelay group
Adding group `sqlrelay' (GID 104) ...
Done.
sqlrelay:x:104:
Adding sqlrelay user
Adding system user `sqlrelay' (UID 102) ...
Adding new user `sqlrelay' (UID 102) with group `sqlrelay' ...
Creating home directory `/var/cache/sqlrelay' ...
sqlrelay:x:102:104:SQLRelay administrator,,,:/var/cache/sqlrelay:/bin/bash</pre>

The configuration files are in XML - looks good! I just read a bunch of the sqlrelay documentation, and I have to say it really looks awesome. I'm confused though, it doesn't seem like many people have or are using it. There don't seem to be too many user reports out there, which is a great reason to really experiment with it and share what I find. :-)

