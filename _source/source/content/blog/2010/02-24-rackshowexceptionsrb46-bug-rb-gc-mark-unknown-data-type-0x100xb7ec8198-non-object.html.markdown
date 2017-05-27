---
title: rack showexceptions.rb 46 BUG rb gc mark unknown data type 0x10 0xb7ec8198 non object
date: 2010-02-24
tags: gems,rack,ruby,ruby 1.9
---
Hmmmm. Is [this](http://tomcopeland.blogs.com/juniordeveloper/2008/08/rcov-crashing-w.html) it?

I seem to be having a ton of problems with segmentation faults lately. What gives?

<pre class="sh_sh">
sudo gem install rcov
</pre>

Updating rcov seems to have helped a little, and some further spelunking reveals that my test cases needed some updates.

Still:

<pre class="sh_sh">
/var/lib/gems/1.8/gems/dm-core-0.10.2/lib/dm-core/model.rb:490: [BUG] Segmentation fault
ruby 1.8.7 (2010-01-10 patchlevel 249) [i486-linux]
</pre>

Doh!

I'd really like to get to the bottom of this. Better yet, I'd really like to make the full switch from Ruby 1.8 to 1.9.

I think I'm using something that can't use 1.9 yet. Puppet? Maybe. Well I'm going for it anyway.

<pre class="sh_sh">
# sudo apt-get remove ruby1.8
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  libshadow-ruby1.8 libdaemons-ruby1.8 libruby libtermios-ruby1.8 libeventmachine-ruby1.8 zip liblog4r-ruby1.8 libopenssl-ruby1.8 libreadline-ruby1.8 libopenssl-ruby
  libxmlrpc-ruby
Use 'apt-get autoremove' to remove them.
The following packages will be REMOVED:
  erubis facter irb irb1.8 libabstract-ruby1.8 libbreakpoint-ruby1.8 libchronic-ruby libcmdparse2-ruby1.8 libdifflcs-ruby1.8 liberubis-ruby liberubis-ruby1.8 libhaml-ruby1.8
  libheckle-ruby1.8 libinline-ruby1.8 libmmap-ruby1.8 libncurses-ruby1.8 libparsetree-ruby1.8 libpassword-ruby1.8 librack-ruby1.8 librspec-ruby1.8 libruby1.8-extras
  libruby2ruby-ruby1.8 libsexp-processor-ruby1.8 libwww-mechanize-ruby1.8 puppet rake rant rcov rdoc1.8 ruby ruby1.8 rubygems rubygems1.8 thin1.8
0 upgraded, 0 newly installed, 34 to remove and 85 not upgraded.
After this operation, 15.2MB disk space will be freed.
Do you want to continue [Y/n]? n
</pre>

I'll try reinstalling these packages as gems instead, but first I need to install rubygems1.9!

<pre class="sh_sh">
apt-get install rubygems1.9 ruby1.9-dev
</pre>

Grrr... why are these different than 1.9.1?

<pre class="sh_ruby">
$ sudo apt-get install ruby1.9.1-full ruby1.9.1-dev rubygems1.9.1
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  libshadow-ruby1.8 libdaemons-ruby1.8 libruby libtermios-ruby1.8 libeventmachine-ruby1.8 zip liblog4r-ruby1.8 libopenssl-ruby1.8 libreadline-ruby1.8 libopenssl-ruby
  libxmlrpc-ruby
Use 'apt-get autoremove' to remove them.
The following extra packages will be installed:
  irb1.9.1 libdbm-ruby1.9.1 libgdbm-ruby1.9.1 libopenssl-ruby1.9.1 libreadline-ruby1.9.1 libruby1.9.1 libruby1.9.1-dbg rdoc1.9.1 ri1.9.1 ruby1.9.1 ruby1.9.1-examples
Suggested packages:
  graphviz ruby1.9.1-elisp rubygems-doc
Recommended packages:
  libtcltk-ruby1.9.1
The following NEW packages will be installed:
  irb1.9.1 libdbm-ruby1.9.1 libgdbm-ruby1.9.1 libopenssl-ruby1.9.1 libreadline-ruby1.9.1 libruby1.9.1 libruby1.9.1-dbg rdoc1.9.1 ri1.9.1 ruby1.9.1 ruby1.9.1-dev
  ruby1.9.1-examples ruby1.9.1-full rubygems1.9.1
0 upgraded, 14 newly installed, 0 to remove and 85 not upgraded.
Need to get 16.1MB of archives.
After this operation, 74.3MB of additional disk space will be used.
Do you want to continue [Y/n]?
</pre>

