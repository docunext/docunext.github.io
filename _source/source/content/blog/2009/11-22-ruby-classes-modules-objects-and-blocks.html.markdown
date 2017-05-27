---
title: Ruby Classes Modules Objects and Blocks
date: 2009-11-22
tags: ruby
---
I've just written up some notes on [running Sinatra on Debian over at Docunext](http://www.docunext.com/blog/2009/11/using-sinatra-on-debian-part-i.html).

While I finally got some Rack middleware operational between my Sinatra application and the Thin webserver, it took me too long to figure it out.

I obviously need to get a better understanding of Ruby Classes, Modules, Objects and Blocks!

Here's a class:

<pre class="sh_ruby">
class Rclass
    def initialize()
        @barf = "hi"
    end
    def run()
        puts @barf
    end
end
bb = Rclass.new()
bb.run()
</pre>

OK, so that's a class, and with it we can create an object instance ("bb").

What is a Ruby module? As I understand it, its where programming Ruby becomes much more Ruby-esque than other programming languages.

Thankfully, [Ruby Fleebie has a nice tutorial on modules and mixins](http://www.rubyfleebie.com/an-introduction-to-modules-part-1/). I've read it before, and its time for a review.

Right - modules without the mixin capability is just an easy way to organize the different parts of a larger software program. Also noteworthy, it is possible to create classes within modules, like so:

<pre class="sh_ruby">
module BarfModule
    class BarfClass
        #...
    end
end
</pre>

Reminiscent of perl, modules use the double colon syntax ("::") to reference module-specific code.

Aha, now I remember why the tutorial from Ruby Fleebie didn't really sink in. The [explanation of module mixins in part II](http://www.rubyfleebie.com/an-introduction-to-modules-part-2/) is confusing to me.

Let me try to find another tutorial and figure it out more clearly. This one does the trick:

* <http://juixe.com/techknow/index.php/2006/06/15/mixins-in-ruby/>

This article is also helpful:

* <http://yehudakatz.com/2009/08/24/my-10-favorite-things-about-the-ruby-language/>

NOTE: Yehuda's favotire thing #5 is the approach I took when creating <a href="http://www.aortica.com/blog/">Aortica, a web application framework written in Perl</a>. Its a cool notion: code that writes new code as it runs, then runs the new code it has written as appropriate. Nice, huh?

