---
title: Cleanweasel
date: 2009-08-28
tags: debian,firefox,iceweasel,sqlite
---
I read about this tip from <a href="http://costela.net/2009/08/forcing-a-bit-of-house-cleaning-old-news-for-most-probably/">Debian planet aggregated blog</a> yesterday:

<pre class="sh_sh">#!/bin/sh
find ~/.mozilla/firefox/ -name *.sqlite | while read db; do-
    sqlite3 $db VACUUM;-
done
</pre>
This gave me a *huge* performance boost! Thanks!

