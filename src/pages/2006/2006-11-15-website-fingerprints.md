---
title: Website fingerprints
date: 2006-11-15
---
<pre>wget -rq --accept=.html http://www.domain.com/ &amp;&amp; find * -exec wget -q http://{} -O - \; &gt; combined.www.domain.com.txt &amp;&amp; \

rm -rf www.domain.com/ &amp;&amp; md5sum combined.www.domain.com.txt | diff - combined.www.domain.com.txt.md5sum</pre><p>The above command it a great way to get a public website's &quot;fingerprint&quot;, meaning a relatively quick way to sum up the entire site. I think I will add a database field for each website that I manage. This will allow a process to check the site's integrity, and ensure that everything is working. That, along with a link checker to ensure that all other resources load, will ensure the site's proper display.</p>
