---
title: Gmail with IMAP Thank you
date: 2009-08-03
tags: gmail,imap,offlineimap
---
Gmail with IMAP sounds like a terrific idea, but when I realized that for me there was the possibility of duplicate emails, I was not too keen on the idea.

If I understand correctly, labels are like folders in IMAP-ville, and since Gmail emails can have more than one label, I believe that they would end up in both IMAP folders. I don't want that, and was so pleased to learn about the "Google Labs" advanced IMAP features. It allows you to show certain labels to IMAP, or not.

I haven't tried it yet, but I'm working on a filter setup so that my IMAP folders don't have duplicate messages. If I can get that working, I'll be quite pleased. :-)

So far, seems to be working well. I hadn't used offlineimap with Gmail for awhile so thanks to <a href="http://sachachua.com/wp/2008/05/08/geek-how-to-use-offlineimap-and-the-dovecot-mail-server-to-read-your-gmail-in-emacs-efficiently/">sacha chua for a quick Gmail / offlineimap overview</a>, and<a href="http://www.linux.com/archive/feature/133834"> Linux.com for tips on nametrans to get rid of the [GMail] prefix</a>.

UPDATE: I figured out how to get my prefixes working right for this:

<pre class="sh_sh">
nametrans = lambda foldername: re.sub(r'^(\[G.*ail\])', r'INBOX', re.sub('^(2)', 'INBOX.2', foldername))
</pre>

