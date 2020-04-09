---
title: A Problem with the Rails 3.1 Asset Pipeline...
comments:
  - author: Andrew Ferk
    email: andrewferk@gmail.com
    date: 10/12/2011 01:00:31 PM
    text: >
      I still find there to be an issue.<br/><br/>I have resources :assets in my routes, and when I run rake routes it does not include assets! I also get the routing error when I try to use my application.<br/><br/>I currently do no have a fix. Maybe rename my resource or put it into a namespace. Damn :(.
  - author: John Manuel
    email: bitencode@johnmanuel.org
    date: 10/14/2011 11:48:49 AM
    text: >
      Yes, unfortunately this *still* broken in Rails 3.1.1 and as near as I can tell from digging through patches, pull-requests and fixes this one has still been missed totally and is not fixed.<br/><br/>I just did some testing on the newest release of Rails and you can't have a route that starts with "/assets" at all - even "/assetszyzzy" or "/assets_info".  The rake routes task is still hiding (rejecting) any route that begins with "assets" and is not using the value from config.assets.prefix like the sprokets helpers are doing now.
  - author: Albert
    email: albert.lash@savonix.com
    date: 10/14/2011 02:36:38 PM
    text: >
      Argh, that's too bad. Although they are related, that problem is different than the one I was talking about. It sounds like the situation flipped - previously config.assets.prefix would avoid a controller catching /assets requests, but the helpers weren't using config.assets.prefix.<br/><br/>From what you've described, the helpers are using config.assets.prefix, but the default routes are still getting generated. I'll take a look and try to figure out what's happened.
  - author: Albert
    email: albert.lash@savonix.com
    date: 10/14/2011 04:20:54 PM
    text: >
      John, it seems to work for me. Check out this new post.<br/>
date: 2011-09-19
tags: errors
---
I've run into an error with the Rails 3.1 asset pipeline where one of my controllers happens to be named AssetsController:

<div class="rails-trace">
<h1>Routing Error</h1>
<p><pre>No route matches {:action=&gt;&quot;show&quot;, :controller=&gt;&quot;assets&quot;, :id=&gt;&quot;web-app-theme/base&quot;, :format=&gt;&quot;css&quot;, nil=&gt;:request}</pre></p>
</div>

Hmmm. What to do? First, an explanation.

#### The Rails 3.1 Assets "Controller"

Here's what's happening:

* I have an assets controller, so I also have the following in my config/routes.rb file: <tt>resources :assets</tt>.
* I am using the new asset pipeline in Rails 3.1.
* I tried renaming the assets path like so: <tt>config.assets.prefix = "/s"</tt>, but it apparently didn't work.
* I can confirm its a name collision because if I comment out the resources line in config/routes.rb, there is no error.

#### Working Around the Assets Controller Name Collision

I figure there are a few options:

* Namespace my assets controller to be Accounts::AssetsController. I had originally opted agains that for simplicities sake, but it might be a solid solution. I do not want to namespace my models though.
* Find another configuration setting to alter the "assets" name for the asset pipeline. There is <tt>config.assets.manifest</tt>, but that is for pre-compiling assets, not accessing them.

Ultimately it seems that the nexus of this problem is that the tag helpers do not use the custom <tt>config.assets.prefix</tt> value. Thankfully, there has been a [commit](https://github.com/rails/rails/commit/2684f17a17e4f97bdb89d20b4cd08585235263a2) to fix it. Alas, it seems to have been overlooked in recent tags and releases.

As a quick workaround, I'm not using the tag helpers, just accessing the css files directly.

**UPDATE**: Hooray! Rails developer spastorino pulled request [3092](https://github.com/rails/rails/pull/3092) to fix this issue. That is so great. FWIW - my initial experience working with the Rails development community has been positively impressive.

¥

