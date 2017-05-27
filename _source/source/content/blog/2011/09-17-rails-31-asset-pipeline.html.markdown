---
title: Rails 3.1 Asset Pipeline
date: 2011-09-17
tags: javascript
---
Rails 3.1 implements a new feature of Rails that has been in the works for quite some time: the *Asset Pipeline*. In Rails 3.1, it is the default configuation, and it caught me by surprise this morning.

While working on the Rails 3.1 version of ChiMailMadmin, I noticed that the web-app-theme assets were not getting served.

Instead of the usual <tt>"/stylesheets/"</tt> path, the path prefix is now <tt>"/assets/"</tt>. That was unusual, so I knew something was different.

#### Rails 3.1 Asset Pipeline Overview

First of all, let me discuss the Asset Pipeline, why it came to be and what it is for. For that, a bit of history.

#### Javascripts and Stylesheets

Rails in its efforts to stick to convention has for quite some time stuck with <tt>"/stylesheets/"</tt> and <tt>"/javascripts/"</tt>. I preferred <tt>"/s/js/"</tt> and <tt>"/s/css/"</tt>, but I don't really care what it is, as long as its consistent.

So what was wrong with those paths? It wasn't so much the paths as much as the way that numerous assets and dependencies would be added. One result might be for an application to have an inordinate amount of script and link tags in the html header.

So efforts were made to bundle these resources into single files, quite successfully, in fact - projects like Jammit and Sprockets made it happen.

Still, despite the bundles, there were still some issues to deal with. For example, many asset resources do not change very often, like the jQuery library, while others, like application specific javascript and css files, change often, especially in development.

Many developers would append a time stamp as a parameter to prevent caching, like so:

<pre class="terminal">
http://localhost:3000/javascripts/bundled.js?ts=1231487384
</pre>

That works, sort of, but it has its own set of complications - for instance, not all proxy caches will take note of the parameter.

#### Assets

I like how Rails develops - fix one problem, and in the process, fix another. By resolving some of the bundling and caching issues, Rails developers must have figured there was no reason to limit the additional features to just javascripts and stylesheets - for instance - how about images? Abstracting them as resources provides more flexibility - for instance, setting up a separate host server for serving them.

But wait! That's not all! By defining images as assets, they can inherit some of the usual Rails helper niceties - such as path helpers.

Check this out:

<pre class="sh_ruby">
image_tag "docunext.png"
</pre>

Nice, huh? Its extra cool that Rails even integrates these concepts into Sass, so the resulting css can vary depending upon the runtime environment.

#### Pipeline Advantages

From what I've seen so far, I'm really going to like the Asset Pipeline of Rails 3.1. Its going to be more flexible and its going to be faster.

From a development perspective, I expect the asset pipeline to respect file modification times. That means that files that haven't changed won't need to be re-bundled, and files that have changed will not be served stale.

On the production side, there is a rake task that can render assets to static files, making them servable about as fast as possible. Here's one way to precompile assets:

<pre class="terminal">
bundle exec rake assets:precompile
</pre>

And since all this is done through a single pipeline, it is possible to simply rename the resource when the content changes - because as long as all references to it use the Rails helpers, they will update as well.

Another behind the scenes benefit to the pipeline is tighter integration with formatting syntaxes like Sass and Coffeescript.

There are probably going to be some hurdles, though. For example, I just ran into an issue with web-app-theme because it had placed generated resources into the public/stylesheets folder, and Rails couldn't find them. I had to symlink that folder to the assets directory. After, that it worked fine.

#### Getting Started with the Rals 3.1 Asset Pipeline

If you create a new app with Rails 3.1, the pipeline is already set up. All done! Yay!

However, if you are upgrading from 3.0 or before, check at least the following items:

* Assets now go in app/assets/ or vendor/assets (supposedly lib/assets is OK, too, but I couldn't get it to work).
* Ensure that config/application.rb has <tt>config.assets.enabled = true</tt>.
* Understand the syntax of manifest files.

#### What is a manifest?

Rails will bundle asset files defined in a manifest file. Here's the default application.css that appears in a fresh app/assets/stylesheets/ folder;

<pre class="terminal">
1 /*
2  * This is a manifest file that'll automatically include all the stylesheets available in this directory
3  * and any sub-directories. You're free to add application-wide styles to this file and they'll appear at
4  * the top of the compiled file, but it's generally better to create a new file per style scope.
5  *= require_self
6  *= require_tree .
7 */
</pre>

I'm not sure how I feel about manifest file formats, but its of little controversy for me. The bottom line is that its getting worked on, and that is what is important to me.

Side note: Interestingly enough, I find Rails asset manifest files subtly similar to Puppet manifest files.

#### Additional Thoughts

* I'd really like to have the ability to serve static content files as assets, including content using Markdown syntax (and might as well support Textile and the rest, too).
* Inasmuch, it would be great to be able to link to them in the way that images can now be linked to.
* It would be really sweet if static content files could access some really basic helpers, too. For example, paths to other static content. The main advantage would be the ability to abstract out the mount point.

