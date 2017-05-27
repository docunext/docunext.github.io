---
title: jQuery to Detect AdBlock and Provide Alternate Content
date: 2009-08-22
tags: ads,adsense,google,jquery,revenue
---
Some of my blogs are highly technical in their nature, so it comes as no surprise to me that despite the high traffic the sites achieve, they perform poorly when it comes to advertising revenue.

My guess is that the vast majority of visitors to those sites use AdBlock, privoxy, or something similar to prevent ad displays. While I don't find it to be optimal, I can't think of anyway to resolve the situation.

While I don't like the lack of revenue, I also don't like how my sites look when ads are not getting displayed. To fix this, I've written a little bit of jQuery to detect if show_ads.js can be loaded:

<pre class="sh_javascript">$(document).ready(function() {
try {
 $.ajax({
  type: "GET",
  url: "http://pagead2.googlesyndication.com/pagead/show_ads.js",
  dataType: "text",
  error: function(){
    $("#right-panel").load("/s/html/alternate_panel.html");
  }
 });
} catch (err) {
 $("#right-panel").load("/s/html/alternate_panel.html");
}
});
</pre>

This is by no means fool proof! Ad blockers use a variety of methods to remove ads, this only checks if the browser can load the show_ads.js script from googlesyndication.com.

