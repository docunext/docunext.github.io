---
title: Rack Perftools Profiler Is Awesome
date: 2011-08-20
tags: rack,rails3
---
Based upon a suggestion from a co-worker, I tried out rack-perftools\_profiler today. It is awesome.

One thing I noticed right away is that Psych was getting called, and I didn't know why. I looked it up, and it appears to be a YAML parsing library. I wasn't using any YAML that I knew of... oh wait - I was using serialize on an activerecord object. Ha!

So I removed it, and no more YAML parsing. Yay! But it also reminded me of tenderlove's work to implement other serialize parsers, like JSON. I'd really like to use yajl for its speed.

Here's what [regdel](http://www.regdel.com/) is currently showing:

<pre class="terminal">
Total: 96 samples
      19  19.8%  19.8%       19  19.8% garbage_collector
       9   9.4%  29.2%        9   9.4% Regexp#=~
       5   5.2%  34.4%        6   6.2% ActiveRecord::ConnectionAdapters::ConnectionHandler#retrieve_connection_pool
       4   4.2%  38.5%        4   4.2% Hash#initialize_copy
       3   3.1%  41.7%       16  16.7% ActiveModel::AttributeMethods#respond_to?
       2   2.1%  43.8%        2   2.1% ActiveRecord::AttributeMethods#attribute_method?
       2   2.1%  45.8%        2   2.1% Class#logger
       2   2.1%  47.9%        2   2.1% String#=~
...
</pre>

I'm not sure why garbage\_collector is getting caled so much - maybe that's a good thing. But I'm also surprised that Regexp is getting called - I should look into that.

At work, this really helped out a ton, but we're running on Rails 2. The output for Rails 3 is actually a bit different; a lot has changed!

