---
title: To Do List Bacula and LDAP
date: 2008-04-13
---
If I keep telling myself to do this stuff, eventually I will!* Setup a bacula server and service to regularly back everything up* Setup LDAP for nss on all servers
<h4>LDAP</h4>

I want to use this with ldap:

<a href="http://packages.debian.org/etch/nss-updatedb">http://packages.debian.org/etch/nss-updatedb</a>

I've followed <a href="http://wiki.debian.org/NSSLDAPSetup">NSSLDAPSetup</a> on the Debian wiki and I ran into an issue where I had to use:

<pre lang="bash">
host 127.0.0.1</pre>

instead of:

<pre lang="bash">
uri ldap://127.0.0.1/</pre>

Cool! I think I got it working. So the very cool part about this is the the 'nss_updatedb ldap passwd" does exactly what I'd hoped it would do. Its not a cache, its a local copy. Cool!

Actually nss_update is only for passwd and group, so that leaves shadow. It is suggested in the nss_updatedb README that libpam_ccreds can be used for that function.

More notes here:

<a href="/wiki/LDAP">LDAP Notes at Docunext</a>

<strong>To-do list:</strong> * Improve admin security * Stop using debconf for libnss_ldap.conf and pam_ldap.conf and instead use csync2?* Ensure replication across VPNs

<strong>Progress</strong>

The progress is going well. Migrating additional machines after the first few is quite easy. I'm a little concerned about disconnected access, but I guess if the machine is disconnected, I wouldn't be able to ssh in anyway.
<h4>Bacula / Backups</h4>

John Goerzen has a great post about the latest and greatest backup utilities:

<a href="http://changelog.complete.org/posts/706-Backup-Software.html">http://changelog.complete.org/posts/706-Backup-Software.html</a>

I've tried duplicity and wasn't thrilled, but dar sounds awesome.

UPDATE April 14, 2008 - I just realized that John Goerzen is the author of offlineimap - that's awsome! I love that program. :-)

This looks pretty good too:

<a href="http://www2.backup-manager.org/">http://www2.backup-manager.org/</a>

