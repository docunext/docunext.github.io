---
title: Rails 3 and DataMapper
date: 2010-10-09
---
<pre class="sh_sh">
rails new rubyisawesome  -m http://datamapper.org/templates/rails.rb
      create  README
      create  Rakefile
      create  config.ru
      create  .gitignore
      create  Gemfile
      create  app
      create  app/helpers/application_helper.rb
      create  app/controllers/application_controller.rb
      create  app/views/layouts/application.html.erb
      create  app/models
      create  app/mailers
      create  config
      create  config/routes.rb
      create  config/application.rb
      create  config/environment.rb
      create  config/environments
      create  config/environments/development.rb
      create  config/environments/test.rb
      create  config/environments/production.rb
      create  config/initializers
      create  config/initializers/inflections.rb
      create  config/initializers/secret_token.rb
      create  config/initializers/mime_types.rb
      create  config/initializers/backtrace_silencers.rb
      create  config/initializers/session_store.rb
      create  config/locales
      create  config/locales/en.yml
      create  config/boot.rb
      create  config/database.yml
      create  db
      create  db/seeds.rb
      create  doc
      create  doc/README_FOR_APP
      create  lib
      create  lib/tasks
      create  lib/tasks/.gitkeep
      create  log
      create  log/server.log
      create  log/production.log
      create  log/development.log
      create  log/test.log
      create  public
      create  public/422.html
      create  public/favicon.ico
      create  public/404.html
      create  public/index.html
      create  public/500.html
      create  public/robots.txt
      create  public/images
      create  public/images/rails.png
      create  public/stylesheets
      create  public/stylesheets/.gitkeep
      create  public/javascripts
      create  public/javascripts/prototype.js
      create  public/javascripts/effects.js
      create  public/javascripts/application.js
      create  public/javascripts/dragdrop.js
      create  public/javascripts/rails.js
      create  public/javascripts/controls.js
      create  script
      create  script/rails
      create  test
      create  test/performance/browsing_test.rb
      create  test/test_helper.rb
      create  test/unit
      create  test/functional
      create  test/integration
      create  test/fixtures
      create  tmp
      create  tmp/sessions
      create  tmp/sockets
      create  tmp/cache
      create  tmp/pids
      create  vendor/plugins
      create  vendor/plugins/.gitkeep
       apply  http://datamapper.org/templates/rails.rb
       apply    http://datamapper.org/templates/rails/gemfile.rb
      remove      Gemfile
      create      Gemfile
       apply    http://datamapper.org/templates/rails/application.rb
       apply      http://datamapper.org/templates/rails/config.rb
        gsub        config/application.rb
        gsub        config/environments/development.rb
        gsub        config/environments/test.rb
       apply      http://datamapper.org/templates/rails/database.yml.rb
      remove        config/database.yml
      create        config/database.yml
      inject      app/controllers/application_controller.rb
      inject      app/controllers/application_controller.rb
 initializer      jruby_monkey_patch.rb
    ---------------------------------------------------------------------------
    Edit your Gemfile (do not forget to run 'bundle install' after doing that)
    Some of the following commands assume that you passed the --binstubs option
    to bundle install. If you haven't done so, use 'bundle exec rake' where the
    examples below use './bin/rake'
    ---------------------------------------------------------------------------
    If you want to use rspec for testing, you first need to uncomment the line
    that declares it in the Gemfile. The you need to run 'bundle install' again
    Once that's done, you need to actually install it into your app and update
    your spec_helper as shown in the dm-rails README
    ---------------------------------------------------------------------------
    Install rspec (optional):             rails g rspec:install
    Have a look at the dm-rails README:   http://github.com/datamapper/dm-rails
    ---------------------------------------------------------------------------
    Have a look at available rake tasks:  ./bin/rake -T
    Generate a simple scaffold:           rails g scaffold Person name:string
    Create, automigrate and seed the DB:  ./bin/rake db:setup
    Start the server:                     rails server
    ---------------------------------------------------------------------------
    After the sever booted, point your browser at http://localhost:3000/people
    ---------------------------------------------------------------------------
</pre>

Why does the rails command include a gem install utility?

<pre class="sh_sh">
rails g rspec:install
</pre>

#### Links
* <http://github.com/datamapper/dm-rails>

