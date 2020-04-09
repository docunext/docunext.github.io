---
title: installed spec directories undefined method path for Gem Module NoMethodError 
comments:
  - author: chris floess
    email: skeptikos@gmail.com
    date: 01/06/2011 07:30:09 AM
    text: >
      I got rid of this on Arch linux by removing (moving to a non-system place) the entire /usr/lib/ruby (on Debian /usr/local/lib/ruby perhaps) directory and then re-installing ruby 1.9.2
date: 2010-08-27
tags: errors,ruby,ruby 1.9
---
I installed ruby1.9.1 and rubygems1.9.1 on a Debian squeeze machine today and was surprised by an error on the first try at running gem1.9.1.

## The Full Error

<pre class="sh_sh">
/usr/lib/ruby/1.9.1/rubygems/source_index.rb:68:in `installed_spec_directories': undefined method `path' for Gem:Module (NoMethodError)
</pre>

To workaround this, I added this to **/usr/lib/ruby/1.9.1/rubygems.rb**:

<pre class="sh_ruby">
Gem::QuickLoader.remove
</pre>

on line 9.

## Not Fixed

While that enables me to install gems, it prevents me from using them within Ruby scripts. Ugh.

I ended up finding a machine that thankfully had all the debs from rubygems 1.3.6 which work for me.

If anyone needs these, I can upload them to Amazon S3 or something.

¥

