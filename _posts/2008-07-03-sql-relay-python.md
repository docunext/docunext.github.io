---
title: SQL Relay Python
date: 2008-07-03
tags: none
author: Albert Lash
---
I'm installing sqlrelay-python on lenny to try it out with a new python powered framework I'm building.

<pre>
sudo apt-get install python-sqlrelay

Reading package lists... Done

Building dependency tree

Reading state information... Done

The following extra packages will be installed:  librudiments0.31 libsqlrelay-0.39 sqlrelay

Suggested packages:  librudiments-doc sqlrelay-doc sqlrelay-config-gtk sqlrelay-connection-daemon sqlrelay-api

The following NEW packages will be installed:  librudiments0.31 libsqlrelay-0.39 python-sqlrelay sqlrelay

0 upgraded, 4 newly installed, 0 to remove and 208 not upgraded.

Need to get 590kB of archives.

After this operation, 1761kB of additional disk space will be used.

Do you want to continue [Y/n]?

Get:1 http://ftp.us.debian.org testing/main librudiments0.31 0.31-2 [177kB]

Get:2 http://ftp.us.debian.org testing/main libsqlrelay-0.39 1:0.39.4-4 [185kB]

Get:3 http://ftp.us.debian.org testing/main sqlrelay 1:0.39.4-4 [158kB]

Get:4 http://ftp.us.debian.org testing/main python-sqlrelay 1:0.39.4-4 [69.4kB]

Fetched 590kB in 0s (639kB/s)

Selecting previously deselected package librudiments0.31.(Reading database ... 41856 files and directories currently installed.)

Unpacking librudiments0.31 (from .../librudiments0.31_0.31-2_i386.deb) ...

Selecting previously deselected package libsqlrelay-0.39.

Unpacking libsqlrelay-0.39 (from .../libsqlrelay-0.39_1%3a0.39.4-4_i386.deb) ...

Selecting previously deselected package sqlrelay.

Unpacking sqlrelay (from .../sqlrelay_1%3a0.39.4-4_i386.deb) ...

Selecting previously deselected package python-sqlrelay.

Unpacking python-sqlrelay (from .../python-sqlrelay_1%3a0.39.4-4_i386.deb) ...

Setting up librudiments0.31 (0.31-2) ...

Setting up libsqlrelay-0.39 (1:0.39.4-4) ...

Setting up sqlrelay (1:0.39.4-4) ...

Adding sqlrelay group

Adding group `sqlrelay' (GID 109) ...

Done.

sqlrelay:x:109:

Adding sqlrelay user

Warning: The home dir /var/cache/sqlrelay you specified already exists.

Adding system user `sqlrelay' (UID 109) ...

Adding new user `sqlrelay' (UID 109) with group `sqlrelay' ...

The home directory `/var/cache/sqlrelay' already exists.  Not copying from `/etc/skel'.

adduser: Warning: The home directory `/var/cache/sqlrelay' does not belong to the user you are currently creating.

sqlrelay:x:109:109:SQLRelay administrator,,,:/var/cache/sqlrelay:/bin/bash/etc/sqlrelay/instances empty.

Please read /usr/share/doc/sqlrelay/README.Debian.

Setting up python-sqlrelay (1:0.39.4-4) ...

apt-get install sqlrelay-mysql</pre>

Indeed, to start sqlrelay, you do have to edit /etc/sqlrelay/instances.

