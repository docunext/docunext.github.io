---
title: Rspec Rails 3 and AuthLogic
comments:
  - author: SSCirrus
    email: sscirrus@gmail.com
    ip: 72.196.251.60
    url:
    date: 08/27/2011 03:21:50 AM
    text: >
      Thank you so much!! There are lots of articles out there about rspec/Authlogic but this is exactly what I've been looking for.
date: 2011-02-13
tags: authlogic,rails3,rspec,testing
---
I'm pleased I was able to get **Rspec, Rails 3, and AuthLogic** working, and to make it easier to do next time, I'm jotting down my notes here.

The trick for me was to figure out how to use Factory Girl, which is a very nice replacement for fixtures, in my humble opinion.

First off, let me clarify I didn't figure this out on my own. I found some very helpful hints in the usual places: StackOverflow, Ruby on Rails mailing lists, etc.

I created a valid\_user factory:

<pre class="sh_ruby">
Factory.define :valid_user, :class => User do |u|
  u.login "User"
  u.password "password"
  u.password_confirmation "password"
  u.email "user@example.com"
  u.single_access_token "kh3h93hfkhfl4hg8"
end
</pre>

Then I included and activated AuthLogic in spec/spec\_helper.rb:

<pre class="sh_ruby">
require "authlogic/test_case"
include Authlogic::TestCase
</pre>

At the start of each controller spec, I then included this:

<pre class="sh_ruby">
  before(:each) do
    activate_authlogic
    @user = Factory.create(:valid_user)
    UserSession.create(@user)
  end
</pre>

The controller tests were easy to debug, but the views took a little more work.

<blockquote class="svxlb"><pre>
I ran into a similar issue, and was surprised to learn that Rspec does some impressive inference from the describe argument. For example:

    require 'spec_helper'

    describe "bills/payments/edit.html.erb" do
      it "Renders payment form" do
        assign(:payment, stub_model(Payment))
        render
      end
    end

Due to some evolutionary controller / view names, this test originally had:

    describe "bills/payment/edit.html.erb" do

that really messed everything up, and even if I set the :template after render, it was unable to find a referenced partial. Fixing up the path in the describe statement fixed it all.
</pre>

¥

