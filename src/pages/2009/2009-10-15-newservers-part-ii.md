---
title: NewServers Part II
comments:
  - author: Chris Valean
    email: chris@newservers.com
    url: http://newservers.com
    date: 04/07/2010 09:30:42 AM
    text: >
      Hello,<br/>I just found this and although this post is a bit old by now I just wanted to clarify a few things in this post to make sure everything is clear.<br/><br/>DELL OMSA is a free monitoring tool which we use to monitor servers health and availability. Since it's a free product you don't have to worry about licensing or fees.<br/><br/>Regarding the imaging of an Ubuntu -any version- this is an issue of how Ubuntu distro handles the networking part - at first boot it creates a file which stores the MAC address of the active NIC. If you create & restore an image to another server the network will not work because of that file which must be manually removed just before you reboot to create the image. This is now a NewServers related issue.<br/><br/>Billing is done hourly, can't do by minute billing with real dedicated servers... :)<br/>Hourly is enough since we were the only ones in market offering this instead of monthly contracts.<br/><br/>For the KVM/ DELL iDRAC functionality - Large and above types have dedicated iDRAC interface but the DELL 1855 models have only a single KVM interface for all servers in a chassis, so we cannot offer dedicated KVM access for 1855 model, only by request and for a limited ammount of time.<br/><br/>This should be it for now, if you have any questions or want to clarify something I recommend contacting us on Live chat or send us a ticket.<br/>Regards,<br/>Chris Valean<br/>MCSA, MCITP, MCTS, Tech Support Team<br/>NewServers Inc. <a href="http://newservers.com" rel="nofollow">http://newservers.com</a>
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/09/2010 08:02:57 PM
    text: >
      Hi Chris, Thanks for commenting. The hourly billing is fine, but if I recall correctly, by stopping and starting my servers twice within one hour, I was billed for two hours. I'd have to check to confirm that, but its didn't seem to make sense at the time.<br/><br/>I only use my NewServers account occasionally at this time, but overall, I think NewServers is an important and unique offering in the hosting marketplace.
date: 2009-10-15
tags: newservers
---
**Pre-installed Software**
-----------------------------------

I'm exploring a freshly install Ubuntu 8.04 server image and I noticed that Dell OpenManage software is installed. Its running processes like this: dsm_sa_datamgr3.

There is a license which I am not interested in agreeing with, and I wonder how this would affect my relationship with NewServers.

The dellomsa package appears to be removable though:
<pre>
$ dpkg -l | grep dell
ii  dellomsa                                   5.5.0-5                     Dell OpenManage Server Administrator 5.
</pre>

I'll hold off on doing so for the moment. I read their terms of service and acceptable use policy and neither say anything about the Dell OpenManage Server Admin. I did note, however, that the terms of service states that all payments are non-refundable, but the documentation pages state this:

"Your credit card will be charged $20 to make an initial deposit to your NewServers account. Any unused portion can be withdrawn at anytime by making a request to billing@newservers.com"

Which is it? Only the initial $20 can be withdrawn? The billing page also says this:

"You may withdraw your account balance at any time."

Given how much thought has been put into their service, I'm confident they'll clarify their communications very soon.

**Hardware**
------------------

I'm taking a closer look at the hardware their service uses. First thing that catches my attention is the apparent lack of a hardware based random number generator (HWRNG) on the Dell 1855. Why, Dell? Why?

I did some research and it appears to be true: the M600 as well as the 1855 blades lack hardware based random number generators. Doh!

This [lack of a HWRNG might cause problems for folks running linux with SSL](http://www.docunext.com/wiki/Linux_and_entropy).

**Customizing the Setup**
-------------------------------------

I'm upgrading to Intrepid Ibex (9.04) from Hardy Heron (8.04). I was hoping to use do-release-upgrade, but it appears I'll have to modify /etc/apt/source.list. Actually, no I don't have to. I can change /etc/update-manager/release-upgrades to normal.

I ended up upgrading all the way to 9.10. I created a disk image, this time using the manual reboot. I cancelled my server, created a new one, and am now restoring my disk image. Hopefully I'll be able to login and find things just as I left them!

Uh-oh. I think the same thing that happened before is happening again. When I restore the image it remains totally unavailable. I guess this might be the reason why they aren't advertising ubuntu as a default image option?

**Hourly Increments**
-------------------------------
I just realized that when I start and cancel a server twice within one hour, I get charged for two hours. I would like for that to have been clearer, as I was only testing out the imaging functionality. In the future I'll just leave the existing server running and start a new one.

**My Overall Consensus**
------------------------------------
This is going to be a great service, the key words being "going to be". Without a doubt, they need to have an out-of-band console. Apparently the more expensive servers have KVMoverIP, but even the cheap ones should have ajaxterm or something similar. Without that its impossible to know why the newservers website says a freshly installed image is "active", but the ip cannot be reached via ssh and is non-responsive to pings.

Also it seems very odd to me that when you are creating a new server, you can't select an image you've already saved...

**Additional Notes**
----------------------------

To save memory:
<pre>
# Custom
blacklist lp
blacklist parport_pc
blacklist parport
blacklist hidp
blacklist rfcomm
blacklist bluetooth
blacklist l2cap
blacklist ipv6
blacklist ip6_tables
blacklist backlight
blacklist video
blacklist button
blacklist battery
blacklist pcspkr
blacklist ac
blacklist dm_raid45
blacklist dm_mirror
blacklist dm_multipath
blacklist acpi_memhotplug
blacklist dm_region_hash
blacklist dm_region_hash
blacklist dm_mem_cache
blacklist dm_log
blacklist dm_mod
blacklist uhci_hcd
blacklist ohci_hcd
blacklist ehci_hcd
blacklist sbs
blacklist i2c_ec
blacklist i2c_core

chkconfig gpm off
chkconfig pcscd off
chkconfig acpid off
</pre>

Blacklist not working for me:
<pre>
rmmod lp
rmmod parport_pc
rmmod parport
rmmod hidp
rmmod rfcomm
rmmod bluetooth
rmmod l2cap
rmmod ipv6
rmmod ip6_tables
rmmod backlight
rmmod video
rmmod button
rmmod battery
rmmod pcspkr
rmmod ac
rmmod dm_raid45
rmmod dm_mirror
rmmod dm_multipath
rmmod acpi_memhotplug
rmmod dm_region_hash
rmmod dm_region_hash
rmmod dm_mem_cache
rmmod dm_log
rmmod dm_mod
rmmod uhci_hcd
rmmod ohci_hcd
rmmod ehci_hcd
rmmod sbs
rmmod i2c_ec
rmmod i2c_core
</pre>

The amount of time it takes to restore a server?

Server1272 started at 10-16-2009 23:17:08, at Sat Oct 17 00:25:31 EDT 2009 the server status is still: Restoring Harddrive Image.

¥

