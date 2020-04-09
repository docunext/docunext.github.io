---
title: Ruby XSL Libraries
date: 2009-12-27
tags: gems,ruby,ruby 1.9,xsl
---
There are at least two Ruby library gems that provide bindings to the same C-based XSLT engine: libxslt.

For the record, I'm using [Ruby/XSLT by Gregoire Lejeune](http://greg.rubyfr.net/pub/packages/ruby-xslt/files/README.html). Its available on Debian, so that's how I got started with it.

I still have some problems with it though. As a debian package, it is require 'xml/libxslt'. As a gem, on heroku for example, it is require 'xml/xslt'.

Why?

No need to get to the bottom of the cause - Debian Squeeze does not include libxslt-ruby, so now I'm doing this:

<pre class="sh_sh">
sudo gem install ruby-xslt
</pre>

And yet another gotcha! => ruby-xslt won't install or compile with 1.9.1. Thankfully [Radar](http://github.com/radar/ruby-xslt) forked it and patched it to do so!

