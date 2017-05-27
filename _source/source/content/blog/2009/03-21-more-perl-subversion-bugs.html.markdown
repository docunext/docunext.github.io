---
title: I Found More Perl Subversion Bugs While Using Web SVN
date: 2009-03-21
tags: api,perl,subversion,versions
---
<pre class="sh_perl">
Expected FS format '2'; found format '3' at /usr/share/perl5/SVN/Web.pm line 145
</pre>

Annoying. The old bug was caused by a new subversion api. The alien package I installed just used an older version of subversion. However, the newer version of the subversion binaries forces this new FS format, which the old version can't use. Bad subversion, bad software.

