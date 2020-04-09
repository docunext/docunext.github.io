---
title: Another Ruby Moment 
date: 2009-08-22
tags: ruby
---
I wanted a regular expression to parse an (x)HTML snibbet and escape the contents of pre tags, non-greedily.

Its most likely a multi-line string, so I wanted something with a wider scope than cat and sed. Perl? Probably, but Ruby's object-oriented nature is so wonderful. I tried it, and as usual the regular expressions took a little bit of work, but this is what I came up with:

<pre class="sh_ruby">mystring = %q{&lt;bodycontent&gt;
&lt;h2&gt;Greetings!&lt;/h2&gt;
&lt;p&gt;How are you?&lt;/p&gt;
&lt;pre&gt;
hi
&lt;
/pre&gt;
&lt;/pre&gt;
O
&lt;pre&gt;OK&lt;br /&gt;&lt;/pre&gt;
&lt;/bodycontent&gt;
}
mystring.gsub!(/&lt;pre&gt;.*?&lt;\/pre&gt;/m) {|esc|
&nbsp;&nbsp;&nbsp; esc.gsub('&lt;br /&gt;',"\n").gsub('&lt;','&amp;lt;').gsub(/&amp;lt;(\/)?pre&gt;/,'&lt;\1pre&gt;')
}
puts mystring
</pre>

