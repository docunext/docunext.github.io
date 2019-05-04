---
title: Rails 4.0 Released
date: 2013-07-01
tags: javascript, rails, jasmine
author: Albert
---
Rails version 4.0 is now official! Nothing drastic, but it represents very
important improvements, including:

* Speed and process improvements for testing by combining the boot-up of Rails
  for all test suites; use of Minitest (it rocks),
* Strong Parameters for restricting mass-assignments,
* Major improvements to cookie signing and encryption,
* Removal of non-core Rails components, instead packaging them into gems:
  * ActionPack Caching
  * ActiveRecord session store
  * ActiveResource
  * ActionPack XML Parser
  * Observers

FWIW, Rails 4.0 has been fine in production for one of my apps since the
beta version (via puma).

### Testing Javascript with Jasmine
Inspired by Minitest, I've been prolific in test. And inspired by YUI3, I've
been prolific with javascript (though I'm not using YUI in my hobby apps yet).

Enter Jasmine - the javascript test kit from Pivotal Labs. Setting it up with
Rails 4 is simple. Here's what I use in a Gemfile:


    group :test, :development do
      gem 'jquery-rails'
      gem 'jasmine-rails'
      gem 'webmock'
    end

The base requirement is "jasmine-rails". From there, I edited
spec/javascripts/support/jasmine.yml and wrote some tests in 
spec/javascripts/myapp/myspec.js, following this pattern:


    //= require application

    describe("something", function() {

      it("should be an object", function() {
        expect(typeof(something)).toEqual("object");
      });

    });

I run the tests via "bundle exec rake spec:javascripts". To troubleshoot, I
add:

    mount JasmineRails::Engine => "/specs" if defined?(JasmineRails)

to config/routes.rb, boot rails, and access the /specs page.

The cool take home message I tell myself from this setup is that the jQuery
training wheels can be taken off when I write my application javascript. I will
surely continue to use jQuery, but as one of my co-workers said, jquery is to
php as YUI3 is to Ruby. Unfortunately, I haven't found a secure YUI3 cdn that
supports SSL, so getting started with it isn't as easy as using the YUI3 seed
file.

I've thought about serving locally:

* http://blog.endpoint.com/2011/02/locally-served-yui3.html

But I would prefer to proxy and proxy-cache, and I think I've figured out how
I can do so - with rack-reverse-proxy and nginx proxy. Sweet.
