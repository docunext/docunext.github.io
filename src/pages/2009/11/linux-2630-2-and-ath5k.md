---
title: Linux 2.6.30 2 and ath5k
comments:
  - author: karpox
    email: karpox@kovakoodaajat.com
    date: 11/26/2009 03:24:34 AM
    text: >
      Hi!<br/><br/>Any luck with that symbol lookup error ? Upgraded my Opensuse from 11.1 to 11.2 and now i getting same error like you with some programs.
  - author: Albert
    date: 11/26/2009 07:28:30 AM
    text: >
      No, not yet. Driving me nuts!
  - author: Albert
    date: 01/05/2010 10:07:59 AM
    text: >
      Its working great again, and I'm so pleased because Inkscape rocks!<br/><br/>Last night I gave it a whirl after using Tesseract-OCR to glean the text out of a bitmapped PDF, then used Inkscape in rebuild the PDF with the text in it. So cool...
date: 2009-11-21
tags: debian,linux
---
Doh! I haven't used Inkscape in months and when I tried loading it today nothing came up.

From the command line, I get this:

<pre class="sh_sh">
inkscape: symbol lookup error: /usr/lib/libgtkmm-2.4.so.1: undefined symbol: gtk_info_bar_get_type
</pre>

I decided some library or another was out of whack, so I did an upgrade, and figured while I was at it I'd upgrade my kernel. I've grown tired of the udev warnings about my linux version.

I upgraded to linux 2.6.30 from linux 2.6.26, tried to upgrade madwifi but it failed. Turns out I can use ath5k now. Awesome!!

Inkscape still doesn't work, though... not giving up! :-)

UPDATE: I'm really psyched about using ath5k and that its working. I've tried it before without any luck, but now its working really well.

¥

