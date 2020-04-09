---
title: Configuration Management
comments:
  - author: Andrey Nordin
    email: anrienord@gmail.com
    url: http://abstracthack.wordpress.com/
    date: 03/14/2008 07:49:55 PM
    text: >
      Take a look at <a href="http://trac.mcs.anl.gov/projects/bcfg2" rel="nofollow">bcfg2</a>. It is quite suitable for me.
  - author: Albert
    date: 03/14/2008 10:18:52 PM
    text: >
      Hi Andrey - that looks awesome! Thanks for the tip.
  - author: Albert
    date: 03/27/2008 12:18:40 PM
    text: >
      Hello again Andrey - have you had any luck with Debian packaging? I'm slowly figuring out bcfg2 - very cool stuff. The concepts are still a little beyond me but I like that its written in python and uses XML.
  - author: Albert
    date: 03/27/2008 12:37:29 PM
    text: >
      I started a wiki page on the subject here:<br/><br/><a href="http://www.docunext.com/" rel="nofollow">http://www.docunext.com/wiki/Systems_Configuration_Management</a>
  - author: Andrey Nordin
    email: anrienord@gmail.com
    url: http://abstracthack.wordpress.com/
    date: 03/28/2008 04:19:54 AM
    text: >
      @albert.lash: Cool! I'll be following your wiki.<br/><br/>I'm with bcfg2 for quite a long time and I found it really useful. I'm using it for doing some local sysadmin tasks such as configuring my SCM and CI servers at work. If you've got any questions, you are welcome :)<br/><br/>As for Debian packaging, I'm trying to find a common core of various packaging systems. I guess it's possible to create some meta-packaging tool because these systems are basically not so different as it might seem initially. In fact, Python's setuptools can create RPM packages automatically based on metadata from setup.py files. Why not to create Debian ones?<br/><br/>Next week I'll be updating my RPM packages to current releases of bcfg2, Subversion and Mercurial (it has reached 1.0, yay!). Maybe it will be a good time to finally try dpkg development tools.<br/><br/>By the way, are you familiar with Arch Linux and its packaging system? I think it is worthy of notice.
  - author: Albert
    date: 03/28/2008 10:40:19 AM
    text: >
      I haven't used it much but there is a tool called alien which allows you to install rpms on debian systems. I bet there is something like you describe for building both rpms and .debs, and as far as automating builds from metadata, there might be something for python files. There are deb helpers for php pear packages (albeit only version 1 package.xml files unfortunately). I just checked debhelper:<br/><br/><a href="http://packages.debian.org/etch/debhelper" rel="nofollow">http://packages.debian.org/etch/debhelper</a><br/><br/>and there is a script called dh_python. Also FYI I think that debian's python-central and the chesseshop get into arguments from time to time, but that will likely be fixed soon.<br/><br/>I've been seeing more and more of arch linux but I haven't actually tried it out - yet!
date: 2008-03-14
tags: nodows,subversion
---
System administrators know: configuration management can be difficult!

I'm taking notes on a new strategy:

* Keep using svn
* Use hostname as directory
* Put machines into separate network folders
* Would it be possible to use the same configurations for all the machines? Maybe for some services, not for all
* Try to keep whatever process in line with NODOWS plans

¥

