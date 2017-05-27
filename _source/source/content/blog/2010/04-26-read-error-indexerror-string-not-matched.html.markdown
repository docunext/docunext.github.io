---
title: Read error lt IndexError string not matched 
date: 2010-04-26
tags: errors
---
This was an interesting error to debug! It comes from a Sinatra app traceback, but the full traceback wasn't much help, here's a little bit of it:

<pre class="sh_sh">
Read error: #&lt;IndexError: string not matched>
/var/lib/gems/1.9.1/gems/sinatra-1.0.a/lib/sinatra/base.rb:600:in `[]='
/var/lib/gems/1.9.1/gems/sinatra-1.0.a/lib/sinatra/base.rb:600:in `handle_exception!'
/var/lib/gems/1.9.1/gems/sinatra-1.0.a/lib/sinatra/base.rb:586:in `rescue in dispatch!'
/var/lib/gems/1.9.1/gems/sinatra-1.0.a/lib/sinatra/base.rb:589:in `dispatch!'
</pre>

I think it turned out to be an encoding error, but I'm not sure why this IndexError was showing up. Turns out that this bit of code doesn't cause a problem when there are no errors, but causes the IndexError when there is a problem:

<pre class="sh_ruby">
@env = settings.environment
</pre>

This is most likely Sinatra specific, if I change @env to @myenv, its OK. Since I don't actually need it, I've removed it altogether.

And to fix  the encoding issue:

<pre class="sh_ruby">
rlinks.encode('UTF-8', undef: :replace, invalid: :replace)
</pre>

