---
title: How to build a high availability fault tolerant internet service
date: 2007-05-22
tags: open source
---
<b>Ultra Monkey: heartbeat and lvs</b>

Location fault tolerance can be achieved using ultramonkey, a project to combine the best parts of heartbeat, drbd, and lvs. I use the terms "location fault tolerance" because this type of setup requires as much bandwidth between nodes as possible, i.e. at least 100Mbit. While its definitely possible to get that over a wide area, I cannot afford that possibility at all.

What does that setup give me? It basically gives me hardware redundancy. This is actually a really great thing, as hardware <em>will</em> fail at some point. Furthermore, it also provides a logical, modular, and virtual infrastructure which is then scalable, meaning it can be built upon an extended, portable, and more easily configured. <b>DNS!</b>

Once you have the hardware aspect taken care of, you'll also need to deal with power and network connectivity. What happens if a switch or a power supply fails at the data center (or worse, a disaster)? You'll need to have an off-site backup (a mirror would be nice, but again I can't afford the bandwidth speeds that such a setup would require). How do you activate the backup for your clients and website visitors? Through the use of DNS. <b>My Initial Testing Setup</b>


This is a high-availability cluster built with 4 HP t5135 thin clients. I chose those as they were cheap, small and energy efficient. I'm using them with a USB drive with Debian etch installed on it.

UPDATE: June 1, 2007

I got it to work! Its actually really easy to setup, <a href="http://www.howtoforge.com/high_availability_loadbalanced_apache_cluster">thanks to another quality tutorial by Falco Timme at Howtoforge.com, this time on how to setup a fault tolerant high availability Apache cluster</a>. I followed everything to a "T", but I did have to make some adjustments. I installed heartbeat-2 and ldirectord-2 because I'm using Debian etch instead of Debian sarge. I also had to use "eth2" instead of "eth0", I also used different IP addresses.

Notes:

<ul><li>When I installed heartbeat-2 instead of regular heartbeat, ultramonkey was removed. I'm not sure if everything that was originally installed when I used the "apt-get install ultramonkey" command, but it doesn't matter, it works!</li><li>As you can see in the picture, I used thin clients for this setup. This was a good idea for me, because I didn't have to spend too much to get 4 computers to use.</li><li>ldirectord is the software that does the load balancing.</li><li>heartbeat is the program that monitors availability</li></ul>

After getting this running on some very lightweight hardware, I'm much more confident in its value. The gears are now turning on a more sophisticated and powerful setup, one with a cluster or NFS, MySQL, and Apache servers. Already I've seen what a pain in the neck it can be to keep the two load balanced Apache servers synchronized, and I'm even using the same MySQL back-end on both servers.

I've never setup an NFS server before, so that will be a new skill for me. MySQL clustering? I've setup a primary / secondary arrangement, but never a primary / primary, so that will be a new skill as well. If and when I build this cluster, I'd like to plan the hardware as appropriately as possible, so that it is energy efficient. I keep a lot of notes about this topic at the <a href="http://www.docunext.com/wiki/Main_Page">Green Computing Wiki about Energy Efficient Technology</a>.

Related stuff:

<a href="http://www.countersiege.com/doc/pfsync-carp/">

http://www.countersiege.com/doc/pfsync-carp/</a>

Postscript:

In the above photo, I am using a <a href="http://www.my-tech-deals.com/blog/2007/05/15/us-robotics-24-port-10100-switch/">US Robotics 24-port 10/100 Switch</a>, but I actually just changed it to a <a href="http://www.my-tech-deals.com/blog/2007/05/19/clipart-and-a-switch/">SMC 10/100 5-port switch</a>, which is perfect for a 4 node cluster. When I build the higher power high availability cluster, I plan to use a GigE switch. I have a Netgear GigE switch, but I had serious problems with it dropping out when it ran out of memory. It also uses a few more watts of power than the D-Link I have, so I might buy a D-Link instead. How many ports would I need for the cluster? Twenty four would be appropriate because of the high traffic between the drdb nodes, as well as the mysql nodes. To be safe, it would make sense to give each node two nic cards, which would be bound for additional redundancy.
