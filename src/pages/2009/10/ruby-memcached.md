---
title: Ruby Memcached
date: 2009-10-31
tags: memcache,ruby
---
I'm trying out [memcachedb](http://www.docunext.com/wiki/MemcacheDB) and since it uses the same protocol as [memcached](http://www.docunext.com/wiki/Memcache), I figured I'd use [Ruby's memcached library](http://www.deveiate.org/code/Ruby-MemCache/) to access it.

<pre class="sh_ruby">
dev-48-gl:~$ irb
irb(main):001:0> require 'memcache'
=> true
irb(main):002:0> CACHE = MemCache.new 'localhost:21201', :namespace => 'my_namespace'
=> <MemCache: 1 servers, 1 buckets, ns: "my_namespace", ro: false>
irb(main):003:0> CACHE[:blah] = "barf"
=> "barf"
irb(main):004:0> puts CACHE[:blah]
barf
=> nil
irb(main):005:0>
</pre>

Works like a charm!

