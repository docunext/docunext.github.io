---
title: Lenny Courier Woes
date: 2008-04-21
---
<strong>ERROR: Connection dropped by IMAP server</strong>

Just ran into a few issues with Courier-imap on lenny, and it appears I am not alone:

<a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=379806">http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=379806</a>

<a href="http://groups.google.com/group/linux.debian.user/browse_thread/thread/c85ac457aef8a5b5/51c7526c327b4b8a">this is probably more accurate</a>

The problem in the end was the IMAP_MAILBOX_SANITY_CHECK option.

