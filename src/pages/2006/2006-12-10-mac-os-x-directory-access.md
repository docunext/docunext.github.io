---
title: Mac OS X Directory Access
date: 2006-12-10
---
I love the idea of linking Mac OS X user access to a directory, such as LDAP. If you can connect and authenticate via LDAP, you are that much closer to the much coveted single sign-on. I've tinkered around with this on my Macbook and my Powermac, but yesterday when I setup firewall logging on the office server, I noticed many connections from my home IP address to port 389 - the ldap port! I had forgotten that I still had directory access enabled, even though I wasn't using it. It was setup for authentication as well as contacts, so I have to imagine it was generating a lot of unecessary traffic. I disabled it via the Utilities -> Directory Access panel, and now my terminal windows open SO much faster. Yee-haw!
