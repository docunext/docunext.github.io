---
title: Sinatra Helpers Rack Middleware and Gems
date: 2009-11-30
tags: gems,rack,ruby,sinatra
---
**Sinatra Helpers**
--------------------------

I had just about finished my first Sinatra helper module ([Sinatra-XSLView](http://www.docunext.com/wiki/Sinatra-XSLView)) when I realized what I was trying to achieve would be better written as a Rack Middleware module. Oh well, it was still a useful exercise, and it may prove to be useful in ways I hadn't originally foreseen.

**Rack Middleware**
-----------------------------

My experience with Rack Middleware has been tumultuous. I'm surprised I didn't give up on it out of frustration, and I'm glad I persisted. I'm also surprised that someone hasn't written a n XSL transformation filter rack middleware module yet, and I'm also glad I've been able to write one. I'm now re-formatting it to rack middleware standards.

**Gems**
--------------

Sinatra-XSLView and Rack-XSLView can be packaged as gems, and I'd like to do so. I've never packaged a gem before, but I've created Debian and PEAR packages before. Hopefully those experiences will help.

Like Debian and PEAR, there are many gem repositories. Unlike the Debian and PEAR repositories I have used, there appear to be several public / aggregate gem repositories, including:

* <a href="http://gems.github.com/" rel="nofollow">GitHub gems</a> (though apparently <a href="http://github.com/blog/515-gem-building-is-defunct" rel="nofollow">gem building on github is no longer available due to their switch to rackspace</a>)
* GemCutter
* Ruby Forge

