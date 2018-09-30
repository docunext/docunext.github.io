---
title: My Experience with the Recent Debian GNU kFreeBSD Progress
date: 2009-08-12
tags: debian,kfreebsd
---
I'm starting up a kQEMU powered Debian/kFreeBSD virtual machine, and I'm really looking forward to running apt-get update and apt-get upgrade!

Looks like MAKEDEV needs a little work:

<pre>Setting up makedev (2.3.1-89) ...
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
chmod: cannot access `/dev/tty[0-9]*': No such file or directory
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
Results undefined on non-Linux systems, aborting MAKEDEV invocation.
</pre>
Everything else seems to work fine!

