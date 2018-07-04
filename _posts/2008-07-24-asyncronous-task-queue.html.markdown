---
title: Asyncronous Task Queue
date: 2008-07-24
---
This is *exactly* what I was looking for! This type of solution is perfect for a distributed system. Nice!

What does it do? It backgrounds the site rendering process. I found it
in the preferences, blog settings, publishing page, where there are a
few options - including publish immediately, or publish asynchronously.
It also says it needs a cron job setup to work properly, which I found
instructions for <a href="http://www.movabletype.org/documentation/administrator/setting-up-run-periodic-taskspl.html">here</a>.

This means that I can use one computer to write the entries, and another to render them.

Doh - I was at first thinking that this could be replicated across
multiple computers, but the task queue is smart (is that the right
word?) enough to know that certain tasks have been done already.
Hmmm....

