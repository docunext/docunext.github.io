---
title: Webrat RSpec Rack Test Oddness
date: 2009-12-25
tags: rack,testing
---
<iframe src="http://rcm.amazon.com/e/cm?t=inforbanki-20&o=1&p=8&l=as1&asins=1934356379&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;float:right;margin-left:8px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
I'm having some trouble testing a Rack application I have setup with Rack::Rewrite.

Even though by tweaking the Rack::Rewrite code a tiny bit, I can get the tests to run properly, I don't think that Rack::Rewrite is the problem.

Here are the details:

* I'm using Rack::Rewrite to change a URL
* It works flawlessly when accessed via the browser
* The other Rack middleware I have setup is operating correctly
* If I modify rack-rewrite/rule.rb changing the environment variable it uses on line 79, it runs as expected

The change in rack-rewrite/rule.rb:

<pre class="sh_ruby">
path = rack_env['REQUEST_URI']
</pre>

<pre class="sh_ruby">
path = rack_env['PATH_INFO']
</pre>

The change to rule.rb does not affect the application's behavior when accessed from the browser. I should also note that *some*, but not all, of the rules I set for Rack::Rewrite are indeed processed.

More details:

* The application is [regdel](http://www.regdel.com/)

Guesses as to what's up:

* Rack::Test isn't setting the REQUEST URI env variable for some reason?

