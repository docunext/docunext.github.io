---
title: Quick Overview of the Rails 3.1 Asset Pipeline
comments:
  - author: Mike Santo
    email: mike@rsdcompany.com
    ip: 174.74.66.37
    url:
    date: 11/21/2011 05:21:47 PM
    text: >
      Albert, I don't see how this is working for you. I've been running 3.1.1 since it was released, and now I'm trying to rename one of my models/controllers to "assets". Routes still isn't showing it, and the asset tag helpers aren't picking up the new prefix. You're the only person I've found that has gotten this to work.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 71.178.29.218
    url:
    date: 11/27/2011 04:50:58 PM
    text: >
      I dunno Mike, I've tried it out several times and it just worked. You are setting the asset prefix in the environment, right?
  - author: Albert
    email: albert.lash@savonix.com
    ip: 71.178.29.218
    url:
    date: 11/30/2011 05:11:38 PM
    text: >
      Actually Mike, I am now experiencing the problem again of the asset prefix not working. In my case, I think its due to my application having been created with Rails 3.0 or an early version of Rails 3.1.<br/><br/>Without a doubt, I am able to create a new rails app with 3.1.3 that supports custom asset prefixes *and* has the helpers to make stuff like the stylesheet link work.<br/><br/>I've tried to copy over most of the config differences, but so far the cause still evades me. Have you had any luck?
  - author: Albert
    email: albert.lash@savonix.com
    ip: 71.178.29.218
    url:
    date: 11/30/2011 07:48:10 PM
    text: >
      Actually no, its persistent in the rails 3.1.3. Its very odd, but if routes.rb contains resources :assets, the helper does not use the prefix configuration setting.
date: 2011-10-14
tags: asset pipeline
---
The Rails 3.1 asset pipeline has had some twists and turns lately. The community seems to me to be a little overdramatic about the state of affairs, but that's not what this post is about.

I'm writing this post to check in on the last post I wrote about the pipeline: [A Problem with the Rails 3.1 Asset Pipeline](http://www.docunext.com/blog/2011/09/a-problem-with-the-rails-31-asset-pipeline.html). In that post, I examined the issue when trying to change the prefix for asset paths with this:

<pre class="sh_sh">
config.assets.prefix = "/s"
</pre>

It worked for me, but the asset helpers were still using the default path of "/assets". Why was I trying to change the path? Because if I didn't, there would be a controller name clash because I also had a controller named assets_controller.

It was a cool bug to find as I also found a useful patch for it that was never applied to the master branch and I was able to help get it committed. Since then, I haven't actually tried out a fresh version of Rails to see if it works - until today!

I just installed Rails 3.1.1 and created a test application with model named Asset and a controller named AssetsController. After some preliminary testing in both development and production modes, **I have come to the conclusion that the asset pipeline in Rails 3.1.1 is working as desired**.

More specifically, I'm not experiencing any name collisions - even when I leave config.assets.prefix as the default. Check out these screenshots:

Note that the paths to these assets are as you might expect:

<pre class="sh_html">
  &lt;link href="/assets/application.css" media="screen" rel="stylesheet" type="text/css" />
  &lt;script src="/assets/application.js" type="text/javascript">&lt;/script>
</pre>

Additionally, the config.assets.prefix now works with the asset helpers. If I set:

<pre class="sh_sh">
config.assets.prefix = "/s"
</pre>

then these helpers:

<pre class="sh_html">
  5   <%= stylesheet_link_tag    "application" %>
  6   <%= javascript_include_tag "application" %>
</pre>

produce:

FWIW, here's a snibbet of my production.rb config:

<pre class="sh_ruby">
  1 Assetstest::Application.configure do
  2   # Settings specified here will take precedence over those in config/application.rb
  3
  4   # Code is not reloaded between requests
  5   config.cache_classes = true
  6
  7   # Full error reports are disabled and caching is turned on
  8   config.consider_all_requests_local       = false
  9   config.action_controller.perform_caching = true
 10
 11   # Disable Rails's static asset server (Apache or nginx will already do this)
 12   config.serve_static_assets = true
 13
 14   # Compress JavaScripts and CSS
 15   config.assets.compress = true
 16
 17   # Don't fallback to assets pipeline if a precompiled asset is missed
 18   config.assets.compile = true
 19
 20   # Generate digests for assets URLs
 21   config.assets.digest = false
 22   config.assets.prefix = '/s'
</pre>

¥

