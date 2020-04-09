---
title: FreeNAS with FreeBSD 7 and Support for the ZFS Filesystem
comments:
  - author: erast
    email: erast@gnusolaris.org
    url: http://www.nexenta.org
    date: 04/17/2008 11:33:58 PM
    text: >
      As an alternative to FreeNAS - try NexentaStor - it is free for up to 1TB deployments
  - author: Albert
    date: 04/18/2008 10:28:11 AM
    text: >
      Hi Erast, how is NexentaStor different than the open source Nexenta? Are there proprietary components?
  - author: Joe Little
    email: jmlittle@gmail.com
    url: http://jmlittle.blogspot.com
    date: 04/18/2008 12:47:44 PM
    text: >
      I'm a little partisan to NexentaStor, but yes, its a full appliance targeted at being a NAS, and its Nexenta's commercial solution that sits on top of Nexenta Core. Its proprietary in that the management layer is not open source, but the APIs to use and extend are published. Their Developer Edition is free to 1TB, and their Basic subscription model for 2, 4, or 6TB is extremely cheap, but is supported. I've been following the free/OS NAS as well as some commercial variants based on Linux/BSD for quite some time, and we've settled on NexentaStor long term. 50TB currently, and expect to hit 70TB this year.
  - author: Albert
    date: 04/19/2008 12:37:55 AM
    text: >
      No problem there - it sounds awesome. Its overkill for me, and I'm interested in trying out their developer edition. I've been having a heck of a time with hardware drivers on nexenta lately though - I'll have to identify some confirmed compatibility sets and try those out.
  - author: Matt Newcombe
    email: blog@sysadminman.net
    url: http://sysadminman.net
    date: 04/22/2008 09:25:09 PM
    text: >
      ZFS on FreeNAS would be extremely cool.<br/><br/>We starting to run ZFS as work and the flexibility is just fantastic. Maybe needs a little more time to be totally stable though.<br/><br/>Matt
date: 2008-04-17
tags: freebsd,freenas,zfs
---
After trying out BeleniX and Nexenta, I'm really interested in the future of opensolaris, and how it will affect the future of open source. One thing I keep hearing good things about is ZFS, which reminded me to fire up my FreeNAS server and take another look at it.

#### FreeNAS and NFS

When I first discovered FreeNAS, I was just getting interested in NFS after being frustrated with sshfs, AFS, and CIFS. Unfortunately at the time the FreeNAS NFS setup had some issues (which have since been resolved). I've come to really like NFS - for many <em>systems</em>-based purposes it works really well, you hardly know its there.

The second time I tried out FreeNAS, I was more interested in iSCSI, though I did find out that NFS was working well. Now this third time (I'm not keeping count anymore!) I'm definitely going to use the NFS implementation of FreeNAS.

#### FreeBSD and ZFS

The bounty of an open source ZFS is hindered by the CDDL, as it doesn't play well with the GPL, but it can play well with BSD. And there are reports of a ZFS implementation in FreeBSD 7. I've yet to try it out, but I have to say FreeBSD 7 looks awesome.

I can't tell if or how close FreeNAS is to getting ZFS support, but I wouldn't be surprised. That would be really awesome - and I'm saying that without really knowing why. I guess I'm just excited by the prospect.

¥

