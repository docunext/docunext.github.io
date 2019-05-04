---
title: Why are you reading my feeds 
date: 2007-05-18
tags: xml
---
63.87.234.186

Must be a feedreader, so that's a good thing! I noticed the results weren't being cached properly, so I adjusted:

<pre class="sh_xml">&lt;LocationMatch /resources/blog/&gt;
    ExpiresDefault "access plus 30 minutes"
    Header set Cache-Control "public, proxy-revalidate, must-revalidate"
&lt;/LocationMatch&gt;
</pre>

