---
title: MediaWiki to Wikee or Ikiwiki or Git Wiki 
date: 2011-11-27
tags: engines,git,rails3
---
I've been working on Wikee a bunch lately, and today I'm converting the [Informed Banking](http://www.informedbanking.com) wiki to be in git format (a format that will roughly work with GitWiki, Ikiwiki, and Wikee).

I should of course mention what Wikee is - I haven't made an announcement about it yet - its a Rails 3 engine for adding a wiki to a rails 3 application. Its inspired by git-wiki and ikiwiki, and is generally awesome! I've got it setup on [NeoCarz](http://www.neocarz.com/) so far, and as I mentioned - I'm setting it up for [Informed Banking](http://www.informedbanking.com/) today.

To do the conversion, I'm using an old ruby script I wrote that uses dbi to connect to mysql and grit to perform the git commands.

Its an old script, and I had to do some updating, but its working well again. If you are interested in converting a mediawiki installation, check out the script. It will likely take some work, but it might just save some time.

Here's the general idea:

1. git clone git://github.com/docunext/mediawiki2gitikiwiki.git
2. or fork it
3. cd mediawiki2gitikiwiki
4. cp mydbsetup.rb.example mydbsetup.rb
5. vim !$
6. bundle install
7. bundle exec ruby mw2iw.rb

As I mentioned, it will likely require some tweaking!

Additional information:

#### Requirements

<pre class="terminal">
  1 gem 'dbi'
  2 gem 'dbd-mysql'
  3 gem 'grit'
</pre>

#### Example configuration file

<pre class="terminal">
  1 @mydb = Hash.new
  2 @mydb[:host] = 'DBI:Mysql:mediawiki:localhost'
  3 @mydb[:user] = 'username'
  4 @mydb[:pass] = 'password'
  5 @mydb[:prefix] = 'prefix_'
  6 @mydb[:gitpath] = '/path/to/repo'
  7 # if the imported wiki should go into a subdir
  8 @mydb[:subdir] = 'subdir/'
  9 @mydb[:extension] = '.mdwn'
</pre>

