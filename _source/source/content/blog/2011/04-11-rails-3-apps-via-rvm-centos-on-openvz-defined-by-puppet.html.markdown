---
title: Rails 3 Apps via RVM CentOS on OpenVZ Defined by Puppet
date: 2011-04-11
tags: ruby on rails
---
I'm looking to build lots of Rails apps, and when I do I would like each one to be in its own OpenVZ container, and each container built and managed by puppet.

To do so, I will need the puppet installed *prior* to puppet management, so I will install it within the starter image. I've done that, so I'll now map out the process for creating a new image from it, whereupon it will automatically ask puppet how to build itself, i.e. puppet needs to be configured! Unfortunately, I forgot about this step, so I have to wait for vzdump to finish...

#### Configuring Puppet on the Base CentOS Container

<pre class="sh_ruby">
    package { "gcc-c++": ensure => installed }
    package { "patch": ensure => installed }
    package { "readline": ensure => installed }
    package { "readline-devel": ensure => installed }
    package { "zlib": ensure => installed }
    package { "zlib-devel": ensure => installed }
    package { "libyaml-devel": ensure => installed }
    package { "libffi-devel": ensure => installed }
    package { "openssl-devel": ensure => installed }
</pre>

One thing I'm realizing about puppet is that its modules don't have to always deal directly with packages... it can simply be used for configuration files, like resolv.conf. **That is helpful**.

#### What About LXC?

Lately I've been using lxc (GNU/Linux containers) and am quite pleased with the results. It doesn't require a custom kernel (though thanks to the awesomeness of Debian it is easy to obtain), and its easy to build Debian systems.

I'll write another article about setting up Puppet within an LXC environment.

