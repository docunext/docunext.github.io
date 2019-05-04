---
title: NFS Export and Mount Options
comments:
  - author: Albert
    email: albert.lash@savonix.com
    ip: 192.168.8.2
    url:
    date: 02/07/2009 11:59:12 PM
    text: >
      These options are working great for me within IPSec over the internet, using a 10M pipe. :-)
date: 2009-02-06
---
I keep getting lockups and hanging delays with my NFS setup, so I continue to experiment.

Server /etc/exports:

<pre>/var/www  *(rw,sync,fsid=0,no_acl,insecure,insecure_locks,no_subtree_check,no_root_squash)</pre>

Client /etc/fstab:

<pre>
192.168.8.91:/dev/ /mnt/imports/dev-91-gl  nfs4    rsize=1024,wsize=1024,hard,rw,timeo=4,intr,proto=udp 0 0</pre>

¥

