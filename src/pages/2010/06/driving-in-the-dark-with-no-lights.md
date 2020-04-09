---
title: Driving In the Dark with No Lights
date: 2010-06-13
tags: bios
---
<span style="display: inline;"> <a href="http://www-sa.evenserver.com/s/imgs/img/2010/q1/SNB10405.JPG" title="The Dark Passenger" style="float:right;margin-left:4px;" class="thickbox">
I'm working on a server which crashed tonight, and while its probably a lost cause (its several hundred miles away), I have a tough time giving up.

It started with a simple set of updates followed by a reboot. The server didn't come back online, which shouldn't be a big deal because I have KVM over IP, but then I realized that the other machine on that LAN / VPN had also crashed, and they were providing me with local access to the KVM over IP server! Doh!

I've slowly been deprecating that network over the past several months and hadn't realized that I was down to only two machines. One was on its way out, but this one seemed stalwart.

So I could ping the KVM over IP machine from the m0n0wall gateway, but I was not able to ping it from the remote LAN. I tried every which way to route a connection, but m0n0wall basically only has low level routing - no application redirection.

Finally I found some [m0n0wall extras](http://www.xs4all.nl/~fredmol/m0n0/)!

It comes with dropbear which is an ssh server and can tunnel TCP traffic! A little of this:

<pre class="sh_sh">
ssh root@192.168.0.1 -L5900:192.168.0.59:5900
</pre>

and this...

<pre class="sh_sh">
cat .config/vncpasswd |  xtightvncviewer 127.0.0.1 -autopass
</pre>

And then I was in business, for a little while. The problem was that the hard drive was not getting recognized - at all. I've seen this before - and it was a miracle the last time it happened (though that was a network card not getting recognized), as I just kept rebooting the server and it finally came back online.

This time, it doesn't seem to be coming back online. Last time, I fiddled around with the BIOS so much that the screen went out, and the same thing happened this time - but still no luck.


Now the screen is just black, and my remote rebooter is offline too. :-(

Good thing this was only a DNS node! Speaking of which, I need to relocate it. On top of that, I need to either rebuild this network with the latest pfSense 2.0 (with GRE) or phase it out. Its a Comcast network and its been very reliable, but it is a little pricey, and not too fast at that.

I actually just happened to sign up for some new virtual private servers from Zerigo and another from Linode, so I think its time to reconsider the Comcast network. They have faster speeds available now, but they've also raised the rates on the static IPs. My thoughts at this moment are that it will be better to close up this network and rebuild a smaller, faster subnet using the latest **pfSense**. The inclusion of GRE tunnels is really going to shake things up!

I don't like this:


Better:


FYI - The "server remote" is a Startech.com device, and quite a good deal for the price and utility.

<span style="display: inline;"> <a href="http://www-sa.evenserver.com/s/imgs/img/2010/q1/P1010116.JPG" title="Pretty" class="thickbox">
