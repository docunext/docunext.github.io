---
title: Mount NFS share from Mac OS X client
comments:
  - author: mike
    email: bucky_geo@bigpond.com
    date: 12/12/2007 09:56:46 PM
    text: >
      Thanks - it worked for me.
  - author: Albert
    date: 12/13/2007 04:23:46 PM
    text: >
      Great! Glad to hear it, and thanks for commenting.
  - author: Andy Drummachine
    email: everybodyintheplaceletsgo@yahoo.com
    date: 04/03/2009 09:14:16 AM
    text: >
      Thanx, Albert.
date: 2007-06-06
tags: Apple,mac,nfs
---
I thought it would be much hard to mount an NFS share onto a Mac OS X client, but I did run into some issues I'll share here.

I tried: <pre>sudo mount_nfs your_nfs_server_address:/your/nfs/export your_target_directory</pre>

but got this error:

<pre>mount_nfs: /path/to/your/target_mount: Operation not permitted</pre>

To fix, use the -P flag, like so:

<pre>sudo mount_nfs -P your_nfs_server_address:/your/nfs/export your_target_directory</pre>

¥
