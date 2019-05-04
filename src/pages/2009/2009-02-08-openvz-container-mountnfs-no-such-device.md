---
title: OpenVZ CT mount.nfs No such device 
date: 2009-02-08
tags: debian,errors,kernel,modules,nfs,openvz,virtualization
---
#### Mounting NFS Shares from within OpenVZ Containers

Some of Debian's kernels with OpenVZ patches do not support **NFS** mounts within containers. Thankfully, some do. Its supposed to work with 2.6.26-1, but it doesn't. It does, however, work with a newer kernel, as well with the older Etch kernel!

When I try to mount the NFS file systems:

<pre class="sh_sh">
pro-101-gl:/var/www/virtual# mount -a
mount.nfs: No such device
</pre>

My VZ (previous) setup:

* Linux pro-100-gl.savonix.com 2.6.26-1-openvz-686 #1 SMP Mon Dec 15 20:27:00 UTC 2008 i686 GNU/Linux
* kernel.ve_allow_kthreads = 1
* modprobe nfs
* vzctl version 3.0.22
* FEATURES="nfs:on"

The newer kernel which supports NFS:

<pre class="sh_sh">
Linux pro-101-gl.savonix.com 2.6.26-2-openvz-amd64 #1 SMP Sun Jun 21 06:01:29 UTC 2009 i686 GNU/Linux
</pre>

With the only slightly newer kernel, all I had to do was **modprobe nfs** in the OpenVZ host.

<pre class="sh_sh">
# vzctl exec 101 cat /proc/filesystems	ext3	ext2
nodev	sysfs
nodev	proc
nodev	tmpfs
nodev	devpts
</pre>

On a machine with the original etch kernel (2.6.18), NFS client in a container works:

<pre class="sh_sh">
$ cat /proc/filesystems         ext3        ext2
nodev   rpc_pipefs
nodev   proc
nodev   sysfs
nodev   tmpfs
nodev   devpts
nodev   nfs
</pre>

#### Links

<a rel="nofollow" href="http://forum.openvz.org/index.php?&amp;t=msg&amp;th=6974">http://forum.openvz.org/index.php?&amp;t=msg&amp;th=6974</a>

