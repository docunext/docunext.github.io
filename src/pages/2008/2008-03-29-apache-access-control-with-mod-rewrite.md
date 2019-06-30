---
title: Apache Access Control with mod rewrite
date: 2008-03-29
tags: access control,apache,cidr,mod_rewrite,wordpress
---
I have a few BDB files which help manage comment spam on my blogs, and I'm starting to think about doing so in a more intelligent manner. Right now I have a big file with a bunch of IP addresses as the keys and simply a "1" as the value if I want them blocked. This is what I'd like to do more intelligently - use a variety of values to weigh the legitimacy of a visitor's POST request.

I am using mod_defensible as well as a few CIDR blocks to categorize visitors, and I also use WP-Spamfree which requires visitors to use javascript and allow cookies if they wish to post comments.

I'd like to move the functions in wp-spamfree to mod_rewrite if possible - maybe setting a cookie if a user-agent claims to be a browser.

It might even be possible to create an input filter using spamassassin to evaluate the content of a post.

One remaining question - would it be possible to calculate the sum of these values and block post requests which exceed a certain number?

And would it be possible to make this process configurable??

The user agent might actually be pretty helpful here - looks like almost all the browsers start with either "Mozilla" or "Opera", so if a visitor who wants to post claims to be either of those, they'll have to accept cookies.

This related link does a simple test to find if the User-Agent is empty and blocks it if it is:

<a href="http://www.ap4a.co.uk/archives/2007/advanced-spam-control-with-mod_rewrite/">http://www.ap4a.co.uk/archives/2007/advanced-spam-control-with-mod_rewrite/</a>

I also found this page helpful:

<a href="http://http://www.perlcode.org/tutorials/apache/attacks.html">http://www.perlcode.org/tutorials/apache/attacks.html</a>

A few hours of testing a simple setup and I'm liking how this feels. I don't think a complex setup is merited for Apache, that complex test can be one at a higher level process. This is what I've got so far: * cookie setting and requirement for posting - this needs more work, but the idea is there* mod_defensible checking posters' ip address against xbl.spamhaus.org and list.dsbl.org* mod_rewrite checking poster's ip address against locally hashed dns block list

I'd like to have some higher level tools to confirm the presence of javascript as well as possible CAPTCHA tests. Another idea is to use an Apache input filter to stream the POST through spamassassin or some other rules / Bayesian-based processor.
