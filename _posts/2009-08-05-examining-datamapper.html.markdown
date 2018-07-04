---
title: Examining DataMapper
date: 2009-08-05
tags: datamapper,ruby
---
<!--
CLASS = 'sh_ruby'
PREFIX + CLASS + SUFFIX = '' + 'sh_ruby' + '.min.js'
                        = 'sh_ruby.min.js'
-->
I'm trying out DataMapper, one of the Ruby ORM's which can be used with Merb.

I like it so far, its very straightforward, here's an example class that I created to test with Established Sites:

<pre class="sh_ruby">class Es_site
  include DataMapper::Resource
  property :site_id,         Serial
  property :modification_timestamp,      DateTime
  property :creation_datetime,      DateTime
  property :description,       Text
  property :title,       Text
  property :site_access_url, Text
  property :site_storage_path, Text
end</pre>

