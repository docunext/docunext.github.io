---
title: The REAL FTP Proxy is Alive and Well 
date: 2009-10-30
---
Responding to a comment on the [Docunext blog about pfSense and its FTP helper](http://www.docunext.com/blog/2009/01/pfsense-proftpd-and-the-ftp-helper.html), I mentioned FTP Proxy.

I hadn't visited the website for awhile so I stopped by just to refresh my memory when to my surprise the current maintainer has published two new releases. Awesome!

I emailed right away:

<blockquote>"
Hi Andreas,

I'd been looking for ftp proxy and when I found it several months ago I
was thrilled. I noticed it hadn't been updated in awhile but I tried it
out anyway and it did what I needed it to: proxy FTP users to different
backend FTP servers based upon username, much like perdition does for IMAP
users.

I just noticed you've published two new releases and wanted to thank you
for continuing to maintain the code.

I'd like to make a suggestion and help implement it if I can: provide
different backend mapping methods for selecting which backend to connect
each user to.

Perdition supports 1-to-1 mapping, but also supports regular expression
matching. Another possibility would be a CDB hash database for super fast
lookups.

Thanks again for protecting this great project from bit-rot!

- Albert"
</blockquote>

