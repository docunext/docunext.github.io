---
title: symfony skeleton
date: 2007-04-28
---
I am customizing symfony's project and app skeletons:

<pre>/usr/share/php/data/symfony/skeleton/</pre>

Deleted:

<pre>/project/config/databases.yml/project/config/propel.ini/project/config/schema.yml/app/app/config/*/app/app/lib/*/app/app/templates/layout.php</pre>

Created:

<pre>/app/app/templates/xsl/</pre>

I've added this skeleton to the nexista sandbox project:

<a href="http://code.google.com/p/nexista-example-site/">http://code.google.com/p/nexista-example-site/</a>
<h3>Getting into Symfony's "Make", aka Pake</h3>

Symfony uses pake to run a series of commands, which is turn makes it easier to start new projects and apps. I'm trying to customize not only the resulting directory and file layouts, but also the resulting file contents. Symfony uses a token system like this:

<pre>##PROJECT_NAME##</pre>

to replace text in some of the files. (I kind of wish they used @@TOKEN_PLACEHOLDER_HERE@@ instead, but that's not the point here.)

Let me stop for a second and include some important info. The files I'm talking about are in /usr/share/php/data/symfony/,

and they are called with the commands symfony init-project myprojectnameis123 and symfony init-app myappsnameisjimmybob.

Since I want these commands to handle my files in a certain way, I found the function used to replace the tokens:

sfPakeGenerator.php, lines 51 and 52:

<pre>  $finder = pakeFinder::type('file')->name('properties.ini', 'apache.conf', 'propel.ini');  pake_replace_tokens($finder, $sf_root_dir, '##', '##', array('PROJECT_NAME' => $project_name));</pre>

I changed this to:

sfPakeGenerator.php, lines 51 and 52:

<pre>  $finder = pakeFinder::type('file')->name('properties.ini', 'config.xml', 'sitemap.xml');  pake_replace_tokens($finder, $sf_root_dir, '##', '##', array('PROJECT_NAME' => $project_name));</pre>

It worked!! I think symfony is going to really help me with my work on nexista. :-)

I also removed line 100 from sfPakeGenerator.php. You can access my symfony edits at Google code:

<a href="http://code.google.com/p/nexista-example-site/">http://code.google.com/p/nexista-example-site/</a>

I've been doing some serious tinkering with symfony and I have to say I'm really starting to like it. The one new thing I just discovered in the past hour or so is their method of separating out apps. In nexista, I had my apps separated into different sitemaps, but at runtime, they were combined into one big one. With the way I've been using symfony, the apps are very separate, they are even loaded by a separate php file in the document root. I imagine that it can be setup differently, but I like this method.

I can see how this would work fine with mod_rewrite, one of my favorite web server tools, as well as make for a reliable, efficient, and highly granular IO channel. Since these php files are crafted using standardized command line tools, they are easy to build and maintain their consistency without much effort.

This API setup is essentially a REST architecture.

