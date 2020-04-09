---
title: Multi homing and high availability
comments:
  - author: admin
    date: 09/01/2007 01:46:19 PM
    text: >
      test
date: 2007-08-30
tags: acpi,power
---
Last night I worked on punbb a little - mainly to add support for hosting multiple sites with a single copy of the software. I was successful to a certain degree. I had to modify the cache folder layout o include a sub-directory for each forum instance, and those sub-folders have to be created manually. All in all, my changes were very minor and I'll likely create a diff for those who are interested in doing the same.

I've also been looking for a new way to manage virtual hosts. I prefer to keep my web server configuration focused on the network - ip addresses and what not, and leave the handling of domains and urls for scripts which can be updated on the fly without restarting the web server.

Beyond that, I've been exploring multi-homing. It is a quick and easy way to

acheive high-availability. As I understand it, you assign two different ip addresses to a single a record, and supporting clients will be able to try either one, and if one doesn't work, they'll use the other. This provides very basic "round-robin" load balancing as well, but the distribution is hit-or-miss.

Servers that can be relatively easily multi-homed include web servers and smtp servers. Web servers are a little more challenging because you have to keep the content in sync, but mysql's replication capabilities make that a lot easier. In the case of simple replication, all you have to do is make sure that only the primary server is updated, which is a simple task with a scripted if / then statement.

imap service would be a terrific service to multi-home, but it poses a well-known and difficult challenge: synchronized, distributed, fault-tolerant file systems. Trying to side step that challenge as referred to with a web server by only updating the master, you cannoteasily ensure that the primary file system is updated.

It might be possible to use something like DRDB to keep two file systems in syncronization, but in my experience you need a dedicated (100+ Mbit) network to make that happen. Given the size of most emails, it might be possible over a 1Mbit line.

An alternative technique would be to not use multi-homing but instead use a failover switch to a secondary and regularly syncronized backup. When the primary server fails, the imap dns entry would need to update to point towards the backup imap server, requiring a low ttl (300 seconds?) for practical use.

In this way, you can use the built-in backup mail transfer (mx) dns records to point to either multiple smtp server and the secondary and tertiary servers will hold the mail until the primary is back online.

xmmp and voip is another potential candidate for multihoming or high-availability failover.

techniques like drdb are better suited towards single location setups, to make sure that a service doesn't go down even when the service is up. along those lines, multi-homing and failovers should be the last step in the chain of failure - meaning that everything (within reason) that could have gone wrong would not have caused interruption, even if multi-homing were not in place.

For that to happen, you'd need to have a highly available filesystem, with RAID and DRDB, multiple, a load balancer, systems monitor, and load director, as well as have those be highly available. The problem with that setup is that for the majority of the time the setup is major overkill, and for 24/7 operations, the energy costs can get substantial. I've been conducting a bunch of research in this area and I think I've come up with some pretty good solutions.

My interests are are now focused on the pfSense distribution, and its implementation of CARP - or common address routing protocol, as well as its load balancing system. I've recently purchased two WRAP boards to configure this with, however they only have two ethernet ports each, so I might be looking at using a wireless card for having them monitor each other, which wouldn't be too big of a deal, unless they can monitor each other through the lan, but I've heard a danger in this setup is a "split brain" condition in which both routers are unable to connect to each other and are both trying to be the master.

Behind that setup, I plan to setup a cluster of:

* load-balanced, high-availability pxe-booted web, email, dns, and ntp servers
* mysql ndb cluster
* a highly available nfs drbd server used to provide the storage requirements for the above mentioned servers.

Services that "will never go down" are still subject to the possibility of a regional network outage, and that is where the multihoming and failover takes place.

Another strategy I'm exploring is the idea of outgoing load-balancing. I'm still unsure how that fits into this plan. I'm not sure if that is part of the work I'm planning for with carp.

And yet another concept I've been exploring is that of virtualization. In some cases it might not make sense to put separate different services (like ntp and dns) on separate machines, but it might make sense to put them on separate virtual machines for process isolation and security purposes.

By doubling up on everything and setting up multi-homing or failovers, you protect yourself to a certain degree, but the failover servers "waiting for the primary server to fail" are a waste of energy. Futhermore, as service demands ebb and flow, the number of machines in a service pool does not need to remain constant. For these reasons, it makes sense to consider the use of different power levels in each of the machines.

For example, the following techniques can be employed to save energy, yet provide backup machines in the event of failure:

* cpu frequency and voltage scaling
* hard disk standby
* sleep states
* powering off the machine

The ability to control the power given to servers is a necessity, but not easily achieved. ACPI, sleep states, wake-on-lan, and switched power distributions can help.

Monitoring, logging, and remote controls.

¥
