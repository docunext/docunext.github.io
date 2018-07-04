---
title: app error closed stream IOError 
date: 2011-09-18
tags: exceptions,rack
---
Looks like my Rack middleware is having some trouble with an updated version of rack:

<pre class="terminal">
E, [2011-09-18T00:41:17.156061 #2431] ERROR -- : app error: closed stream (IOError)
E, [2011-09-18T00:41:17.164443 #2431] ERROR -- : /var/www/dev/appgems/ruby/1.9.1/gems/rack-1.3.2/lib/rack/body_proxy.rb:12:in `close'
E, [2011-09-18T00:41:17.164562 #2431] ERROR -- : /var/www/dev/appgems/ruby/1.9.1/gems/unicorn-4.1.1/lib/unicorn/http_response.rb:43:in `http_response_write'
E, [2011-09-18T00:41:17.164668 #2431] ERROR -- : /var/www/dev/appgems/ruby/1.9.1/gems/unicorn-4.1.1/lib/unicorn/http_server.rb:536:in `process_client'
E, [2011-09-18T00:41:17.164773 #2431] ERROR -- : /var/www/dev/appgems/ruby/1.9.1/gems/unicorn-4.1.1/lib/unicorn/http_server.rb:600:in `worker_loop'
E, [2011-09-18T00:41:17.164876 #2431] ERROR -- : /var/www/dev/appgems/ruby/1.9.1/gems/unicorn-4.1.1/lib/unicorn/http_server.rb:485:in `spawn_missing_workers'
E, [2011-09-18T00:41:17.164984 #2431] ERROR -- : /var/www/dev/appgems/ruby/1.9.1/gems/unicorn-4.1.1/lib/unicorn/http_server.rb:135:in `start'
E, [2011-09-18T00:41:17.165085 #2431] ERROR -- : /var/www/dev/appgems/ruby/1.9.1/gems/unicorn-4.1.1/bin/unicorn:121:in `<top (required)>'
</pre>

Oddly this is only happening when I try to use the regulate engine in production.

Ack, I guess it wasn't a Rack problem - maybe it was literally this:

<pre>
AbstractAuth::Errors::NotImplementedError in Regulate::Admin::PagesController#index

The requirement was not implemented!
</pre>

Grrr. Yes, looks like that was it. Strange... I had it working at one point without this addition to config/initializers/regulate.rb:

<pre class="sh_ruby">
 33
 34 AbstractAuth.implement :is_authenticated? do
 35    current_user.is_authenticated?
 36 end
</pre>

