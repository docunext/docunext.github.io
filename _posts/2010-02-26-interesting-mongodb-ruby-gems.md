---
title: Interesting MongoDB Ruby Gems
date: 2010-02-26
tags: gems,mongodb,sinatra
---
These rubygems look very cool:

* <http://github.com/solnic/dm-mongo-adapter> - MongoDB adapter for datamapper, supports serialization!
* <http://github.com/jnunemaker/mongomapper> - Similar to dm-mongo-adapter, but stands on its on and is apparently similar to ActiveRecord
* <http://github.com/mongodb/mongo-ruby-driver> - the basic MongoDB driver for Ruby
* <http://github.com/djsun/sinatra_resource> - A RESTful helper for Sinatra and MongoMapper

I'm starting with sinatra_resource:

<pre class="sh_sh">
gem install sinatra_resource
Building native extensions.  This could take a while...
Successfully installed mongo-0.18.3
Successfully installed mongo_mapper-0.7.0
Successfully installed mongo_ext-0.18.3
Successfully installed query_string_filter-0.1.4
Successfully installed sinatra_resource-0.4.15
Successfully installed polyglot-0.3.0
6 gems installed
</pre>

I'm trying out sinatra_resource, and while it looks really interesting, I'm having a tough time cracking the nut.

When I try to run the example datacatalog, I hit this error:

<pre class="sh_sh">
/var/lib/gems/1.9.1/gems/activesupport-2.3.5/lib/active_support/dependencies.rb:91:in `const_missing': wrong number of arguments (0 for 1) (ArgumentError)
	from /var/www/dev/sinatra_resource/lib/builder.rb:186:in `block in build_helpers'
	from /var/lib/gems/1.9.1/gems/sinatra-1.0.a/lib/sinatra/base.rb:893:in `class_eval'
	from /var/lib/gems/1.9.1/gems/sinatra-1.0.a/lib/sinatra/base.rb:893:in `helpers'
	from /var/www/dev/sinatra_resource/lib/builder.rb:185:in `build_helpers'
	from /var/www/dev/sinatra_resource/lib/builder.rb:31:in `build'
	from /var/www/dev/sinatra_resource/lib/resource.rb:59:in `build'
	from /var/www/dev/sinatra_resource/examples/datacatalog/resources/categories.rb:62:in `&lt;module:DataCatalog>'
	from /var/www/dev/sinatra_resource/examples/datacatalog/resources/categories.rb:1:in `&lt;top (required)>'
	from /var/lib/gems/1.9.1/gems/polyglot-0.3.0/lib/polyglot.rb:65:in `require'
	from /var/lib/gems/1.9.1/gems/polyglot-0.3.0/lib/polyglot.rb:65:in `require'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.5/lib/active_support/dependencies.rb:156:in `block in require'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.5/lib/active_support/dependencies.rb:521:in `new_constants_in'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.5/lib/active_support/dependencies.rb:156:in `require'
	from /var/www/dev/sinatra_resource/examples/datacatalog/app.rb:16:in `block in &lt;top (required)>'
	from /var/www/dev/sinatra_resource/examples/datacatalog/app.rb:16:in `each'
	from /var/www/dev/sinatra_resource/examples/datacatalog/app.rb:16:in `&lt;top (required)>'
	from config.ru:2:in `require'
	from config.ru:2:in `&lt;main>'
</pre>

#### **Trying out dm-mongo-adapter**

First things first: 'require mongo_adapter', not 'require dm-mongo-adapter'.

After that misstep, things went smoothly! It seems to have the awesome characteristics of most datamapper tools I've used.

