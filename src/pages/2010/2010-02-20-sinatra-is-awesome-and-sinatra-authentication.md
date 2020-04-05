---
title: Sinatra is Awesome and Sinatra Authentication 
date: 2010-02-20
tags: authentication,rack,sinatra
---
I keep harping on this, but I love the fact that when I approach a task with Sinatra the slate is totally blank. Yes, there are some ready-made solutions with Rack, and Sinatra helpers, but there are no "official" methods.

While some may scoff, I *love* that aspect of Sinatra.

I'm currently reviewing Sinatra sessions, which are based off of [Rack::Sessions](http://www.docunext.com/wiki/Rack_Sessions), for the purpose of authentication and user interface customization.

Apart from the bare metal authentication mechanisms available from Rack, we are on our own!

Again, some may scoff, but I prefer that I don't have to put the boat in reverse to undo what others found useful to make it so I can setup what I find appropriate.

For example, I used javascript and PHP powered "secure" authentication without having to deal with certificates. (I use the term secure with quotes because somebody smart said that the only secure computer is one that is turned off, encased in concrete and sunk to the bottom of the ocean, and even then its not terribly secure. I agree!)

It probably won't be too difficult to do the same with Sinatra, and that is awesome!

While I have yet to get started on the actual implementation, I was able to figure out how to exclude bots from getting sessioned:

<pre class="sh_ruby">
    unless :agent.to_s =~ /(Slurp|msnbot|Googlebot)/
      use Rack::Session::Memcache, :key => 'notapp', :domain => 'dev-48-gl.example.com', :expire_after => 60 * 60 * 24 * 365, :memcache_server => 'localhost:11211'
    end
</pre>

Untested, of course!

PS - I'm still having no problems with Sinatra 1.0a. I've tried the "settings" method. It didn't work, but that may have been my bad.

PPS - I've now started on a Sinatra helper for RBAC (role based access control). Hopefully I'll get base the authentication system off of an existing class.

PPPS - Eldrad must live!
