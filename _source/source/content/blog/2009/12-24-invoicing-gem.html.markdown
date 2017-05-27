---
title: Invoicing Gem
date: 2009-12-24
tags: ruby
---
I'm reviewing the invoicing gem. Its nice that the author has scoped it well, meaning that it doesn't try to do everything or be everything to everyone.

Apparently it ties in well with Rails, but I'm not too familiar with Rails so that doesn't help me much. On top of that, I think it depends upon ActiveRecord, whereas I've been learning DataMapper. Doh!

I like the idea that it can purportedly plug into different applications though.

NOTE: The invoicing gem is very well commented. Here's a cool example:


If I read it correctly, it uses ActiveRecord's ability to inherit object classes. Heh - check out this comment:

<blockquote>Purists of object-oriented programming will most likely find this appalling</blockquote>

I'm not sure what to make of this yet, other than I find it interesting. DataMapper supports single-table inheritance as well, though I've only used it with Regdel for Entry Amounts:

<pre class="sh_ruby">
class Credit &lt; Amount; end
class Debit &lt; Amount; end
</pre>

This way I get to easily split entry amounts into credits or debits. It seems solid enough, but I' wary to extend object classes too far or wide.

