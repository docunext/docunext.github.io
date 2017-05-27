---
title: Conformist 
date: 2009-02-27
tags: none
author: Albert Lash
---
Well I finally got around to reading up on the file system hierarchy standard (FHS) today. Specifically I was looking for a good place to put incoming files which need to be stored temporarily while they are modified, validated, and transformed.

Looks like <a href="http://www.pathname.com/fhs/2.2/fhs-5.14.html">/var/spool/</a> is the spot I was looking for, and I'm also interested in checking out /var/cache/ and /var/run/.

Like I'm sure many before me, the FHS didn't make complete sense to me at first. And now, again like many before me, I'm putting aside my initial logic with the understanding that its much more important that a whole bunch of people and systems are already familiar with and agree upon the FHS. That is a major win in itself.

There are so many ways to abstract data, I really don't think it needs changing.

