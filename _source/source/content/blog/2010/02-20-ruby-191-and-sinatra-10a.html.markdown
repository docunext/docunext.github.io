---
title: Ruby 1.9.1 and Sinatra 1.0a
date: 2010-02-20
tags: ruby,sinatra
---
Working with Ruby 1.9.1 and Sinatra 1.0a has been an awesome experience. I've learned a lot, and was ultimately successful in getting the Regdel demo to run.

I even got to use the new tilt interface to get basic markdown support (with rdiscount even), simply by adding this basic helper:

<pre class="sh_ruby">
  def markdown(template, options={})
    output = render :md, template, options
    '&lt;div>'+output+'&lt;/div>'
  end
</pre>

I'm wrapping the output in div tags so that the output is a valid xml document and can be transformed via xsl.

This is getting to be a really awesome platform. Seriously.

