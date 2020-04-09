---
title: PEAR Channel Server
date: 2007-10-22
tags: none
author: Albert Lash
---
<a href="http://www.docunext.com/2007/10/pear-channel-server/">

I'm finally going to setup a PEAR Server!

<pre>
pear channel-discover pear.chiaraquartet.net</pre>

<pre>
pear install channel://pear.chiaraquartet.net/Chiara_PEAR_Server-0.18.7

WARNING: "pear/HTML_QuickForm" is deprecated in favor of "pear/HTML_QuickForm2"

WARNING: "pear/DB" is deprecated in favor of "pear/MDB2"

Did not download optional dependencies: pear/Validate, use --alldeps to download automatically

WARNING: "pear/HTML_Common" is deprecated in favor of "pear/HTML_Common2"

pear/DB_DataObject can optionally use package "pear/Validate" (version >= 0.1.1)

downloading Chiara_PEAR_Server-0.18.7.tgz ...

Starting to download Chiara_PEAR_Server-0.18.7.tgz (40,120 bytes)...........done: 40,120 bytes

downloading DB_DataObject-1.8.7.tgz ...

Starting to download DB_DataObject-1.8.7.tgz (63,184 bytes)...done: 63,184 bytes

downloading HTML_QuickForm-3.2.10.tgz ...

Starting to download HTML_QuickForm-3.2.10.tgz (101,851 bytes)...done: 101,851 bytes

downloading Date-1.4.7.tgz ...

Starting to download Date-1.4.7.tgz (55,754 bytes)...done: 55,754 bytes

downloading HTML_Common-1.2.4.tgz ...

Starting to download HTML_Common-1.2.4.tgz (4,519 bytes)...done: 4,519 bytes

install ok: channel://pear.php.net/Date-1.4.7

install ok: channel://pear.php.net/HTML_Common-1.2.4

install ok: channel://pear.php.net/DB_DataObject-1.8.7

install ok: channel://pear.php.net/HTML_QuickForm-3.2.10

install ok: channel://pear.chiaraquartet.net/Chiara_PEAR_Server-0.18.7

Chiara_PEAR_Server: Optional feature pearweb available (Public frontend for users to browse channel packages)

To install use "pear install chiara/Chiara_PEAR_Server#featurename"

chiara/Chiara_PEAR_Server has post-install scripts:/usr/share/php/Chiara/PEAR/Server/mysqlinstall.php

Use "pear run-scripts chiara/Chiara_PEAR_Server" to run

DO NOT RUN SCRIPTS FROM UNTRUSTED SOURCES</pre>

Wow, this is actually really cool! The software used to run the PEAR server is a little buggy, but it is advertised as alpha and for the most part it works. I then packaged up the most current version of nexista and uploaded it. I had to add, change, and edit maintainers and stuff, but it worked in the end. Now I've got to polish it up a bit and then I'll make it public.

UPDATE:

So I messed up a bunch of stuff when I did this yesterday, so I did it again today, and it worked out much better. I was able to upload a release, and even discover it from another machine!

<pre>pear channel-discover pear.nexista.org/pear/

Adding Channel "pear.nexista.org" succeeded

Discovery of channel "pear.nexista.org/pear/" succeeded</pre>

I haven't fully tested this out, so I don't recommend using that channel. Once its reliable and setup correctly, I'll post instructions at <a href="http://www.nexista.org/">Nexista.org</a>.

UPDATE 2:

I finally was able to install a PEAR package from my PEAR server. It appears that the PEAR server prefers having everything in the root directory. I was able to symlink the get and Chiara_PEAR_Server_REST folders to the root without much problem, though that's not how I'd like it setup.

