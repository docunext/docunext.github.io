---
title: MediaWiki with Lighttpd on Debian
date: 2007-01-04
tags: none
author: Albert Lash
---
I'm planning on installing MediaWiki with Lighttpd on Debian. First off, it will have to be on a separate IP.

For starters, I'm installing mediawiki:

<pre>apt-get install mediawiki</pre>

Easy enough.

<pre>Reading package lists... Done

Building dependency tree... Done

The following extra packages will be installed:  libpng12-0 libpng12-dev mediawiki1.7 mediawiki1.7-math tetex-base tetex-bin tex-common

Suggested packages:  clamav texinfo texi2html dvipng chktex lacheck rubber sam2p

Recommended packages:  latex-cjk-all tetex-extra tetex-doc psutils perl-tk libxml-parser-perl

The following NEW packages will be installed  mediawiki mediawiki1.7 mediawiki1.7-math tetex-base tetex-bin tex-common

The following packages will be upgraded:  libpng12-0 libpng12-dev

2 upgraded, 6 newly installed, 0 to remove and 500 not upgraded.

Need to get 30.4MB of archives.

After unpacking 101MB of additional disk space will be used.

Do you want to continue [Y/n]?

Get: 1 http://http.us.debian.org unstable/main libpng12-dev 1.2.15~beta5-1 [172kB]

Get: 2 http://http.us.debian.org unstable/main libpng12-0 1.2.15~beta5-1 [186kB]

Get: 3 http://http.us.debian.org unstable/main tex-common 0.42 [707kB]

Get: 4 http://http.us.debian.org unstable/main tetex-base 3.0.dfsg.3-5 [22.4MB]

Get: 5 http://http.us.debian.org unstable/main tetex-bin 3.0-28 [3541kB]

Get: 6 http://http.us.debian.org unstable/main mediawiki1.7 1.7.1-5 [3260kB]

Get: 7 http://http.us.debian.org unstable/main mediawiki1.7-math 1.7.1-5 [121kB]

Get: 8 http://http.us.debian.org unstable/main mediawiki 1:1.7 [1734B]

Fetched 30.4MB in 39s (774kB/s)

Preconfiguring packages ...

No packages found matching mediawiki1.5.(Reading database ... 85779 files and directories currently installed.)

Preparing to replace libpng12-dev 1.2.8rel-7 (using .../libpng12-dev_1.2.15~beta5-1_i386.deb) ...

Unpacking replacement libpng12-dev ...

Preparing to replace libpng12-0 1.2.8rel-7 (using .../libpng12-0_1.2.15~beta5-1_i386.deb) ...

Unpacking replacement libpng12-0 ...

Selecting previously deselected package tex-common.

Unpacking tex-common (from .../tex-common_0.42_all.deb) ...

Selecting previously deselected package tetex-base.

Unpacking tetex-base (from .../tetex-base_3.0.dfsg.3-5_all.deb) ...

Selecting previously deselected package tetex-bin.

Unpacking tetex-bin (from .../tetex-bin_3.0-28_i386.deb) ...

Selecting previously deselected package mediawiki1.7.

Unpacking mediawiki1.7 (from .../mediawiki1.7_1.7.1-5_all.deb) ...

Selecting previously deselected package mediawiki1.7-math.

Unpacking mediawiki1.7-math (from .../mediawiki1.7-math_1.7.1-5_i386.deb) ...

Selecting previously deselected package mediawiki.

Unpacking mediawiki (from .../mediawiki_1%3a1.7_all.deb) ...

Setting up libpng12-0 (1.2.15~beta5-1) ...

Setting up libpng12-dev (1.2.15~beta5-1) ...

Setting up tex-common (0.42) ...

Creating config file /etc/texmf/texmf.d/05TeXMF.cnf with new version

Creating config file /etc/texmf/texmf.d/15Plain.cnf with new version

Creating config file /etc/texmf/texmf.d/45TeXinputs.cnf with new version

Creating config file /etc/texmf/texmf.d/55Fonts.cnf with new version

Creating config file /etc/texmf/texmf.d/65BibTeX.cnf with new version

Creating config file /etc/texmf/texmf.d/75DviPS.cnf with new version

Creating config file /etc/texmf/texmf.d/85Misc.cnf with new version

Creating config file /etc/texmf/texmf.d/90TeXDoc.cnf with new version

Creating config file /etc/texmf/texmf.d/95NonPath.cnf with new version

Creating config file /etc/texmf/updmap.d/00updmap.cfg with new version

Creating config file /etc/texmf/texmf.cnf with new version

Setting up tetex-base (3.0.dfsg.3-5) ...

done

Creating config file /etc/texdoctk/texdocrc with new version

Setting up tetex-bin (3.0-28) ...

Creating config file /etc/texmf/fmt.d/01tetex.cnf with new version

Running fmtutil-sys. This may take some time... done.

Running updmap-sys. This may take some time... done.

Setting up mediawiki1.7 (1.7.1-5) ...

No packages found matching mediawiki1.5.

Reloading web server config...27039.

No packages found matching mediawiki1.5.

Done!

Setting up mediawiki1.7-math (1.7.1-5) ...

Setting up mediawiki (1.7) ...</pre>

