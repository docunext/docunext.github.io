---
title: Gentoo Updates
date: 2007-11-23
tags: gentoo,linux,mysql,updates
---
I performed some updates on a server I manage which runs Gentoo today. There were a couple of hitches:

<pre class="sh_sh">
* Messages for package net-misc/neon-0.26.3:
* There are new features in this version; please beware that
* upstream considers the socks support experimental.  If you
* experience test failures (eg, bug 135863) then try rebuilding
* glibc. *
* Neon has a policy of breaking API across versions, this means
* that any packages that link against neon will be broken after
* updating. They will remain broken until they are ported to the
* new API. You can downgrade neon to the previous version by doing...
</pre>

The first one, neon, doesn't seem to pose a problem, because I also updated subversion. The second isn't a big deal, because I mostly access the server remote. I also haven't had any problems with kbd though, I just think its odd if failed to emerge.

Also updated an even older gentoo machine, but had some problems with mysql:

<pre class="sh_sh">
[ERROR] Fatal error: mysql.user table is damaged or in unsupported 3.20 format.
</pre>

<a rel="nofollow" href="http://www.john-hunt.com/linux/2006/05/12/mysql-upgrade-breaking-things/">http://www.john-hunt.com/linux/2006/05/12/mysql-upgrade-breaking-things/
</a>

<a rel="nofollow" href="http://dev.mysql.com/doc/refman/5.0/en/mysql-upgrade.html">http://dev.mysql.com/doc/refman/5.0/en/mysql-upgrade.html
</a>

The MySQL bit was actually quite a pain, but eventually it worked out. I pretty much had to rebuild the user db, but thankfully I only had a few users - root and an average user. I used:

<pre class="sh_sh">
mysqld_safe --skip-grant-tables --user=root &amp;
</pre>

as suggested by John Hunt, but I'm posting it above because his Wordpress is doing funky things to the characters making it hard to cut and paste into a terminal.

It sure is an odd experience managing both gentoo and debian machines, they are so different! Again one of these machines is really old - running a Gentoo install from several years back. The biggest problem with that upgrade is that the machine lost track of the HD ids. No longer able to find
<strong>/dev/sdaX</strong>, I had to rebuild /etc/fstab with the likes of this:

<strong>/dev/scsi/host0/bus0/target1/lun0/part1</strong>

I did run into some more minor issues too though:

<pre class="sh_sh">
* This package will overwrite one or more files that may belong to other
* packages (see list below). Add "collision-protect" to FEATURES in
* make.conf if you would like the merge to abort in cases like this. You
* can use a command such as `portageq owners / ` to identify
* the installed package that owns a file. If portageq reports that only
* one package owns a file then do NOT file a bug report. A bug report is
* only useful if it identifies at least two or more packages that are
* known to install the same file(s). If a collision occurs and you can
* not explain where the file came from then you should simply ignore the
* collision since there is not enough information to determine if a real
* problem exists. Please do NOT file a bug report at
* http://bugs.gentoo.org unless you report exactly which two packages
* install the same file(s). Once again, please do NOT file a bug report
* unless you have completely understood the above message.
*  * Detected file collision(s): *  *      /usr/sbin/python-updater
revdep-rebuild -X --library libexpat.so.0
* Any package that linked against the previous version
* of gettext will have to be rebuilt.
* Please 'emerge gentoolkit' and run:
* revdep-rebuild --library libintl.so.7
* PLEASE PLEASE take note of this
* Please make *sure* to run revdep-rebuild now
* Certain things on your system may have linked against a
* different version of com_err -- those things need to be
* recompiled.  Sorry for the inconvenience
* You have had multiple versions of perl. It is recommended
* that you run perl-cleaner now. perl-cleaner will
* assist with this transition. This script is capable
* of cleaning out old .ph files, rebuilding modules for
* your new version of perl, as well as re-emerging
* applications that compiled against your old libperl.so *
* PLEASE DO NOT INTERRUPT THE RUNNING OF THIS SCRIPT.
* Part of the rebuilding of applications compiled against
* your old libperl involves temporarily unmerging
* them - interruptions could leave you with unmerged
* packages before they can be remerged. *
* If you have run perl-cleaner and a package still gives
* you trouble, and re-emerging it fails to correct
* the problem, please check http://bugs.gentoo.org/
* for more information or to report a bug. *  *
</pre>

