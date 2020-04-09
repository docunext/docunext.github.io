---
title: svn ra get log Assertion path failed.
date: 2008-10-22
tags: none
author: Albert Lash
---
<pre>
perl: /tmp/buildd/subversion-1.5.1dfsg1/subversion/libsvn_ra/ra_loader.c:997: svn_ra_check_path: Assertion `*path != '/'' failed.</pre>

Doh!

I'm getting this error in my Apache logs when trying to use the perl library SVN::Web.

This problem is caused by an update to the RA API, so I had to change code like this:

<pre lang="perl">    $ra->get_log([$path], $rev, 1, 1, 0, 1,                 sub { @log_result = @_; });</pre>

to:

<pre lang="perl">    $ra->get_log('trunk', $rev, 1, 1, 0, 1,                 sub { @log_result = @_; });</pre>

UPDATE: This appears to have been fixed as of January 2009.

UPDATE 2: No, it still happens.

UPDATE 3: I think I found a <a href="http://www.docunext.com/2009/02/23/perl-svnweb/">solution</a>.

