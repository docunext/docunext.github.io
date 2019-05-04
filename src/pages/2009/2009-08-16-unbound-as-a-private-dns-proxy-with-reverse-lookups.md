---
title: Unbound as a Private DNS Proxy with Reverse Lookups
date: 2009-08-16
tags: dns,proxies
---
I encountered an odd issue today: using unbound as a private dns proxy for private ip address reverse lookups, like this:

dig -x 192.168.0.1

I did a quick search and found the solution, adding a stub zone like this:

<pre>local-zone: "168.192.in-addr.arpa." nodefault

stub-zone:
    name: "168.192.in-addr.arpa."
    stub-addr: private-dns-server</pre>

