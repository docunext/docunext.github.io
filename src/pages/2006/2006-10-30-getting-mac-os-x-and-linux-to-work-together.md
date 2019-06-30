---
title: Getting Mac OS X and Linux to work together
date: 2006-10-30
tags: Apple
---
<p>Mac OS X is BSD, while linux is gnu. The two are similar, but different. They also use different file systems:</p>

<ul>    <li>Mac: HFS+</li>    <li>Linux: ext2 or reiser (among others)</li></ul><p>Most often, its a human using a Mac, and a linux machine running services and managing networks. There are a few things that I need both linux and Macs to do for me:</p><ol>    <li>rsync - for syncronization of my home directory for backups UPDATE: rsync is really not for syncronizing two work stations. I'm trying unison now. Unison is working well, only annoyance is the requirement that the unison versions have to be the same. </li>    <li>openssl - for encryption of files</li></ol><p>I know there are many other ways to accomplish those goals, but I prefer to use tools that come standard on both platforms.</p>
<p><strong>Alternative Security Options</strong>:</p>

<ul>    <li><a href="http://www.wasuvi.com/?page_id=2368" onclick="window.open(this.href, '_blank'); return false;">http://www.wasuvi.com/?page_id=2368</a></li></ul><p><strong>X11</strong></p>

<ul>    <li><a href="http://forums.macosxhints.com/archive/index.php/t-57627.html" onclick="window.open(this.href, '_blank'); return false;">http://forums.macosxhints.com/archive/index.php/t-57627.html</a></li>    <li><a href="http://www.macosxhints.com/article.php?story=20030110062251974" onclick="window.open(this.href, '_blank'); return false;">http://www.macosxhints.com/article.php?story=20030110062251974</a></li></ul><p><strong>Other cool unix related stuff</strong>:</p>

<ul>    <li><a href="http://gimp-app.sourceforge.net/" onclick="window.open(this.href, '_blank'); return false;">http://gimp-app.sourceforge.net/</a></li>    <li><a href="http://www.bigbold.com/snippets/posts/show/2745" onclick="window.open(this.href, '_blank'); return false;">http://www.bigbold.com/snippets/posts/show/2745</a><ul>        <li>This also looks cool: <a href="http://duplicity.nongnu.org/new_format.html" onclick="window.open(this.href, '_blank'); return false;">http://duplicity.nongnu.org/new_format.html</a></li>    </ul></li>    <li><a href="http://www.inkscape.org/" onclick="window.open(this.href, '_blank'); return false;">http://www.inkscape.org/</a></li></ul><p><strong>Unison</strong>:</p>

<ul>    <li><a href="http://www.cs.haifa.ac.il/~shuly/unison/" onclick="window.open(this.href, '_blank'); return false;">http://www.cs.haifa.ac.il/~shuly/unison/</a></li>    <li><a href="http://www.cis.upenn.edu/~bcpierce/unison/download.html" onclick="window.open(this.href, '_blank'); return false;">http://www.cis.upenn.edu/~bcpierce/unison/download.html</a></li></ul><p><strong>ISO</strong>

<a href="http://www.macosxhints.com/article.php?story=20030927130537765" onclick="window.open(this.href, '_blank'); return false;">How to Create an ISO image on Mac os x @ macosxhints.com</a></p>
<p>Understanding Mac metadata:</p>

<ul>    <li>man mdls</li>    <li>man mdfind</li></ul><p><strong>Beyond what I would do</strong>: These pages talk about installing more command line utils to make bsd more like linux.</p>

<ul>    <li><a href="http://www1.gly.bris.ac.uk/~wookey/MEFTLG/index.htm" onclick="window.open(this.href, '_blank'); return false;">http://www1.gly.bris.ac.uk/~wookey/MEFTLG/index.htm</a></li>    <li><a href="http://www.eecs.wsu.edu/~schneidj/mac-os-x-10.3.html" onclick="window.open(this.href, '_blank'); return false;">http://www.eecs.wsu.edu/~schneidj/mac-os-x-10.3.html</a></li></ul>
