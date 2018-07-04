---
title: Static Blog Publishers and Rails Blog Engines
date: 2011-11-30
tags: blogging,rails3
---
I've been doing a lot of work with my blogs lately. Like Docunext, I have many
blogs published by MovableType, which I like, but have grown weary of.
There have been some missteps on the part of Six Apart (in my opinion), like the
fact that backups cannot be restored by newer versions of Movable Type - argh!
Plus, its slow.

However, the data model is awesome, and so are the templating and plugin engines
(though I really do not like the custom tagging and non-xml compliant markup),
so its a reliable beast. Its done its job well for several years.
The spirit of the times, as they are, have encouraged me to migrate some blogs
away from Movable Type. Where am I migrating them to?

I have some blogs on a very old version of Wordpress, and although Wordpress has
drastically improved since then, I was looking for something different. Drupal
is awesome too, but I feel that is more of a development platform for projects
of medium complexity. Just not what I was looking for in a blog engine.
Again, where did I migrate my blogs to? I don't have a definite target platform,
yet, but here's a few that I'm trying out:

* For [NeoThreadz](http://www.neothreadz.com/), I'm trying out Middleman. I like it - although it runs on Sinatra / Padrino, it has a Rails-y feel to it.
* For a bunch of sites, including [Informed Usability](http://www.informedusability.com/) and [Cyber Pulpit](http://www.cyberpulpit.com/), I'm using Jekyll. Jekyll rocks, really, but I think I want something a tad more dynamic on the development side. Also - I should mention I use Octopress on top of Jekyll. Octopress is sweet, but it almost does too much. Its also nice that Jekyll has importers to convert from Movable Type. I used it to convert [NeoThreadz](http://www.neothreadz.com/) even.

N.B. - Both Middleman and Jekyll are static blog compilers, and both run on
Ruby, my language of choice these days. Jekyll is very stable and has been around
for awhile. Middleman is newer, and is nearing "1.0" status. I'm looking forward
to a stable release of Middleman - it will include the blog plugin.

What about [NeoCarz](http://www.neocarz.com/)? Glad you asked! It is using
Brogue, a Rails 3 blog engine based off of rails\_blog\_engine. I'm quite
pleased with it so far, but it needs more input from the community to improve.

And for wikis? Thankfully there is a somewhat standard format evolving for
git-based wikis, thanks to ikiwiki, git-wiki, and friends, so I built wikee,
again a Rails 3 engine, but for wikis! Its mostly based off of the Sinatra app
git-wiki, and it works quite nicely, too. There are several things I need to do
there, though, like include FrontMatter, use the GitModel ORM, and cache the
pages and uncache them with a sweeper or an observer.

I have wikee and brogue plugged into the awesome xapian\_db gem, so search is
working quite well, too!

If you are interested in Rails 3, wikis, or blogs - check out my projects and
let me know what you think of them:

* [Brogue](https://github.com/docunext/brogue)
* [Wikee](https://github.com/docunext/wikee)
