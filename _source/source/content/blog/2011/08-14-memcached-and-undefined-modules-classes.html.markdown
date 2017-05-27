---
title: Memcached and Undefined Modules Classes
date: 2011-08-14
tags: ruby on rails
---
I ran into this sort-of bug while using Memcached and Rails. By caching an object in memcache, Rails doesn't know how to autoload the file that defines its class and throws an Undefined Module / Class error.

Thankfully [Phil](http://www.philsergi.com/2007/06/rails-memcached-undefinded-classmodule.html) posted a helpful solution to this, and my variation of it is this:

<pre class="sh_ruby">
  1 class ApplicationController < ActionController::Base
  2   protect_from_forgery
  3   before_filter :preload_modules
  4
  5   def preload_modules
  6     unless Rails.env.production?
  7       load "#{Rails.root}/app/models/accounts/account_base.rb"
  8       load "#{Rails.root}/app/models/accounts/account.rb"
  9       [ "app/models/accounts" ].each do |path|
 10         Dir["{Rails.root}/{path}/*.rb"].each do |file|
 11           load file
 12         end
 13       end
 14       Account
 15       Asset
 16       Liability
 17       Expense
 18       Revenue
 19       Other
 20       Equity
 21       BankAccount
 22       CreditCard
 23       Company
 24       Customer
 25       Vendor
 26       CurrentAsset
 27     end
 28   end
 29 end
</pre>

Cool, huh? This is from [Regdel, the open source bookkeeping app powered by Ruby and Ruby on Rails](http://www.regdel.com/).

The code doesn't get evaluated in production because at this point I'm only caching objects that get reloaded when the classes are not cached. In the future, I might cache additional objects, but I don't know if I'll need to include the above, because again, the classes will get cached, and won't need to be autoloaded everytime.

**UPDATE**: I have confirmed that this is not necessary on production for my setup. I plan to research the use of memcache and Rails 3.1 more in the near future.

