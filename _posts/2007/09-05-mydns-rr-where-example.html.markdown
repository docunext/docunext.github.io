---
title: MyDNS rr where example
date: 2007-09-05
tags: dns,mysql
---
I was wondering how the syntax for the MyDNS rr-where config option worked, so I tried it without the "WHERE" word, and it worked fine.

rr-where = data NOT LIKE '192.168%'

I set this up so I could have name resolution for hosts on my lan without offering that information up to the public. Works great!

