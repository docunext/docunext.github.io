---
title: Nexista Debian Package
date: 2008-04-15
tags: none
author: Albert Lash
---
I've just added the latest version of <a href="http://www.nexista.org/blog/">Nexista</a> (0.2.2) to the <a href="http://www.docunext.com/debian/">Docunext Debian repository</a>. This is mostly for practice at this point, and I'm going to sign it and upload it to the mentors server just to go through the motions.

There have been some posts on planet debian about lack of involvement by debian developers (like that 4 months have gone by without a new developer being elected, even though there are many ready to be), and for probably justified reasons, there are many many hurdles and hoops to jump through to get packages uploaded, sponsored, and added to the repository.

I want to go through the motions so I can learn how they do it - I've already learned a bunch by having to create a GPG public key so sign up at mentors.debian.net.

But... I've never been a good team player. I wish I could be, but I know myself enough to know I'm terrible at it.

Anyway, back to the process of uploading to debian - the next steps mention .changes and .dsc files. I've never heard of these before - but I'm reading up on them and am realized I was wondering about them already. Here's the .dsc file that's included with the php-cache-lite package:

<pre lang="bash">-----BEGIN PGP SIGNED MESSAGE-----

Hash: SHA1

Format: 1.0

Source: php-cache-lite

Version: 1.7.2-2

Binary: php-cache-lite

Maintainer: Charles Fry <cfry@debian.org>

Architecture: all

Standards-Version: 3.7.2

Build-Depends: dh-make-php (>= 0.1.1), debhelper (>= 5), cdbs

Files: bec59ae772aa4f306fd9908bba5d4018 29055 php-cache-lite_1.7.2.orig.tar.gz 91e671b99fbfd0a78c9ab92558f3262f 1431 php-cache-lite_1.7.2-2.diff.gz-----BEGIN PGP SIGNATURE-----

Version: GnuPG v1.4.3 (GNU/Linux)

iD8DBQFErIU5hiAFUap5uRoRAia8AKCPhE5bOW3jMTmvfUtRlhxdU+huWQCcDZtI

Y/CtYaC8fCdcYPfuSC9oyCk==oBam-----END PGP SIGNATURE-----</pre>

Odd, but the php-cache-lite source package doesn't have a .changes file. It has a diff file, but I'm not sure if that's the same.

Maybe I can use dpkg-source or dpkg-genchanges? Now I'm working with dpkg-buildpage, installing build-essential at the moment.

Cool - dpkg-buildpackage was what I needed to use to create the .changes and .dsc file correctly. I'm going to upload them to mentors now, I'm sure I did something wrong but I'm going to go through the motions anyway.

<pre lang="bash">
dj-smurf-master-mcmonster@dev-101:~$ dupload -t mentors php-nexista_0.2.2_i386.changes
dupload note: no announcement will be sent.
Checking signatures before upload......signatures are ok
Uploading (ftp) to mentors.debian.net:/[ job php-nexista_0.2.2_i386 from php-nexista_0.2.2_i386.changes php-nexista_0.2.2.tar.gz, md5sum ok php-nexista_0.2.2.dsc, md5sum ok php-nexista_0.2.2_all.deb, md5sum ok php-nexista_0.2.2_i386.changes ok ]
Uploading (ftp) to mentors (mentors.debian.net)+ FTP passive mode selected[ Uploading job php-nexista_0.2.2_i386 php-nexista_0.2.2.tar.gz 67.9 kB, ok (1 s, 67.85 kB/s) php-nexista_0.2.2.dsc 0.5 kB, ok (1 s, 0.52 kB/s) php-nexista_0.2.2_all.deb 71.3 kB, ok (1 s, 71.26 kB/s) php-nexista_0.2.2_i386.changes 0.9 kB, ok (0 s, 0.86 kB/s) ]</pre>

Note - for those of you wondering what NMU means (like me), NMU = non-maintainer upload, I guess that's when someone who didn't make the package uploaded it to mentors?

Here's the link:

<a href="http://mentors.debian.net/cgi-bin/maintainer-packages?action=rfs;package=php-nexista">http://mentors.debian.net/cgi-bin/maintainer-packages?action=rfs;package=php-nexista</a>

I'll have to re-subscribe to the mentors list so I can send an RFS email like this one:

<blockquote>

Dear mentors,

I am looking for a sponsor for my package "php-nexista".* Package name    : php-nexista  Version         : 0.2.2  Upstream Author : [fill in name and email of upstream]* URL             : [fill in URL of upstreams web site]* License         : [fill in]  Section         : web

It builds these binary packages:

php-nexista - PHP Development Toolkit

The package can be found on mentors.debian.net:- URL: http://mentors.debian.net/debian/pool/main/p/php-nexista- Source repository: deb-src http://mentors.debian.net/debian unstable main contrib non-free- dget http://mentors.debian.net/debian/pool/main/p/php-nexista/php-nexista_0.2.2.dsc

I would be glad if someone uploaded this package for me.

Kind regards Albert L. Lash, IV</blockquote>

I also received this notice email:

<pre>Your upload of the package 'php-nexista' to mentors.debian.net was

successful. Sponsors can now download it. The URL of your package is:

http://mentors.debian.net/debian/pool/main/p/php-nexista

The respective dsc file can be found at:

http://mentors.debian.net/debian/pool/main/p/php-nexista/php-nexista_0.2.2.=

dsc-------------------------

While checking your package we found these issues:

Your package seems to be a native package.

Unless you intentionally made this package a native package

you probably have made a mistake when building it.

Make sure the upstream tarball is located in the parent directory

under the name 'php-nexista_0.2.2.orig.tar.gz' when running dpkg-buildpacka=

ge.

Native source packages just contain one tarball (php-nexista_0.2.2.tar.gz) =

which

makes it impossible to determine which parts are coming from

the upstream developer and which parts have been changed by the

Debian maintainer.

Your package does not seem to be lintian clean.'lintian' is a tool to verify if source package contain obvious

packaging errors. These warnings/errors were found:

W: php-nexista source: changelog-should-mention-nmu

N:

N:   When you NMU a package, that fact should be mentioned on the first

N:   line in the changelog entry. Use the words "NMU" or "Non-maintainer

N:   upload" (case insensitive).

N:   =

N:   Maybe you didn't intend this upload to be a NMU, in that case, please

N:   doublecheck that the most recent entry in the changelog is

N:   byte-for-byte identical to the maintainer or one of the uploaders.

N:

W: php-nexista source: source-nmu-has-incorrect-version-number 0.2.2

N:

N:   A source NMU should have a Debian revision of "-x.x". This is to

N:   prevent stealing version numbers from the maintainer.

N:   =

N:   Maybe you didn't intend this upload to be a NMU, in that case, please

N:   doublecheck that the most recent entry in the changelog is

N:   byte-for-byte identical to the maintainer or one of the uploaders.

N:

Processing your upload took 1.2 seconds.-------------------------

If you do not yet have a sponsor for your package you may want to go to

http://mentors.debian.net/cgi-bin/maintainer-packages?action=3Ddetails;pack=

age=3Dphp-nexista

and set the "Seeking a sponsor" option to hilight your package on the

welcome page.

You can also send an RFS (request for sponsorship) to the debian-mentors

mailing list. Your package page will give your suggestions on how to

send that mail.

Good luck finding a sponsor! And thanks for using mentors.debian.net

The mentors.debian.net team#Import run: 2008-04-16T00:48:13.500256</pre>

