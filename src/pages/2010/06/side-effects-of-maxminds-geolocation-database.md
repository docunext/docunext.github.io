---
title: Side Effects of MaxMind s GeoLocation Database
date: 2010-06-14
---
I've recently started to test the use of MaxMind's GeoLocation database to have BIND9 respond differently based on the source or the DNS request, as well as use it to [block HTTP POST requests from anonymous proxies](http://www.docunext.com/2010/06/apache2-geoip-module-for-blocking-unwanted-http-posts.html).

My goal with the DNS is to simply distribute requests more deliberately, rather than randomly, potentially resulting in better performance for users. Furthermore, some IP addresses are not globally routed (though I'm not sure why).

With Apache's access controls, my usage becomes a bit more discriminatory, but again, its in an effort to improve service to actual human beings, as opposed to providing CPU cycles to bot-nets.

I then started to contemplate the many ways in which the MaxMind database could be used. Why not use it with iptables to block access to certain maintenance ports to everyone but the US? I'm here 99% of the time, and when I'm not, I'm probably not going to try and ssh into one of the servers I manage.

From there, I started to envision some potentially negative side effects from the database - non-net-neutrality for starters. The FCC fined Comcast for throttling P2P traffic (though apparently they were out of line - based on US Federal court rulings), and I wouldn't be surprised if media companies and web hosts started to (if they haven't already) shape traffic based on source requests.

Some online advertisers I've worked with already focus the majority of their efforts strictly on traffic originating from the United States. Why? I'm not sure, but I'd venture to guess there is a financial reason for it.

This issue begs the question: why serve clients that don't create revenue? Here's the danger. Will poorer countries get the short end of bandwidth management? I won't be surprised, but I will be disappointed if it happens.

[Why isn't my FIOS IP globally routable?](http://www.soggyblogger.com/blog/2009/06/why-isnt-my-fios-ip-globally-routable.html)

