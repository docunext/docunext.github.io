---
title: Full Bore Ahead with Rails 3.1 Engines 
date: 2011-10-30
tags: engines,rails3
---
## Rails 3.1 Engines Are Awesome!

I have been having a blast with Rails 3.1 Engines lately. Why?

* They are intuitive - they just "make sense".
* They are easy and simple to build.
* They do not require any special tools or configurations.
* They are incredibly powerful.

## Rails 3.1 Engines: Mounted, Isolated and Enpoint

#### To Mount, or Not To Mount?

#### Mountable engines are specified in main\_app/config/routes.rb

<pre class="terminal">
enginex engine_name -t rspec
</pre>

<pre class="terminal">
rails plugin new matters -O -T --mountable --full
</pre>

