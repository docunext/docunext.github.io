---
title: Global File System GFS on Debian 
comments:
  - author: sulio
    email: loop@iservice.bg
    date: 09/12/2008 12:38:49 PM
    text: >
      That's probably because GFS(2) is intended to work over a LVM volume. You have to put LVM on top of the DRBD device, and format that logical volume instead. ALso you must put in work the whole red-hat cluster stuff to make that work.<br/><br/>Greets.
date: 2007-09-02
tags: debian,drbd
---
[ <b>UPDATE: In the future, I will instead go with <a href="http://www.docunext.com/blog/2007/09/drbd-and-ocfs2.html">OCFS2</a>, it worked well and was much easier to setup and get operational.</b> ]

Build drbd module one two machines, setup storage on each machine... setup drbd.conf (in my process, I had already formatted as ext3, but I'm planning to switch to gfs somehow).

allow-two-primaries;

drbdadm -- --overwrite-data-of-peer primary all

cluster.conf....

<pre># ccs_tool lsnode
Cluster name: alpha, config_version: 1
Nodename                        Votes Nodeid Iface Fencetype
Segmentation fault</pre>

need kernel modules? Nope, gfs2 there.

<pre class="sh_sh">
gfs_mkfs -p lock_dlm -t alpha:blah -j 2 /dev/drbd0
This will destroy any data on /dev/drbd0.  It appears to contain a EXT2/3 filesystem.
Are you sure you want to proceed? [y/n] y
Device:                    /dev/drbd0
Blocksize:                 4096
Filesystem Size:           151288
Journals:                  2
Resource Groups:           8
Locking Protocol:          lock_dlm
Lock Table:                alpha:blah
Syncing...
All Done# mount /dev/drbd0 /mnt/
mount: unknown filesystem type 'gfs'</pre>

DOH!

<pre>
make -C /lib/modules/`uname -r`/build
M=/usr/src/cluster-2.01.00/gfs-kernel/src/gfs symverfile=/lib/modules/`uname -r`/build/Module.symvers modules USING_KBUILD=yes
make[2]: Entering directory `/usr/src/linux-headers-2.6.22-1-686'  CC [M]  /usr/src/cluster-2.01.00/gfs-kernel/src/gfs/main.o/usr/src/cluster-2.01.00/gfs-kernel/src/gfs/main.c: In function 'init_gfs_fs':/usr/src/cluster-2.01.00/gfs-kernel/src/gfs/main.c:53: error: too few arguments to function 'kmem_cache_create'</pre>

Not too promising:

<a href="http://ubuntuforums.org/showthread.php?t=346076">http://ubuntuforums.org/showthread.php?t=346076</a>

This page suggests that libxml2-dev is required:

<a href="http://www.redhat.com/archives/linux-cluster/2005-July/msg00239.html">http://www.redhat.com/archives/linux-cluster/2005-July/msg00239.html</a><b>But I'm still getting an error, which I believe is due to my kernel version:</b>

Can't open /usr/src/linux-2.6/include/linux/utsrelease.h

<a href="http://www.metainfo.jp/memo/?cat=30">http://www.metainfo.jp/memo/?cat=30</a>

http://www.techforce.com.br/index.php/news/linux_blog/red_hat_cluster_suite_debian_etch

http://mirror.centos.org/centos/4/docs/html/rh-gfs-en-6.1/

http://lists.linbit.com/pipermail/drbd-dev/2005-August/000310.html

http://www.nabble.com/restart-of-one-node-refusing-to-update-,-gfs-,-drbd-8.0.3-t3954180.html

http://www.gossamer-threads.com/lists/drbd/users/12300

http://svn.drbd.org/drbd/trunk/scripts/drbd.conf

http://www.ethanet.com/FC4GFS/index.php?title=Main_Page

https://open.datacore.ch/DCwiki.open/Wiki.jsp?page=GFS.Install

http://www.linuxjournal.com/article/8149

¥

