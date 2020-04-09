---
title: HTTP Keep Alive
date: 2008-02-01
---
I'm wondering if keep-alive settings affect how well roundcube performs. I was concerned because I have my web server behind a firewall which keeps the keepalives low.

I just installed up-imapproxy, which caches IMAP connections and it has helped a lot. It also helps with Squirrel Mail. :-)

Still, I feel like RoundCube performance could be improved. There are a few great things the developers did, like provide not-modified cache headers for messages. Nevertheless, I think that my computer gets bogged down by the amount of javascript needed to run the application. I just checked by turning off javascript, and indeed, the app does move much faster. The developers did a nice job of separating the javascript functionality from the core functionality. When I turned js off, some stuff broke (like the previous and next buttons) but the important stuff works. It would be nice to be able to configure the level of javascript / ajax functionality you want - kind of like how compiz manages window manager tweaks.

Maybe both Circle Box and Squirrel Mail could benefit from Cache_Lite as well - I've found it to be an excellent resource for improving web application speed.
