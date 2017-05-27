---
title: ERROR LoadError Could not open library lib.so lib.so cannot open shared object file No such file or directory
date: 2011-01-22
tags: errors,rails,ruby
---
I've never seen this one about "could not open library 'lib.so'" before... but I'm sure I'll track down the problem so I'm posting it here:

<pre class="sh_sh">
=> Ctrl-C to shutdown server
[2011-01-22 21:38:55] INFO  WEBrick 1.3.1
[2011-01-22 21:38:55] INFO  ruby 1.8.7 (2010-06-23) [i686-linux]
[2011-01-22 21:39:00] INFO  WEBrick::HTTPServer#start: pid=29877 port=3001
[2011-01-22 21:39:43] ERROR LoadError: Could not open library 'lib.so': lib.so: cannot open shared object file: No such file or directory
	/var/lib/gems/1.8/gems/ffi-1.0.5/lib/ffi/library.rb:75:in `ffi_lib'
	/var/lib/gems/1.8/gems/ffi-1.0.5/lib/ffi/library.rb:54:in `map'
	/var/lib/gems/1.8/gems/ffi-1.0.5/lib/ffi/library.rb:54:in `ffi_lib'
	/var/lib/gems/1.8/gems/tidy_ffi-0.1.3/lib/tidy_ffi/lib_tidy.rb:6
	/var/lib/gems/1.8/gems/tidy_ffi-0.1.3/lib/tidy_ffi/interface.rb:5
	/var/lib/gems/1.8/gems/tidy_ffi-0.1.3/lib/tidy_ffi/options_container.rb:51:in `validate_option'
	/var/lib/gems/1.8/gems/tidy_ffi-0.1.3/lib/tidy_ffi/options_container.rb:18:in `merge_with_options'
	/var/lib/gems/1.8/gems/tidy_ffi-0.1.3/lib/tidy_ffi/options_container.rb:16:in `each'
	/var/lib/gems/1.8/gems/tidy_ffi-0.1.3/lib/tidy_ffi/options_container.rb:16:in `merge_with_options'
	/var/lib/gems/1.8/gems/tidy_ffi-0.1.3/lib/tidy_ffi/tidy.rb:47:in `options='
	/var/lib/gems/1.8/gems/tidy_ffi-0.1.3/lib/tidy_ffi/tidy.rb:14:in `initialize'
	/var/lib/gems/1.8/gems/rack-xsl-0.2.6/lib/rack/xsl.rb:52:in `new'
	/var/lib/gems/1.8/gems/rack-xsl-0.2.6/lib/rack/xsl.rb:52:in `call'
	/var/lib/gems/1.8/gems/rack-contrib-1.1.0/lib/rack/contrib/config.rb:13:in `call'
	/var/lib/gems/1.8/gems/haml-3.0.25/lib/sass/plugin/rack.rb:41:in `call'
	/var/lib/gems/1.8/gems/railties-3.0.0/lib/rails/rack/log_tailer.rb:14:in `call'
	/var/lib/gems/1.8/gems/rack-1.2.1/lib/rack/content_length.rb:13:in `call'
	/var/lib/gems/1.8/gems/rack-1.2.1/lib/rack/handler/webrick.rb:52:in `service'
	/usr/lib/ruby/1.8/webrick/httpserver.rb:104:in `service'
	/usr/lib/ruby/1.8/webrick/httpserver.rb:65:in `run'
	/usr/lib/ruby/1.8/webrick/server.rb:173:in `start_thread'
	/usr/lib/ruby/1.8/webrick/server.rb:162:in `start'
	/usr/lib/ruby/1.8/webrick/server.rb:162:in `start_thread'
	/usr/lib/ruby/1.8/webrick/server.rb:95:in `start'
	/usr/lib/ruby/1.8/webrick/server.rb:92:in `each'
	/usr/lib/ruby/1.8/webrick/server.rb:92:in `start'
	/usr/lib/ruby/1.8/webrick/server.rb:23:in `start'
	/usr/lib/ruby/1.8/webrick/server.rb:82:in `start'
	/var/lib/gems/1.8/gems/rack-1.2.1/lib/rack/handler/webrick.rb:13:in `run'
	/var/lib/gems/1.8/gems/rack-1.2.1/lib/rack/server.rb:213:in `start'
	/var/lib/gems/1.8/gems/railties-3.0.0/lib/rails/commands/server.rb:65:in `start'
	/var/lib/gems/1.8/gems/railties-3.0.0/lib/rails/commands.rb:30
	/var/lib/gems/1.8/gems/railties-3.0.0/lib/rails/commands.rb:27:in `tap'
	/var/lib/gems/1.8/gems/railties-3.0.0/lib/rails/commands.rb:27
	script/rails:6:in `require'
	script/rails:6
</pre>

Maybe I just needed to install the tidy_ffi gem? Nope, that wasn't it. Now I'm trying:

<pre class="sh_sh">
sudo apt-get install libtidy-dev tidy
</pre>

Yup! That was it.

