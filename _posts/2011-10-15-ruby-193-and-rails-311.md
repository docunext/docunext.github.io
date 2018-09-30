---
title: Ruby 1.9.3 and Rails 3.1.1
date: 2011-10-15
tags: ruby,ruby 1.9
---
Tired of waiting for Rails 3 to start up again and again, I decided to try out Ruby 1.9.3-rc1. To my surprised, Ruby 1.9.3-rc1 works reliably well!

The great part about this is how much faster Rails 3 starts up when using Ruby 1.9.3. Its like night and day.

I am keeping 1.9.2 installed, and thankfully its not too much of a burden since I'm using rbenv (similar to rvm).

Let's go to the races!

#### The Simplest Race (A Rake Task)

<pre class="sh_ruby">
namespace :speed do
  task :check => :environment do
    puts "Testing..."
  end
end
</pre>

#### Ruby 1.9.2-p290

<pre class="terminal">
time rake speed:check
real    0m44.346s
user    0m42.215s
sys     0m1.416s
</pre>

#### Ruby 1.9.3-rc1

<pre class="terminal">
time rake speed:check
real    0m12.646s
user    0m11.749s
sys     0m0.784s
</pre>

Awesome!!

