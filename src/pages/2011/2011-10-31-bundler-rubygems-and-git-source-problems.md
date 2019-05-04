---
title: Bundler Rubygems and Git Source Problems 
date: 2011-10-31
tags: bundler,ruby
---
I'm getting this odd "error" when trying a <tt>bundle install</tt>:

<pre class="terminal">
&lt;NoMethodError: undefined method `yaml' for #&lt;Psych::Nodes::Stream:0x9d78120&gt;
</pre>

Looks like the problem is related to yaml and psych. There is a related
[issue](https://github.com/carlhuda/bundler/issues/1239) on Github, but this one
appears new.

I'm trying to update bundler...

<pre class="terminal">
gem install bundler
</pre>

Same problem with Bundler version 1.0.21 and Bundler version 1.1.rc, though in
bundler 1.1.rc there is an improvement with the **ever slow** Rubygems metadata
update:

<pre class="terminal">
Fetching gem metadata from http://rubygems.org/......
</pre>

Yes! And the dots are even animated!!

Now trying to update psych. Still the same. Hmmm, I did add psych as
a dependency in one of the rails3 engines I'm loading by a path. Let me try and
take that out.

I've taken it out, and nothing fixed yet. Ack! I had to actually uninstall psych (v.1.2.2) to get it to work.

I reinstalled it, got the same error, but then tried psych v 1.2.1 and it worked.

Whoa! Then I tried running Rails and got a major error:

<pre class="terminal">
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/i686-linux/psych.so: warning: already initialized constant ANY
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/i686-linux/psych.so: warning: already initialized constant UTF8
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/i686-linux/psych.so: warning: already initialized constant UTF16LE
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/i686-linux/psych.so: warning: already initialized constant UTF16BE
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/stream.rb:12: warning: already initialized constant ANY
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/stream.rb:15: warning: already initialized constant UTF8
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/stream.rb:18: warning: already initialized constant UTF16LE
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/stream.rb:21: warning: already initialized constant UTF16BE
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/sequence.rb:42: warning: already initialized constant ANY
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/sequence.rb:45: warning: already initialized constant BLOCK
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/sequence.rb:48: warning: already initialized constant FLOW
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/scalar.rb:9: warning: already initialized constant ANY
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/scalar.rb:12: warning: already initialized constant PLAIN
/home/albertlash/.rbenv/versions/1.9.3-rc1/lib/ruby/1.9.1/psych/nodes/scalar.rb:15: warning: already initialized constant SINGLE_QUOTED
</pre>

It goes on, but that's the idea. Installing psych 1.1.1 made it better.
