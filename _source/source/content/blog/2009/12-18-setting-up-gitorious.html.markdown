---
title: Setting Up Gitorious
date: 2009-12-18
tags: git,ssh
---
Here we go:

<pre class="sh_sh">
cp config/gitorious.sample.yml config/gitorious.yml
$ script/gitorious
Need SSH_ORIGINAL_COMMAND
</pre>

Uh-oh:

<pre class="sh_sh">
/var/www/dev/gitorious/config/../vendor/rails/railties/lib/initializer.rb:271:in `require_frameworks': RubyGem version error: rack(1.0.0 not ~> 1.0.1) (RuntimeError)
</pre>

<pre class="sh_sh">
sudo gem install rack
</pre>

I'd rather use the debian packages, but there's a Rake task for it:

<pre class="sh_sh">
env RAILS_ENV=test rake gems:install --trace
</pre>

The gems were installed, and then I ran:

<pre class="sh_sh">
env RAILS_ENV=test rake db:migrate
</pre>

