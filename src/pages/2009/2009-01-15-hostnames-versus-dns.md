---
title: Hostnames versus DNS
date: 2009-01-15
tags: dns,dnsmasq,puppet
---
I think I've finally figured it out! These notes may not make sense to others, but I'm just jotting them down anyway. It always confused me that there was only one hostname for a machine, but it could have many names pointing towards it. How could you ever match the public hostname to the private / internal hostname?

While this is natural for public machines (especially if you want to send email to other people on the internet) using PTR records, aka reverse lookups, its not so obvious for local area networks which may rely on hosts files, ldap, or more simple means of storing basic host records.

Thanks to unbound, a dns resolver with a lot to offer, and dnsmasq, a simple and lightweight dns cache, I think I figured it out. DNSMasq can use a local hosts file to override other network accessible dns information, which seemed to randomly create a ptr record from one of the host lines for an ip. Actually its not random I don't think - I think it uses the first entry on the line. For example:/etc/hosts

<pre class="sh_sh">
127.0.0.1    blah.example.com    blah
</pre>

"host 127.0.0.1" will return blah.example.com, not blah.

Unbound on the other hand, even if you give it a bunch of local-data A records, its not going to provide you with an automatic reverse lookup, it really needs a PTR record.

Hopefully my understanding at this point is correct - I'm figuring all this out as I work on <a href="http://www.yodnsconf.com/web/">YoDNSConf - an open source DNS and network management system</a>, as well as <a href="http://www.docunext.com/wiki/Puppet">starting to experiment with Puppet</a>.
