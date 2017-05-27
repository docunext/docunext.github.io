---
title: NoMethodError undefined method bytesize for ...
date: 2009-12-05
tags: errors,ruby,sinatra
---
I'm trying to use a custom error page in Sinatra, but I'm getting this error:

<pre class="sh_log">
NoMethodError: undefined method `bytesize' for [:name, ["Name is already taken"]]:Array
</pre>

If I try to create a custom error like this:

<pre class="sh_ruby">
error MyCustomError do
  'So what happened was...' + request.env['sinatra.error'].message
end
</pre>

I get this page:

<pre class="sh_log">
./regdel.rb:70: uninitialized constant MyCustomError (NameError)
</pre>

Hmmmm.

