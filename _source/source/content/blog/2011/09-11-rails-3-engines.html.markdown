---
title: Rails 3 Engines
date: 2011-09-11
tags: engines,"rails 3"
---
I was curious about using rails and git, specifically with regard to engines.

#### Engines as Gems

As gems, they work really well - and I'm surprised the one I've been working on doesn't even end up in vendor/plugins (yet anyway - it may when I change from using "../beast" as the :path parameter).

#### Rought Sketch of a Rails 3 Engine Gem

Here's how it works:

* I added my engine gem named beast to the Gemfile in a rails 3.1 app
* Running bundle install did not copy the file into vendor/plugins as I'd expected
* Running "bundle exec generate" results with my new beast generators
* Running "bundle exec generate" beast creates a new migration as well as

#### Access to the Primary Application Helpers

When I first setup a view from an engine, connected by a routed mount, like this:

<pre class="sh_ruby">
mount Beast::Engine => '/beast'
</pre>

My partials stopped working, then I found out about <tt>main_app</tt>.

<pre class="sh_ruby">
main_app.accounts_path
</pre>

#### What is Beast?

Beast is not a new name at all. Its the mysterious rails forums engine that has been around for ages and has gone through a million transformations - beast, savage beast, altered beast, etc.

I think its best to return to just beast. I thought, maybe roast beast. Who knows?

#### Even More Rails 3 Engine Considerations

* It is surprisingly elegant - engines as gems work really well, and generators act as a
bridge to "pull in" stuff from the engine into the main app, so the main app and the engine can be isolated or integrated with a real specificity.
* The only hurdle I faced was how much has changed with engines so recently
 sort of, the current state is that there is so much flexibility its a little too abstract.
* I think the Rails 3.1 engine code base is solid.
* What needs to happen is some documentation to help direct strategies - similar to choosing between STI and polymorphism.
* The generator I employed will modify main app views, but also create db migrations in db/migrate.
* The plugin doesn't even have to go in vendor/plugins since its a required gem, you actually don't even need to install it - in this case, say I have dev/main_app and dev/my_engine; in dev/main_app/Gemfile I put:

<tt>gem => 'my_engine', :path => '../my_engine'</tt>

* I'm so glad its that easy! bundler even says something like "no need to cache my_engine gem"!

#### References

* http://www.builtfromsource.com/2010/12/13/mountable-engines-in-rails-3-1-beta-getting-started/
* http://keithschacht.com/creating-a-rails-3-engine-plugin-gem/
* https://github.com/josevalim/enginex

