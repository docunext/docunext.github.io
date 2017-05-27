---
title: Example Enumerable s group by
date: 2011-07-16
tags: ruby
---
This is an example of Ruby's Enumerable class method group\_by:

<pre class="sh_ruby">
  1 %h2 Accounts
  2 -collection.group_by(&:type).each do |type, accounts|
  3   %h4=type
  4   -accounts.each do |a|
  5     %p=link_to a.name, self.send("#{a.type.underscore}_path",a)
  6
  7 =link_to "New", new_resource_path
</pre>

Enumerable is truly an awesome class, actually - its a module! Which really exudes Ruby's prowess as a sweet gem of a programming language.

So what does group\_by do? It converts an array of hashes (think ActiveRecord arrays) to an array of arrays containing hashes, sorted by one of the keys of the original hashes. This is often useful for sorting a collection of events by day, or in the above example, a collection of accounts by their type.

Do you have a cool example of enumerable's group\_by function you'd like to share? I'd love to hear about it!

