---
title: AOL Postmaster and the Feedback Loop
date: 2009-08-13
tags: smtp
---
My company runs our own mail servers, and recently one of our IP addresses was blocked by AOL. Because I've always found AOL to be for the non-technical, I've had a non-technical perspective of the company at large, despite being a fan of <a href="http://www.opennsd.org/">AOL Server and its TCL awesomeness</a>.

I must say that I'm impressed with their postmaster support, and how they handle incoming e-mails. First off, there is a customer support request form for the error I was receiving:

<pre class="sh_log">
(DYN:T1)  http://postmaster.info.aol.com/errors/421dynt1.html 421 SERVICE NOT AVAILABLE
</pre>

I sent them this information:

<blockquote class="svxlb"><pre>
"We serve email and web hosting to about one dozen companies with separate domain names, as well as one bulk mailing list for one client. The bulk emails include a link and information to opt-out, and only customers who opt-in are added to the list.

We employ SPF records, and only allow authenticated users to send outgoing mail."
</pre></blockquote>

After submitting that form, I found that they have a few other support options, including postmaster guidelines and a white list.

Given how much of the internet is starting to depend upon the ip addresses for reputation and credibility, I sincerely hope that IPv6 gets its rear-in-gear!

Note: I forgot that since my email gateway uses a sub-domain of my primary domain name, I had to setup my feedback loop (FBL) abuse address on that sub-domain. The reverse nameserver lookup resolves to that sub-domain, so I think my FBL will now be approved.

Yes! I was approved! :-) I was denied on the pass listing request, because of the current block. I'll have to wait for the block to get removed before I can apply for pass listing again.

<a rel="nofollow" href="http://en.wikipedia.org/wiki/Feedback_Loop_%28email%29">Feedback loop explanation at wikipedia</a>

