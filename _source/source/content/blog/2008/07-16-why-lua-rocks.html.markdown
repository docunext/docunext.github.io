---
title: Why LUA Rocks I think because its fast and uses memory efficiently 
date: 2008-07-16
tags: none
author: Albert Lash
---
This is very interesting...

<a href="http://www.timestretch.com/FractalBenchmark.html">http://www.timestretch.com/FractalBenchmark.html</a>

I don't want to start a flame war here. The benchmark is just one facet of the programming languages listed, but its interesting to look at and simple enough easily digest. For a more comprehensive analysis of programming languages, see the <a href="http://shootout.alioth.debian.org/">programming language benchmark shootout game</a>.

In the timestretch benchmarks, lua comes in remarkably competitive with some heavy duty languages. Considering how free, lightweight, and simple lua is, I'm very impressed.

Its a great thing that mod_wombat is coming along, I'm very interested in making use of that when its ready. I should also note that LUA is also used with the new mysql-proxy server that's in the works.

LUA might also be useful for routing tables, additional types of proxies, or rule set managers for in general. Think about more sophisticated firewalls, spam filtering / email organization, and load balancing. The rules for this stuff is usually written in an incredibly simple syntax, like key value pairs, or on the flip side, sometimes overly complicated regular expressions, and can be compiled into native code using C. That works very well for most cases, but if a little more "logical flexibility", LUA might just be the answer.