This one reminds me of the pam / shadow dual-block:

<pre class="sh_sh">
*
* Your current setup is using the pam_stack module.
* This module is deprecated and no longer supported, and since version
* 0.99 is no longer installed, nor provided by any other package.
* The package will be built (to allow binary package builds), but will
* not be installed.
* Please replace pam_stack usage with proper include directive usage,
* following the PAM Upgrade guide at the following URL
*   http://www.gentoo.org/proj/en/base/pam/upgrade-0.99.xml
</pre>

What I did:

<pre class="sh_sh">
auth    include      system-auth
account    include      system-auth
password        include      system-auth
session         include      system-auth
</pre>

And this is fine:

<pre>
*  * If you have just upgraded from an older version of python you * will need to run:
*  * /usr/sbin/python-updater
*  * This will automatically rebuild all the python dependent modules * to run with python-2.4.
*  * Your original Python is still installed and can be accessed via * /usr/bin/python2.x. *
</pre>

But I didn't have python-updater, it was blocked by my current version: 2.3.5.
<a rel="nofollow" href="http://forums.gentoo.org/viewtopic-p-4528367.html">This forum thread
</a> helped me figure out what to do:

<pre class="sh_sh">
emerge --nodeps -v =dev-lang/python-2.4.4-r5
</pre>

Only after that could I emerge -C =dev-land/python-2.3.5 and emerge python-updater.

Running Gentoo is definitely more stressful for me than running debian from time to time, but at the same point, I also find it a bit more satisfying as well, as I fell like I'm more in control and able to make more precise decisions. Its a trade off I guess.

#### <b>Upgrading linux from 2.4 to 2.6</b>

Told you one of my gentoo machines was old:

<pre>
* You need a kernel of at least version 2.6.9 * for NPTL support! *
* ERROR: sys-libs/glibc-2.6.1 failed.
* Call stack:
*            ebuild.sh, line 1701:  Called dyn_unpack
*            ebuild.sh, line  817:  Called qa_call 'src_unpack'
*            ebuild.sh, line   44:  Called src_unpack
*   glibc-2.6.1.ebuild, line  154:  Called eblit-run 'src_unpack'
*   glibc-2.6.1.ebuild, line  150:  Called eblit-glibc-src_unpack
*     src_unpack.eblit, line  117:  Called toolchain-glibc_src_unpack
*     src_unpack.eblit, line   55:  Called check_nptl_support
*     src_unpack.eblit, line   32:  Called die
* The specific snippet of code:
*                      die "Kernel version too low!"
*  The die message:
*   Kernel version too low! *
* If you need support, post the topmost build error, and the call stack if relevant.
* A complete build log is located at '/var/tmp/portage/sys-libs/glibc-2.6.1/temp/build.log'. *
* GNU info directory index is up-to-date.
</pre>

Its running 2.4.28-grsec-2.1.0. I'm now updating to a non-grsec kernel : sys-kernel/gentoo-sources-2.6.22-r9. I've already switched to a standard profile, and am already using a standard gcc profile, so I
<strong>*hope*</strong> it will be OK. I'm not sure exactly what kernel configuration I'll need though, so I'm very thankful that I have this machine hooked up to a KVM over IP box so I can easily choose the original kernel. :-)

I'll probably check to see if I have a config for my 2.4 kernel, but I'm doubtful that it would be friendly to the 2.6 menuconfig. Since I compiled the 2.4 kernel, I've learned a lot about how its done. Gentoo was the platform I really learned how to compile a kernel on my own, but I've since done it many many times on my various debian boxes, to
<a href="http://www.docunext.com/">enable /dev/crypto via ocf-linux
</a> as well as trying to enable better
<a href="http://www.docunext.com//pc_chips_v21g___40__v1.0c__41___via_c7/">via C7 acpi cpufreq capabilities
</a>. Thankfully, they do have a
<a href="http://www.gentoo.org/doc/en/migration-to-2.6.xml" rel="nofollow">Gentoo migration to 2.6 guide
</a>. Most of it doesn't relate to me, but I was glad to read it anyway, at least to learn that make oldconfig won't work.

AWESOME! It worked, I'm now running Gentoo's 2.6.22 kernel. :-)

