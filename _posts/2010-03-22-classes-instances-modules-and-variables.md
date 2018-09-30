---
title: Classes Instances Modules and Variables
date: 2010-03-22
tags: classes
---
In my humble opinion, Ruby is the perfect language for discussing classes, instances, and modules because its object orientation is so clean and elegant.

First, a review.

#### Object Oriented Programming

Object oriented programming is a style of programming that builds on the fundamentals of data structures and extends them with the concepts of inheritance and classification.

**Classes** are *types of objects* and typically have attributes and functions. Objects are created as *instances*. For example, "Person" could be a class, and "Steve Jobs" could be an instance of the "Person" class.

Inheritance comes into play with sub-classes. Base classes are often generic and abstract, only becoming more specific though multiple generations.

In Ruby, everything is a subclass of the Object class, and as such, "everything is an object"! Therefore, everything has access to the "ancestors" method, like so:

<pre class="sh_ruby">
irb(main):001:0> String.ancestors
=> [String, Comparable, Object, Kernel, BasicObject]
</pre>

#### Modules, Instances, and Variables

Modules aren't classes, but they can include variables and functions that can be included into classes. They can also be used as namespaces for organizing code, too.

Here's an interesting block of code:

<pre class="sh_ruby">
module Something
  class &lt;&lt; self
    attr_accessor(:conf, :runtime)
  end
  def self.new(conf)
    self.conf = conf
    Main
  end
  class Main &lt; Sinatra::Base
    get '/' do
      "hello"
    end
  end
end
if __FILE__ == $0
  conf = Hash['uripfx','/']
  myapp = Something.new(conf)
  myapp.run!
end
</pre>

I actually got the idea for sub-classing Sinatra apps like I do these days from git-wiki. Its a nicely written Sinatra app that uses Grit (ruby git interface). I've read through the code numerous times and I'm still learning from it! :-)

Back to the code example - it is a sub-classed Sinatra application, and its the root of several works in progress. First of all, I'm not too crazy about the conf hash. Sinatra apps have access to the "settings" method, but I had some issues with that in the past. And I guess this is one area where I'm still a little confused. When Sinatra::Base is sub-classed multiple times within one Ruby process, I imagine that the settings will be application specific. The documentation leads me to believe so:

<blockquote class="svxlb"><pre>
"Settings are application-level variables that are modified using one of the set, enable, or disable methods and are available within the request context via the settings object. Applications are free to set custom settings as well as the default, built-in settings provided by the framework."
</pre></blockquote>

So why use a module to isolate attributes from the sub-classed Sinatra app? Well, for one its a nice way to keep the application-level clean. I've actually been hearing a lot about that lately, keeping namespaces clean, and isolating logic and code by context. Doing so has the general benefit of keeping things organized, but I bet it also can reduce memory consumption and increase performance, too.

Another reason might be running multiple instances of the app within one Ruby process. The git-wiki.rb rackup file:

<pre class="sh_ruby">
#!/usr/bin/env rackup
require File.dirname(__FILE__) + "/git-wiki"
run GitWiki.new(File.expand_path(ARGV[1] || "~/wiki"),
  ARGV[2] || ".markdown", ARGV[3] || "Home")
</pre>


With the "map" method, multiple instances of GitWiki could be run for different paths. Still, I think in that case, the settings object of the Sinatra app would be different.

Hmmm.... I just tested out my theory and the module attribute was shared across two different instances. Very interesting.... and the settings object is too.

The important factor I need to remember about settings is that they can only be accessed within the scope of a request, not within a configuration block. Actually, there is a case when it settings can be accessed from configuration blocks - when a Proc object is used. Very interesting indeed!

Ah - maybe the reason git-wiki uses the module attributes so that it can access the attributes from classes other than the Sinatra application class. Seems logical enough.

Links:

* <http://sporkmonger.com/2007/2/19/instance-variables-class-variables-and-inheritance-in-ruby>
* <http://martinfowler.com/bliki/ClassInstanceVariable.html>
* <http://www.ruby-forum.com/topic/167373>

