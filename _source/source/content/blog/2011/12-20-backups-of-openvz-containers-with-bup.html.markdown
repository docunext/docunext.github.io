---
title: Backups of OpenVZ Containers with bup
date: 2011-12-20
tags: backups,bup,lvm,openvz
---
I'm planning to use bup to make backups of vzdumps. Bup is a backup utility that build on top of git's awesomeness, so in some ways, its even *more* awesome.

I've got a couple components in place:

* LVM2 snapshot powered vzdumps!
* An initial bup backup of one of those snapshots.

<pre>
root@svx-mm-101:~# vzdump --dumpdir /root/vzsnaps --stdexcludes --compress  --snapshot 1123
INFO: starting new backup job: vzdump --dumpdir /root/vzsnaps --stdexcludes --compress --snapshot 1123
INFO: Starting Backup of VM 1123 (openvz)
INFO: CTID 1123 exist mounted running
INFO: status = CTID 1123 exist mounted running
INFO: backup mode: snapshot
INFO: bandwidth limit: 10240 KB/s
INFO: creating lvm snapshot of /dev/mapper/vgone-lvone ('/dev/vgone/vzsnap-svx-mm-101.savonix.vpn-0')
INFO:   Logical volume "vzsnap-svx-mm-101.savonix.vpn-0" created
INFO: creating archive '/root/vzsnaps/vzdump-openvz-1123-2011_12_20-21_53_10.tgz'
INFO: Total bytes written: 1595801600 (1.5GiB, 3.4MiB/s)
INFO: archive file size: 636MB
INFO:   Logical volume "vzsnap-svx-mm-101.savonix.vpn-0" successfully removed
INFO: Finished Backup of VM 1123 (00:12:31)
INFO: Backup job finished successfuly
</pre>

<pre>
root@svx-mm-101:/mnt/sdb1# ls -lah /mnt/sdb1/bup/
total 40K
drwxr-xr-x  7 root root 4.0K Dec 20 22:16 .
drwxrwxrwx 12 root root 4.0K Dec 20 22:16 ..
drwxr-xr-x  2 root root 4.0K Dec 20 22:16 branches
-rw-r--r--  1 root root   91 Dec 20 22:16 config
-rw-r--r--  1 root root   73 Dec 20 22:16 description
-rw-r--r--  1 root root   23 Dec 20 22:16 HEAD
drwxr-xr-x  2 root root 4.0K Dec 20 22:16 hooks
drwxr-xr-x  2 root root 4.0K Dec 20 22:16 info
drwxr-xr-x  4 root root 4.0K Dec 20 22:20 objects
drwxr-xr-x  4 root root 4.0K Dec 20 22:16 refs
root@svx-mm-101:/mnt/sdb1# du -sh !$
du -sh /mnt/sdb1/bup/
492M  /mnt/sdb1/bup/
</pre>

Wow - bup compressed the file another ~ 200 Mb!

#### What's Next?

Make another backup (only some minor changes), so I'm curious how much additional space backing up this tar file takes.

<pre>
root@svx-mm-101:~# vzdump --dumpdir /root/vzsnaps --stdexcludes --compress  --snapshot 1123
INFO: starting new backup job: vzdump --dumpdir /root/vzsnaps --stdexcludes --compress --snapshot 1123
INFO: Starting Backup of VM 1123 (openvz)
INFO: CTID 1123 exist mounted running
INFO: status = CTID 1123 exist mounted running
INFO: backup mode: snapshot
INFO: bandwidth limit: 10240 KB/s
INFO: creating lvm snapshot of /dev/mapper/vgone-lvone ('/dev/vgone/vzsnap-svx-mm-101.savonix.vpn-0')
INFO:   Logical volume "vzsnap-svx-mm-101.savonix.vpn-0" created
INFO: creating archive '/root/vzsnaps/vzdump-openvz-1123-2011_12_20-22_21_17.tgz'
</pre>

Well, I'm sold:

<pre>
root@svx-mm-101:/mnt/sdb1# bup split -n vzdump-openvz-1123  vzdumps/vzdump-openvz-1123.tgz
PackIdxList: using 1 index.
Indexing objects: 100% (3626/3626), done.
root@svx-mm-101:/mnt/sdb1# du -sh bup/
520M  bup/
</pre>

So it only took about 8MB more memory to backup a different version of a ~600MB compressed tarfile. Sweet.

I restored the file and compared checksums of the backup and the original and they matched up - yay!

#### Now What's Next?

I plan to automate all this; it will take a bit of shell script writing, but shouldn't be a big deal.

This is not very impressive, but its a start:

<pre>
ls -1 vzdumps | awk '{print "bup split -n "$1"z vzdumps/"$1}' | sed "s/\.tgzz//g"
</pre>

<pre>
docunext@vpn-comet:~/vzsnaps$ git annex move vzdump-openvz-230131.tgz --to svxbup
move vzdump-openvz-230131.tgz (checking svxbup...) (to svxbup...)
Receiving index from server: 1848232/1848232, done.
Receiving index from server: 960744/960744, done.
bloom: creating from 2 files (100244 objects).
Receiving index from server: 981968/981968, done.
bloom: adding 1 file (35032 objects).
Receiving index from server: 852132/852132, done.
bloom: adding 1 file (30395 objects).
Initialized empty Git repository in /home/albertlash/.bup/
bloom: creating from 14 files (696899 objects).
Receiving index from server: 885928/885928, done.
bloom: adding 1 file (31602 objects).
ok
</pre>

