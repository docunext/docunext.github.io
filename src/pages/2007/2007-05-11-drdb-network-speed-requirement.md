---
title: drdb network speed requirement
date: 2007-05-11
tags: drbd,network
---
I wonder if its possible to use drdb over a slow link like 768k uplink? Good question, but a better question is what I'm REALLY trying to accomplish. I like the idea of clusters, high availability, logical volumes, and virtual machines, but what am I trying to accomplish? I would like to setup:

<ul><li>Fault tolerance</li><li>High availability</li><li>Redundancy</li><li>Distributed storage</li></ul>

These thoughts are reminding me of my theories on synchronization versus backups.

Redundancy could be achieved by heartbeat, gfarm, glusterfs... distributed filesystems.

#### sshfs?

In the meantime, sshfs on debian:

apt-get install libfuse2 fuse-utils sshfs

trying to mount gives error:

fuse: failed to exec fusermount: Permission denied

tried:

sudo chmod +x /usr/bin/fusermount(or could have added myself to the fuse group.)

then:

fusermount: fuse device not found, try 'modprobe fuse' first

am now updating the kernel... hmm, looks like its not going to reboot. :-(

Argh, an old kernel keeps on messing up my kernel updates. I'll ignore it for now and just update grub/menu.lst. Done, is the fuse module available? Yes, got it to work.

As Amit at Google mentions, sshfs is not a distributed file system, and if you have a vpn setup, the extra encryption is plain overhead. What to do? There is no gfarmfs package for debian, and I'm not sure if that's even what I'm looking for.

#### Storage Area Networks

ATA over Ethernet using vblade / aoetools, then setting up a raid5 with those devices? That still does not provide multi-homed access to the same volume. Hmm.
<h3></h3>

Searching for... "distributed cluster file system bandwidth requirements"... not coming up with much, but it appears that it is high. I bet distributed parallel fault tolerant filesystems would have high bandwidth requirements.

Intermezzo (based on CODA) looks great! Reminds me of mysql replication. Well no I guess the developers, who stopped working on coda to work on intermezzo, are now working on lustre. Ugh. Wait, according to the CODA wiki, development is active, but it is still not user-friendly.<hr/>

It is starting to make sense that heartbeat exists the way it does. Setting up a distributed fault tolerant filesystem is pretty challenging. There are a ton of different options and potential solutions.

<a href="http://en.wikipedia.org/wiki/High-availability_cluster">http://en.wikipedia.org/wiki/High-availability_cluster</a>

<a href="http://www.debian-administration.org/articles/348">http://www.debian-administration.org/articles/348</a>

<a href="http://lists.openwall.net/linux-ext4/2006/12/15/4">http://lists.openwall.net/linux-ext4/2006/12/15/4</a>

<a href="https://www-s.acm.uiuc.edu/wiki/space/iSCSI+Linux+diskless+booting">

https://www-s.acm.uiuc.edu/wiki/space/iSCSI+Linux+diskless+booting</a>

<a href="http://www.howtoforge.com/high_availability_loadbalanced_apache_cluster">http://www.howtoforge.com/high_availability_loadbalanced_apache_cluster</a>

<a href="http://kb.linuxvirtualserver.org/wiki/Main_Page">http://kb.linuxvirtualserver.org/wiki/Main_Page</a>

Stuff:

Linux-HA: high availability cluster (heartbeat)

Linux Virtual Server: load balancing

Ultra monkey:  both load balancing and high availability

In this way, you can build a virtual infrastructure which can be configured and manipulated via software. :-)

From what I can tell, most big web companies have the following setup:

dig domain name returns two (or more) a records with a low ttl (300)

dig www. domain name returns CNAME value with a longer ttl (14400?) to an a record with a very low ttl (300)

dig ns domain name returns many ns servers (all with long ttls), each of which returns the same values for the other inquiries

I am going to try and setup two separate ultra monkey configurations. The will not be connected, but the secondary will be a day-old backup of the primary. In the event of primary failure, the dns will be updated to the secondary, where <b>files</b>-only will be read only. Other than that, the system should perform normally. Can incoming mail be queued, and can outgoing sent mail be bcc'd to the sender for archival?

