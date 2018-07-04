---
title: Shapado Failed to connect to a master node at localhost 27017
date: 2011-10-28
tags: mongodb
---
#### First Attempt to Install Shapado

I'm trying to install **shapado**, a stackoverflow clone running on top of Ruby on Rails. It looks like a very solid piece of software. The shapado installation instructions are clear, but I've hit this snag:

<pre class="terminal">
Failed to connect to a master node at localhost:27017
</pre>

Ah! Its because I don't have mongodb running locally.

UPDATE on my efforts to (and failure to) install shapado:

I have given up on installing shapado, only because the version that uses Rails 3 requires a version on the mongo driver that as of yesterday was only available for Jruby, and as of today has been yanked from Rubygems. Hopefully they'll bring a fresh version of the mongo driver back and it will be compatible with Ruby 1.9.

