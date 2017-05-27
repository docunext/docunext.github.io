---
title: Ruby Proc Examples
date: 2010-03-27
tags: ruby
---
#### Fun With Ruby Procs!

If I understand correctly, procs are somewhat similar to anonymous, or lambda functions, in that they can be passed as arguments. They are also somewhat similar to function prototypes in that they can be bound to local variables, then called with new arguments.

Abstract, yes. Useful, definitely!

I don't use them everyday, but when I need them, they are often really useful. Especially when I am in the development process - I might not know exactly what I will need while I am writing code, and a proc is a really flexible placeholder to use as the logic evolves.

Here's a basic Ruby proc example:

<pre class="sh_ruby">
def blahblah(method)
  return Proc.new { |string|
    if method == 'reverse'
      string.reverse
    else
      string.upcase
    end
  }
end
rme = blahblah('reverse')
upme = blahblah('no')
puts rme.call('howdy')
puts upme.call('yo')
</pre>

I need more practice with procs.

[Great article on Ruby Procs!](http://eli.thegreenplace.net/2006/04/18/understanding-ruby-blocks-procs-and-methods/)

