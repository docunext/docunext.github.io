---
title: Metaprogramming with Ruby method missing and define method
author: Albert
comments:
  - author: Rob Morris
    email: rob@irongaze.com
    ip: 207.192.71.184
    url: http://irongaze.com
    date: 05/28/2012 09:18:04 AM
    text: >
      Nice post.  I'll add that whenever you override method_missing to add dynamic functionality, and you <b>don't</b> use the define_method solution, you should also override respond_to_missing? like so:<br/><br/>def respond_to_missing?(m, include_private)<br/>  if m.to_s.include? 'bar'<br/>    true<br/>  else<br/>    super<br/>  end<br/>end<br/><br/>Otherwise, Foo.new.foobar will work, but Foo.new.respond_to?(:foobar) will return false.
date: 2011-05-21
tags: ruby
---
There are many reasons why I love working with Ruby, such as its consistency, its use of natural language, its clean object-oriented paradigm, but one aspect of it is that stands out above the rest: its metaprogramming capabilities.

#### What is "Metaprogramming"?

Metaprogramming is the practice of writing code that generates more code, and then running that code in the same process.

Seen from another angle, it is the practice of writing code that modifies or adds to itself as it runs. As such, in my humble opinion, its a heck of a lot easier to do with an scripting / interpreted language like Ruby than a compiled language like C.

Metaprogramming is also related to domain specific languages. In the case of Ruby, Rake and Sinatra are domain specific languages.

#### Examples of Metaprogramming

There are many different paths to and styles of metaprogramming in other languages; in Ruby, there are built-in hooks to help software engineers build software which will eventually make themselves obsolete! (Just a little humor there for you... or not?) The hooks are method\_missing and define\_method.

On their own, they are quite useful tools. Together, they are a powerful combo that are filled me with awe of Ruby - we'll touch on that later. First, what are they and what do they do. (Side note: "Who is your daddy,  and what does he do?" - Anyone? Anyone?)

#### method\_missing

If you've ever had a typo in a method call, you've likely encountered method\_missing. It is called when a non-existent method is called, and its included as part of Ruby's Kernel class<span class="sup">1</span>.

The general practice is to override method\_missing, and do something besides raising an exception. So let's get to an example, shall we?

<pre class="sh_ruby">
class Foo
  def method_missing(m, *args, &block)
    if m.to_s.include? 'bar'
      puts "SNAFU"
    else
      super
    end
  end
end
yo = Foo.new
yo.foobar
yo.snafu
</pre>

I've employed some standard best-practices with this example, so it isn't the simplest case, but fear not oh loyal reader, I shall explain what's going down.

First off, method\_missing can take three arguments, and I've included them here. It requires the first one, which is the name of the missing method that is getting called. The next two are the arguments and / or the block that are getting passed to the method.

After that, there is a test to check whether the method name includes "bar". Why? This is a technique to ensure that non-existent methods that really should not exist are not handled. Why? So that bugs like typos can be identified. If you take a moment to ponder, you might agree that's its generally not a good idea to try and generate code for every potential method name in existence!

If the calling method's name does include the string "bar", we'll put "SNAFU", if not, we let the standard method\_missing method handle it (and raise an exception). If I run this code, that's exactly what will happen:

<pre class="sh_terminal">
?> yo = Foo.new
=> #<Foo:0xb74836c4>
>> yo.foobar
SNAFU
=> nil
>> yo.snafu
NoMethodError: undefined method `snafu' for #<Foo:0xb74836c4>
	from (irb):7:in `method_missing'
	from (irb):15
</pre>

Yay! We're already metaprogramming. What happened? When yo called foobar, yo could not find a method with its name, so its version of method\_missing created a temporary one on the fly. Cool, huh?

#### define\_method

In my humble opinion, define\_method is where things really get exciting, because when combined with method\_missing, it is possible to start really building code during runtime.

