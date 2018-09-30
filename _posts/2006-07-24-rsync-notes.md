---
title: rsync notes
date: 2006-07-24
tags: rsync
---
<pre>rsync --delete --delete-excluded --exclude-from=~/.rsync/exclude -re ssh -avzp domainname.com:/path/</pre>

<pre>sudo rsync --delete --delete-excluded --exclude-from=~/.rsync/exclude -re ssh -avzp user@domainname.com:/path/</pre>

Use symbolic links to have them included in the rsync (for including a folder that is outside the root of the rsync), use Mac aliases to have them not included (to avoid having duplicates within the root folder).

You know how FTP can resume partial downloads that were canceled or stopped halfway through? Well, rsync can do this too!

<b>Resume</b>

<pre>rsync --progress --partial -e ssh</pre>

