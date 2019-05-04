---
title: Rendering A Partial HAML Template in Rails 3.1
date: 2011-08-30
tags: rails 3
---
#### How To Render a Partial HAML Template From a Rake Task in Rails 3.1

Thanks to [Klimant Mamykin](http://mamykin.com/2011/06/28/how-to-render-view-from-rake.html), I was able to figure out how to render a partial HAML template in Rails 3.1.

My setup is a little different, as I'm trying to render a controller independent partial:

<pre class="sh_ruby">
namespace :render do
  task :partials => :environment do
    app = RegdelRails::Application
    controller = AccountsController.new
    view = ActionView::Base.new(app.config.paths.app.views.first)
    view.class_eval do
      include ApplicationHelper
      include app.routes.url_helpers
    end
    Dir["#{Rails.root}/app/views/layouts/_*.html.haml"].each do |file_name|
      puts file_name
      if File.exist?(file_name)
        new_file = file_name.gsub('.haml','')
        output = view.render 'layouts/header'
        f = File.new(new_file, "w")
        f.write(output)
      end
    end
  end
end
</pre>

Why am I bothering to do this? I want to use Rack::XSL, but also support operation of my Rails 3.1 apps without requiring Rack::XSL, as it can be a pain to install, and some people simply don't like XSL at all.

Why do I like XSL? Its incredibly fast, and supports caching, so it can be a big performance booster for heavy Rails apps.

Here's an updated version that supports javascript and css tags, as well as csrf-tokens:

<pre class="sh_ruby">
namespace :render do
  task :partials => :environment do
    request = {
     "SERVER_PROTOCOL" => "http",
     "REQUEST_URI" => "/",
     "SERVER_NAME" => "localhost",
     "SERVER_PORT" => 80
    }
    app = RegdelRails::Application
    view = ActionView::Base.new(app.config.paths.app.views.first)
    view.config = Rails.application.config.action_controller
    view.extend ApplicationController._helpers
    view.controller = ActionController::Base.new
    view.controller.request = ActionDispatch::Request.new(request)
    view.controller.response = ActionDispatch::Response.new
    view.controller.headers = Rack::Utils::HeaderHash.new
    view.class_eval do
      include ApplicationHelper
      include app.routes.url_helpers
    end
    view.controller.class_eval do
      include ApplicationHelper
      include app.routes.url_helpers
    end
    Dir["#{Rails.root}/app/views/layouts/_*.html.haml"].each do |file_name|
      puts file_name
      if File.exist?(file_name)
        new_file = file_name.gsub("#{Rails.root}/app/views/layouts/_",'app/views/layouts/xsl/html/').gsub('.haml','')
        output = view.render file_name.gsub("#{Rails.root}/app/views/layouts/_",'layouts/').gsub('.html.haml','')
        f = File.new(new_file, "w")
        f.write(output)
      end
    end
  end
end
</pre>

After I succeeded in making this happen, I learned about the awesome new block and partial caching capabilities of Rails 3 - I am so impressed by it! I plan to write an article on that soon.

Still - use of Rails 3 caching does not solve the problem of mixing HAML partials with Rack served static HTML. For example, I'm starting to use ditz with Regdel. Ditz can generate project report pages - but what if I want them integrated into my application? Same with Rcov, too.

