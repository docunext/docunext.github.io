---
title: Its a Delicate Process but Sometimes Necessary Apt Surgery on Debian GNU Linux
comments:
  - author: exco
    email: docunext.com@excogitation.de
    url: http://www.excogitation.de
    date: 10/06/2008 10:56:32 AM
    text: >
      After 2 days of fiddling around with libc6<br/>I found your Apt Surgery and ... what do you know - I also had "Triggers-Awaited: man-db".<br/><br/>Your solution also worked for me. Thanks.
  - author: Albert
    email: albert.lash@savonix.com
    date: 10/06/2008 11:01:25 AM
    text: >
      Hi exco, thanks for commenting! I'm glad I was able to help. :-)
date: 2008-08-29
---
Ran out of disk space in /var/... canceled dist-upgrade, resulting with:

<pre>
Extracting templates from packages: 100%

Preconfiguring packages ...

dpkg: error processing base-files (--configure): package base-files is not ready for configuration cannot configure (current status `triggers-awaited')

Errors were encountered while processing: base-files

E: Sub-process /usr/bin/dpkg returned an error code (1)</pre>

Ouch!

So what to do... looking in /var/lib/apt/status:

<pre>
Package: base-files

Essential: yes

Status: install ok triggers-awaited

Priority: required

Section: admin

Installed-Size: 432

Maintainer: Santiago Vila <sanvila@debian.org>

Architecture: amd64

Version: 4.0.5

Replaces: base, miscutils

Provides: base

Depends: base-passwd (>= 2.0.3.4)

Pre-Depends: awk

Conffiles: /etc/debian_version c3a1f14e3cfb4e2a815ff14692258219 /etc/host.conf 4eb63731c9f5e30903ac4fc07a7fe3d6 /etc/issue c5b47f7de972ac3f083cc6349bcb23db /etc/issue.net ad006ab49199770f760dac332209cb27

Description: Debian base system miscellaneous files This package contains the basic filesystem hierarchy of a Debian system, and several important miscellaneous files, such as /etc/debian_version, /etc/host.conf, /etc/issue, /etc/motd, /etc/profile, /etc/nsswitch.conf, and others, and the text of several common licenses in use on Debian systems.

Triggers-Awaited: man-db</pre>

Going to re-install man-db:

<pre>
dpkg -P man-db

apt-get install man-db

apt-get dist-upgrade</pre>

Yes! It worked! :-)

¥

