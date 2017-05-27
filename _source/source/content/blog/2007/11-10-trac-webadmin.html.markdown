---
title: Trac WebAdmin
date: 2007-11-10
tags: apache,mysql,python,spam,trac
---

I finally got around to installing the WebAdmin tools for Trac and I'm really pleased I did. I was also able to install the spam filter and sitemap plugins - so cool. One of these days should really consider getting an akismet key, but I'm also very interested in using mod\_defensible and/or mod\_ifier to block comment spam.

UPDATE November 10, 2007: I had an issue with the base_url not being prepended to the url/loc nodes, so I did some investigating and found that my conf/trac.ini files were missing the base\_url parameter in the general [trac] config section. Not sure how I got away with that omission for so long, but at least its fixed now. :-)

Without further ado, some links:

<a  rel="nofollow" href="http://trac.edgewall.org/wiki/SpamFilter">http://trac.edgewall.org/wiki/SpamFilter</a>

<a href="http://trac-hacks.org/wiki/GoogleSitemapPlugin" rel="nofollow">http://trac-hacks.org/wiki/GoogleSitemapPlugin</a>

Next up:

<a  rel="nofollow"  href="http://trac.edgewall.org/wiki/MySqlDb">http://trac.edgewall.org/wiki/MySqlDb</a>

(Before I convert my trac db's to mysql, I'm going to convert my main webserver, the one that powers this site, to use fast\_cgi instead of using a php module. I prefer that method as it allows me to use the Apache mpm worker instead of the mpm prefork.)

