---
title: Ruby YAML and Nesta
date: 2010-01-30
tags: ruby
---
I'm hacking up my forked version of Nesta and right now I'm wrestling with YAML.

In particular, I've never seen this syntax:

<pre class="sh_ruby">
    def self.google_analytics_code
      get(environment)["google_analytics_code"]
    end
</pre>

I get the idea - its setting an object variable based upon the runtime environment (development, production, test). *Its the parentheses and the square brackets that confuse me.* I'm used to functions and methods getting parameters inside of parentheses, not both parentheses and square brackets.

The get method for the Configuration class is this:

<pre class="sh_ruby">
      def self.get(key, default = {})
        configuration[key].nil? ? default : configuration[key]
      end
</pre>

Where does the environment fit in? I've searched for Ruby YAML configuration environment without luck, so now I'm searching for private ruby class methods.

<a href="http://stackoverflow.com/questions/12565/what-do-the-different-brackets-in-ruby-mean/13935#13935" rel="nofollow">Orion Edwards has made interesting comment on StackOverflow.com about []</a>:

<blockquote>There is also a convention that it is used as a class method in the same way you might use a static Create method in C# or Java.</blockquote>

Interesting, I recall now that [] is actually a method in itself. Its interesting, but not a solution for my problem.

My goal is the get a hash object, not a string value for a key. If the key does not exist, I'd like to return a default hash object.

This appears to be the best explanation of whats up:

http://www.ruby-forum.com/topic/135931

Actually, that is from 2008 and seems a bit-outdated.

**OK, I think I figured it out.**
Its times like these when I disagree with the purported advantages of YAML. This is what I ended up with:

<pre class="sh_ruby">
    def self.cache
      #configuration[self.environment]["cache"].nil? ? ['cache_enabled' => false] : configuration[self.environment]["cache"]
      #get((environment)["cache"], { 'cache_enabled' => false })
      conf.fetch(self.environment, conf).fetch('cache', { 'cache' => { 'cache_enabled' => false } })
    end
</pre>

And cleaned up:

<pre class="sh_ruby">
    def self.cache
      conf.fetch(self.environment, conf).fetch('cache', { 'cache' => { 'cache_enabled' => false } })
    end
</pre>

Hmmmm. Seems a bit complicated, but not bad.

