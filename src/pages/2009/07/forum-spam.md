---
title: Forum Spam
date: 2009-07-04
tags: none
author: Albert Lash
---
Forum spam with the PhunkyBB forums system hasn't been much of a problem due to the involved registration system, as well as the fact that I use the awesome mod_spamhaus plugin on my servers.

However, I plan to loosen up the mod_spamhaus plugin at some point, as well as setup anonymous commenting with PhunkyBB. Thus I'll have to take a serious look at how to defend against forum spam.

First of all, I'd like to revisit my tests of using <a href="http://www.docunext.com/">spamassassin to inspect HTTP POST requests</a>.

Next, I'm going to review filters for HTTP POSTS, which can cleanse and alter incoming posts, to remove javascript, external img references, and limit the number of outgoing links.

If its not apparent already, I don't want to include this functionality directly in PhunkyBB. However, I may include some functionality related to this effort but solely relevant to forums, like the number of posts an anonymous user can make in a certain amount of time. However, now that I'm thinking of it, that would be a useful HTTP function...

