---
title: My Preferred Rails or Sinatra Application Setup s 
date: 2010-09-25
tags: perl,rails,ruby,unicorn
---
When developing and running rails applications, it is common to use **WEBrick**, **Thin**, or **Mongrel** during development, and something like **Passenger**, **FastCGI**, or **Unicorn** in production, but as the old **Perl** maxim says: *"There is more than one way to do it."*

## Rails Development

Its nice to be able to view what's going on in a console, so I have traditionally used the command line to launch rails apps using the simple command:

<pre class="sh_sh">
./script/rails server
=> Booting WEBrick
=> Rails 3.0.0 application starting in development on http://0.0.0.0:3000
=> Call with -d to detach
=> Ctrl-C to shutdown server
[2010-09-25 13:24:19] INFO  WEBrick 1.3.1
[2010-09-25 13:24:19] INFO  ruby 1.8.7 (2010-06-23) [i486-linux]
[2010-09-25 13:24:19] INFO  WEBrick::HTTPServer#start: pid=10520 port=3000
</pre>

However, I sometimes find myself using the development environment for testing and staging as well. While not the best practice, in these circumstances I prefer to use something like daemontools to manage the process for me, so I don't need to have a console stay logged in via screen or something similar.

In those cases, I'll need to tail the log and keep an eye on what happens as I test out my new application!

## Rails Production

I am a huge fan of FastCGI, especially when implemented with Apache 2.2 (worker mpm) and mod_fcgi.

However, in some cases, Apache 2.2 is more than is needed! In these cases, I would choose Nginx, Lighttpd, or a combination of one of those with Unicorn (or Thin).

Why bother with Unicorn? For a couple of reasons:

* I find it much easier to configure Nginx or Lighttpd as a simple HTTP proxy as opposed to a FastCGI proxy.
* Unicorn is **FAST**, leveraging built-in UNIX forking wonderment.
* Unicorn works with standard rackup files, making it easier to manage complex Rack middleware configurations.

## Running Unicorn with Daemontools

To run Unicorn, I use **daemontools** (even though I use Debian and etckeeper, which makes using daemontools just a tiny bit awkward).

There are many tutorials on installing and using daemontools, so I'll just share a simple run script that I use to launch a unicorn process:

<pre class="sh_sh">
#!/bin/sh
cd /path/to/railsapp
exec softlimit -m 231457280 -o 600 /path/to/gems/bin/unicorn -c \
/path/to/railsapp/config/unicorn_production.conf --env production -l 3030
</pre>

Quick explanation:

* exec - a unix command to replace the current process with the process resulting from the ensuing command. In other words, while daemontools executes the shell script above, the process it ends up managing is the one that the shell script launches.
* softlimit - softlimit is part of the daemontools suite of tools, allowing simple resource management, in this case the amount of memory and the number of open file descriptors.

Everything after the softlimit flags relates to Unicorn, which searches for a config.ru (Rackup) file, which for rails might look something like this:

<pre class="sh_ruby">
# Rails.root/config.ru
require "config/environment"
use Rails::Rack::LogTailer
use ActionDispatch::Static
run ActionController::Dispatcher.new
</pre>

Of course, all this could, and most likely would, change drastically from server to server, and application to application, depending upon a variety of factors.

