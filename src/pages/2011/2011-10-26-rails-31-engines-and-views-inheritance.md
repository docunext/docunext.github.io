---
title: Rails 3.1 Engines and Views Inheritance
comments:
  - author: Tom J
    email: tom@crystae.net
    date: 11/05/2011 06:27:21 AM
    text: >
      Thank you so much! This had me going up the wall. By the way, I am also using Forem for reference.
date: 2011-10-26
tags: rails3
---
I'm using Engines with Rails 3.1 extensively.

Ran into an interesting factor: when isolating the engine namespace, if the engine's application controller is namespaced in a module without inheriting from ApplicationController (i.e. it inherits from ActionController::Base instead), the main app application layout will not be used.

A little background - with engines, most developers will want to either use the main app layout, or a layout included with the engine. For example, Rails Admin uses its own layout, where something like Forem will probably want to use the main app layout.

When merging the engine and the main app view layouts, there are a couple of pitfalls to be way of:

* Inherited views causes colliding partial names - best to use specific partial paths like application/head instead of just head
* View and path helpers - get used to using main\_app.new\_something\_path

Want more specifics? I am trying to integrate the rails\_blog\_engine into [NeoCarz v2](http://www.neocarz.com/) but it kept trying to use its own layouts - even after I removed them. To figure out what was going on, I compared and contrasted with Forem, which I am also using in NeoCarz v2 and which I know to use the main app layouts.

¥

