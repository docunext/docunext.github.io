---
title: Sinatra and Rack Sessions
date: 2010-03-06
tags: rack,sinatra
---
I **think** that it took me awhile to figure out that in order to use memcache for sessions, "require 'memcache'" must come before "require 'rack'".

I say I **think** because it works now, but I'm not 100% certain that moving the memcache require statement was the resolution.

In other news, this looks cool:

* git://github.com/JunKikuchi/rack-session-stack.git

