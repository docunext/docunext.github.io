---
title: Apache2 xslt filter
comments:
  - author: deviurg
    email: info@deviurg.com
    ip: 192.168.8.2
    url: http://xslt-filter.deviurg.com/
    date: 12/09/2008 05:27:12 PM
    text: >
      Thanks for the review! We will fix docs and the issue with apxs.
date: 2008-05-26
tags: apache,xsl
---
The Apache2 xslt_filter is up and running on bart111, an openvz instance we use for exeprimental software. It has some nice parts - like the ability to return 304 status for non-modified documents, and it also works with apache2-mpm-worker so far.

There were a couple of gotchas in setting it up:

It wants apxs, but on my machine there was only apxs2. I created a symlink:

<pre class="sh_sh">
sudo ln -s /usr/bin/apxs /usr/bin/apxs2
</pre>

There is an undocumented configuration setting for a default stylesheet, simply "XSLT_Filter default /path/my_xsl.xsl". I had to use this in my tests because I couldn't figure out how to get the xsl reference in the xml file to work.

What's nice though is that the filter fails gracefully. When the XSL processing fails, it still delivers the xml file. In that way, it may be possible to use some javascript to invoke the transformation on the client side using many browser's built in xml / xsl processing capabilities.

Seems like this is a simpler version than mod_xslt, which still has the offensive signature in the resulting transform. I noticed that it is available in Mandriva, so hopefully it will go into debian at some point.

¥

