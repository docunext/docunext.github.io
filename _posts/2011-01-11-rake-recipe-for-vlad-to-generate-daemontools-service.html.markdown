---
title: Rake Recipe for Vlad to Generate Daemontools Service
date: 2011-01-11
tags: rake,ruby
---
When writing [Ruby](/wiki/Ruby) web applications, I use Rake to help automate repetative tasks, [Vlad](/wiki/Vlad) for deployment, and [daemontools](/wiki/daemontools) to actually run the web-service.

To help with the process of launching Ruby web applications that are spawned and managed by daemontools, I wrote up this **Vlad-based Rake** task which generates a daemontools service with only a few keystrokes:

<pre class="sh_ruby">
  remote_task :mkdaemon do
    run "mkdir -p /tmp/#{@application}/log"
    run "echo '#!/bin/sh' &gt; /tmp/#{@application}/run"
    run "echo 'exec /var/www/dev/#{@application}/current/demo.sh' &gt;&gt; /tmp/#{@application}/run"
    run "echo '#!/bin/sh' &gt; /tmp/#{@application}/log/run"
    run "echo 'exec setuidgid daemon multilog t ./main' &gt;&gt; /tmp/#{@application}/log/run"
    run "sudo chown -R root:root /tmp/#{@application}"
    run "sudo chmod +x /tmp/#{@application}/run"
    run "sudo chmod +x /tmp/#{@application}/log/run"
    run "sudo mv /tmp/#{@application} /service/"
  end
</pre>

That snippet is just the Vlad task, not the full vlad recipe. To be a complete vlad task, it is placed inside of a rake *namespace*:

<pre class="sh_ruby">
namespace :vlad do
# ...
end
</pre>

Then I simply issue this command:

<pre class="sh_sh">
rake vlad:mkdaemon
</pre>

I am considering packaging this and other vlad recipes into a gem. Anyone interested?

