---
title: Wacky Rack
date: 2009-12-27
tags: rack,unicorn
---
I love testing different combinations of software and so its should come as no surprise that Ruby, Rack, and the plentiful middleware for it makes for plenty of testing.

Today I was testing Regdel with Unicorn, and I ran into a problem with Rack::Lint. For some reason, something was causing a Content-Length header of zero to be sent.

I thought it might have been rack-docunext-content-length, but thankfully, no, that was not the cause.

I realized that Unicorn was defaulting to a development environment and was loading the following Rack::Middleware:

<pre class="sh_ruby">
  case ENV["RACK_ENV"]
  when "development"
    Rack::Builder.new do
      use Rack::CommonLogger, $stderr
      use Rack::ShowExceptions
      use Rack::Lint
      run inner_app
    end.to_app
  when "deployment"
    Rack::Builder.new do
      use Rack::CommonLogger, $stderr
      run inner_app
    end.to_app
  else
    inner_app
  end
</pre>

I believe Rack::Lint was getting called before anything else. Maybe that was the cause? I'm not sure, but if I use Rack::Lint in Regdel, there are no problems, and there is not Content-Length header of zero getting sent to my client.

I'm now launching Unicorn like this:

<pre class="sh_sh">
/var/lib/gems/1.8/gems/unicorn-0.95.3/bin/unicorn --env none -l 3000
</pre>

