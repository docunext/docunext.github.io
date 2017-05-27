---
title: Debian pycentral bug 
date: 2007-04-08
tags: debian,python
---
Trying to upgrade python2.4:

<pre>apt-get install python2.4
Reading package lists... Done
Building dependency tree... Done
python2.4 is already the newest version.
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
3 not fully installed or removed.
Need to get 0B of archives.
After unpacking 0B of additional disk space will be used.
Setting up python2.4-minimal (2.4.4-3) ...
Linking and byte-compiling packages for runtime python2.4...
Traceback (most recent call last):
  File "/usr/bin/pycentral", line 1373, in ?    main()
  File "/usr/bin/pycentral", line 1363, in main    if action.check_args(global_options):
  File "/usr/bin/pycentral", line 971, in check_args    for rt in get_installed_runtimes():
  File "/usr/bin/pycentral", line 196, in get_installed_runtimes    supported = pyversions.supported_versions()
  File "/usr/share/pycentral-data/pyversions.py", line 98, in supported_versions    value = read_default('supported-versions')
  File "/usr/share/pycentral-data/pyversions.py", line 22, in read_default    value = config.get('DEFAULT', name)</pre>

Edited /usr/bin/pycentral:

<pre># call the main routine#if __name__ == '__main__':#    main()</pre>

Just commented out the last two lines of the file.

Tried again, worked fine. Submitted bug email:

<pre>Subject: pycentral error when trying to install python2.4
Package:  python-central
Version: 0.5.13
Tags: python
Severity: normal
cat /proc/version
Linux version 2.6.17.1 (...) (gcc version 4.1.2 20060715 (prerelease)(Debian 4.1.1-9)) #3 SMP PREEMPT Tue Aug 8 16:46:30 EDT 2006
apt-get -v
apt 0.6.46.4-0.1 for linux i386 compiled on Feb 26 2007 16:19:57
Supported modules:*Ver: Standard .deb*Pkg:  Debian dpkg interface (Priority 30)
S.L: 'deb' Standard Debian binary tree
S.L: 'deb-src' Standard Debian source tree
Idx: Debian Source Index
Idx: Debian Package Index
Idx: Debian dpkg status file
apt-get install python2.4
Reading package lists... Done
Building dependency tree... Done
python2.4 is already the newest version.
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
3 not fully installed or removed.
Need to get 0B of archives.
After unpacking 0B of additional disk space will be used.
Setting up python2.4-minimal (2.4.4-3) ...
Linking and byte-compiling packages for runtime python2.4...
Traceback (most recent call last):
  File "/usr/bin/pycentral", line 1373, in ?    main()
  File "/usr/bin/pycentral", line 1363, in main    if action.check_args(global_options):
  File "/usr/bin/pycentral", line 971, in check_args    for rt in get_installed_runtimes():
  File "/usr/bin/pycentral", line 196, in get_installed_runtimes    supported = pyversions.supported_versions()
  File "/usr/share/pycentral-data/pyversions.py", line 98, in supported_versions    value = read_default('supported-versions')
  File "/usr/share/pycentral-data/pyversions.py", line 22, in read_default    value = config.get('DEFAULT', name)
UnboundLocalError: local variable 'config' referenced before assignment
dpkg: error processing python2.4-minimal (--configure):"Fixed" by commenting out last two lines of pycentral</pre>

