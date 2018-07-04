---
title: Ruby Strings and Real Object Orientation
date: 2009-09-07
tags: ruby,strings
---
Code:
<pre class="sh_ruby">barf = "hello"
puts barf
barf.upcase!
puts barf
</pre>

Output:
<pre>ruby ruby-strings.rb
hello
HELLO
</pre>

Pretty boring, huh? Well one of the nice things about Ruby is that you can do stuff like this:

<pre class="sh_ruby">
class String
    def goodbye
        puts "Goodbye"
    end
end
barf = "hello"
puts barf
barf.upcase!
puts barf
barf.goodbye
</pre>

Yes, very cool. What happened here was the function goodbye was added to the string class, so that every string object has access to it. Very very cool.

Related: [Introduction to Ruby Modules](http://www.rubyfleebie.com/an-introduction-to-modules-part-1/)

