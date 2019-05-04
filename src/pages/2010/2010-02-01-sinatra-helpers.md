---
title: Sinatra Helpers
date: 2010-02-01
tags: configuration,ruby,sinatra
---
I'm digging Sinatra Helpers lately. What about a Configuration helper? More than options (aka set :symbolname, value), although I'm getting more comfortable with those.

Maybe a pagination helper?

By the way, let me take a moment to explain my perspective on helpers. I've previously encountered two "types" of add-ons:

* Plug-ins: I consider plug-ins to be small additions of specialized functionality
* Extensions: I consider extensions to be significant enhancements to existing functionality

I haven't previously thought about helpers, but they fit a sweet spot in my view of programming web applications: tiny bits of general functionality.

Tiny bits of general functionality? Yes! Of course. I've tended to stay away from raw programming when it comes to web applications, instead abstracting my logic and data structures to XML and XSL. Ruby, and more specifically, Sinatra, Rake and domain specific languages (DSL) have changed my mind, though.

As such, I really like how raw Sinatra is. I find it so cool that it doesn't do that much for you, but provides a workbench to do so much. For example, there is no built-in pagination (see [japhr's rant on sinatra pagination](http://japhr.blogspot.com/2009/04/pagination-page-4.html)). Why? Sinatra is focused on the workbench, not on the tools.

Sure, it comes with some basic tools that many people will find handy, but come on, how many of we independent developers see eye-to-eye on what color to paint the bike shed??

