---
title: Trying Out OpenPanel
comments:
  - author: Peter van Dijk
    email: peter-docunextblog@openpanel.com
    url: http://blog.openpanel.com/
    date: 05/13/2008 06:00:39 AM
    text: >
      Hello Albert! We're happy to see you like OpenPanel. If you don't mind, I'd like to clarify some points :)<br/><br/>The Apache controls are in the Domain tab - same for DNS and Mail. authd is a very simple daemon that runs as root to do those tasks that require root; that way, opencore doesn't run as root.<br/><br/>As for C++: modules can be written in any language so that should not be a limiting factor if you intend to develop for OpenPanel. Some modules are written in bash, and there's a (-very- lightly tested, i admit) Python module. Rolling your own in Perl or another language should prove trivial too.<br/><br/>OpenPanel wants to be a lot more than a simple control panel; then again, it wants to be a lot less than that if that is what you need. If you don't install the metapackage, you can cherrypick the components you like (with a bare minimum of opencore+authd+mod-user) and control whatever services you'd like.<br/><br/>The weight of the JavaScript is mostly coming from extjs now, and we're getting rid of that, so it'll be somewhat lighter soon!<br/><br/>Feel free to drop by in our IRC channel if you have more questions. Thanks! Peter
  - author: Albert
    email: albert.lash@savonix.com
    date: 05/13/2008 04:53:01 PM
    text: >
      Hi Peter! Thanks for commenting, I'm glad to learn you are ditching extjs, the license is bizarre in my opinion. I am a big fan of jQuery, have you tried it?
  - author: JP
    email: jp@jp10000.com
    url: http://blog.openpanel.com
    date: 05/14/2008 05:48:13 PM
    text: >
      Hi Albert, good to hear you like Openpanel!<br/><br/>When we were creating the OpenPanel GUI we started using JQuery. Later, when we needed widgets we added ExtJS, which is great stuff, but it's too heavy in terms of memory use and performance, and too extensive for what we're trying to do: build a lightweight interface with a small memory footprint and satisfying responsiveness. This means that ExtJS will have to go. However, prototyping with ExtJS saved us a lot of time and frustration since we did not have to worry about form widgets and form handling.<br/><br/>Since we saw that moment coming we did not actually build our code base on ExtJS: all coupling was done very loosely. (Besides, I don't feel very comfortable fully relying on (the brittleness of) any JavaScript framework.)<br/><br/>As for JQuery, we're using it for http requests, and we probably will continue using it. What I really like about JQuery is its chaining. We're not using it at the moment but it's a great concept :) What do you like best about it?<br/><br/>JP
  - author: Albert
    email: albert.lash@savonix.com
    date: 05/14/2008 05:53:59 PM
    text: >
      The plugins are amazing too - I use tablesorter, tablesorter cookie, cookiejar, and the basic http request stuff.<br/><br/>You are smart to be wary of javascript frameworks - I had abstained entirely until I found jQuery.<br/><br/>Just posted this to your blog but not sure if it went through:<br/><blockquote><br/>Hey OpenPanel! Thanks for commenting on my blog post about openpanel. Take a look at hypermagnet - its a project I've been working on to centrally manage debian packages. Not much at the site yet, but the idea is to use XSL to generate the various types of configuration files used by open source operating systems and applications.<br/><br/><a href="http://www.hypermagnet.com/blog/" rel="nofollow">http://www.hypermagnet.com/blog/</a><br/></blockquote>
date: 2008-04-26
tags: debian
---
<strong>
<h4>Installing OpenPanel on Debian</h4></strong>

Installing openpanel on bart:

<pre class="sh_sh">
E: Sub-process /usr/bin/dpkg returned an error code (1)
bart111:/home/sideshow-bob# apt-get install openpanel
Reading package lists... Done
Building dependency tree
Reading state information... Done
openpanel is already the newest version.
The following packages were automatically installed and are no longer required:  libgmime-2.0-2 libsieve2-1
Use 'apt-get autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 80 not upgraded.
3 not fully installed or removed.
After this operation, 0B of additional disk space will be used.
Setting up openpanel-mod-amavis (0.9.0-1) ...
Stopping Postfix Mail Transport Agent: postfix.
Starting Postfix Mail Transport Agent: postfix.
Stopping ClamAV daemon: clamd.
Starting ClamAV daemon: clamd .
Stopping amavisd: (not running).
Starting amavisd:   The value of variable $myhostname is "bart111", but should have been  a fully qualified domain name; perhaps uname(3) did not provide such.  You must explicitly assign a FQDN of this host to variable $myhostname  in amavisd.conf, or fix what uname(3) provides as a host's network name!(failed).
invoke-rc.d: initscript amavis, action "restart" failed.
dpkg: error processing openpanel-mod-amavis (--configure): subprocess post-installation script returned error exit status 1
Setting up openpanel-mod-dnsdomain (0.9.0-1) ...
dpkg: dependency problems prevent configuration of openpanel: openpanel depends on openpanel-mod-amavis; however:  Package openpanel-mod-amavis is not configured yet.
dpkg: error processing openpanel (--configure): dependency problems - leaving unconfigured
Errors were encountered while processing: openpanel-mod-amavis openpanel
E: Sub-process /usr/bin/dpkg returned an error code (1)</pre>

