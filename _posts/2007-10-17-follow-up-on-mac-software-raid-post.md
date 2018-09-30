---
title: Follow Up on Mac Software RAID Post
date: 2007-10-17
---
I did some serious wrestling with Mac Software RAIDs over the past week. What did I learn? That Mac's software RAID1 mirror is quite reliable, but comes with a lot of overhead. The setup I ran into problems with involved 4 Firewire drives connected via 1 FW400 and 1 FW800 port on an XServe, the drives were obviously daisy chained together. Once I removed one of the RAIDs and had only one drive connected to each port, the system worked fine.

