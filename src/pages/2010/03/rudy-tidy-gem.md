---
title: Rudy Tidy Gem
date: 2010-03-21
tags: gems,ruby
---
I just tried using the Ruby Tidy gem, the one hosted at Ruby Forge. Alas, its not compatible with Ruby 1.9.1:

<pre class="sh_log">
/var/lib/gems/1.9.1/gems/tidy-1.1.2/lib/tidy/tidybuf.rb:5:in `<class:Tidybuf>': uninitialized constant DL::Importable (NameError)
	from /var/lib/gems/1.9.1/gems/tidy-1.1.2/lib/tidy/tidybuf.rb:3:in `<top (required)>'
	from /var/lib/gems/1.9.1/gems/tidy-1.1.2/lib/tidy.rb:25:in `require'
	from /var/lib/gems/1.9.1/gems/tidy-1.1.2/lib/tidy.rb:25:in `<module:Tidy>'
	from /var/lib/gems/1.9.1/gems/tidy-1.1.2/lib/tidy.rb:21:in `<top (required)>'
</pre>

Thankfully, there is another Tidy Gem which is! As an added bonus, it uses the ffi gem. As a side note, the [ffi](http://blog.headius.com/2008/10/ffi-for-ruby-now-available.html) gem is awesome!

It actually took some digging to find it, so here's a link to the github project:

* <http://github.com/libc/tidy_ffi>

And the author's website:

* <http://libc.st/>

The docs are a bit sparse, so here's an example of how I'm using it:

<pre class="sh_ruby">
TidyFFI::Tidy.new(output, :show_body_only => 1, :output_xml => 1, :numeric_entities => 1).clean
</pre>

Basically, [tidy options](http://www.labs.docunext.com/demo/dlabzapp2/debdocs/view/tidy-doc/index/) can be used when their hyphens (-) are switched with underscores (\_).

