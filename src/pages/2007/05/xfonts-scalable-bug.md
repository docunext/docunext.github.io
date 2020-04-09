---
title: xfonts scalable bug 
comments:
  - author: charlie
    email: yujianfei2@gmail.com
    date: 06/16/2007 02:29:55 AM
    text: >
      I had exactly same problem when upgrading from 6.10 to 7.0.4.<br/><br/>I tried to twist the /var/lib/dpkg/xfonts-scalable.preinst, postinst...<br/><br/>The problem seems to be the update-fonts-dir does not support -x11layout, may not be accurate, but something like that...<br/><br/>Not be able to resolved it right now... and ever worse, I can not have my X working right now....<br/><br/>looking forward to a fix...
  - author: Mate LABADI
    email: labadimate@freemail.hu
    date: 07/26/2007 05:27:07 AM
    text: >
      I had the same problem, while upgrading from edgy to feisty.<br/>Then I upgraded xfonts-utils first (it contains update-fonts-dir).<br/>This new update-fonts-dir accepts the -x11layout option.<br/><br/>Cheers,<br/>Mate
  - author: admin
    date: 07/26/2007 08:37:12 AM
    text: >
      Thanks for that tip Mate - totally appreciate it. I actually nuked my machine that was giving me those issues and now use it as a LTSP client, but its good to know. Hopefully your tip will help charlie above.<br/><br/>Instead of xubuntu, I'm now using debian with fluxbox, even lighter and simpler than xubuntu. A little harder to setup but not by much.<br/><br/><a href="http://www.docunext.com/2007/07/minideb.html" rel="nofollow">http://www.docunext.com/2007/07/minideb.html</a>
date: 2007-05-31
tags: ubuntu,x11
---
<a href="http://www.docunext.com/2007/05/xfonts-scalable-bug.html" title="xubuntu fonts are all squares">
</a>

<pre>Setting up xfonts-scalable (1.0.0-6) ...
Invalid string keyword: chassis-type
Valid string keywords are:  bios-vendor  bios-version  bios-release-date  system-manufacturer  system-product-name  system-version  system-serial-number  baseboard-manufacturer  baseboard-product-name  baseboard-version  baseboard-serial-number  baseboard-asset-tag  chassis-manufacturer  chassis-version  chassis-serial-number  chassis-asset-tag  processor-manufacturer  processor-version
usage error: unrecognized option
Usage: update-fonts-dir DIRECTORY ...       update-fonts-dir { -h | --help }
This program is a wrapper for mkfontdir(1x) that is primarily useful to Debian
package maintainer scripts.  See update-fonts-dir(8) for more information.
Options:    -h, --help                               display this usage message and exit
dpkg: error processing xfonts-scalable (--configure): subprocess post-installation script returned error exit status 2
Errors were encountered while processing: xfonts-scalable
E: Sub-process /usr/bin/dpkg returned an error code (1)</pre>

Could this error be related:

<pre>perl: warning: Setting locale failed.</pre>

Attempted fixes:

This completed without a problem:

<pre>locale-gen en_US</pre>

This also reported the same perl error, but generated a slew of locales:

<pre>dpkg-reconfigure locales</pre>

This link makes me believe that the error will eventually go away: <a href="https://launchpad.net/ubuntu/+source/update-manager/+bug/59062">
Locale error - perl: warning: Setting locale failed.</a>

Nope, its still not fixed. Found <a href="http://cse.ucdavis.edu/users/sbeards/blog/fix-locale-errors-in-ubuntu">
this tip on how to fix locale errors in ubuntu</a>
, but it didn't work for me either. :-(

I had tried using gutsy gibbons, but now I'm using edgy eft. It appears that a newer version of openoffice was installed that might have been messing things up. I've removed it and am now trying a dist-upgrade.

