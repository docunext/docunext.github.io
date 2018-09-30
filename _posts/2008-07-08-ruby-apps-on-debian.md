---
title: Ruby Apps on Debian
date: 2008-07-08
tags: none
author: Albert Lash
---
I'm trying to build a Ruby web application engine, without really knowing much ruby, so I'm trying out some existing Ruby apps to get a feel for the language.

I tried installing tdiary, but I couldn't get it to work. Then I tried aswiki, which I was able to get working, kind of. For the default install and README.Debian instructions to work, I had to install libdb3-ruby1.8, as well as chmod 0777 cache and text.

Once I was able to load it, there remained several errors, like:

<pre>/usr/lib/ruby/1.8/algorithm/diff.rb:198: warning: don't put space before argument parentheses</pre>

Doesn't appear to be an aswiki-specific issue, though. When I try to edit a page, I get this error:

<pre>
AsWiki: Program Error: IOError

IndexPage/usr/lib/ruby/1.8/aswiki/backup.rb:40:in `ci'/usr/lib/ruby/1.8/aswiki/repository.rb:31:in `save'/usr/lib/ruby/1.8/aswiki/handler.rb:155:in `initialize'/var/www/public/aswiki/aswiki.cgi:43:in `new'/var/www/public/aswiki/aswiki.cgi:43</pre>

but the page gets saved anyway.

I also happened across this <a href="http://gwolf.org/node/1740">post about Ruby</a> by Gunnar Wolf, who I've read post by thanks to Planet Debian.

