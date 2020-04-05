---
title: Acceptance Testing in Rails3 with Rspec2 Capybara and Devise
date: 2011-11-21
tags: devise,rails3,rspec,testing
---
I finally figured out how to setup acceptance testing in Rails3 with Rspec2, Capybara, and Devise!

It actually wasn't that hard, once I decided to manually login to create the user session instead of trying to use some magic sign-in method.

I researched the matter for awhile prior to manually creating the devise-based Rails3 session but could not find a simple example, so here's one that is similar to what I'm doing:

<pre class="sh_ruby">
require 'acceptance/acceptance_helper'
feature 'Vehicles', "Access vehicles" do
  background do
    Factory.create(:vehicle)
    User.create(
      :email => 'user@example.com',
      :password => 'password',
      :password_confirmation => 'password'
    )
  end
  scenario 'Viewing the index' do
    visit '/'
    fill_in 'user[email]', :with => 'user@example.com'
    fill_in 'user[password]', :with => 'password'
    click_button 'Sign in'
    visit '/private-page'
    page.should have_content("My Special Content")
  end
end
</pre>

Not too difficult, eh? I'm really starting to like Capybara - and I like how it integrates so well with Rspec2.

In researching this topic, I did find some useful posts, however. I read up about the "Database Cleaner" rubygem, and how folks are using it because selenium (an awesome testing framework I've used a bunch in the past) doesn't work with transactional fixtures, and folks are using selenium because that's how we can use capybara to test ajax integration. I've really been meaning to try out the "Database Cleaner" gem, just haven't had the chance - but speaking of database-related gems, **replicate** by Ryan Tomayko is really terrific, in my humble opinion. It makes it really easy to import and export ActiveRecord objects from Rails applications from the command-line - even from one storage type to another, say from SQLite to MySQL, because it serializes the records as AR objects. The replicate gem can even handle associations, making it all that much more massively useful.

**Pretty awesome, if you ask me.**

Before closing, I should mention that while I'm using Devise to handle authentication, this method should work with others, like AuthLogic, or a custom built Rails session management system, though the key identifiers to enter in the credentials might be different. I've used AuthLogic in the past, and while it worked very well, I've since switched to Devise, and I have to say I like it better. There are a lot of third party extensions for it, and more importantly I found the documentation more accessible (and available).
