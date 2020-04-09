---
title: Spamassassin Internals
date: 2008-06-18
tags: perl,spamassassin
---
Now that I've learned a little bit of perl, I'm interested int checking out some of the internals of spamassassin. For some time, I've wanted to use spamassassin as a filter for HTTP requests, but its so tailored to email, I came to the conclusion it wasn't a matter of configuration.
<h4>Spamc</h4>Spamc is the spamassassin client. It is written in C, which surprised me - I thought all of spamassassin was written in perl.
<h4>Spamd</h4>Spamd is the spamassassin daemon. It is indeed written in perl, though more recently, it is able to transform its rulesets via re2c and then compile them into machine code. Its interesting, there is also a module for running spamd with Apache2.2 and mod_perl. I gotta try that! :-)
<h4>Rulesets</h4>The rulesets include regular expression patterns which scan emails for text. Depending on the results, emails are given a score, and after the scanning is done, the total score will determine if the email was spam or not. Other rulesets include charset detection, mime attachments, DNS lookups, and more.

<h4>Bayesian Classifier</h4>I'm not sure how this works, but it is able to add to the accuracy of spam detection by referencing a library or known spam and non-spam (ham).
<h4>Configuration</h4>I've always struggled with spamassassin's configuration. Now that I'm learning perl, it makes a little bit more sense in how its is so incredible flexible - that's how perl folks like stuff to be! 
In reviewing the spamassassin code, I just noticed you can store the scores in mysql and ldap - cool!

<pre lang="perl">$conf-&gt;{$ruletype}-&gt;{rkhashes} = { };</pre>

Glad to see more of that style, in <a href="http://www.docunext.com/2008/06/more-perl-thoughts.html">my last post about perl</a>, I wondered if that technique was commonplace.

