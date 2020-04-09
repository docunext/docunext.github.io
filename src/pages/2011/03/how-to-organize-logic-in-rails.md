---
title: How to Organize Logic in Rails
date: 2011-03-26
tags: rails
---
When engineering software, there is a straightforward and somewhat obvious strategy for separating functionality from presentation: put as little code as possible in the templates.

As software frameworks evolve, they start to get more compartmentalized. For example, Ruby on Rails uses the Model-View-Controller paradigm for organizing its resources, but MVC is not the whole story - it includes helpers, too.

Recently, I've wanted to better organize my Rails projects, and here are some thoughts I'd like to share.

* Helpers return strings, and they have constants
* Model methods are all about objects
* Controllers generally connect result sets with templates, but also contain filters

A few other notes:

* Helpers can be passed objects, of course, and those objects can call their own methods
* Templates call helper functions

#### Here's An Example of a Model Method

