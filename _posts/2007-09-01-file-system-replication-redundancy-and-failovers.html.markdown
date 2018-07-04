---
title: File System Replication Redundancy and Failovers
date: 2007-09-01
tags: dav,nfs,rsync
---
Wide-area file systems / "Global content distributors"

What about a custom davfs that caches content, checks for cache expiration, but uses cached copy in the case of disconnect. The same as an rsync primary / secondary system, you can only update the primary. However, the davfs is a good technique because if it doesn't exist on the current filesystem, it will try to go fetch it.

In this case, you'd want a failover on the primary server in the event of a crash or network outage, and simply not update the content until the primary is repaired or network connectivity is repaired.

When to use DRDB?

You'd really only want to use DRDB on a system that requires continuous write capabilities, like an imap server. In that case, the email client can cache, and the server and network can have a backup.

But what about resynchronizing the primary server across a wide area network? That is a tough one. In that case, it would probably be appropriate to provide read access to the backup, but disallow writes, and hold incoming messages in queue until the primary service is restored.

Use rsync every 15 minutes to failover server.

THIS IS A GOOD IDEA:

* NFS on a really solid back-end, rsync'd to failover.
* load-balanced imap server

FAILOVER

ARCHIVE / BACKUP (even of stuff that gets deleted)

http://linuxsutra.blogspot.com/2006/11/howto-gfs-gnbd.html

http://lists.linbit.com/pipermail/drbd-dev/2005-August/000310.html

