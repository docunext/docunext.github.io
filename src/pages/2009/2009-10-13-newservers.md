---
title: NewServers
comments:
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url: http://www.informedhosting.com/blog/
    date: 10/13/2009 08:45:39 PM
    text: >
      So I've signed up for a NewServers account, but am awaiting verification.<br/><br/>Looks like a very interesting opportunity.
date: 2009-10-13
---
I just found out about <a href="http://www.newservers.com/" rel="nofollow">NewServers.com</a> thanks to [Russell Coker's blog post about non-virtual cloud computing](http://etbe.coker.com.au/2009/10/13/new-servers-non-virtual-cloud/) via Planet Debian.

Looks very very cool! I was curious about what distros can be automatically provisioned. Took me a minute but I finally read in their docs that they can install a variety of operating systems, but only Windows Server 2003 and CentOS can be automatically provisioned.

The hardware is impressive as well - the DELL M600's even include dedicated KVM over IP! Very smart!

The facility looks amazing too. Their infrastructure is hosted in the NAP of the Americas, based in Miami, Florida, and they utilize Internap bandwidth  - good stuff.

UPDATE: My account has been verified and I'm now waiting for my 32-bit CentOS 5 image to be setup. Also, they do have 64-bit Ubuntu 8.04 available for install. Nice!

I chose CentOS 32-bit because I'm using the small server category which is the cheapest.

This company looks great. So far everything I'm seeing from them is professional and intelligent.

UPDATE 2: I switched from CentOS to Ubuntu 8.04 because the CentOS is a full CentOS install, including lots of stuff I'm not totally familiar with. Cancelling the first server and building the next was a piece of cake. My IP stayed the same, too.

I also fiddled around with the server farm setup, I set up an HTTP load balancer and it was easy to understand. It reminded me a little like the load balancer setup in pfSense. The pfSense load balancer is nice, but leaves a lot to be desired in my opinion. I haven't tried out the NewServers load balancer yet, but I will soon once I've got my Ubuntu server running.

Another thing I'm noticing is that they provide great documentation about their XML over HTTPS API. Hopefully it follows some standards that are evolving, but since its XML it should be pretty easy to interface with regardless.

UPDATE 3: Every rose has its thorns, right? Well, at first glance the firewall setup for NewServers seems a little odd. Actually no it makes sense now - its looks like its just a source based routing ruleset, but I'm still a little wary of something like this, mainly because I'm fairly stuck in my ways about how I write firewall rulesets for linux machines.

My next question is how billing is managed. As I setup my server, I'll need to take breaks and sleep and what not, so during this time, I'd like to backup my drive image and then cancel my server. Seems logical, right?

UPDATE 4: I tried to create an image and then restore it, but it didn't work. I changed the default login before doing so, perhaps that contributed to the issue? I don't think it should, but I can't think of anything else which would have prevented the image from working. I've cancelled that server and am trying out CentOS 64-bit with Xen. I've always wanted to try out Xen!

In the process of trying out disk images, I noticed that I'm not able to download the disk images I make. Seems a bit odd at first glance.

Restoring and creating images takes long than I expected.

¥

