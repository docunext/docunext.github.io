---
title: Caching in Rails 3
date: 2011-09-01
tags: caching,rails,ruby
---
I'm very impressed with the caching capabilities in Rails 3. Not only can it cache pages like any good Rack application can, it can also cache actions - which will include factors like authentication of sessions, and it can also cache... partials!

Seriously, isn't that awesome?

There are some other great aspects, too:

* When memcached is employed, time-to-live can be specified.
* Sweepers can be used to purge caches.
* Callbacks can be used to purge caches.

In my experience, caching can be a pain because it can happen when it shouldn't. However, it has also been my experience that it is the most effective way to improve performance.

#### Example of Rails 3 Caching

<pre class="sh_ruby">
  1 class AccountsController < InheritedResources::Base
  2   defaults :resource_class => Account, :collection_name => 'accounts', :instance_name => 'account'
  3
  4   before_filter :clear_accounts_cache, :only => [:create, :update, :hide]
  5   caches_action :index
  6

...

 39   private
 40     def clear_accounts_cache
 41       expire_action :action => :index
 42     end
 43 end
</pre>

