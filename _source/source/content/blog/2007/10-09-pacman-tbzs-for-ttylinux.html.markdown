---
title: Pacman .tbz s for ttylinux
date: 2007-10-09
---
I created a few pacman packages for use with ttylinux:

<a href="/blog/wp-content/sites/wwwdocunextcom/files/libdbus-1-3.tbz">libdbus-1-3.tbz</a>

<a href="/blog/wp-content/sites/wwwdocunextcom/files/dnsmasq-2.35.tbz">dnsmasq-2.35.tbz</a>

<a href="/blog/wp-content/sites/wwwdocunextcom/files/ipkg-0.99.163.tbz">ipkg-0.99.163.tbz</a>

With the ipkg tool, you can install ipkg and deb packages, though very few actually work because of the vast differences between debian and ttylinux. It was worth a shot though. :-)

It was possible to use a repository from openwrt's kamikaze base as it has packages for the x86-2.6 platform. However, they use uclibc instead of the regular glibc. I would like to use ipkg for its remote package support at some point, but right now I'm sticking with the simplicity of pacman. I'll mention that the libdbus and dnsmasq packages I prepared above were built from debian etch packages, stripped down and converted to pacman format. That's the beauty of using glibc.

Also, since it was a serious pain in the neck for me to figure out, I'll post my /etc/ipkg.conf here.
<h3>/etc/ipkg.conf for x86</h3>

<pre class="sh_sh">
src snapshots http://downloads.openwrt.org/kamikaze/7.06/x86-2.6/packages
dest root /
dest ram /mnt/ramfs
arch i386 10
arch all 5</pre>

Note: the above sources will work when you call "ipkg-cl update", but will not work when you try to install any of the packages.

Ha! Finally figured out how to use ipkg-cl with Packages.gz! Just put src/gz at the beginning. Here's a new ipkg.conf file:

<pre class="sh_sh">
src/gz etch http://http.us.debian.org/debian/dists/etch/main/binary-i386
dest root /
dest ram /mnt/ramfs
arch i386 10
arch all 5</pre>

It still will not work with debian repositories. :-( The directory layout is vastly different from .deb to .ipkg, which is too bad because both support similar formats of control files - dependencies and such. The apt-get package management system really does have super cow power, but like a cow its big and unwieldy.
<h3>Makelist.sh</h3>

This might come in handy:

<pre class="sh_sh">#!/bin/sh
package=$1
name="${package/_i386.deb/}"
PKG_NAME=$name
ar -x $package
tar -xzvf data.tar.gz
rm control.tar.gz
rm debian-binary
rm *.deb
rm -rf usr/share/locale/
rm -rf usr/share/doc/
rm -rf usr/share/man/
find . -type f &gt; ../temp.filelist
find . -type l &gt;&gt; ../temp.filelist
mkdir -pv var/log/packages
sort ../temp.filelist | sed s%./%% &gt; var/log/packages/$PKG_NAME
tar jcvf ../$PKG_NAME.tbz .
rm data.tar.gz
rm -rf bin
rm -rf etc
rm -rf lib
rm -rf usr
rm -rf var
rm -rf sys
rm -rf sbin
rm ../temp.filelist</pre>

Obviously inspired by: <a href="http://minimalinux.org/forum/viewtopic.php?id=76">http://minimalinux.org/forum/viewtopic.php?id=76</a> with a bunch of stuff added for deb packages.

NOTE: The above script can render your system useless if you do not know what you are doing, therefore, do not use it. I take no responsibility if you break something.

ARGH: Whenever I install anything using pacman, the permissions get all screwy. I'm using this shell script to fix 'em:

<pre class="sh_sh">#!/bin/sh
chown root:root /
chmod 0755 /
chmod 0755 /var/
chmod 0755 /var/www
chmod 0755 /var/www/apache2-default
chmod 0644 /var/www/apache2-default/*</pre>

This was happening because I use a wacky umask on my Macintosh laptop, os now I have to rebuild some packages.... ugh. I'm wondering if there should be any specific permissions on any of the packages, and how I'd go finding that out. For the time being, I'm using the preserve permissions on the tar tasks. <strong>By the way, the above script which converts debian packages to pacman packages for use on ttylinux only works on Mac OS X.</strong> I know, talk about convoluted. Welcome to my world!

Another hurdle overcome! I was getting held back by mod_fcgid unable to run a php5-cgi hello world script, but thanks to this article at the <a href="http://linuxgazette.net/issue52/okopnik.html">linuxgazette.net about su: cannot run /bin/bash: Permission denied</a>, I was able to fix the permissions on the necessary libraries well enough to get it to work.

Little troubleshooting experience I've learned: if a web server process won't work, I "su www-data" (or whichever user the web server is running as) and try to run the process from the command line. That's how I got the bash error earlier. The Apache2 error logs only gave me a premature script ending error. Once I was able to su to www-data, I tried running php5-cgi and was presented with several errors like:

<pre class="sh_sh">/usr/bin/php5-cgi: error while loading shared libraries:
libresolv.so.2: cannot open shared object file: No such file or directory</pre>

I fixed the permissions on each library, then was presented with another error:

<pre class="sh_sh">(13)Permission denied: mod_fcgid:
couldn't bind unix domain socket /var/lib/apache2/fcgid/sock/...</pre>

Another permissions error... finally got it to work. :-)
<h3>Geode LX RNG</h3>

Don't know why this works, but:

<pre class="sh_sh">
mknod /dev/hwrng c 10 183</pre>

From /sbin/MAKEDEV (debian script)

Even installing rng-tools works! :-)
<h3>PHP5-CGI</h3>

I was a little concerned that by using php5-cgi I would not be able to install pear, but thankfully it works fine.

I downloaded <a href="http://pear.php.net/go-pear">http://pear.php.net/go-pear</a> and then called it with php5-cgi, it installed, and I made a symlink from /usr/bin/php to /usr/bin/php5-cgi. There might be some problems with this I haven't found yet, but so far so good.

