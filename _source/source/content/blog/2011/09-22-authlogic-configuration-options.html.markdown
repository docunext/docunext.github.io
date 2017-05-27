---
title: AuthLogic Configuration Options and Examples
date: 2011-09-22
tags: authentication,authlogic,devise,rack,ruby
---
AuthLogic was the first authentication gem I chose for Rails 3.1. It works, but I have issues with the documentation - its not clear, and there just aren't enough configuration examples to figure out how to set it up.

Its ironic, because the documentation says...

<blockquote><pre>
A code example can replace a thousand words...
</pre></blockquote>

But one of the examples they provide is:

<pre class="sh_ruby">
class User < ActiveRecord::Base
  acts_as_authentic do |c|
    c.my_config_option = my_value
  end # the configuration block is optional
end
</pre>

Ugh! Seriously. Why not use a *real* configuration option??

From what I've gathered, there are two places that options are set:

* User
* UserSession

For User, configuration options are set in a block, like so:

<pre class="sh_ruby">
 1 class User < ActiveRecord::Base
 2   acts_as_authentic do |c|
 3     c.logged_in_timeout = 1.day
 4   end
</pre>

and for UserSession, they are set with class methods, like so:

<pre class="sh_ruby">
  1 class UserSession < Authlogic::Session::Base
  2   self.logout_on_timeout = true
  3   self.last_request_at_threshold = 10.minutes
  4 end
</pre>

I hope you find this useful, I sure could have used a page like this tonight!

NOTE: I've since switched to Devise, but not for my complaints mentioned above. I really like the fact that Devise can hook right into Rack.

