---
title: Tips for Developing FastCGI Ruby Apps
date: 2009-08-02
tags: ruby
---
I'm finding that developing Ruby FastCGI applications is a very smooth and rapid process. Maybe its this way for all ruby development, but this is the majority of what I've had experience with.

So here's what I up to. I write a script on a back-end machine and access it directly. Since I'm not too familiar with Ruby exceptions yet, I'm also using the command line to test the script out, like this:
<pre>
echo "get=var" | ./myrubyapp.fcgi</pre>

I like that I can do this!

