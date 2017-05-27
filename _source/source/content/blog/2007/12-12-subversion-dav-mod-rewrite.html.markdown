---
title: Subversion DAV mod rewrite
date: 2007-12-12
tags: subversion
---
I'm trying to slyly host several svn repositories:

www.example.com/svn/

www.example.org/svn/

using mod_rewrite and SVNParentPath (set to /home/svn/), kinda like this: /home/svn/www.example.com//home/svn/www.example.org/

Then using mod_rewrite to change the first urls to have the domain at the end. It works for browsing, but when I try to checkout, I get a 404. :-(

I tried to troubleshoot, using __svn as the rewrite passthrough, but then I get this error:

<pre>
svn: Unusable URI: it does not refer to this repository</pre>

This is pretty much impossible as far as I can tell, but if there is any consolation here, its that having a unique folder name for a subversion path is a good idea, so that when people checkout the code, they won't get a generic folder name.

