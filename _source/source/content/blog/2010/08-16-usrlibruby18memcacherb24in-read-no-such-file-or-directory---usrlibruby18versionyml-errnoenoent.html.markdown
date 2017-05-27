---
title: usr lib ruby 1.8 memcache.rb 24 in read No such file or directory usr lib ruby 1.8 .. VERSION.yml Errno ENOENT 
date: 2010-08-16
tags: memcache,ruby
---
I'm getting this error when trying to use the libmemcache-client-ruby1.8 on Debian Squeeze.

<pre class="sh_sh">
/usr/lib/ruby/1.8/memcache.rb:24:in `read': No such file or directory - /usr/lib/ruby/1.8/../VERSION.yml (Errno::ENOENT)
</pre>

To troubleshoot, I'm updating ruby1.8. Ugh, now I no longer have irb1.8!!

Oh well, in the end I just edited /usr/lib/ruby/1.8/memcache.rb and changed line 24:

<pre class="sh_ruby">
#  VERSION = begin
#    config = YAML.load(File.read(File.dirname(__FILE__) + '/../VERSION.yml'))
#    "#{config[:major]}.#{config[:minor]}.#{config[:patch]}"
#  end
VERSION = '1.5.0'
</pre>

