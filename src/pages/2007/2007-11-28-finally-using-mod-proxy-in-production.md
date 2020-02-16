---
title: Finally Using mod proxy in production
date: 2007-11-28
tags: none
author: Albert Lash
---
This morning, I was able to setup mod_proxy as a simple and effective alternative to network address translation (NAT). I eventually want to use NAT, but to do so at this time would require some fairly extensive routing tables, which I don't want to worry about.

In this case, the nice thing about mod_proxy, is that I don't have to worry about the routing tables! But there are other benefits. For example, I am using SSL to connect to the public proxy, and from there I am using plain http, since the secondary network is private. I think this is how many SSL off-loaders work.
