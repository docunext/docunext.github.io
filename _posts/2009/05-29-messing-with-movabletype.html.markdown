---
title: Messing with MovableType
date: 2009-05-29
tags: apache,"movable type"
---
I love workarounds. This <a rel="nofollow" href="http://www.movabletype.org/documentation/appendices/config-directives/staticwebpath.html">problem about javascript same domain rules conflicting with MT's static web path configuration option</a> had me stumped.

Then I remembered mod_rewrite!

<pre class="sh_sh">
RewriteEngine On
RewriteCond %{QUERY_STRING} template
RewriteRule . - [E=MT_CONFIG:/usr/lib/cgi-bin/movabletype/mt-config-admin.cgi]
</pre>

