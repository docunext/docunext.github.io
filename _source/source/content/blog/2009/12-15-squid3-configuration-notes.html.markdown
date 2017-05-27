---
title: Squid3 Configuration Notes
date: 2009-12-15
tags: configuration,squid
---
Here are a few Squid version 3 configuration notes I've take lately.

<pre class="sh_sh">
Starting Squid HTTP Proxy 3.0: squid32009/12/15 11:01:38| WARNING: '127.0.0.1' is a subnetwork of '127.0.0.1'
2009/12/15 11:01:38| WARNING: because of this '127.0.0.1' is ignored to keep splay tree searching predictable
2009/12/15 11:01:38| WARNING: You should probably remove '127.0.0.1' from the ACL named 'localhost'
</pre>

To avoid this log warning, I've removed the localhost settings from the configuration. If I find any problems, I'll adjust it. UPDATE: Yes, this setting is required for accessing squid from the localhost. I changed 127.0.0.1 to 127.0.0.2 and its fine now. Its not the best fix, but it quiets squid3 a bit.

I also edited the negative ttl for http responses of "not found", and similar:

<pre class="sh_sh">
negative_ttl 10 seconds
</pre>

It defaults to five minutes! That seems illogical to me, but perhaps that's what most systems use.

