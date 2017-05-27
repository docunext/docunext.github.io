---
title: Debian BitTorrent Command Line Notes
date: 2007-07-04
tags: debian
---
#### <strong>Using BitTorrent from the command line on Debian</strong>

Install only bittorrent for now:

aptitude install bittorrent

Then get a torrent file:

<a href="http://cdimage.debian.org/debian-cd/4.0_r0/i386/bt-cd/debian-40r0-i386-netinst.iso.torrent">http://cdimage.debian.org/debian-cd/4.0_r0/i386/bt-cd/debian-40r0-i386-netinst.iso.torrent</a>

Then try this command:

<pre>btdownloadheadless debian-40r0-i386-businesscard.iso.torrent</pre>

The output of this command is very odd to me. I'm using notes from <a href="http://perljam.net/notes/torrent/">here</a> to make this command:

<pre>btlaunchmany /srv/torrents/active/ --max_upload_rate 10 > /var/log/bittorrent/torrent_activity.log 2>&1 &</pre>

I'm sort of confused as to how this works, but at least its a start.

