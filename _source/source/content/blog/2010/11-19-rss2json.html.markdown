---
title: RSS2JSON
date: 2010-11-19
tags: jquery,json,php
---
The other day I was about to integrate an RSS feed onto a web page using jQuery.

To ease the way in which jQuery accessed the feed, I decided to write a quick <tt>fopen</tt> proxy, and then I figured... hey, why not convert this to JSON while I'm at it?

I did a quick search for "convert rss to json with php", and turned up a bunch of stuff that wasn't what I was looking for. So I opted out of the lazy web approach and decided to think for a moment... aha, this is much easier!

<pre class="sh_php">
$json = json_encode(simplexml_load_string($rss));
</pre>

Wow. Who says you can't do useful stuff with PHP in one single line??

