---
title: The Modularity of Rails 3
date: 2010-10-15
tags: activerecord,datamapper,jquery,rails3
---
Very good Rails and Merb, looks like you've rolled a winner with Rails 3! Especially when it comes with the modularity to use various template engines and ORMs.

So far I'd seen it possible to switch between haml and erb for templates, and ActiveRecord and Datamapper for ORMs. Today I learned about using RSpec for testing, and factory_girl for fixtures, too.

And just now I've learned about the ability to switch from Prototype.js to jQuery.

*That is awesome.*

Nothing against Prototype.js, I just have strong skills with jQuery, and I really like its style.

Special thanks to:

* <http://github.com/lleger/Rails-3-jQuery>

#### Devise and Mongoid

Here's another example Rails 3 app on GitHub; this one uses Mongoid for data storage and Devise for authentication:

* <http://github.com/fortuity/rails3-mongoid-devise>

I've used Mongo with great results with Sinatra, but I've never even used it with Rails, so I'm excited to check it out.

Devise seems flexible, and I like that it is apparently built with (on top of?) Warden, which is an authentication system built as a piece of Rack middleware - cool!

