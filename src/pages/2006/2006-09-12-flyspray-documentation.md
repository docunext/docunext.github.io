---
title: Flyspray Documentation
date: 2006-09-12
---
<h3 id="toc0">Flyspray Installation</h3><p>Thankfully flyspray is in the debian repository, so I'm going to go ahead and apt-get install it. In the future, I will likely try to integrate it with other applications, at which point it would make sense to install it manually.</p>
<p><pre>
Reading package lists... Done

Building dependency tree... Done

The following extra packages will be installed:  libphp-adodb wwwconfig-common

Suggested packages:  postgresql-client apache apache-ssl

Recommended packages:  graphviz php4-mysql php4-pgsql php5-pgsql php4-sybase php5-sybase php4-odbc php5-odbc

The following NEW packages will be installed  flyspray libphp-adodb wwwconfig-common

0 upgraded, 3 newly installed, 0 to remove and 35 not upgraded.

1 not fully installed or removed.

Need to get 819kB of archives.

After unpacking 4448kB of additional disk space will be used.

Do you want to continue [Y/n]?                                                 lqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqu Configuring libphp-adodb tqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqk                                                                                                 x                                                                                                              x                                                                                                 x WARNING: include path for php has changed!                                                                   x                                                                                                 x                                                                                                              x                                                                                                 x libphp-adodb is no longer installed in /usr/share/adodb. New installation path is now /usr/share/php/adodb.  x                                                                                                 x                                                                                                              x                                                                                                 x Please update your php.ini file. Maybe you must also change your web-server configuraton.                    x                                                                                                 x                                                                                                              x                                                                                                 x                                                    <Ok>                                                      x                                                                                                 x                                                                                                              x                                                                                                 mqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqj                                                    lqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqu Flyspray tqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqk       x                                                                                                                                                                                                        x       x Should the data (attached files and databases entries) be removed when the flyspray packages is purged with the "dpkg --purge flyspray" command (i.e. remove everything including the configuration)?  x       x                                                                                                                                                                                                        x       x Remove web site data after "purging" the flyspray package?                                                                                                                                             x       x                                                                                                                                                                                                        x       x                                                              <Yes>                                                                 <No>                                                                x       x                                                                                                                                                                                                        x       mqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqj    </pre></p>
<p>I ran into a problem when the debconf script tried to restart the database. It would hang, so I interrupted it. Seemed like it may have messed up my mysql tables a little, but so far the only error I get is:

<pre>
Stopping MySQL database server: mysqld.

Starting MySQL database server: mysqld.

Checking for corrupt, not cleanly closed and upgrade needing tables..</pre>

After that, I started to manually configure it. This is where flyspray really impressed me, it has a guided setup which is very easy to follow. The debian installer omitted a few things (setup and sql), but other than that, it was a cakewalk.</p>
<p>All in all, I was able to install flyspray in a half an hour.</p><h3 id="toc1">Flyspray Operation</h3>
