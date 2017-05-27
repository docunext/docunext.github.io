---
title: Rails alias method chain
date: 2011-02-23
tags: rails
---
Today I wrote a plugin for Redmine and ended up using <tt>alias\_method\_chain</tt>.

Its a very handy little method! What does  do? It allows for convenient overrides of methods built-in to a Ruby on Rails application.

Its syntax sugar, really. This:

<pre class="sh_ruby">
alias_method_chain :mymethod, :origmethod
</pre>

simply encapsulates these two calls:

<pre class="sh_ruby">
alias_method :mymethod_without_origmethod, :mymethod
alias_method :mymethod, :mymethod_with_origmethod
</pre>

A better way to explain this is:

<pre class="sh_ruby">
alias_method_chain :mymethod, :achange
</pre>

which equals:

<pre class="sh_ruby">
alias_method :mymethod_without_achange, :mymethod
alias_method :mymethod, :mymethod_with_achange
</pre>

