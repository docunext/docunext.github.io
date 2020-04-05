---
title: LaBrea Tarpits
date: 2007-07-23
tags: none
author: Albert Lash
---
After reading some of the LaBrea documentation, I'm going to give it a try. From the docs, I believe that I need some extra public IP address space. I don't have many extras, but I've found that <a href="http://www.soggyblogger.com/blog/2007/07/18/comcast-latency-issues-resolved/">unused address space can actually cause some network traffic problems (at least with my Comcast SMC cable router)</a>.

Here's my plan: <ol><li>Identify unused address space</li><li>Set up a machine with labrea within that address space</li><li>It will automatically figure out which address are not getting used, and start to response to requests for them</li><li>We should see some activity in the labrea logs showing the tarpit activities</li></ol>

I wonder how this would affect email harvester and automated comment spammers? Let's find out. This will have to wait a few hours while I build another FreeBSD machine. Still trying to figure out if I can get wake on lan to work. I've been emailing with a FreeBSD developer a bit and with his expertise and my relentless pursuit to make stuff work, we might be able to find success.
