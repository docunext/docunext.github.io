---
title: Some Notes about Problems I Had Updating Ruby Gems on Debian GNU Linux
date: 2009-03-26
tags: none
author: Albert Lash
---
I kept on getting:

<pre>/usr/bin/gem:14: undefined method `ruby_version' ...</pre>

on a debian machine whenever I tried using gem. I ended up commenting out a few lines, then installing the latest version of <a href="http://rubyforge.org/frs/?group_id=126">rubygems-update from here</a> with:

<pre>
gem install rubygems-update-1.3.1.gem</pre>

Looks like it worked, but not for the real problem I was trying to solve. This was to try and solve this problem:

<pre>
ActionView::TemplateError (undefined method `[]'</pre>

Which was solved thanks to these pages:

<a href="http://railsforum.com/viewtopic.php?id=27226">Re: [SOVED] AJAX error: ActionView::TemplateError (undefined method `[]'..</a>

and

<a href="http://wiki.radiantcms.org/undefined_method_for_enumerable">undefined method for enumerable</a>

The actual fix was to put:

<pre class="sh_ruby">
unless '1.9'.respond_to?(:force_encoding)  String.class_eval do    begin      remove_method :chars    rescue NameError      # OK    end  end
end</pre>

at the beginning of config/environment.rb.

