---
title: Creating an OpenVZ Virtual Machine Container from a Physical Machine
date: 2011-01-08
tags: hardware,migration,openvz
---
I'm migrating some machines with problematic hardware to OpenVZ containers (as well as to save on energy).

<pre class="sh_sh">
rsync -arvpz --numeric-ids --exclude=/dev --exclude=/proc --exclude=/tmp --exclude=/boot -e ssh root@192.168.8.38:/ /var/lib/vz/private/838
</pre>

Seems to me that it is much easier to go from a real machine to an OpenVZ container than vice-versa.

The above script is an example I found at the OpenVZ site. In reality I had to tailor mine so that I wasn't transferring data I didn't need.

To

* <a href="http://wiki.openvz.org/Physical_to_container" rel="nofollow">http://wiki.openvz.org/Physical to container</a>

