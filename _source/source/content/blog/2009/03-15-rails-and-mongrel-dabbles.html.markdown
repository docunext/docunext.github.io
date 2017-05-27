---
title: Rails and Mongrel Dabbles
date: 2009-03-15
tags: rails,ruby
---
Just dabbling with Rails and Mongrel, its actually quite easy to get started:

<pre class="sh_sh">
apt-get install rails mongrel
mkdir rails_test
cd rails_test
rails .
mongrel_rails -p 9000 start
</pre>

I'm still not sold on model view controller (MVC) methodology though.

