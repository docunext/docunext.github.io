---
title: Linux AFPD Notes
date: 2006-06-08
tags: Apple
---
<h3 id="toc0">Linux Appleshare</h3><p>Linux can support Appleshare using the afpd library. It is available on debian and gentoo, among other linux distributions.</p><h4 id="toc1">afpd notes:</h4><p>If you are able to open an appleshare but you can't &quot;see&quot; anything... your .AppleDB is corrupted. You can try to recover it or delete it.</p><hr /><p>I read documentation on netatalk that afpd doesn't like unix symlinks. Yes it appears that as of netatalk 2.0 they are not supported at all. Bad news man. That bites! What to do?</p><hr /><p>mount_afp: the mount flags are 0000 the altflags are 0020</p>
<p>Happens on both machines.</p>
