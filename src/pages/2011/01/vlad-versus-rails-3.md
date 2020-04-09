---
title: Vlad versus Rails 3
date: 2011-01-23
---
It appears there is some sort of problem that I am having trying to use Vlad with Rails 3.

Could it be bundler?

<pre class="sh_sh">
rake aborted!
undefined method `remote_task' for #<Object:0xb7864950 @application="app.com">
/home/example/operations/dev/app.com/Rakefile:7
(See full trace by running task with --trace)
</pre>

I'm also getting this error:

<pre class="sh_sh">
rake aborted!
Please specify the server domain via the :domain variable
(See full trace by running task with --trace)
</pre>

And yes, I do have vlad-git installed....

I wonder what is wrong?

#### UPDATE:

I'm still having major issues with this, and it appears that the source of the problem is changes in Vlad's use of deploy.rb versus changes in Rake's use of lib/tasks/.

ARGH!

Anyway, I have made some progress, and am stumped when running <tt>vlad:setup</tt>:

<pre class="sh_sh">
undefined method `[]' for nil:NilClass
</pre>

Yay! I think I figured it out. For some reason, I was using "remote\_task" instead of "rake-remote\_task". Grrr.

And for what its worth, my current config/deploy.rb looks similar to this:

<pre class="sh_ruby">
set :myapp, "example.com"
set :deploy_to, "/var/www/dev/#{myapp}.com"
set :domain, "pro-103-gl.example.com"
set :repository, "git@github.com:user/example.com.git"
</pre>

And my lib/tasks/vlad.rake file looks similar to this:

<pre class="sh_ruby">
begin
  require 'vlad'
  Vlad.load :scm => :git
rescue
 # do nothing
end
namespace :vlad do
  remote_task :mkdaemon do
    run "mkdir -p /tmp/#{myapp}/log"
    run "echo '#!/bin/sh' > /tmp/#{myapp}/run"
    run "echo 'exec /var/www/dev/#{myapp}/current/demo.sh' >> /tmp/#{myapp}/run"
    run "echo '#!/bin/sh' > /tmp/#{myapp}/log/run"
    run "echo 'exec setuidgid daemon multilog t ./main' >> /tmp/#{myapp}/log/run"
    run "sudo chown -R root:root /tmp/#{myapp}"
    run "sudo chmod +x /tmp/#{myapp}/run"
    run "sudo chmod +x /tmp/#{myapp}/log/run"
    run "sudo mv /tmp/#{myapp} /service/"
  end
  remote_task :bundle do
    run "cd /var/www/dev/#{myapp}/current/ && bundle install &"
  end
  remote_task :restart do
    run "sudo svc -d /service/#{myapp}"
    run "sudo svc -u /service/#{myapp}"
  end
  remote_task :fix do
    run "mkdir -p /var/www/dev/#{myapp}/current/public/d/xhtml"
    run "chmod 0777 /var/www/dev/#{myapp}/current/public/d/xhtml"
  end
  remote_task :logtail do
    run "tail /tmp/webapps/#{myapp}.log -n 100"
  end
  task :deploy => [:update, :restart, :fix]
end
</pre>

