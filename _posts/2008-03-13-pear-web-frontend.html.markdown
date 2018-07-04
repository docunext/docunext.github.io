---
title: PEAR Web Frontend
date: 2008-03-13
tags: apache,pear,php,redhat,"web applications"
---
I just tried out the PEAR Web Frontend, its pretty cool! I believe that eventually servers will be able to be configured in general by web interfaces, and I'm well aware of webmin, but I believe its more targeted towards RedHat.

As far as I can tell, the biggest challenge for a web administration system is permissions. Its good that webmin runs as a separate process to Apache, as if you need to administrate the system, you need administrative privileges. You probably don't want to run any processes as root that are publicly accessible via the web.

Alternatively, sudo scripts could be used to limit the capabilities the web server has access to. For example, in the past I had allowed the web server to create new user home directories. To accomplish this I enabled the www-data user permission to call a single script which would get the job done.

