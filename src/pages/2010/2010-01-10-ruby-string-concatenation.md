---
title: Ruby String Concatenation
date: 2010-01-10
tags: ruby,strings
---
I keep finding myself looking up how to concatenate strings in Ruby so I'm writing it down here to help me remember.

One way (which is familiar to me because its how I would do the same in [PHP](http://www.php.code-experiments.com/blog/)):

<pre class="sh_sh">
blah=""
(1..9).each {
blah = blah + "barf"
}
puts blah
</pre>

A ruby way:
<pre class="sh_sh">
blah=""
(1..9).each {
blah << "barf"
}
puts blah
</pre>

