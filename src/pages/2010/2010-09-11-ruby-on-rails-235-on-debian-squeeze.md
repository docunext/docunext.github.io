---
title: Ruby on Rails 2.3.5 on Debian Squeeze
date: 2010-09-11
tags: 1.9,rails,ruby
---
Judging by the recent, nasty bug I ran into using [Ruby 1.9.1 on Debian Squeeze](http://www.docunext.com/blog/2010/08/installed-spec-directories-undefined-method-path-for-gemmodule-nomethoderror.html) *and* the recent announcement that Debian Squeeze is frozen, I was concerned that Squeeze will "ship" with 1.9.1 instead of 1.9.2.

Then I noticed there is a Debian package page with this:

<blockquote class="svxlb"><pre>
Package: ruby1.9.1 (1.9.2~svn28788-1)
</pre></blockquote>

That looks promising! **NOTE:** The debian package is still named ruby1.9.1 *even though* it is based on the 1.9.2 source code. I'm sure this is going to cause some confusion, so I'll repeat myself. **The Debian Squeeze Ruby 1.9 package called ruby1.9.1 is based on the newer Ruby 1.9.2 source code.** Why? Because it is binary compatible to 1.9.1. Cool! Still going to cause some confusion though...

I was thinking about this because I'm tinkering with Ruby on Rails today, hoping to use 3.0 on Debian with 1.9.1, but RoR distributors recommend RoR 3 with 1.8.7 or 1.9.2.

Since 1.8.7 was already installed on the machine I was using, I installed Rails 2.3.5:

I'm glad that I tinkered with rails today. I've primarily used Sinatra and Catalyst (a Perl-based MVC) lately, but its always good to keep the skills *FRESH*! <a href="http://ejdraper.com/post/290329567/getting-started-with-rails-2-3-5" rel="nofollow">This</a> tutorial is better suited to 2.3.5 than the one currently on the Ruby on Rails site.

**UPDATE**: This post by [Lucas Nussbaum is very informative about Ruby and Debian](http://www.lucas-nussbaum.net/blog/?p=566), though its disappointing to learn that the Debian Ruby team is understaffed, and Lucas is thinking about stopping work on it.

This is what I had to add as a comment:

<blockquote class="svxlb"><pre>
Lucas, thanks for all your great work on Ruby and Debian. I've been using Ruby 1.9.1 on i386 and amd64 for awhile and have run into a slew of problems, but using these two technologies is still completely worth it to me. I think the Debian team does an awesome job of getting an incredibly diverse array of technologies to play nicely together. Similarly, the Ruby community does an awesome job of pushing the envelop with development techniques.

While lots of people complain about the line that Debian has drawn with regards to Ruby packaging, I think its perfectly justified and the right thing to do - its in the best interest of both Debian and Ruby because in the long run it will help reduce bugs and the amount of work needed to maintain the packages. I love developing in Ruby, but I'm disappointed Rubygems hasn't complied with Debian's policies. I completely side with Debian without hesitation.
</pre></blockquote>
