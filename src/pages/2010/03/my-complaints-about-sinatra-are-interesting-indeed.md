---
title: My Complaints About Sinatra are Interesting Indeed 
date: 2010-03-28
tags: classes,configuration,erb,ruby,sinatra
---
First off, I shouldn't complain. I've been a fan of the Ruby-powered sinatra web application development library for some time, and over that time, I've only learned to appreciate it more.

So what are these complaints, you might ask?

I was *really* annoyed when I sub-classed a sinatra app and was trying to set configuration variables at startup, only to get barked at upon rebooting my app about a nil value when unicorn and rackup would compile the DSL. I hacked up a workable workaround but it remained a thorn in my side.

The configuration setup for Sinatra did, and still does seem a little too simple. And it uses the :symbol data structure - something I'd never seen prior to using Ruby. Eventually I found the time and energy to get to the bottom of it and was pleasantly surprised to discover that Ruby does in fact allow for setting configuration variable dynamically upon instantiation, and its quite simple too, all thanks to the magical nature of the Proc.

<pre class="sh_ruby">
    configure :development do
      set :logging, true
      set :reload_templates, true
      set :dump_errors, true
      set :raise_errors, true
      set :show_happy_face, "sometimes"
      set :show_laughing_face, Proc.new { show_happy_face }
    end
</pre>

I know what you are thinking.... if he was amazed by the symbol, wait until he gets a taste of Ruby Procs. Indeed! Procs are amazing concoctions of inner space, functionality, and inside-out jelly expansive supervision. PLEASE IGNORE THE HYPERBOLE.

Anyway, that's why I say  my complains about Sinatra have been interesting. They went from annoying to inspiring in no time flat.

My new complaint with Sinatra is the scope of the helper extensions, and the fact that they can only be loaded once at startup, unlike templates, which now have a toggle for reloading on each request or loading once at startup.

Thanks to the convenience of template reloading, I found myself coding lots of logic in erubis templates, and I don't even like ERB! This newly formed nasty habit had to go, so I bit the bug bytes and refactored some of the code into a class and set it to "load" in the section of the Sinatra app DSL where the template was being called.

<pre class="sh_ruby">
    get '/apis/jquery/methods' do
      load 'dtags.rb' if ENV['RACK_ENV'] == 'development'
      xslview '&gt;root />', 'jquery.xsl'
    end
</pre>

Then at the top of the file I have the opposite require ... unless development... bit.
Cool, right? Ah, not if you are a Sinatra helper module. Then its not so cool - I tried many haphazard combos and setups, as far as I can tell, its not so easy to reload helper functions for each request.

Wait - don't get me wrong! I'm annoyed, but its fading fast because I'm learning so much, especially about **Modules**, module functions, methods, receivers, instance classes versus object classes, and so on. I'm fairly familiar with basic object oriented concepts, but not like the ones I'm finding in Ruby.

Never before have I encountered such sophisticated elegance paired with a truly enjoyable learning curve. I read up on its creator recently and was pleased to learn he's focused on human factors. I believe human factors to be among the best guiding principles for design. I find Ruby to be a masterfully developed programming language in that it is immediately easy to use, quick to start learning, and empowering to become familiar with. A truly impressive feat!

But anyway, back to the specifics. Here's some of what I learned:

<pre class="sh_ruby">
class Dog
  attr_accessor :name
  def self.bark
    puts "bark"
  end
  def initialize(name='fido')
    @name = name
  end
end
</pre>

Want to hear a dog bark? Any dog at all? We can think of what a dog bark is without thinking of a particular dog, and instance of the dog class.

<pre class="sh_ruby">
Dog.bark
</pre>
bark

What about getting a dog's name? Then we'd need an actual dog.

<pre class="sh_ruby">
Dog.new('fifi')
Dog.name
</pre>
fifi

Yay.

What about modules? I first thought that they were just groups of functions that could be included into different classes. For instance, both laptop computers and netbooks can turn on and turn off, so why not create a generalized module called Toggle and include it into the Computer and Netbook classes? We can, and that will work, but what if there is a utility function in there that we want to call statically, like the Dog.bark class method we saw earlier?

Can the module be required, included and used willy nilly? Not that I know of, and I've tried lots of different ways! However, Ruby is really intuitive so if you are persistent like me and keep banging your head against the keyboard, something is bound to happen.

I happened upon the module_eval and module_function methods, very interesting. I'm probably not using them to their greatest potential, but they really came in handy tonight while I was refactoring, like this:

<pre class="sh_ruby">
      Sinatra::LabsApps.module_eval('module_function :svxwc')
      relkeys = Sinatra::LabsApps.svxwc(thetext.join(' '))
</pre>