<pre>dpkg --configure -a
Setting up libxdmcp6 (1.0.1-1) ...
Setting up x11proto-input-dev (1.3.2-3ubuntu1) ...
Setting up xutils-dev (1.0.2-3ubuntu3) ...
Setting up bzip2 (1.0.3-3) ...
Error in `/usr/share/doc-base/bzip2', line 19: `Index' value missing for format info
dpkg: error processing bzip2 (--configure): subprocess post-installation script returned error exit status 1
Setting up x11proto-video-dev (2.2.2-3ubuntu1) ...
dpkg: dependency problems prevent configuration of synaptic: synaptic depends on libapt-inst-libc6.4-6-1.1; however:  Package libapt-inst-libc6.4-6-1.1 is not installed. synaptic depends on libapt-pkg-libc6.4-6-3.51; however:  Package libapt-pkg-libc6.4-6-3.51 is not installed. synaptic depends on libvte9 (>= 1:0.13.3); however:  Package libvte9 is not installed.
dpkg: error processing synaptic (--configure): dependency problems - leaving unconfigured
Setting up x11proto-kb-dev (1.0.3-0ubuntu1) ...
Setting up libvte-common (0.14.1-0ubuntu1) ...
dpkg: dependency problems prevent configuration of python-vte: python-vte depends on libvte9 (>= 1:0.13.3); however:  Package libvte9 is not installed.
dpkg: error processing python-vte (--configure): dependency problems - leaving unconfigured
Setting up libnewt0.52 (0.52.2-5.1ubuntu1) ...
Setting up xkb-data (0.8-7ubuntu2) ...
Setting up xfonts-encodings (1.0.0-5.1) ...
Setting up x11proto-core-dev (7.0.7-1) ...
Setting up xtrans-dev (1.0.1-1) ...
Setting up fontconfig-config (2.3.2-7ubuntu2) ...
Setting up libice6 (1.0.1-1ubuntu1) ...
Setting up libx11-data (1.0.3-0ubuntu4.1) ...
Setting up libsm6 (1.0.1-1ubuntu1) ...
Setting up xfonts-utils (1.0.0-6ubuntu3) ...
dpkg: dependency problems prevent configuration of xfce4-terminal: xfce4-terminal depends on libvte9 (>= 1:0.13.3); however:  Package libvte9 is not installed.
dpkg: error processing xfce4-terminal (--configure): dependency problems - leaving unconfigured
Setting up libxau6 (1.0.1-1) ...
Setting up libxdmcp-dev (1.0.1-1) ...
Setting up whiptail (0.52.2-5.1ubuntu1) ...
Setting up libfontconfig1 (2.3.2-7ubuntu2) ...
Setting up libice-dev (1.0.1-1ubuntu1) ...
Setting up xfonts-scalable (1.0.0-6) ...
warning: /usr/lib/X11/fonts/Type1 does not exist or is not a directory
warning: /usr/lib/X11/fonts/Type1 does not exist or is not a directory
Updating font configuration of fontconfig...
Cleaning up category cid..
Cleaning up category truetype..
Cleaning up category type1..
Updating category type1..
Updating category truetype..
Updating category cid..
warning: /etc/X11/fonts/X11R7/Type1 does not exist or is not a directory
warning: /usr/lib/X11/fonts/Type1 does not exist or is not a directory
warning: /etc/X11/fonts/X11R7/Type1 does not exist or is not a directory
warning: /usr/lib/X11/fonts/Type1 does not exist or is not a directory
Setting up libxau-dev (1.0.1-1) ...
Setting up libx11-6 (1.0.3-0ubuntu4.1) ...
Setting up xutils (7.1.1ubuntu6.2) ...
Setting up fontconfig (2.3.2-7ubuntu2) ...
Updating font configuration of fontconfig...
Cleaning up category cid..
Cleaning up category truetype..
Cleaning up category type1..
Updating category type1..
Updating category truetype..
Updating category cid..
Regenerating fonts cache... done.</pre>

Well that looks better... still got:

<pre>Errors were encountered while processing: bzip2 synaptic python-vte xfce4-terminal</pre>

Still getting these errors:

<pre class="sh_sh">Reading package lists... Done
Building dependency tree... Done
bzip2 is already the newest version.
0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
4 not fully installed or removed.
Need to get 0B of archives.
After unpacking 0B of additional disk space will be used.
Setting up bzip2 (1.0.3-3) ...
Error in `/usr/share/doc-base/bzip2', line 19: `Index' value missing for format info
dpkg: error processing bzip2 (--configure): subprocess post-installation script returned error exit status 1
dpkg: dependency problems prevent configuration of ubuntu-minimal: ubuntu-minimal depends on bzip2; however:  Package bzip2 is not configured yet.
dpkg: error processing ubuntu-minimal (--configure): dependency problems - leaving unconfigured
dpkg: dependency problems prevent configuration of linux-source-2.6.17: linux-source-2.6.17 depends on bzip2; however:  Package bzip2 is not configured yet.
dpkg: error processing linux-source-2.6.17 (--configure): dependency problems - leaving unconfigured
dpkg: dependency problems prevent configuration of linux-source: linux-source depends on linux-source-2.6.17; however:  Package linux-source-2.6.17 is not configured yet.
dpkg: error processing linux-source (--configure): dependency problems - leaving unconfigured
Errors were encountered while processing: bzip2 ubuntu-minimal linux-source-2.6.17 linux-source
E: Sub-process /usr/bin/dpkg returned an error code (1)</pre>

So x windows fonts keep showing up as squares, not good. I've dpkg-reconfigured just about everything but still no luck. Grrr. I hate having to do it but I re-installed ubuntu 7.04.

¥

