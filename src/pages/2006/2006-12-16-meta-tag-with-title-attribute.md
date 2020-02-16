---
title: Meta tag with title attribute 
date: 2006-12-16
tags: none
author: Albert Lash
---
I noticed that several pages published with a wiki system on <a href="http://www.informedbanking.com" rel="me">Informed Banking</a> do not have as high a page rank as some of the pages published with different tools, such as phpbb2 and Wordpress. This confused me, as some of the pages have much better quality content, in my humble opinion, and have been published for longer a longer time.

I checked out the html source and the major difference was that the wiki pages had a meta tag with a title attribute valued to the title of the page. I don't remember when I put that in the generator code, but I'm thinking that it might be the cause of the issue. I haven't seen any published documentation mentioning anything about a meta title tag, so it must have been a bug from way back when. I removed it today and will test and Google dance over the next couple of months.
