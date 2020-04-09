---
title: Debian on USB
date: 2007-05-21
tags: open source
---
For my first High Availability project, I'm using HP t5135s, powered by debian on USB drives. I chose the Corsair 1GB USB drive and installed Debian on it using the guided partitioning method, 1 partition, and no root account. The choice of using no root account has proven problematic, because the system clocks are set to 2003, and "sudo su" produces an error. Not a big deal, but annoying nonetheless. To work around this, I booted into single user mode, set the system clock,  then set the hardware clock to the system clock and rebooted into normal mode.  Upon reboot, sudo su worked fine.  :-)

I've also updated /etc/fstab to include the following:

<pre>tmpfs           /etc/network/run tmpfs defaults,noatime                   0 0

tmpfs           /tmp           tmpfs   defaults,noatime                   0 0

tmpfs           /var/lock      tmpfs   defaults,noatime                   0 0

tmpfs           /var/log       tmpfs   defaults,noatime                   0 0

tmpfs           /var/run       tmpfs   defaults,noatime                   0 0

tmpfs           /var/tmp       tmpfs   defaults,noatime                   0 0</pre>

Thanks to: <a href="http://feraga.com/node/30">http://feraga.com/node/30</a>

