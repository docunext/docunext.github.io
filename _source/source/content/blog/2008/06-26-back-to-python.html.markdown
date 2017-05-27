---
title: Back to Python
date: 2008-06-26
tags: none
author: Albert Lash
---
I have a hard time with python for some reason. So many people have told me about how it "makes sense", but when I try to use it, it seems very arbitrary. I guess its that I'm not a classically trained programmer (or trained at all for that matter), because the debug-as-you-code methods possible with php and to some extent perl suit me well.

Not one to give up, I've been hammering away with python. I do like how its easier to read. I have trouble with how the modules work though, as well as imports and the dot notation used to navigate paths. Oh well, I've been able to trial-and-error it well enough to get by.

Now I'm wondering what I should use for a database abstraction layer? AdoDB? SQL Alchemy? I don't really want a full object persistence layer, I think that's what SQL Alchemy is all about.... any suggestions?
<h4>AdoDB for python</h4>

I'm making a little headway with this. Big surprise - no built in or handy function for converting between a python dict and a simple xml string. Too bad! There are many python functions out there, but its not really worth it for my purposes. Another snafu is that the MySQL driver uses %s to bind parameters instead of ?. Odd.
<h4>SQLRelay</h4>

I still have to try SQLRelay.

