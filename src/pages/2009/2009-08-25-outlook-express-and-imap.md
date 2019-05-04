---
title: Outlook Express and IMAP
date: 2009-08-25
tags: imap,outlook
---
I don't use Outlook Express, but some of my customers do. In my experience it has displayed unpredictable IMAP support.

I just read this in the Dovecot (an awesome IMAP server) configuration file about some workarounds:

<pre class="sh_sh">
  #   delay-newmail:
  #     Send EXISTS/RECENT new mail notifications only when replying to NOOP
  #     and CHECK commands. Some clients ignore them otherwise, for example OSX
  #     Mail (&lt;v2.1). Outlook Express breaks more badly though, without this it
  #     may show user "Message no longer in server" errors. Note that OE6 still
  #     breaks even with this workaround if synchronization is set to
  #     "Headers Only".
</pre>

