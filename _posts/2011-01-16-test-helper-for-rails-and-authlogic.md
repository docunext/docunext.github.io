---
title: Test Helper for Rails and AuthLogic
date: 2011-01-16
tags: authlogic,helpers,rails,testing
---
I'm working on an application that requires a user to be matched with objects, and therefore, to test them, I need to create user fixtures, create sessions, and obtain the user's id from the session.

It was a little tricky to figure out how to get AuthLogic and Test::Unit to play nicely together, but thanks to some quality docs by the AuthLogic folks, as well as some helpful hints from the StackOverflow community, its no longer a total mystery. Here's what I've got in my test/test_helper.rb:

<pre class="sh_ruby">
ENV["RAILS_ENV"] = "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require "authlogic/test_case"
class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.(yml|csv) for all tests in alphabetical order.
  #
  # Note: You'll currently still have to declare fixtures explicitly in integration tests
  # -- they do not yet inherit this setting
  def self.inherited(subclass)
    subclass.instance_eval do
      setup :activate_authlogic
    end
  end
  fixtures :all
  # Add more helper methods to be used by all tests here...
  def setup
    @current_user = UserSession.create(users(:one))
  end
end
</pre>

Note: I am using Rails 3.

