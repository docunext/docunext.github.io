---
title: Installing Bugzilla on Debian Testing
date: 2007-05-22
---

Now trying to install bugzilla on Debian testing...

apt-get install bugzilla

Choosing auto install of db... (though if it doesn't work check: /usr/share/doc/bugzilla)

<pre>Compilation failed in require at /usr/lib/cgi-bin/bugzilla/index.cgi line 33.</pre>

Just noticed: "try running checksetup.pl again";

<pre>/usr/share/bugzilla/lib# perl checksetup.pl [... lots of stuff... ]

Can't connect to the database.

Error: Access denied for user 'bugzilla'@'localhost' (using password: YES)  Is your database installed and up and running?  Do you have the correct username and password selected in localconfig?</pre>

Yeah that might do it. Somehow the config files that were created during dpkg conf were overwritten, I must have selected the wrong option. Oh well, works now. :-)

