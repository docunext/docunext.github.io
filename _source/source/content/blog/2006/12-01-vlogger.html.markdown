---
title: Vlogger
date: 2006-12-01
tags: none
author: Albert Lash
---
I'm now using vlogger to parse my Apache logs, but maybe not for long. I keep getting these errors:

<pre>Use of uninitialized value in numeric gt (>) at /usr/sbin/vlogger line 457, <STDIN> line 9371.</pre>

I think this is simply an error caused by the new DBI bandwidth statistics functionality. vlogger now has the ability to track virtual host bandwidth usage, which is awesome. While I currently don't use it, I probably will at some point.

From what I can gather from the code, the error is caused by a non-existant (or non numeric) request size in the log entry. I'm not sure what causes the non-existent request size, but because of the reliability of Apache's code, I'm guessing its not an issue. My guess is that its likely a poorly behaving web bot we've been seeing so much more of lately.

My fix is to first test the request size to see if it is a numeric value, before evaluating whether it is larger than 0. It seems like there should also be a test here as to whether the statistics functionality is setup, but I have no idea how to do that.

Here's my fix, which I'll send to the author:

<pre>456,463c456,458< <         if( $reqsize eq "" ) { < <         } else { <                 if ( $reqsize =~ m/^\d*$/ &amp;&amp; $reqsize > 0 ) {<                     $tracker{$vhost} += $reqsize;<                  }<         }  --->         if ( $reqsize =~ m/^\d*$/ &amp;&amp; $reqsize > 0 ) {>                   $tracker{$vhost} += $reqsize;>               }</pre>

I'm sure there are better ways to do this, but I don't know perl!

