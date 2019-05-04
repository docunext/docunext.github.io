---
title: Stunnel4 remote socket Address family not supported by protocol
date: 2009-10-09
tags: proxies,squid,ssl,stunnel
---
This is an interesting one... no clue how to fix it, but I should be able to track it down.

<pre class="sh_log">
Oct  9 14:54:16 pro-38-gl stunnel: LOG3[5026:3081313168]: remote socket: Address family not supported by protocol (97)
</pre>

I'm using stunnel to proxy via a two link chain of polipo caching proxies. Fun, huh?

UPDATE: I think this was caused by a wget command which was using the all_proxy environmental variable when it should have just been going direct.

Anyway, I've setup a local squid server to only connect via stunnel if necessary.

