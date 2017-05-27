---
title: check dns nagios2 plugin
date: 2008-03-23
tags: dns,monitoring,nagios,plugins
---
I'm setting up a dns server check using nagios2.

First I installed the nagios-standard-plugins package, then I added the check to /etc/nagios2/services.cfg. After that I edited the check_dns.cfg file in /etc/nagios-plugins/config/dns.cfg to my needs. Nice!

I found out you can also use dig to get a more specific check....

