---
title: DRBD install on Debian
date: 2007-06-08
tags: debian,drbd,drbd8,nfs
---
<strong>This is how I install and run DRDB on Debian GNU/Linux using module-assistant.</strong>

<pre>/usr/src/modules/drbd/drbd# make
Calling toplevel makefile of kernel source tree, which I believe is in    KDIR=/lib/modules/2.6.20-1-amd64/build
SORRY, kernel makefile not found. You need to tell me a correct KDIR!
make: *** [greeting] Error 1</pre>

I ended up using the module-assistant, worked fine.

Couple of questions though, why only 10M for speed? Why not 100M? It is megabytes not megabits, but that should still be OK over a GigE line.

Works good though, I'm pretty pumped about this, it makes for some seriously strong setups. Again thanks to Falko for making the setup so easy, though a couple of things are different when using Etch.

I found these links helpful:

* <a href="http://www.linux-ha.org/DRBD/NFS">http://www.linux-ha.org/DRBD/NFS</a>
* <a href="http://www.howtoforge.com/high_availability_nfs_drbd_heartbeat">http://www.howtoforge.com/high_availability_nfs_drbd_heartbeat</a>
* <a href="http://svn.drbd.org/drbd/branches/drbd-0.7/INSTALL">http://svn.drbd.org/drbd/branches/drbd-0.7/INSTALL</a>

