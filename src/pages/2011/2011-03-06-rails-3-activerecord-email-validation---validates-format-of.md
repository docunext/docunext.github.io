---
title: Rails 3 ActiveRecord Email Validation validates format of
comments:
  - author: Chmarusso
    email: chmarusso@gmail.com
    ip: 207.192.71.184
    url:
    date: 03/30/2012 12:29:49 PM
    text: >
      At Rails3 example you've missed close paren. Anyway, works great. Thanks!
  - author: Albert
    email: albert.lash@savonix.com
    ip: 207.192.71.184
    url:
    date: 04/01/2012 02:32:47 PM
    text: >
      Thanks Chmarusso!
date: 2011-03-06
tags: activerecord,email,rails3
---
In Rails 3, the validates\_format\_of is deprecated. I sometimes get annoyed with all the deprecation that goes on with Rails (and Ruby, to a lesser extent), but this one is not a big deal, and the newer way is better, IMHO.

The old way:

<pre class="sh_ruby">
  validates_presence_of :email
  validates_uniqueness_of :email
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
</pre>

The new way:

<pre class="sh_ruby">
validates :email,
            :presence => true,
            :uniqueness => true,
            :format => { :with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
</pre>

¥

