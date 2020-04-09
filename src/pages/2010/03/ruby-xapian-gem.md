---
title: Ruby Xapian Gem
date: 2010-03-02
tags: gems,ruby
---
I'm installing the Ruby Xapian gem, an interface to the Xapian indexing system:

<pre class="sh_sh">
sudo gem1.9.1 install xapian
Building native extensions.  This could take a while...
</pre>

Nope, that didn't work:

<pre class="sh_sh">
*** Building bindings for languages: ruby
configure: WARNING: Xapian library is version 1.0.18 but the bindings are version 1.0.15 - we strongly recommend using matching versions.
</pre>

This helped:

* [Setup Xapian and Ruby binding on Ubuntu server](http://www.taylorluk.com/articles/2009/09/15/setup-xapian-and-ruby-binding-on-ubuntu-server)

I'm using Xapian 1.0.18, Ruby 1.9.1, and I excluded other language bindings:

<pre class="sh_sh">
dev-48-gl:/var/www/dev/xapian-bindings/xapian-bindings-1.0.18$ ./configure RUBY=/usr/bin/ruby1.9.1 --without-php --without-python --without-tcl --without-csharp --without-java
make
sudo make install
</pre>

<pre class="sh_ruby">
irb(main):003:0> require 'xapian'
=> true
irb(main):004:0> quit
</pre>

Nice!

What will I be indexing? Just apt data to start, thanks to "apt-xapian-index".

Hah, I just noticed that the page by Taylor Luk also mentions the use of Xapian with CouchDB. Cool! [I've chosen MongoDB over CouchDB](http://www.docunext.com/2010/03/debian-and-nosql-storage-systems/), and it looks like there is [interest in bridging MongoDB with Xapian, too](http://jira.mongodb.org/browse/SERVER-380). Cool!
## External Links

* <http://xapian.org/docs/bindings/ruby/>

