---
title: Wordpress Lightbox Plugin and jQuery 1.3 
date: 2009-03-30
tags: none
author: Albert Lash
---
I just found the solution to an annoying bug:

<a href="http://plugins.jquery.com/node/5922">"[Exception... "'Syntax error, unrecognized expression: [@rel*=lightbox]' when calling method: [nsIDOMEventListener::handleEvent]" nsresult: "0x8057001e (NS_ERROR_XPC_JS_THREW_STRING)" location: "" data: no]"</a>

This started after I upgraded jQuery to 1.3.2 from 1.2.x. The fix is:

<pre>
Index: jquery-wp-lightbox/js/jquery.lightbox.js===================================================================--- jquery-wp-lightbox/js/jquery.lightbox.js	(revision 654)+++ jquery-wp-lightbox/js/jquery.lightbox.js	(working copy)@@ -501,7 +501,7 @@ 			var groups_n = 0; 			var orig_rel = this.rel; 			// Create the groups-			$.each($('[@rel*='+orig_rel+']'), function(index, obj){+			$.each($('[rel*='+orig_rel+']'), function(index, obj){ 				// Get the group 				var rel = $(obj).attr('rel'); 				// Are we really a group</pre>

I also want to note that I had to do some serious snooping with K2 to figure out why jQuery's dollar sign was causing a problem. Turns out that the k2 functions script disables it with:

<pre class="javascript">
jQuery.noConflict();</pre>

After commenting that out, it works! :-)

