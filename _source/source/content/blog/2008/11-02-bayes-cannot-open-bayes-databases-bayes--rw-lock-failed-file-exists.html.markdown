---
title: bayes cannot open bayes databases bayes R W lock failed File exists
date: 2008-11-02
tags: none
author: Albert Lash
---
This one was annoying - I've got a nice old bayes database that apparently the spamassassin was having some trouble with from time to time. Thankfully a little searching found the answer:

<a href="http://rivviepop.wordpress.com/2006/09/09/spamassassin-bayes-and-berkeley-db/">knowledge in passing

spamassassin, bayes and berkeley db</a>

I also had a bunch of bayes_toks.expire#### files, I think its OK to just delete those... looking now....  not sure. I did it anyway, will keep an eye on the logs just in case.

