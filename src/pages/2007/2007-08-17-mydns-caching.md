---
title: MyDNS Caching 
date: 2007-08-17
---
Someone on the MyDNS mailing list recently emailed about the caching in MyDNS. I was interested in tracking down what's happening so I responded with this:

<blockquote>OK, that's much clearer now! A query comes in for example.com, mydns asks mysql for the zone, caches the response, and should only cache it for 60 seconds. Another request comes in for example.com from a different source 1000 seconds later, and mydns uses its cached value instead of asking mysql again.

Although I don't check the logs, I am often watching SQL queries to my database for other reasons, and I'm always surprised at how often MyDNS is querying MySQL, and I have my cache settings in mydns.conf much higher at 3000 seconds.

Therefore, I expect that one of two things is true: * The cache setting in mydns.conf has a bug

or * The log output is not representing what is actually happening.

Would it be possible for you to do a quick test on your system by watching the mysql query logs? With your cache settings at 60 seconds it should be easy to tell if MyDNS is asking MySQL again for the zone info. If it is, then the wording of the log report should be changed, if not, further investigation is required. </blockquote>
