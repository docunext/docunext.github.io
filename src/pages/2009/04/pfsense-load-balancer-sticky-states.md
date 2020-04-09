---
title: pfSense Load Balancer Sticky States
date: 2009-04-14
---
As a follow-up to this post from two years ago (!!) <a href="http://www.docunext.com/2007/12/03/how-i-use-apache-behind-pfsense/">How I use Apache behind pfSense</a>, I think I may have solved a similar problem with HTTP authentication, trac, and the pfSense sticky states balancer.

I wrote up a <a href="http://www.docunext.com/2007/09/15/javascript-head-keepalive/">little javascript keepalive</a> (will publish soon), turned off the Keepalive in Apache, and it seems to work fine. Previously it would log me out randomly, because the load balancer had switched backends.

Hmmm, its very strange because it just switched again. I wish I knew why it was not remaining a sticky connection. The blurb doc says as long as there is a connection, it stays sticky. Hence the keepalive, but its apparently not working. :-(

Aha - I think I may have figured it out. I was connecting to other back-ends through the load balancer which had different keepalive settings. I wish the keepalive settings worked.

There are many facets to this situation: http keepalive, tcp keepalive, pf states, proxies, and more I'm not thinking of at the moment. Its very interesting though.