<pre class="sh_sh">
bart111:/home/nelson# /etc/init.d/openpanel start
Starting opencore-ssl: opencore-ssl.
Starting authd: com.openpanel.svc.authd.
Starting swupd: com.openpanel.svc.swupd.
Starting opencore:  com.openpanel.svc.opencore.
bart111:/home/nelson# </pre>

<pre class="bash">
bart111:/home/bart# opencli[opencli]% update user openadmin password=blahblah% Object not updated: (4098) 49:Error updating system user's password: User not in paneluser group\\n[opencli]%   </pre>

Homer: Doh!

Don't know why, but it wouldn't work with "ldap" in /etc/nsswitch.conf, so I removed them and it worked. :-) OpenPanel looks pretty darn good! Its GPL, the term OpenPanel is trademarked, and some of the interface artwork is only licensed for use with openpanel. I'd rather be using Tango anyway.
<h4>
First Impressions</h4>

They've done a good job with this, but as I start work on a similar project, I'm going to try to work more within the confines of existing setups, rather than reinventing the wheel.

The interface is beautiful. It appears to be inspired by Apple's Server Admin, which I've used in the past and while I found it slow to perform over common internet connections, I found it quite intuitive.

Here's a list of packages that were installed within the openpanel meta package:

<pre class="sh_sh">
ii  openpanel                               0.9.0-1               meta
ii  openpanel-authd                         0.8.13-1              authd
ii  openpanel-cli                           0.9.0-1               cli
ii  openpanel-core                          0.9.0-1               core
ii  openpanel-coreval                       0.9.0-1               cli
ii  openpanel-gui                           0.9.0-1               gui
ii  openpanel-mod-amavis                    0.9.0-1               Openpanel module to manage amavis
ii  openpanel-mod-apache2                   0.9.0-1               Configurue the apache2 webserver
ii  openpanel-mod-awstats                   0.8.14-1              Configure awstats per (sub) domain
ii  openpanel-mod-dnsdomain                 0.9.0-1               Bind 9 administration
ii  openpanel-mod-domain                    0.9.0-1               Domain node
ii  openpanel-mod-ftp                       0.9.0-1               FTP service
ii  openpanel-mod-iptables                  0.9.0-1               Iptables Firewalling
ii  openpanel-mod-lima                      0.8.13-1              LIMA mailinglist service configuration modul
ii  openpanel-mod-mysql                     0.9.0-1               MySQL database module
ii  openpanel-mod-networking                0.8.20-1              Openpanel network configuration module
ii  openpanel-mod-postfixcourier            0.9.0-1               Mailserver configuration module
ii  openpanel-mod-softwareupdate            0.8.18-1              Software update module
ii  openpanel-mod-ssh                       0.9.0-1               SSH login service
ii  openpanel-mod-user                      0.9.0-1               User management module
ii  openpanel-ssl                           0.8.1-1               SSL remote access handler for openpanel
ii  openpanel-swupd                         0.8.10-1              swupd</pre>

I don't think it likes my openvz network interface as the networking page is disabled, and I can't find any apache controls, even though the apache module is installed (note - when I installed the openpanel package, it removed worker and installed prefork).

Here's a screenshot:

</a>

This will go well with RoundCube, don't you think?

<strong>
<h4>Under the hood of OpenPanel</h4></strong>

