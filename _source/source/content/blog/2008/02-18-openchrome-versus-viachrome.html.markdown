---
title: OpenChrome versus ViaChrome
date: 2008-02-18
tags: openchrome,viachrome,x11
---
I'm now taking a minute to compare the Openchrome SVN codebase with the code from Via as of December 2007.

<pre>diff -q viachrome/ openchrome/
Only in openchrome/: acinclude.m4
Files viachrome/aclocal.m4 and openchrome/aclocal.m4 differ
Common subdirectories: viachrome/autom4te.cache and openchrome/autom4te.cache
Only in openchrome/: ChangeLog
Only in openchrome/: compile
Files viachrome/config.guess and openchrome/config.guess differ
Only in openchrome/: config.h
Only in openchrome/: config.h.in
Files viachrome/config.log and openchrome/config.log differ
Files viachrome/config.status and openchrome/config.status differ
Files viachrome/config.sub and openchrome/config.sub differ
Files viachrome/configure and openchrome/configure differ
Files viachrome/configure.ac and openchrome/configure.ac differ
Only in viachrome/: configure_OpenSUSE10.2
Only in viachrome/: config_via.h
Only in viachrome/: config_via.h.in
Only in viachrome/: config_via.h.in~
Only in viachrome/: config_x11r7
Only in openchrome/: COPYING
Files viachrome/libtool and openchrome/libtool differ
Only in openchrome/: libxvmc
Files viachrome/ltmain.sh and openchrome/ltmain.sh differ
Files viachrome/Makefile and openchrome/Makefile differ
Files viachrome/Makefile.am and openchrome/Makefile.am differ
Files viachrome/Makefile.in and openchrome/Makefile.in differ
Only in openchrome/: man
Only in openchrome/: prepare-ChangeLogSVN.pl
Only in viachrome/: README
Only in openchrome/: release_notes-0.3.0
Common subdirectories: viachrome/src and openchrome/src
Files viachrome/stamp-h1 and openchrome/stamp-h1 differ
Only in openchrome/: .svn</pre>

Wow that is only the tip of the iceberg! I did do a little touch up to the <a href="http://www.docunext.com/wiki/A_diff_of_my_changes_to_openchrome_in_an_effort_to_get_panel_mode_working_on_P4M900">openchrome files in an effort to enable panel mode for the P4M900</a>, but it didn't work. I'm just not familiar enough with C or the codebase.

I also wish I had found this page earlier:

<a href="http://libv.livejournal.com/">LIBV Intentionally Breaks Videodrivers</a>

Its a blog by a video driver developer, and has a lot of good perspective regarding VIA's behavior towards the open source community.

