---
title: The Strangest Bug I ve Ever Encountered
date: 2010-05-26
tags: unicorn
---
Earlier this week I can across a bug like none I'd ever seen before. The bug is causing tidy_ffi to fail in its efforts to tidify a string when daemontools is running the Unicorn process, whereas it works fine if my user (or root) runs the process.

At first I thought it was an environment variable missing, causing the string encoding to get messed up, but alas, no, that's not the problem.

I checked and set most of the environment variables, including LANG, then debugged the process by putting the encoding name out. They were the same if I was running the process or if daemontools was running it.

Anyone have **any** idea why this might happen?

UPDATE: I found a solution, but I still don't know why this was happening:

[Strange Fix for the Strangest Bug](http://www.docunext.com/2010/06/strange-fix-for-the-strangest-bug.html)

