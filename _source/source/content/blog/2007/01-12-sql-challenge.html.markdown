---
title: SQL Challenge
date: 2007-01-12
tags: none
author: Albert Lash
---
I need to integrate two databases, and shift the id's of two of the imported datasets to avoid collisions. There's got to be an easy way to do this....

to be more specific, I merged two mydns mysql databases.

<pre>UPDATE `rr` SET zone=zone+1000;</pre>

<pre>UPDATE `rr` SET id=id+600</pre>

<pre>UPDATE `soa` SET id=id+200;</pre>

Had a couple of hiccups with exporting and importing, but its all done now and seemingly running smooth.

