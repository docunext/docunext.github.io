---
title: sudo bundle install and another Ruby versus Debian Diatribe 
date: 2010-10-09
tags: bundler,gems
---
I was wondering:

<blockquote class="svxlb"><pre>
Should I run "sudo bundle install", or just "bundle install", as the docs suggest?
</pre></blockquote>

A quick search turned up [this](http://stackoverflow.com/questions/3567394/ruby-bundler-permission-issue) page at StackOverflow:

<blockquote class="svxlb"><pre>
So, I'm positive I once did a 'sudo' bundle install' out of desperation, which I now understand is a no-no.
</pre></blockquote>

Why is running "sudo bundle install" a no-no? It does it for us!

From the [bundler docs](http://gembundler.com/man/bundle-install.1.html):

<blockquote class="svxlb"><pre>
<h2 id="SUDO-USAGE">SUDO USAGE</h2>
By default, bundler installs gems to the same location as <b>gem install</b>.

In some cases, that location may not be writable by your Unix user. In that case, bundler will stage everything in a temporary directory, then ask you for your <b>sudo</b> password in order to copy the gems into their system location.

From your perspective, this is identical to installing them gems directly into the system.

You should never use <b>sudo bundle install</b>. This is because several other steps in <b>bundle install</b> must be performed as the current user:

<ul><li>Updating your <b>Gemfile.lock</b></li>
<li>Updating your <b>vendor/cache</b>, if necessary</li>
<li>Checking out private git repositories using your user's SSH keys</li></ul>

Of these three, the first two could theoretically be performed by <b>chown</b>ing the resulting files to <b>$SUDO_USER</b>. The third, however, can only be performed by actually invoking the <b>git</b> command as the current user.

As a result, you should run <b>bundle install</b> as the current user, and bundler will ask for your password if it is needed to perform the final step.
</pre></blockquote>

This is actually really smart, but perhaps it might help to add a check inside of bundler to test if the user is running it as sudo, if it is such a bad idea.

And what if I don't want gems installed into my home directory? Is it a .gemrc setting?

<pre class="sh_yaml">
gempath:
- /var/lib/gems/1.8
</pre>

That really bites because it wouldn't support both 1.8 and 1.9! :-(

<pre class="sh_sh">
Your bundle is complete! Use `bundle show [gemname]` to see where a bundled gem is installed.
Your bundle was installed to `rails_metrics`
If you meant to install it to your system, please remove the
`rails_metrics` directory and run `bundle install --system`
albertlash@dev-48-gl:/var/www/dev/mydadslog.com$ bundle show rails_metrics
/var/www/dev/mydadslog.com/rails_metrics/ruby/1.8/bundler/gems/rails_metrics-8a3ccda72c69
</pre>

Ugh!

I guess I have to run

<pre class="sh_sh">
bundle install --system
</pre>

without sudo! No... this is ridiculous:

<pre class="sh_sh">
Your bundle is complete! Use `bundle show [gemname]` to see where a bundled gem is installed.
albertlash@dev-48-gl:/var/www/dev/mydadslog.com$ bundle show rails_metrics
/home/albertlash/.bundler/ruby/1.8/rails_metrics-8a3ccda72c69
</pre>

Wow. After reading the bundler documentation, I'm really disappointed by the direction the developers are taking with it. They assume a lot!

For example, deployment mode will not use system gems and forces installation into vendor/bundle. This can be overridden, but apparently it conflicts with the functionality describe earlier, where users would be prompted to enter their sudo password when needed.

Look what happens when I try to override the path to my *preferred* location:

<pre class="sh_sh">
$ bundle install --deployment --path /var/lib/gems/1.8
/usr/lib/ruby/1.8/fileutils.rb:243:in `mkdir': Permission denied - /var/lib/gems/1.8/ruby
</pre>

Huh? This happens without the deployment flag, too. If I just run **bundle install**, rails_metrics gets installed into ~/.bundler.

Another odd thing is that $APP_HOME/.bundler/config keeps changing BUNDLE_DISABLE_SHARED_GEMS to "1", even if I change it to "0".

Sorry, I am a firm believer in shared libraries.

#### Ruby and Debian

Going through all this today to try and setup a Rails 3 app has revealed a lot to me about the Ruby / Debian divide. From my experience today, I get the impression that the Ruby community is totally unaware of the Debian contributors' astonishing accomplishments.

It has a lot to do with shared libraries, it seems. If you've ever built a GNU/Linux machine from scratch and manually used compilers to add new software, you've probably run into a shared library dependency that must be updated before you install the desired software. So off we go to install that library, only to discover that it too requires another shared library to be updated. What's worse, by updating those shared libraries, other software conversely dependent upon them might break. Seriously, its a dependency nightmare.

And that's where **dpkg** and **apt** come in. I won't go into how awesome these tools are in calculating and tracking software dependencies. It would take awhile! Its cool that rubygems have some dependency tracking capabilities, but what happens when you deploy a web application built in Ruby to a production machine that doesn't have the most recent gem that the new deployment depends upon? The web application might crash, so a development might upgrade the gem. What about the other web applications that depend upon the web application? Will they crash when the share gem gets updated? Its very possible.

Now it seems to me that the design of bundler attempts to simply avoid the dependency nightmare by localizing libraries and not sharing them. I've heard developers suggest this strategy before, and I just don't agree. **I think this is the wrong solution for a very important problem!**

I don't know what the solution is. At this point, I'm not crazy about the idea of creating debian packages of my web applications so that dpkg and apt can track dependencies - its not that easy, but the proof is in the pudding - it is incredibly reliable.

However, Launchpad from Ubuntu and the PPA capacity is very intriguing. Might we see Ruby developers starting to use it to make .deb packages of their gems? I might actually try that! Currently I use gemcutter because its easier to distribute my gems, would Launchpad's PPA do the same?

Anyway, I don't mean to criticize the bundler tool. Its in beta, but it still looks very cool, yet it doesn't seem like something I want to use.

Re-reading the dm-rails docs, I don't think I actually even need to use bundler. I think I'll skip it for now.

One last thought before I wrap this up:

* Is bundler installing rails_metrics into ~/.bundler/ruby/1.8/rails_metrics-8a3ccda72c69/ because it is getting checked out from a git repository??

#### **DOH! Yes, I just added kramdown to a test gemfile, and it was installed to /var/lib/gems/1.8/gems/kramdown-0.11.0. Oh well, I guess I'll be OK using bundler for now. :-)**

