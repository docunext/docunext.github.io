---
title: Download Pending
date: 2009-02-01
---
I've finally got an image I'm quite happy with, so I'll be uploading it soon. Its for use with QEMU and can be started with something along the lines of the  the following script:

<pre>
qemu -m 256 -vnc :0 -net nic,model=rtl8139 -net tap -hda /root/nodows/work/images/test6.img
</pre>

Backups: The image allows for backup of some basic data, like /etc/passwd, fstab, and such. To do so, files must be copied from /etc/ to /initrd/mnt/0/etc/ following the same path structure, and then the file /initrd/mnt/0/etc/init.d/restore must be run. This will create a file called "backups" which will tell the rebooting system which files to restore.

A more sophisticated and comprehensive configuration system will follow.

Oh yes, and I also plan to be switching this mindeb blog over to movabletype soon.

