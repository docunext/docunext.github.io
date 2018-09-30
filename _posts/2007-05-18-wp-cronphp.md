---
title: Wordpress wp cron.php
date: 2007-05-18
tags: none
author: Albert Lash
---
I got sick of 404 errors in my logs respoding to a local request for wp-cron.php?check=...

so I edited wp-includes/cron.php and commented out the following line:

<pre> #$argyle = @ fsockopen( $parts['host'], $_SERVER['SERVER_PORT'], $errno, $errstr, 0.01 );</pre>

<a href="http://wordpress.org/support/topic/114701">Conversation at Wordpress.org about wp-cron.php?check=</a>

