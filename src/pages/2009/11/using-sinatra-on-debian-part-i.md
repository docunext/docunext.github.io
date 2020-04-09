---
title: Using Sinatra on Debian Part I
date: 2009-11-22
tags: heroku,ruby,sinatra
---
I'm installing libsinatra-ruby1.8 on my debian development machine, aka "dev-48-gl".

<pre class="sh_sh">
sudo apt-get install libsinatra-ruby1.8
The following extra packages will be installed:
  librack-ruby1.8
Suggested packages:
  mongrel thin1.8
The following NEW packages will be installed:
  librack-ruby1.8 libsinatra-ruby1.8
0 upgraded, 2 newly installed, 0 to remove and 414 not upgraded.
Need to get 164kB of archives.
After this operation, 614kB of additional disk space will be used.
Do you want to continue [Y/n]?
</pre>

So librack-ruby1.8 gets installed too.

SIDE NOTE: The debian description of libsinatra-ruby1.8 is:

<blockquote><pre>
Ruby web-development dressed in a DSL
</pre></blockquote>

What does DSL mean? Its one of those common acronyms which has multiple meanings. In this context, it refers to "Domain-specific language", which as of November 2009, is described at Wikipedia in this way:

<blockquote class="svxlb"><pre>
In software development, a domain-specific language (DSL) is a programming language or specification language dedicated to a particular problem domain, a particular problem representation technique, and/or a particular solution technique. The concept isn't new--special-purpose programming languages and all kinds of modeling/specification languages have always existed, but the term has become more popular due to the rise of domain-specific modeling.
</pre></blockquote>

OK, fair enough. Does this have anything to do with the popularity of model-view-controller (MVC) frameworks, or is it an alternative to those? Ruby on Rails (RoR) is an MVC. Is Sinatra as well? I should probably know the answer to these questions, but I'm still learning about MVCs - mostly with <a href="http://www.docunext.com/wiki/Catalyst" title="My wiki notes on Catalyst">Catalyst</a>. I've worked on RoR apps before and built some test apps with it. Thanks to <a href="http://www.docunext.com/2009/08/heroku.html" title="My notes on Heroku at docunext.com">Heroku</a>, I was able to try out a Sinatra application as well.

This time I want to dig deeper!

My first step is just the demo on the [Sinatra homepage](http://www.sinatrarb.com/):

<pre class="sh_ruby">
require 'rubygems'
require 'sinatra'
get '/hi' do
  "Hello World!"
end
</pre>

and then...

<pre class="sh_sh">
$ ruby !$
ruby hi.rb
== Sinatra/0.9.4 has taken the stage on 4567 for development with backup from WEBrick
[2009-11-22 14:46:51] INFO  WEBrick 1.3.1
[2009-11-22 14:46:51] INFO  ruby 1.8.7 (2009-06-12) [i486-linux]
[2009-11-22 14:46:56] INFO  WEBrick::HTTPServer#start: pid=15683 port=4567
192.168.1.240 - - [22/Nov/2009 14:46:57] "GET /hi HTTP/1.1" 200 12 0.0045
wrk-240-gr.savonix.com - - [22/Nov/2009:14:46:57 EST] "GET /hi HTTP/1.1" 200 12
- -> /hi
^C
== Sinatra has ended his set (crowd applauds)
[2009-11-22 14:47:01] INFO  going to shutdown ...
[2009-11-22 14:47:01] INFO  WEBrick::HTTPServer#start done.
</pre>

Right now its using WEBrick. For part II, I'll setup thin1.8.