It looks like the opencore codebase is comprised of c++, using the xmlrpc protocol to communicate with its other components. This is good and bad for me, because I was impressed by the m0n0wall author Manuel Kasper's paper on the next generation of m0n0wall which was going to use c++ and xml-rpc. Its bad because I don't know c++! :-( I feel that a management system like this doesn't really need to be super duper efficient, so I'd be comfortable working with any of the popular interpreted languages, like perl, python, php or ruby.

There is something called authd which I've never heard of before, and I'm already confused. The openadmin user is stored is nss files (shadow, passwd, group) - and there are plenty of authentication, authorization, and session management systems out there already.

From a process and open file perspective, here's what's going on in my setup:

<pre class="bash">
bart111:/home/otto# lsof | grep opencore
opencore-  9929     nobody  cwd    DIR       0,22     4096          2 /
opencore-  9929     nobody  rtd    DIR       0,22     4096          2 /
opencore-  9929     nobody  txt    REG       0,22   455052     190409 /var/opencore/bin/opencore-ssl
opencore-  9929     nobody  mem    REG      254,0              190409 /var/opencore/bin/opencore-ssl (path dev=0,22)
opencore-  9929     nobody  mem    REG      254,0              188063 /var/cache/nscd/passwd (path dev=0,22)
opencore-  9929     nobody  mem    REG      254,0              202259 /usr/lib/libz.so.1.2.3.3 (path dev=0,22)
opencore-  9929     nobody  mem    REG      254,0              194130 /lib/libdl-2.7.so (path dev=0,22)
opencore-  9929     nobody  mem    REG      254,0              194056 /lib/libc-2.7.so (path dev=0,22)
opencore-  9929     nobody  mem    REG      254,0              201804 /usr/lib/i686/cmov/libcrypto.so.0.9.8 (path dev=0,22)
opencore-  9929     nobody  mem    REG      254,0              201805 /usr/lib/i686/cmov/libssl.so.0.9.8 (path dev=0,22)
opencore-  9929     nobody  mem    REG      254,0              193803 /lib/ld-2.7.so (path dev=0,22)
opencore-  9929     nobody    0u   CHR      136,0                   2 /dev/pts/0
opencore-  9929     nobody    1u   CHR      136,0                   2 /dev/pts/0
opencore-  9929     nobody    2u   CHR      136,0                   2 /dev/pts/0
opencore-  9929     nobody    3u  IPv4   15383737                 TCP *:4089 (LISTEN)
opencore-  9929     nobody    4u  unix 0xeade2400            15383740 socket
opencore-  9929     nobody    5u  IPv4   15708630                 TCP bart111.savonix.com:4089-&gt;192.168.1.174:56453 (ESTABLISHED)
opencore-  9929     nobody    6u  IPv4   15708637                 TCP localhost.localdomain:59547-&gt;localhost.localdomain:4088 (ESTABLISHED)
authd      9933       root  txt    REG       0,22   147721     190373 /var/opencore/bin/authd.app/Contents/Linux.unknown/authd.exe
authd      9933       root  mem    REG      254,0              190373 /var/opencore/bin/authd.app/Contents/Linux.unknown/authd.exe (path dev=0,22)
authd      9933       root    3u   REG       0,22    60707     185886 /var/opencore/log/authd.event.log
authd      9933       root    6u  unix 0xe411d180            15383747 /var/opencore/sockets/authd/authd.sock
swupd      9942       root  txt    REG       0,22   102772     190412 /var/opencore/bin/swupd
swupd      9942       root  mem    REG      254,0              190412 /var/opencore/bin/swupd (path dev=0,22)
swupd      9942       root    3u   REG       0,22    11600     190588 /var/opencore/log/swupd.event.log
swupd      9942       root    4u  unix 0xea7108c0            15383756 /var/opencore/sockets/swupd/swupd.sock
opencore   9952   opencore  cwd    DIR       0,22     4096          2 /
opencore   9952   opencore  rtd    DIR       0,22     4096          2 /
opencore   9952   opencore  txt    REG       0,22  1810005     283123 /var/opencore/bin/opencore.app/Contents/Linux.unknown/opencore.exe
opencore   9952   opencore  mem    REG      254,0              283123 /var/opencore/bin/opencore.app/Contents/Linux.unknown/opencore.exe (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              188064 /var/cache/nscd/group (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              188063 /var/cache/nscd/passwd (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              194056 /lib/libc-2.7.so (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              192611 /lib/libgcc_s.so.1 (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              194131 /lib/libm-2.7.so (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              200468 /usr/lib/libstdc++.so.6.0.10 (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              203316 /usr/lib/libgrace-pcre.so (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              202211 /usr/lib/libpcre.so.3.12.1 (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              201369 /usr/lib/libgrace.so (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              194129 /lib/libcrypt-2.7.so (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              194130 /lib/libdl-2.7.so (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              194143 /lib/libpthread-2.7.so (path dev=0,22)
opencore   9952   opencore  mem    REG      254,0              193803 /lib/ld-2.7.so (path dev=0,22)
opencore   9952   opencore    0r   CHR        1,3              184057 /dev/null
opencore   9952   opencore    1u   REG       0,22   334554     188026 /var/opencore/log/opencore.debug.log
opencore   9952   opencore    2w   CHR        1,3              184057 /dev/null
opencore   9952   opencore    3u   REG       0,22    33016     190589 /var/opencore/log/opencore.event.log
opencore   9952   opencore    4u  IPv4   15708639                 TCP localhost.localdomain:4088-&gt;localhost.localdomain:59547 (ESTABLISHED)
opencore   9952   opencore    5r  FIFO        0,5            15383772 pipe
opencore   9952   opencore    6w  FIFO        0,5            15383772 pipe
opencore   9952   opencore    7u  unix 0xf415e1c0            15383773 /var/opencore/sockets/opencore.sock
opencore   9952   opencore    8u  IPv4   15383786                 TCP *:4088 (LISTEN)
opencore   9952   opencore    9u   REG       0,22   109064     190592 /var/opencore/log/opencore.access.log
opencore   9952   opencore   10u   REG       0,22    53248     284978 /var/opencore/db/panel/panel.db</pre>

While the product appears to be a control panel, its actually a whole lot more, and I'm not sure if I want all that comes along with it. I'm so happy with how debian works, I only want a way to control and configure it better.

Note - there is a <strong>ton</strong> of javascript which is powering the panel web interface.

¥

