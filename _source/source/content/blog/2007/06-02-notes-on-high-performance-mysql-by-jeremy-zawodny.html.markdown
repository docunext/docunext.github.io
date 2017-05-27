---
title: High Performance MySQL by Jeremy Zawodny
date: 2007-06-02
tags: mysql,performance,safari
---
I'm reading Jeremy Zawodny's "High Performance MySQL" via Oreilly's online Safari service. Its quite good, and I really enjoyed the page on indexes I just read. I learned that you can index on sub-content in certain columns. For example, say I have a column that stores email addresses. Many email addresses share domain names, while the username, or the part that comes before the domain name, can be more unique. In this case, it may be just as effective to only store the first, say 8-10 characters of the email column rows in its index. That way, you'll save some space. Cool, huh?

