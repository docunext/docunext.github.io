---
title: Testing Ruby LDAP
date: 2010-10-06
---
I'm interested in the possibility of creating LDIF files for use with TinyLDAP and CHIMAILMADMIN.

This tutorial looks helpful:

* <a href="http://www.tutorialspoint.com/ruby/ruby_ldap.htm" rel="nofollow">http://www.tutorialspoint.com/ruby/ruby_ldap.htm</a>

So far I haven't been able to use the to_ldif method.

I think I figured out how to use it.... but I'm getting a segmentation fault! Could it be a 1.9 incompatibility? Perhaps... now trying 1.8.

Nope, that doesn't like it either:

<pre class="sh_sh">

./ruby-ldap.rb:25: undefined method `to_ldif' for #<LDAP::Entry:0x7f1602fffa90> (NoMethodError)
	from ./ruby-ldap.rb:17:in `search'
	from ./ruby-ldap.rb:17
</pre>

Figured it out! Just needed to require 'ldap/ldif'. Silly me.

