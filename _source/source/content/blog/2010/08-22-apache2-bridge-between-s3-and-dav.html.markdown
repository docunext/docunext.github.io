---
title: Apache2 Bridge Between S3 and DAV
date: 2010-08-22
tags: dav,fuse,google,s3
---
## Experimenting with Apache, mod_perl, Apache2::S3, and DAV

I'm going to set this up today and see if this item on my "to-do" list works:

<a href="http://www.docunext.com/blog/2010/08/to-do-test-apache2s3-as-a-dav-proxy-with-davfs2.html" class="h3 strong">To-Do: Test Apache2::S3 as a DAV Proxy with DAVFS2</a>

Alas, it didn't work. I didn't use davfs2, but actually that's what encouraged me to try this today! After tinkering around the [Lucid Lynx Ubuntu system](http://www.docunext.com/blog/2010/08/some-ubuntu-customizations-im-using-with-lucid-lynx-1004.html) I recently setup on my [Lenovo G555](http://www.my-tech-deals.com/blog/2010/08/review-of-the-lenovo-g555.html) I noticed something that sounded familiar but hadn't actually seen before: **.gvfs**.

## What is GVFS?

GVFS is the successor to the Gnome virtual file system. Thankfully, it doesn't need the usual hardware abstraction layer (HAL) and is apparently very modular, kind of like PAM. I happened upon the hidden .gvfs folder in my home directory while trying to clean it up, with a goal of putting all my settings in $XDG_CONFIG_HOME (aka ~/.config). Would I want to delete .gvfs? Turns out I definitely want to keep it -- in my humble opinion it is a very very cool little folder! Not so much for what it as a folder does, but for what it alerted me to - the brand new world of GVFS at large.

On my Lucid Lynx install, I have these gvfs related packages installed:

<pre class="sh_sh">
lash@lenovo-g555-2:~$ dpkg -l | grep gvfs
ii  gvfs                                  1.6.1-0ubuntu1build1                            userspace virtual filesystem - server
ii  gvfs-backends                         1.6.1-0ubuntu1build1                            userspace virtual filesystem - backends
ii  gvfs-bin                              1.6.1-0ubuntu1build1                            userspace virtual filesystem - binaries
ii  gvfs-fuse                             1.6.1-0ubuntu1build1                            userspace virtual filesystem - fuse server
ii  libgvfscommon0
</pre>

Get the idea? Good! I'll elaborate anyway! Docunext readers may be familiar with [FUSE](http://www.docunext.com/wiki/FUSE), I know I am - I've been using SSHFS to mount filesystems over the SSH protocol for years, though I've been using NFS more often these days. I still use FUSE all the time for Encfs, too.

Anyway, from what I've learned so far, gvfs is a set of tools, abstraction layers, and programming interfaces to provide tighter integration of FUSE, as well as other filesystem backends, with Gnome. While reading up on gvfs, I discovered that [Thibault Saunier is working on a Google Docs interface to gvfs](http://thiblahute.blogspot.com/2010/01/good-news-about-google-documents-gvfs.html)! Believe in the gDrive! The [gPhone](http://www.soggyblogger.com/blog/2010/08/droid-x-review.html) came true!!

This got me thinking and reminded me that I wanted to try connecting S3 to DAV with Apache2::S3. But as my test confirmed, that won't work at all:

<pre class="sh_log">
[Sun Aug 22 18:07:02 2010] [error] [client 192.168.1.215] &lt;?xml version="1.0" encoding="UTF-8"?>\n&lt;Error>&lt;Code>MethodNotAllowed&lt;/Code>&lt;Message>The specified method is not allowed against this resource.&lt;/Message>&lt;ResourceType>BUCKET&lt;/ResourceType>&lt;Method>PROPFIND&lt;/Method>&lt;RequestId>B0DA9D7EE6DE73AD&lt;/RequestId>&lt;AllowedMethod>PUT&lt;/AllowedMethod>&lt;HostId>tIbZEhZarXoApiO9wzD23fLIrGiYqZ+DKhUxiFYXmG5frXO6faXdpOLgGEAx2Fwc&lt;/HostId>&lt;/Error> at /usr/local/share/perl/5.10.1/Apache2/S3.pm line 153.\n
</pre>

So, it looks like S3FS it the best bet, though that one definitely needs some more work, too.