The define\_method method is found in the [Module class](http://ruby-doc.org/core/classes/Module.html#M000497). It is private class method, so it is called on its parent object, not on instances.

First let's take a look at what define\_method can do. Examine these two classes:

<pre class="sh_ruby">
class Foo
  def snafu
    puts "hi"
  end
end
class Bar
  define_method(:snafu) do
    puts "hi"
  end
end
</pre>

In essence, they are identical. So why would we ever want to use something like define\_method? Its often used with arrays, like this:

<pre class="sh_ruby">
module Stuff
  MYKEYS = ['date','betterdate']
  MYHASH = {
          't1' => {'date' => '2000', 'betterdate' => '2000', 'dynamicdate' => '2000' },
          't2' => Hash.new('2011')
        }
end
class Test
  include Stuff
  MYKEYS.each do |k|
    define_method(k.to_sym) do |myid|
      MYHASH[myid][k]
    end
  end
end
</pre>

In that example, we're creating methods to access values from a hash. This example is futile; hopefully it illustrates how define\_method could be used on its own. Handy, right? Not really earth shattering though... what gives? Its limited by the fact that it is a private class method that creates class methods when its class is defined. In other words, it cannot be called directly during runtime making it a heck of a lot less dynamic than method\_missing. Can you tell the difference? Good! Now let's talk about the magical combo.

#### A Match Made of Rubies: method\_missing and define\_method

I employ no hyperbole - this is where the magic happens.

Remember that the problem with method\_missing is that it is a private class method, and can't be directly called from an instance at runtime. Is there another way??? **Yes!** Here comes method\_missing to the rescue.

I'll jump right into an example:

<pre class="sh_ruby">
  def method_missing(m, *args, &block)
    if ALLKEYS.include?(m.to_s)
      # Yes, smarter key
      self.class.send(:define_method, m) do
        MYHASH[name][m.to_s]
      end
      self.send(m)
    else
      super
    end
  end
</pre>

Like the first example of method\_missing, I've again employed some standard best-practices to use with method\_missing, like the string inclusion check, and the alternate push to super, the rest is much different - what's going on with all the sends?

With method\_missing, we can tell an instance to ask its parent class to call upon one of its class methods, specifically define\_method: <tt>self.class.send(:define_method, m) do</tt>. In doing so, we can pass it the non-existent method's name, and whatever the non-existent method is passed. After that, we can actually call the method as an instance method. Sufferin' succotash! That is inconceivable!

Savvy readers might be wondering:

<blockquote class="svxlb"><pre>
What's the advantage of doing it this way as opposed to simply using method_missing by itself?
</pre></blockquote>

There is a very good reason for using define\_method inside of method\_missing:
performance. Let me elaborate.

Software engineering often involves patterns that slightly or substantially
differ from one another, and sometimes those patterns are programmatic. As such,
software engineers can write algorithms to identify and specify those patterns,
saving themselves immeasurable time having to manually write code that consists
of mostly repetitive logic that slightly differs here and there.

The problem with employing that method at compile time (or in the case of Ruby,
upon instantiation), is that it can take a long time to iterate through all the
possible pattern changes and generate code to support it - an issue exacerbated
by the likelihood that not all of the pattern differences are significant and
will never be used. So why not create a method to catch those patterns during
runtime and define real methods to handle them if and when they next needed?
I can't think of a reason, so let's do so. This practice is often referred to as
lazy loading, and in my humble opinion, its a *very* cool way to work.

Other engineers agree - ORM tools like ActiveRecord and DataMapper use lazy
loading to dynamically generate methods for object properties based upon
characteristics of the data sets. If they created all those methods up front, it
would take a much longer for Ruby applications to use them, and if they only
used method\_missing, they would not be optimizing when they could.

I'd love to hear your thoughts about Metaprogramming with Ruby, or this post.
See any typos or areas of improvement? Use the comment form below to sound off.

#### See Also

* [Metaprogramming with Ruby](http://www.docunext.com/wiki/ruby/ruby-metaprogramming.html)

#### Footnotes

* <span class="sup">1</span> - While I was checking on that, I noticed that it is not included in the [Ruby 1.9.2 API documentation for the Kernel class](http://www.ruby-doc.org/core/classes/Kernel.html), though it is of course included in [1.8.7](http://www.ruby-doc.org/core-1.8.7/classes/Kernel.html#M001069). Does anyone know what's up with that?
