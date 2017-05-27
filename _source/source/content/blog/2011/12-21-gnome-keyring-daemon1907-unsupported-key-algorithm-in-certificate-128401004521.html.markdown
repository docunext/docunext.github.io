---
title: gnome keyring daemon 1907 unsupported key algorithm in certificate 1.2.840.10045.2.1
date: 2011-12-21
tags: debian,gnome-keyring-daemon,ssh,wheezy
---
Yikes! My dsa public keys stopped working today, and I found this murky error message in /var/log/auth.log:

<pre class="terminal">
gnome-keyring-daemon[1907]: unsupported key algorithm in certificate: 1.2.840.10045.2.1
</pre>

Hmmm... apparently gnome-keyring-daemon doesn't like my key! I tried upgrading gnutls in hopes it would pull in some certificates, but that didn't work.

I searched the web for some clues, and came up with some bug reports, but no clear solution:

* <https://bugzilla.redhat.com/show_bug.cgi?id=694954>
* <http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=552723>

Now I'm doing a bold upgrade of gnome-keyring, which is updating a slew of other debian packages.

FYI - I'm running Debian Wheezy.

UPDATE: I never did figure this one out; instead I just created a new key.

