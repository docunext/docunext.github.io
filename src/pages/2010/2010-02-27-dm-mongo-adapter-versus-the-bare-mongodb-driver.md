---
title: dm mongo adapter versus the Bare MongoDB Driver
date: 2010-02-27
tags: datamapper,mongodb,ruby
---
Looks like I'm going to forage ahead in my research into using mongodb with the [DataMapper mongo adapter from solnic](http://github.com/solnic/dm-mongo-adapter), if only for the reason that it was the first interface to my mongodb server I was able to get working!

Now that I've got it working, I'm realizing I've gotten a bit rusty with DataMapper in the few weeks that have transpired without having used it. I really liked what I saw so far, and was only distracted by these new "NoSQL" document storage systems.

In retrospect I find it a little ironic that I've circled around again to DataMapper!

Anyway, back to dm-mongo-adapter. It seems heavier than I expected, and so I read up on the [MongoDB Ruby driver](http://www.mongodb.org/display/DOCS/Ruby+Tutorial) and thankfully its super simple! Seems like the equivalent of a supercharged memcached client.

I've just run through a **very** simple comparison and I like the bare driver better. Its super simple and the startup time for my Sinatra app is much faster. No doubt, the dm-mongo-adapter is cool, but it sort of brings me back to what I'm exploring away from (hence the irony I mentioned earlier). I still want to get my datamapper skills back in shape, but my experiments with mongodb are not the right time.

