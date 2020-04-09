---
title: Linode versus OpenVZ
date: 2012-07-13
tags: hosting,linode,lxc,openvz
author: Albert
---
I run two linodes and both run custom kernels a la pv\_grub, enabling me to run
openvz containers in them (I know, how cool is that!!?!?).

However, on Thursday night, for no apparent reason, one failed to boot. The
other rebooted fine (yes I'm that type of guy) the first time, but not the
second. A couple hours later, both booted fine again. I still value linode
(because they rock), but I think due to debian's dropping of OpenVZ support I'll
switch to LXC.

The problem with LXC is that it doesn't support resource constraints, so
presumably one container could starve out another, but it is planned. And in the
case of LXC, planned is OK, as in the short time I've been using it (about
a year) its support in Debian / Ubuntu / Mint has drastically improved.

The other feature I'll miss from OpenVZ is vzdump's support of lvm snapshots.
I'll be able to do pretty much the same thing with lxc, but I'll have to do it
manually with lvm and tar. Not a big deal.

### A Real Fix:

http://forum.linode.com/viewtopic.php?p=46969&sid=6873e12cb6c1ef65e3ca1917bb34531f

Reducing the amount of RAM that is available to the host machine via the linode
panel.

### Syslog-ng in OpenVZ

No caps!

* http://pyro.eu.org/how-to/micro/syslog-ng-error-setting-capabilities-openvz.txt

