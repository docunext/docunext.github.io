---
title: Altered Beast for Rails 3
date: 2011-02-12
tags: rails3
---
I'm trying valiantly to update Altered Beast (forums) for Rails 3!

<pre class="sh_sh">
sudo gem install -v=2.3.3 rails
./script/plugin install git://github.com/rails/rails_upgrade.git
</pre>

Then running <tt>rake rails:upgrade:check</tt> produces some serious concerns:

<pre class="sh_sh">

Updated syntax for before_validation_on_* methods
before_validation_on_* methods have been changed to before_validation(:on => :create/:update) { ... }
More information: https://rails.lighthouseapp.com/projects/8994/tickets/4699-before_validation_on_create-and-before_validation_on_update-doesnt-exist

The culprits:
        - /dev/altered_beast/app/models/topic.rb

Old router API
The router API has totally changed.
More information: http://yehudakatz.com/2009/12/26/the-rails-3-router-rack-it-up/

The culprits:
        - config/routes.rb

Known broken plugins
At least one plugin in your app is broken (according to the wiki).  Most of project maintainers are rapidly working towards compatability, but do be aware you may encounter issues.
More information: http://wiki.rubyonrails.org/rails/version3/plugins_and_gems

The culprits:
        - restful_authentication

New file needed: config/application.rb
You need to add a config/application.rb.
More information: http://omgbloglol.com/post/353978923/the-path-to-rails-3-approaching-the-upgrade

The culprits:
        - config/application.rb

Deprecated ERb helper calls
Block helpers that use concat (e.g., form_for) should use <%= instead of <%.  The current form will continue to work for now, but you will get deprecation warnings since this form will go away in the future.
More information: http://weblog.rubyonrails.org/

The culprits:
        - /dev/altered_beast/app/views/forums/new.html.erb
        - /dev/altered_beast/app/views/sites/new.html.erb
        - /dev/altered_beast/app/views/topics/show.html.erb
        - /dev/altered_beast/app/views/users/edit.html.erb
        - /dev/altered_beast/app/views/users/new.html.erb
        - /dev/altered_beast/app/views/users/show.html.erb
        - /dev/altered_beast/app/views/layouts/_head.html.erb
        - /dev/altered_beast/app/views/sessions/new.html.erb
        - /dev/altered_beast/app/views/users/index.html.erb

Deprecated constant(s)
Constants like RAILS_ENV, RAILS_ROOT, and RAILS_DEFAULT_LOGGER are now deprecated.
More information: http://litanyagainstfear.com/blog/2010/02/03/the-rails-module/

The culprits:
        - /dev/altered_beast/app/models/monitorships_sweeper.rb
        - /dev/altered_beast/app/models/posts_sweeper.rb
        - /dev/altered_beast/lib/tasks/rspec.rake

Soon-to-be-deprecated ActiveRecord calls
Methods such as find(:all), find(:first), finds with conditions, and the :joins option will soon be deprecated.
More information: http://m.onkey.org/2010/1/22/active-record-query-interface

The culprits:
        - /dev/altered_beast/app/models/user.rb
        - /dev/altered_beast/app/controllers/sites_controller.rb
        - /dev/altered_beast/app/controllers/sessions_controller.rb
        - /dev/altered_beast/app/controllers/users_controller.rb
        - /dev/altered_beast/app/models/user.rb
        - /dev/altered_beast/app/models/site.rb
        - /dev/altered_beast/app/models/user/states.rb

named_scope is now just scope
The named_scope method has been renamed to just scope.
More information: http://github.com/rails/rails/commit/d60bb0a9e4be2ac0a9de9a69041a4ddc2e0cc914

The culprits:
        - /dev/altered_beast/app/models/user.rb

Old gem bundling (config.gems)
The old way of bundling is gone now.  You need a Gemfile for bundler.
More information: http://omgbloglol.com/post/353978923/the-path-to-rails-3-approaching-the-upgrade

The culprits:
        - /dev/altered_beast/config/environment.rb

Deprecated ActionMailer API
You're using the old ActionMailer API to send e-mails in a controller, model, or observer.
More information: http://lindsaar.net/2010/1/26/new-actionmailer-api-in-rails-3

The culprits:
        - /dev/altered_beast/app/models/user/states.rb

Old ActionMailer class API
You're using the old API in a mailer class.
More information: http://lindsaar.net/2010/1/26/new-actionmailer-api-in-rails-3

The culprits:
        - /dev/altered_beast/app/models/user_mailer.rb
        - /dev/altered_beast/app/models/user_mailer.rb

Old Rails generator API
A plugin in the app is using the old generator API (a new one may be available at http://github.com/trydionel/rails3-generators).
More information: http://blog.plataformatec.com.br/2010/01/discovering-rails-3-generators/

The culprits:
        - vendor/plugins/rspec_on_rails_on_crack/generators/
        - vendor/plugins/rspec_on_rails_on_crack/generators/custom_scaffold/
        - vendor/plugins/restful_authentication/generators/
        - vendor/plugins/restful_authentication/generators/authenticated/
        - vendor/plugins/brain_buster/generators/
        - vendor/plugins/brain_buster/generators/brain_buster_migration/
        - vendor/plugins/open_id_authentication/generators/
        - vendor/plugins/open_id_authentication/generators/upgrade_open_id_authentication_tables/
        - vendor/plugins/open_id_authentication/generators/open_id_authentication_tables/
</pre>

Whoops - looks like someone has already done the work for me:

<a href="https://github.com/stiff/altered_beast" rel="nofollow">Rails 3 Version of Altered Beast</a>

I also found modern\_savage\_beast - it had no license so I emailed the author - he chose the MIT license! Yay!

