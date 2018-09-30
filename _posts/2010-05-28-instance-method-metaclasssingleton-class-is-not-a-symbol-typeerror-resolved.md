---
title: instance method metaclass singleton class is not a symbol TypeError RESOLVED 
comments:
  - author: cam
    email: cameron.matheson@gmail.com
    ip: 174.23.248.146
    url:
    date: 06/30/2010 04:40:01 AM
    text: >
      I ran into this same error, but unfortunately your workaround didn't work for me (one of my gems required activesupport >= 2.3.6).  I solved this by commenting out line 13 of activesupport-2.3.6/lib/active_support/core_ext/object/metaclass.rb:<br/><pre>#deprecate :metaclass => :singleton_class</pre>)
date: 2010-05-28
tags: activesupport,errors,ruby
---
I got this error today when trying to run a Sinatra web application. Not sure what the root of the problem is, but I found a workaround:

<pre class="sh_sh">
sudo gem1.9.1 install activesupport --version 2.3.5
</pre>
<pre class="sh_sh">
$ sudo gem uninstall activesupport
Select gem to uninstall:
 1. activesupport-2.3.5
 2. activesupport-2.3.8
 3. All versions
> 2
</pre>

For reference, the full error:

<pre class="sh_sh">
/var/lib/gems/1.9.1/gems/deprecated-2.0.1/lib/deprecated.rb:176:in `instance_method': {:metaclass=>:singleton_class} is not a symbol (TypeError)
	from /var/lib/gems/1.9.1/gems/deprecated-2.0.1/lib/deprecated.rb:176:in `block in &lt;top (required)>'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support/core_ext/object/metaclass.rb:13:in `&lt;class:Object>'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support/core_ext/object/metaclass.rb:3:in `&lt;top (required)>'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support/core_ext/object.rb:5:in `require'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support/core_ext/object.rb:5:in `&lt;top (required)>'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support/core_ext.rb:8:in `require'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support/core_ext.rb:8:in `block in &lt;top (required)>'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support/core_ext.rb:8:in `each'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support/core_ext.rb:8:in `&lt;top (required)>'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support.rb:56:in `require'
	from /var/lib/gems/1.9.1/gems/activesupport-2.3.8/lib/active_support.rb:56:in `&lt;top (required)>'
	from /var/lib/gems/1.9.1/gems/mail-2.2.1/lib/mail.rb:6:in `require'
	from /var/lib/gems/1.9.1/gems/mail-2.2.1/lib/mail.rb:6:in `&lt;module:Mail>'
	from /var/lib/gems/1.9.1/gems/mail-2.2.1/lib/mail.rb:2:in `&lt;top (required)>'
	from /var/lib/gems/1.9.1/gems/pony-1.0/lib/pony.rb:2:in `require'
	from /var/lib/gems/1.9.1/gems/pony-1.0/lib/pony.rb:2:in `&lt;top (required)>'
	from /home/albertlash/svxbox/lib/svxbox/ponyboy.rb:6:in `require'
	from /home/albertlash/svxbox/lib/svxbox/ponyboy.rb:6:in `&lt;top (required)>'
	from /home/albertlash/svxbox/lib/svxbox.rb:8:in `require'
	from /home/albertlash/svxbox/lib/svxbox.rb:8:in `&lt;top (required)>'
	from /home/albertlash/yodnsconf/yodnsconf.rb:45:in `require'
	from /home/albertlash/yodnsconf/yodnsconf.rb:45:in `&lt;top (required)>'
	from config.ru:11:in `require'
	from config.ru:11:in `block in &lt;main>'
	from /var/lib/gems/1.9.1/gems/rack-1.1.0/lib/rack/builder.rb:46:in `instance_eval'
	from /var/lib/gems/1.9.1/gems/rack-1.1.0/lib/rack/builder.rb:46:in `initialize'
	from config.ru:1:in `new'
	from config.ru:1:in `&lt;main>'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:46:in `eval'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:46:in `block in builder'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:816:in `call'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:816:in `build_app!'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:673:in `init_worker_process'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:688:in `worker_loop'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:605:in `block (2 levels) in spawn_missing_workers'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:602:in `fork'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:602:in `block in spawn_missing_workers'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:598:in `each'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:598:in `spawn_missing_workers'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:612:in `maintain_worker_count'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:408:in `block in join'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:396:in `loop'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:396:in `join'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/lib/unicorn.rb:28:in `run'
	from /var/lib/gems/1.9.1/gems/unicorn-0.99.0/bin/unicorn:126:in `&lt;top (required)>'
	from /var/lib/gems/1.9.1/bin/unicorn:19:in `load'
	from /var/lib/gems/1.9.1/bin/unicorn:19:in `&lt;main>'
I, [2010-05-28T04:48:24.242011 #28838]  INFO -- : reaped #&lt;Process::Status: pid 28848 exit 1> worker=0
I, [2010-05-28T04:48:24.242246 #28838]  INFO -- : master complete
</pre>

¥

