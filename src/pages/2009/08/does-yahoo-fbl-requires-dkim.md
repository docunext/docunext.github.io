---
title: Does Yahoo FBL Requires DKIM 
date: 2009-08-16
tags: dkim,milters,postfix,proxies,yahoo
---
I'm trying to setup a feedback loop with the Yahoo.com email network, but it appears that it requires a DKIM signature. This is something I've been trying to setup for some time, so its a good as an excuse as anything.

Since I use Postfix, it appears that a <a href="http://www.docunext.com/wiki/Milter">milter</a> is the method to use. I've never setup a milter before, but its something I've wanted to do for awhile.

Another alternative is to use dkimproxy. For my company, that may be the better option as I find <a href="http://www.proxy-sys.com/blog/">proxies</a> to be more flexible.

