---
title: Still Trying with Epiphany
date: 2009-05-03
tags: none
author: Albert Lash
---
I'm really looking forward to when I get to use Epiphany webkit all the time. The older version I'm using (2.22.3) is super fast, but is missing some important features:

<ul><li>Gnome Keyring (actual configured via Webkit)</li><li>Selective blocking of popup windows</li></ul>

I just tried compiling the latest subversion revision; it compiles, but when I try to run it I get this error:

<pre>
symbol lookup error: /usr/local/bin/epiphany: undefined symbol: gtk_entry_set_icon_drag_source</pre>

Doh!

UPDATE! I got it to work, the gtk libs in /usr/local/lib were old, so I copied them from /usr/lib. That move crashed my current X session so after a reboo, voila:


Also got the Gnome Keyring inclusion to configure, and it appears to work, but only for HTTP Auth.

