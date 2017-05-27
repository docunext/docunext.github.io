---
title: Kudos Horde
date: 2009-01-17
---
I've had my eye on the Horde Application Framework for quite awhile, but for a long time, it was stuck using PHP4, and I couldn't find it in the Debian archives. I held off.

Last night, I apt-cache searched again and found Gollem and apt-get installed it. A little kludgey to get installed and up and running, but really not too bad. After that - very nice indeed.

So I decided to try out Chora as well, and I like it!

A big round of applause to the horde developers!

UPDATE: Imp is nice too (its a web-based email client).

And of course I'm a critic too - I wish they used jQuery and thickbox. So much nicer than window popups. Strange, after installing Imp, I restarted the webserver so php5-imap would be loaded, and now the horde sidebar.php is broken. Huh.

<pre>[Sat Jan 17 14:33:56 2009] [error] [client 192.168.1.180] Premature end of script headers: sidebar.php, referer: http://dev-48-gl.savonix.com/horde3/index.php</pre>

Yes, strange. I apt-get removed php5-imap (which due to dependencies removed imp) and the sidebar works again. Wonder what the problem is...

