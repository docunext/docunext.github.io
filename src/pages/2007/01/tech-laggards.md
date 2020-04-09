---
title: Tech Laggards
date: 2007-01-31
tags: dav,fuse,pear,php
---
With all the amazing advancements going on in technology, there are a few laggards that bug me, namely broadband and filesystems. In this blog item, I will explain why.

## Broadband Lacking

If you've gone to buy a hard drive lately, you were probably surprised at how affordable it was. Compared to the price of bread, hard drives at storage in general have plummetted in price. You can store more information than ever before. However, the media devices (and human operators) continue to be fallable, which is fine, but requires the ability to backup the information stored on the media.

My preferred method of backup is offsite - which requires a network connection. Unfortunately, while the amount of affordable storage capacity has skyrocketed over the past couple of years alone, network speed has not improved one iota, in my humble opinion. While this is problematic for several reasons, I'll just discuss the issue as it relates to storage and backups in this rant. ( For more dialogue about the "impending" broadband explosion, see <a href="http://www.soggyblogger.com/blog/the-impact-of-broadband.html">The Impact of Broadband @ Telecom Rebirth</a>. )

## Filesystems

Filesystems need a major overhaul, namely inclusion of a robust and reliable layer of relational metadata, a la relational database management system ( RDBMS ).

**Filesystem in User-Space ( FUSE )**

There is hope thanks to FUSE, a file-system emulator which makes the creation and use of a filesystem a breeze. One of the coolest applications of this is the sshfs, which allows users to mount a remote filesystem locally over an ssh connection. I don't even want to begin to discuss how cool, awesome, amazing, incredible that is, because as you see I won't be able to stop!

Anyway, FUSE is used by a few filesystems which are powered by relational databases, namely:

<a href="https://sourceforge.net/projects/mysqlfs/">FUSE filesystem using MySQL as a storage</a>

and

<a href="http://relfs.sourceforge.net/">Relational Filesystem</a>

I haven't tried them out yet, but plan to soon.

**Distributed Authoring and Versioning ( DAV )**

Another potential solution to the modern filesystems is DAV. Most operating systems provide support for mounting SSL-enabled remote DAV-based filesystems over https. This is very cool. I tried this using Apache's mod_dav plugin, but due to unix-style file permissions, all the files had to be owned by the apache user. This was obviously no good for a unified solution.

An alternative to Apache's mod_dav is the PEAR dav server package. I've used this and it worked really well. The potential is here to use PHP and the suexec capability to change the user of the file connector based upon who is accessing the data. This is pretty cool, and since PHP can connect seamlessly with a variety of RDBMS, it could use that for additional metadata, and actually create a more fluid and relationship-based file system for the end user. This would require an abstraction layer to bridge between the hierarchical filesystem and the relational filesystem that the user accesses over the DAV protocol. Obviously a lot of work, but terrific that there is a viable alternative to FUSE.
