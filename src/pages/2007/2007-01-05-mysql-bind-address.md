---
title: MySQL bind address
date: 2007-01-05
---
I'm setting up a local area network (LAN) for faster database access (currently I use stunnel), and I'm surprised to find that MySQL's bind-addess configuration option in my.cnf is all or nothing. Either you can bind to one address, or all of them. Oh well, thank goodness for host-based access restrictions for each user, and more importantly iptables!
