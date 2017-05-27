---
title: Ruby s Autoload Mechanism While Developing Gems
date: 2010-05-23
tags: gems
---
I'm making some modifications to a fork of a gem which I offers the functionality I'm looking for but lacks configuration capabilities I need.

I found that the gem uses Ruby's autoload mechanism, which I've read is a good thing, but the paths it was using messed me up.

This is what I've changed to make it work for me:

<pre class="sh_diff">
5,6c4,5
&lt;   self.autoload :LibTidy, File.dirname(__FILE__) + '/tidy_ffi/lib_tidy'
&lt;   self.autoload :Interface, File.dirname(__FILE__) + '/tidy_ffi/interface'
---
&gt;   self.autoload :LibTidy, 'tidy_ffi/lib_tidy'
&gt;   self.autoload :Interface, 'tidy_ffi/interface'
9,11c8,10
&lt; require File.dirname(__FILE__) + '/tidy_ffi/options_container'
&lt; require File.dirname(__FILE__) + '/tidy_ffi/tidy'
&lt; require File.dirname(__FILE__) + '/tidy_ffi/tidy_ffi_extensions'
\ No newline at end of file
---
&gt; require 'tidy_ffi/options_container'
&gt; require 'tidy_ffi/tidy'
&gt; require 'tidy_ffi/tidy_ffi_extensions'
\ No newline at end of file
</pre>

* http://www.subelsky.com/2008/05/using-rubys-autoload-method-to.html

