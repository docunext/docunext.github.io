---
title: Bug in Ruby s XSLT Binding 
date: 2010-01-31
tags: bugs,ruby,xsl
---
I might have found a bug in Ruby's XSLT bindings:

<pre class="sh_ruby">
require 'rubygems'
require 'rake'
require 'xml/xslt'

task :default => :some
@mybuild = 'dkjfh'

task :some do
  publish('blah')
  publish('blah')
end

def publish(ok)
  xslt = XML::XSLT.new()
  xslt.xml = '<root>ok</root>'
  xslt.xsl = 'sheet.xsl'
  hi = { 'dabuild' => @mybuild }
  new = { 'section' => 'oj', 'subsection' => 'milk' }
  new.merge!(hi)
  puts new
  xslt.parameters = new
  html = xslt.serve
  puts html
end
</pre>

<pre class="sh_sh">
/var/www/dev/ruby-experiments/xslt_prob$ rake
(in /var/www/dev/ruby-experiments/xslt_prob)
sectionojsubsectionmilkdabuilddkjfh
dkjfh
sectionojsubsectionmilkdabuilddkjfh'
Invalid expression
runtime error
Evaluating user parameter dabuild failed
nil
</pre>

