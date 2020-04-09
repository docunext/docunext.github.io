---
title: nfs user server on Debian OpenVZ
comments:
  - author: Marius M.
    email: devilx@devilx.net
    url: http://www.devilx.net
    date: 06/19/2009 06:41:30 AM
    text: >
      Hi there,<br/><br/>thank you BIG times for this post. Holy crap, I spent an hour on finding out why my Mac OS X tells me "Permission" deniend. Since I've converted a VM to an OpenVZ Container, I though that if it worked before, it actually HAS to work after. Ouff.<br/><br/>Thanks again! :-)
  - author: Albert
    email: albert.lash@savonix.com
    date: 06/19/2009 08:26:56 AM
    text: >
      Glad to help Marius, thanks for commenting!
date: 2009-01-29
tags: debian,nfs,openvz
---
I changed this in /etc/init.d/nfs-user-server:

<pre class="sh_sh">
        start-stop-daemon --start --oknodo --quiet --exec /usr/sbin/rpc.nfsd -- -r
        printf " nfsd"
        start-stop-daemon --start --oknodo --quiet --exec /usr/sbin/rpc.mountd
        -- -r
        printf " mountd"
        printf ".\n"
        ;;
stop)
        printf "Stopping $DESC:"
        start-stop-daemon --stop --oknodo --quiet --exec /usr/sbin/rpc.mountd
        printf " mountd"
        start-stop-daemon --stop --oknodo --quiet --exec /usr/sbin/rpc.nfsd
        printf " nfsd"
        printf ".\n"
        ;;
reload | force-reload)
        printf "Reloading $DESC' configuration files.\n"
        start-stop-daemon --stop --signal 1 --quiet --exec /usr/sbin/rpc.mountd -- -r
        start-stop-daemon --stop --signal 1 --quiet --exec /usr/sbin/rpc.nfsd -- -r
</pre>

Specifically the "-- -r" text at the end of the start-stop-daemon lines. Debian should probably include options in the /etc/default/nfs-user-kernel file.

¥

