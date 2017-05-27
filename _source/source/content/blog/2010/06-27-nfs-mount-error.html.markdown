---
title: NFS Mount Error
date: 2010-06-27
tags: nfs
---
I tried mounting an NFS share over OpenVPN on a Linode VPS. At first I was getting this error:

<pre class="sh_sh">
# mount /var/www/virtual
mount.nfs: an incorrect mount option was specified
</pre>

Digging into dmesg led to this error:

<pre class="sh_sh">
NFS: bad mount option value specified: vers=4
</pre>

Apparently the linode kernel only has support for version 3, and thanks to this [nfs mount error blog post](http://lifeasasysadmin.blogspot.com/2010/05/nfs-mount-error.html) at [My Life as a Sysadmin](http://lifeasasysadmin.blogspot.com/), I was able to find a workaround:

<pre class="sh_sh">
192.168.8.2:/var/www/virtual  /var/www/virtual nfs    _netdev,noatime,rw,vers=3 0 0
</pre>

