---
title: NFS Stuff
date: 2007-10-11
tags: linux,nfs
---
I'm liking NFS more and more. My notes for today:

#### NFS Server

Easy to setup on debian, apt-get install nfs-kernel-server. It will include the required dependencies. Edit /etc/exports.

#### NFS Client

I was setting up NFS on a minimal linux server, so in my kernel I added support for NFS client. Then when I tried to mount, I received these errors:

<pre>rpcbind: server localhost not responding, timed out
RPC: failed to contact local rpcbind server (errno 5).</pre>

That is because I wasn't running a local portmapper service. To avoid having to do so, I used these options:

<pre>mount -t nfs -o nolock example.com:/export /import</pre>

That worked for me. :-)

