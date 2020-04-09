---
title: Squid Cache for debian ubuntu apt get and BSD ports collections
date: 2007-08-01
---
I'm using squid's caching capabilities to save copies of debian packages and the sources used by the bsd ports collections. Here's what I did:

<ul><li>Adjusted a few squid parameters: <ul><li>low maximum_object_size_in_memory (128 KB) setting, to use memory only for web browsing.</li><li>large maximum_object_size (256 MB)</li><li>big cache_dir (8500)</li><li>cache_replacement_policy to "heap LFUDA"</li></ul><li>Set all cache clients to the same sources, and set HTTP_PROXY and FTP_PROXY to squid address and port</li></ul>

<a href="http://www.docunext.com/">Docunext Wiki page on Squid</a>

