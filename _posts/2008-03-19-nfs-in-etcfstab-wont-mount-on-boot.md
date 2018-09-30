---
title: NFS in etc fstab won t mount on boot
date: 2008-03-19
tags: file systems,nfs
---
Just figured this out... I wanted /usr/, /var/lib/ and /var/cache to get mounted on boot. In my situation, I had to set eth0 to auto instead of allow-hotplug in /etc/network/interfaces, as well as remove /var/run/network/mountfns, which I believe is used as a locking mechanism to prevent mounting a remote filesystem more than once.

Works great for me!

