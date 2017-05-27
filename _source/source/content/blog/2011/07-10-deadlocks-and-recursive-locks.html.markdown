---
title: Deadlocks and Recursive Locks
date: 2011-07-10
tags: errors,ruby
---
How do you like these Ruby errors?

**1.9.2**

<pre class="terminal">
[2011-07-10 10:27:16] ERROR ThreadError: deadlock; recursive locking
</pre>

**1.8.7**

<pre class="terminal">
ERROR ThreadError: thread ************** tried to join itself
</pre>

D'oh! This all started happening when I copied a bunch of resources from my [FathersWork](http://www.fatherswork.com) project to the [Regdel](http://www.regdel.com) project.

Those resources include a bunch of Rack middleware, such as Rack::Config and Rack::Xsl, but the odd thing is that FathersWork.com is doing fine - but I haven't run it in the same environment.

Here's one link I found:

* <http://blog.stochasticbytes.com/2011/01/rubys-threaderror-deadlock-recursive-locking-bug/>

But I think that's a more esoteric instance of the exception. Yep, I was able to narrow it down to a change in Rack 1.3.0 that has to do with closing the body object.

I found [this](https://github.com/rack/rack/issues/168) bug report on the matter, and indeed, rtomayko nailed it!

I made a quick couple of commits to rack-xsl and released 0.2.8 and it appears to be working perfectly. I'm not using Rack-xsl as much anymore, but its still a quality gem.

