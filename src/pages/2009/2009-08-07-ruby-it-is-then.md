---
title: Ruby it is then
comments:
  - author: grantmichaels
    email: grantmichaels@hotmail.com
    url: http://grantmichaels.com
    date: 08/17/2009 01:46:26 PM
    text: >
      I highly suggest:<br/><br/>1) obtain and read through The Well-Grounded Rubyist ...<br/><br/>2) check out Sinatra to use while you are learning since Merb is being merged into Rails 3 ...<br/><br/>3) nginx-passenger ...<br/><br/>enjoy!
  - author: Albert
    email: albert.lash@savonix.com
    date: 08/20/2009 09:50:04 PM
    text: >
      Sinatra is awesome. Very impressed, thanks for the tips!!
date: 2009-08-07
tags: erb,eruby,php,ruby
---
I'm so pleased with my brief experience with Ruby that I've decided to make it my primary language of choice.

I've taken my time getting started with Ruby, ramping up only recently, and I've found it to be a very comfortable ride. What lies ahead seems a little foreign, but I have a feeling that its going to be a very enjoyable learning process.

So far there have been very few hurdles. Here are some that I've encountered:

<font style="font-size: 1.5625em;"><b>Include a Ruby file within another Ruby file</b></font>
Sounds easy, right? Well it is easy, but there is a little gotcha which had me hung up for awhile. Say I have a file which creates a variable, and I want to include that file into another, and then reference that variable. That is very much doable, but not the way I was trying to do so.

I've recently gotten in the habit of using local variables quite a lot in my ruby scripts, like so:

<pre class="sh_ruby">barf = "blah"</pre>Simple and easy. However, if I put that into barf.rb and then do this in blah.rb:

<pre class="sh_ruby">load "barf.rb"
puts barf</pre>I get an error about an unknown variable barf. I'm not sure if its possible to reference that local variable with some prefix of sorts, but I have discovered that this:

<pre class="sh_ruby">$barf = "blah"</pre>and

<pre class="sh_ruby">load "barf.rb"
puts $barf</pre>works fine. The $ makes it a global variable, and the @@ works too.

<font style="font-size: 1.5625em;"><b>eRuby is an external binary</b></font>
I tried out ERB, and then I read that eRuby is like ERB, but coded in C. Cool! How do I use it? It may be like ERB in that it can parse templates with ERB-comparible syntax, but it isn't a ruby object which can be instantiated like

<pre class="sh_ruby">barf = ERB.new()</pre>
I guess its used more as a we server filter, like with mod_ruby or similar. This can make Ruby behave a little like PHP, which some people may appreciate.

<iframe src="http://rcm.amazon.com/e/cm?t=inforbanki-20&amp;o=1&amp;p=8&amp;l=as1&amp;asins=1934356085&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="width: 120px; height: 240px; float: right; margin-left: 12px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>
Also a big thanks to the <a href="http://www.rubycentral.com/pickaxe/">pragmatics guide to Ruby</a>. Its a good read and I may just pick up the pickaxe version for Ruby 1.9!

Ruby version 1.9 is still very new, and this book has already received 62 reviews for an average of 4.5 / 5 stars! That is very impressive.

I have a book on using Ruby for systems administration. I should re-read that before buying another book though.

¥

