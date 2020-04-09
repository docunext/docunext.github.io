---
title: Trying OpenVZ
date: 2007-07-24
---
I'm installing OpenVZ on a little valley d201gly folllowing <a href="http://wiki.openvz.org/Installation_on_Debian#install_the_kernel-image">http://wiki.openvz.org/Installation_on_Debian#install_the_kernel-image</a>:

1. Edit sources.list:

<pre># Added for OpenVZ

deb http://download.openvz.org/debian etch main</pre>

2. Update

3. Install kernel linux-image-2.6.18-openvz-686

4. Install vzctl and vzquota?

At this point I was a little confused - what's a template, where do they live? So I followed <a href="http://wiki.openvz.org/Debian_template_creation">openvz.org/Debian_template_creation</a> and <a href="http://www.howtoforge.com/debian_etch_openvz">howtoforge.com/debian_etch_openvz</a>.

I created a folder private inside /var/lib/vz/, and a folder 101 inside that, then debootstrap 101, and then started 101, and entered 101, but no network. :-( I got an error about proxy arp so I set that, but still no go. Aha, found out what the problem was. Needed "OSTEMPLATE=debian-4.0" in the /etc/vz/conf/101.conf file. :-)

Wow. OpenVZ rocks. So far I've built two VMs:

<ul><li>101 - basic debian etch, copied to template, keeping for ongoing modifications as I find them (like adding sudo and rsync)</li><li>102 - installing subversion for public GPL code we're working on</li></ul>

For 102 (the subversion server):

<pre>apt-get install subversion libapache2-svn php5</pre>

I'm not sure if I needed it, but I installed php5 because I use it almost everywhere. Hmm, having some problems with ssl, might need ca-certificates.

Also setup 103, which is a lamp server, while I was at it I created a copy of this to clone later.

While I'm thinking about it, I want to remind myself that it would be a good idea to use some intelligent numbering schemes for these virtual machines. Any number will do, as long as the they are larger than 100.

Yee-haw, just got a gentoo vm setup! :-) Too bad you can't run FreeBSD inside an OpenVZ VM. Just ran into a problem with the gentoo vm, had to increase the disk quota, but after that, no problem. Also ran into a <a href="http://planet.gentoo.org/developers/flameeyes/2006/03/19/the_shadow_and_pam_login_conflict">shadow and pam-login conflict, but found a solution pretty quick</a>.

Related:

<a href="http://www.docunext.com/">OpenVZ Docunext Wiki Page</a>

