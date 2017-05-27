---
title: MySQL Cluster
date: 2007-07-15
tags: high availability,mysql
---
I'm thinking about making a MySQL cluster, either master-master, or using the NDB back-end, which includes high availability features like fail-over (and load balancing?).

<a href="http://lug.wsu.edu/node/545">http://lug.wsu.edu/node/545</a>

This will be the last component in my "trial" high-availability cluster. It will host some blogs, as well as be a backup for our main servers. The main servers are not part of a high-availability cluster, but they are high-quality components, less prone to failure.

