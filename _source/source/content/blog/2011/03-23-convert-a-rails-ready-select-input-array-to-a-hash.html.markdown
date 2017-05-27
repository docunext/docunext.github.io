---
title: Convert a Rails Ready Select Input Array to a Hash
date: 2011-03-23
tags: rails,ruby
---
This post explains a simple code snibbet I use convert a Rails-ready select input array into a hash.

#### The Rails-Ready Select Input Array

<pre class="sh_ruby">
PRIVACY_LEVELS = [ ["Private",10], ["Community",20], ["Public",30] ]
</pre>

The above code is a constant defined as an array with three elements, and each element is itself an array. Rails can use this to construct an HTML select input - sweet!

*What if I want to access the first element of each sub-array?*

I can do that! I create a new method in a helper that does the conversion for me:

<pre class="sh_ruby">
  def privacy_hash
    Hash[ *PRIVACY_LEVELS.flatten].invert
  end
</pre>

This is a quality Ruby code expressiveness example!

