---
title: flock
date: 2010-06-18
tags: shell
---
Myon wrote another blog post about cool unix features, this time about flock:

[Cool unix features: flock](http://www.df7cb.de/blog/2010/flock.html)

This is definitely of interest to me, as I've written some shell scripts recently which use a manual lock implementation which I'm not sure if it works as I'd intended.

For example, here's a shell script I wrote to be run when incron notices a filesystem event in the /etc/bind/ folder:

<pre class="sh_sh">
#!/bin/sh
# Copyright: Savonix Corporation - http://www.savonix.com/
# Author:    Albert Lash
# License:   MIT
# Date:      20090602
lockfile="/var/lock/rebuild_bind.lock"
if [ -f $lockfile ] ; then
    exit 0
else
    touch $lockfile
    sleep 20
    #/etc/init.d/bind9 restart
    /usr/sbin/rndc reload
    rm $lockfile
    exit 0
fi;
</pre>

The man page mentions a third form of using flock, like this:

<pre class="sh_sh">
(
         flock -s 200
         # ... commands executed under lock ...
       ) 200>/var/lock/mylockfile
</pre>

That's the one I'll use. Actually, it took me a few minutes to figure this one... the lock wasn't working for me when I was trying a non-blocking, exclusive lock. I did some more search and found this helpful page:

[using flock to protect critical sections in shell scripts](http://jdimpson.livejournal.com/5685.html)

This is now what I'm using:

<pre class="sh_sh">
#!/bin/sh
# Copyright: Savonix Corporation - http://www.savonix.com/
# Author:    Albert Lash
# License:   MIT
# Date:      20090602
exec 8>/var/lock/rebuild_bind.lock;
if flock -n -x 8; then
    /usr/sbin/rndc reload
    sleep 30;
fi
</pre>

The reason why I'm using sleep? My incron setup occasionally results in many triggers getting fired, and I only want one to result in the rebuilding of the bind database. I'll add some more logic to this, so that if something goes awry, it will alert me.

