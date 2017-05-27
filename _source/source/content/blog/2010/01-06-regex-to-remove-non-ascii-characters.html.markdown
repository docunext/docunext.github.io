---
title: Regex to Remove non ASCII Characters
date: 2010-01-06
tags: ascii,regex
---
I had a file that I wanted to remove non-ascii characters from. I did some searching, got some hints, and came up with this:

<pre class="sh_sh">
cat filename.txt | sed -r "s/[^\x20-\x7E|\n|\ |\t]//g" > newfilename.txt
</pre>

Worked for me on version Squeeze of Debian GNU/Linux.

