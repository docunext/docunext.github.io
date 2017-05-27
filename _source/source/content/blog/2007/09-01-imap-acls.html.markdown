---
title: IMAP ACLs
date: 2007-09-01
tags: imap,security
---
OK, I think I've finally found a way to achieve one of my high availability goals.

Also found this courier2dovecot script on a blog based out of southern spain:

http://bendiken.net/2005/11/03/courier-imap-to-dovecot-migration-script

Though I've heard good things about dovecot, I'm happy with courier.

Primary IMAP server goes down, clients can access a backup fail over (manually or automatically switched by a DNS record update backup), in readonly mode, enforced by IMAP acls. Primary and secondary IMAP servers are kept in sync via rsync.

The primary could be made pretty darn available by using a multi-homed dns record (the backup would not be multi-homed, but at a different location altogether), which points to two imap servers located at the same location, connected on a gigE network, accessing a cluster filesystem like GFS, using a redundant block device such as DRBD. I think that would work great. In that way, you are eliminating a SPOF for fairly common problems: machine and network. The bigger issue of the location itself (like if the air conditioner at the location failed, and all the machines crashed) is an entirely different and expensive thing to provide redundancy for. At that level, if something goes wrong, chances are you have bigger things to worry about than your email not working. :-)

While it would be nice to have a wide-area system like that, I doubt DRBD would be happy about common wide-area link speeds.

The addition of multi-homed web mail clients like roundcube would be nice addition to this.

SMTP is easy to multi-home, but the question is how "sent messages" could get stored on the server.

Other ideas:

* IMAP clients should have offline caching built-in.
* Backup failover simply allows clients to connect without throwing errors left and right. Client should only throw errors when the user attempts to make changes.
* Based on the last comment, what's the point? The point is to support mobile users, or those who only use web-based clients.

As you can see from the links below, I was very interested in the offlineIMAP script. The major problem I ran into with it is that it is designed for use by users, not servers. For example, you can't synchronize every account served by an IMAP server to another one, though this concept might make it into a future version of IMAP - allowing IMAP servers to be clients of other ones, for replication and redundancy. Conceptually, it is really close to being feasible. The missing pieces as far as I can tell are security, authentication, and identification.

More stuff:

http://wingolog.org/archives/category/imap/

http://dannf.org/docs/offlinemail.html

http://n01se.net/agriffis/mutt/

http://www.paganini.net/index.cgi/dailydebian/20051205_offlineimap.html

http://software.complete.org/offlineimap/wiki/FrequentlyAskedQuestions

http://ask.slashdot.org/article.pl?sid=05/09/08/1925241

