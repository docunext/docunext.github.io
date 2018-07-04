---
title: Varnish CDB Access
date: 2009-09-24
tags: caching,cdb,varnish
---
I've added some details to the Varnish wiki about how I'd like to see CDB file access implemented:

<blockquote class="svxlb"><pre>
<strong>CDB file access</strong> - this idea was inspired by Apache's mod_rewrite access to BDB files. Similar to the GeoIP example, a CDB file could be used for rewriting url requests, or specifying backends:

If the host header, concatenated with "nocache", is present in the cdb file, then pass.

<code class="prettyprint">if (req.http.host "nocache" == cdb.file) {
    pass;
}
</code>

or

If the cdb file contains a key for the host header and its value is equal to nocache, then pass.

<code class="prettyprint">if (cdb.file(req.http.host) == "nocache") {
    pass;
}
</code>
</pre></blockquote>

