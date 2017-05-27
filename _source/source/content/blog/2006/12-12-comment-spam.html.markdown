---
title: Comment Spam
date: 2006-12-12
tags: none
author: Albert Lash
---
I just noticed that this blog's settings required a login before posting comments. I changed that and am now checking out the  spam check.

The important snibbet is on line 688 of wp-includes/functions-post.php:

<pre>$lookup = $rev_ip . '.sbl-xbl.spamhaus.org.';</pre>

Would be nice to include some more blacklists here, and I wonder if a user from a blacklisted IP can post comments? I'm sure I'll find out soon enough. Would be nice if registered user's were allowed to post words on the blacklist and from blacklisted ips. Hmmmm.

