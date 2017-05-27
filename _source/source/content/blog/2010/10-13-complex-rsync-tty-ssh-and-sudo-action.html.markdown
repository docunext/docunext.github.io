---
title: Complex Rsync TTY SSH and Sudo Action
date: 2010-10-13
tags: encryption
---
Faced with a hosting environment and security setup not entirely compatible to the software development and deployment workflows I'm used to, I looked to the awesome power of:

* Rsync
* SSH
* Sudo

And the notes of "crashingdaily": [rsync and sudo over ssh](http://crashingdaily.wordpress.com/2007/06/29/rsync-and-sudo-over-ssh/).

I chose option two, as I don't want to enable NOPASSWD in /etc/sudoers:

<pre class="sh_sh">
stty -echo; ssh server.remotehost.com sudo -v; stty echo
rsync -a -e "ssh" --rsync-path="sudo rsync" crashingdaily@server.remotehost.com:/u02/data_pump_dir/ /archive
</pre>

My solution is a bit different, whereas instead of sudo'ing to root, I'm sudo'ing to another user.

<pre class="sh_sh">
stty -echo; ssh server.remotehost.com cd / && sudo -v -u exampleuser; stty echo
rsync -a -e "ssh" --rsync-path="cd / $$ sudo  -u exampleuser rsync" crashingdaily@server.remotehost.com:/u02/data_pump_dir/ /archive
</pre>

I am very pleased with this solution as it uses standard tools that are or can be installed quite easily on most servers powered by open source software, is encrypted, and radically speeds up my automated workflow. SWEET!

