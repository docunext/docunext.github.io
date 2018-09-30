---
title: Ubuntu IPSec
date: 2007-03-25
tags: ipsec,ubuntu,vpn
---
I'm setting up Ipsec on ubuntu:

<pre>apt-get install racoon</pre>

ran into problems:

<pre>Reading package lists... Done
Building dependency tree... Done
The following NEW packages will be installed:  racoon
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 342kB of archives.
After unpacking 1053kB of additional disk space will be used.
Get:1 http://archive.ubuntu.com dapper/main racoon 1:0.6.5-4ubuntu1 [342kB]
Fetched 342kB in 1s (238kB/s)
Preconfiguring packages ...
Selecting previously deselected package racoon.(Reading database ... 17951 files and directories currently installed.)
Unpacking racoon (from .../racoon_1%3a0.6.5-4ubuntu1_amd64.deb) ...
Setting up racoon (0.6.5-4ubuntu1) ...
Generating /etc/default/racoon...
Loading IPSEC/crypto modules...
insmod: error inserting '/lib/modules/2.6.16.29-xen/kernel/crypto/crc32c.ko': -1 Unknown symbol in module
insmod: error inserting '/lib/modules/2.6.16.29-xen/kernel/net/ipv6/ipcomp6.ko': -1 Unknown symbol in module
IPSEC/crypto modules loaded.
Starting IKE (ISAKMP/Oakley) server: racoon: failed to parse configuration file.
racoon-tool: racoon did not start.
invoke-rc.d: initscript racoon, action "start" failed.
dpkg: error processing racoon (--configure): subprocess post-installation script returned error exit status 255
Errors were encountered while processing: racoon
E: Sub-process /usr/bin/dpkg returned an error code (1)</pre>

<pre>apt-get remove racoon</pre>

<pre>modprobe crc32c
modprobe ipcomp6</pre>

<pre>apt-get install racoon</pre>

same thing, maybe the errors are OK?

This the problem from syslog?

<pre>racoon: ERROR: glob found no matches for path</pre>

This page translated:

<a href="http://translate.google.com/translate?hl=en&amp;sl=de&amp;u=http://www.ubuntu-forum.de/artikel/3416/Breezy--IPSec-Tools.html&amp;sa=X&amp;oi=translate&amp;resnum=5&amp;ct=result&amp;prev=/search%3Fq%3Dracoon:%2BERROR:%2Bglob%2Bfound%2Bno%2Bmatches%2Bfor%2Bpath%26hl%3Den">Breezy + IPSec Tools</a>

suggests loading:

<pre>modprobe xfrm6_tunnel</pre>

and it worked!

<pre>/etc/init.d/racoon start
Loading IPSEC/crypto modules...
IPSEC/crypto modules loaded.
Starting IKE (ISAKMP/Oakley) server: racoon: failed to parse configuration file.
racoon.
Flushing SAD and SPD...
SAD and SPD flushed.
Loading SAD and SPD...
SAD and SPD loaded.
Configuring racoon...done.</pre>

Still not working, now getting this error in syslog:

<pre>racoon: ERROR: couldn't find configuration. </pre>

increasing verbosity:

<pre>get pfkey X_SPDDUMP message
pfkey X_SPDDUMP failed: No such file or directory</pre>

Hmmm, what is pfkey - restarted setkey and its good, then had some mismatched encryption settings. Now this:

<pre>racoon: ERROR: couldn't find the pskey</pre>

Hmmm. Got that working  - you really have to make sure all the setting match up on both side. The sa gets established, but I can't ping one box from the other. Though packets are getting through (as seen via tcpdump). The issue now must be something to do with iptables, routing, or something similar.

Argh. I just couldn't get this working, but I did learn a lot about ipsec on ubuntu / debian. I need to test it out on another server to make sure the problems I was having aren't isolated.

IPSec Related links:

* [IPSec Docunext Wiki Page](http://www.docunext.com/wiki/IPSec)
* <a href="http://www.ipsec-howto.org/t1.html">http://www.ipsec-howto.org/t1.html</a>
* <a href="http://foodfight.org/log/Interweb/ipsec-1">http://foodfight.org/log/Interweb/ipsec-1</a>

