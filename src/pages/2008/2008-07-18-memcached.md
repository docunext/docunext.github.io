---
title: Memcached
date: 2008-07-18
---
It would make sense that MovableType and Memcached would work well together. Took me long enough to figure that out - I mean Memcached's author, Brad Fitzpatrick, used to work for SixApart...

Anyway, I've just set it up. Seems to work OK so far. Cool!

I'm still having issues with read and write database DSNs, but I may have finally figured it out... the problem has to do with get versus post, as well as FastCGI persistence...
