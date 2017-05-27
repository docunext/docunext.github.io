---
title: Dynamic Creation of Instance Methods In Ruby with define method and method missing
date: 2011-02-28
tags: methods,ruby
---
#### Dynamic Creation of Instance Methods In Ruby with define\_method and method\_missing

This is really, really cool. What does it do? If you are familiar with define\_method, you know that it can dynamically define class methods. That is very cool!

And if you are familiar with method\_missing, you know that it can act as a "catch-all" for non-existent instance methods. Cool, huh?!?

I only recently came to realize that the two can be used together, so define instance methods - first by catching non-existent method calls, then by defining the method, so that future calls to the same method would be optimized. Seriously, how cool is that!?

This is actually how ActiveRecord manages the slew of Model access helpers it provides access to via methods like find\_one\_by\_name('myname').

