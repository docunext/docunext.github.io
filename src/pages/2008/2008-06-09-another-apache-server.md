---
title: Another Apache Server
date: 2008-06-09
tags: apache,mediawiki,nexista,openvz,wordpress,xml,xsl
---
I'm setting up another Apache server to start hosting services based upon software "invented here". I've been working on several projects using <a href="http://www.nexista.org/blog/">Nexista</a> to replace software which, while great, doesn't mesh well with a lot of what I've been working on for the past several years.

When I say "mesh", I'm basically talking about integration. I like to use the word mesh because that's how XML and XSL feels to me sometimes, the two just fit together so well. And that's how I've been working. Most of the software I've been writing is for internal use, but now that I've started to open up our packages, it makes sense to use them as public services as well.

I'll likely start with <a href="http://www.infonomix.org/blog/">Infonomix</a>, an open source project management program, similar to trac. Then follow up with <a href="http://www.phunkybb.com/blog/">phunkybb</a>, a forum based on punbb.

To get the ball rolling, I've created a new virtual server using OpenVZ, named "Marge". It will be accessed using mod_proxy to route specific requests to the new server from "Homer", which hosts the packages I currently use, like Wordpress, MediaWiki, and Trac.
