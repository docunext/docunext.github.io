---
title: C is for Kool and some Apache stuff 
date: 2008-06-12
tags: apache,mod_rewrite,spamassassin,sql
---
I had so much fun working with C yesterday, I'm already planning more tasks!

#### **MySQL and modrewrite**

The mysql client I wrote for use with modrewrite is a great but not at all new concept, and its barely worth testing even, because its so limited. However, given the length of time a proper modrewrite / SQL connector would take for me to finish, it does make sense to test and use a limited connector. Before I test it out for real, I want to switch to using prepared statements.

Apache's 2.3 codebase contains a modrewrite version which includes SQL capabilities, powered by mod_dbd, so it doesn't make too much sense to try and beat that. The fine folks behind Apache are way more skilled than I, but I might be able to help analyze the use case scenarios.

#### **re2c and modrewrite**

Besides SQL, there are other types of logic which can be used with modrewrite. The module itself supports regular expressions already, and its pretty efficient as far as I know, but the rule sets can easily become overbearing. When the are consolidated and "minified", they become cryptic and vague.

Spamassassin and php using re2c (regular expressions to c) to generate efficient C code scanners. I spent a few hours yesterday experimenting with the concept and I liked what I found, but I was not able to generate a binary which I could directly execute and trade key value pairs over stdin and stdout like I could with the mysql connector. The re2xs perl library enabled me to access a shared library to at least test out the pattern matching. I was able to specify a regex pattern in a perl script, and then match it against the compiled regular expressions, even with a back reference (aka backtrack).

What's so cool about this? To tell you the truth, I think its mostly novelty at the moment. Fact is, modrewrite rule sets can be organized as includes in the configuration file to make them manageable, and I imagine that the Apache team has figured out a way to optimize the pattern matching already. It might be able to fill a gap where mod_dbd and modrewrite miss each other, providing some optimized regexp logic between a sql result set and a rule result.

There is also the conceptual goodie here - the simple overlap between apache and spamassassin. We've seen many a pondering about using spamassassin to filter comment spam, but its never really come to life. There may be a special use case where the patterns and subjects are much larger than urls (like post payloads), where the need for highly optimized regular expression scanning makes sense. In this case, you could write up some spamassassin rules which include some patterns for post payloads, and accept or deny the request based upon the result. I'm not sure if this would be better as a filter or a modrewrite external program (can modrewrite access POST payloads?), and it might be able to work either way.

#### **Apache Folks are better at C than me**

So again while it was very interesting to work with C, its not efficacious for me to delve too deep. I'm going to focus on the conceptual side, wondering about abstracting modrewrite components into useful groupings. In my environment, there are some best practices emerging, and I'm hoping to refine them and share them with the community so that the Apache and its rocking good modules can be leveraged even more.

Like....

#### **mod_proxy**

Amazing functionality, somewhat difficult to configure, but modrewrite makes it a cakewalk.

#### **modrewrite**

Again totally amazing, but the balance between flexibility and clarity can be a tough strike.

#### **mod_fcgid**

Here's one that doesn't need much, but could be handled better if perhaps it was running on a separate, proxied server. In that case, it would make sense to use something like mod_proxy.

#### **mod_svn / mod_dav**

Again, might be better to move off the front lines? NOTE: I couldn't get mod_proxy to work with mod_digest, though I think <a href="http://search.cpan.org/~cgilmore/Apache-ProxyRewrite-0.17/ProxyRewrite.pm">this mod_perl module apache::proxyrewrite might be able to handle proxied digest authentication</a>.

#### **mod_xslt / xslt filter**

I have been eagerly testing out and trying out mod_xslt and xslt filter. I don't use either in production because mod_xslt includes a really lame server signature comment at the end of every rendered page. It can be turned off, but that requires recompilation. the xslt filter is nice and simple (though I'm not sure if it supports the caching of stylesheets) but its not currently included in the debian repositories.

#### **mod_defensible**

This isn't an Apache maintained module, but it is very nice nonetheless. I've hacked it up a bit, and use it on a few sites. I'd like to see it used in conjunction with a spamassassin-like points system, rather than outright blockage.

#### **aaa**

Authentication, Authorization, and Access - could use a little more flexibility, especially when it comes to cidr matching. mod_authz_host is incredibly well thought out in terms of access control, but remains black and white. I wish it were possible to use cidr matching with something like setenvif, which could be used to add up points to change how different clients are handled.

Somewhat related - this looks awesome: <a href="https://neon1.net/mod_auth_pubtkt/">https://neon1.net/mod_auth_pubtkt/</a>

#### **mod_qos**

Not an apache maintained module, but would be very useful with managing quality of service with limited resources, and low-contrast acls.

Random: this looks interesting - <a href="http://appsamurai.sourceforge.net/">appsamurai</a>.
