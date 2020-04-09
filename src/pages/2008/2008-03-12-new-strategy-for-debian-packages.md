---
title: New Strategy for Debian Packages
comments:
  - author: Andrey Nordin
    email: anrienord@gmail.com
    url: http://abstracthack.wordpress.com/
    date: 03/13/2008 04:34:30 PM
    text: >
      Cool! Could you put here or in your wiki more info on your current packaging activities?
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/13/2008 05:16:08 PM
    text: >
      Hi Andrey - Sure! It worked out well this time because there is a package called dh-make-php which can be used to create debian packages from pear packages. Its not as simple as calling a command, but it did help.<br/><br/>My next goal is to setup a debian repository.
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/13/2008 05:18:32 PM
    text: >
      FYI I took a bunch of notes (I added the link to the post too):<br/><br/><a href="http://www.docunext.com/wiki/Disassembling_php-cache-lite" rel="nofollow">http://www.docunext.com/wiki/Disassembling_php-cache-lite</a>
date: 2008-03-12
tags: dpkg,nexista,pear
---
I'm now making another attempt to make better debian packages of my own projects and customizations of existing packages... starting with Wordpress.

I'll start with a debian source package, modify it, then make the package and install it. :-)

UPDATE March 13, 2008: I actually started with php-cache-lite and used the guts to create a nexista package. I think this is the first real debian package I've created! Here are my <a href="http://www.docunext.com/wiki/Disassembling_php-cache-lite">notes</a> on doing so.

¥

