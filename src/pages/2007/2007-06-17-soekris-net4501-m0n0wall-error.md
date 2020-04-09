---
title: Soekris net4501 m0n0wall error
comments:
  - author: admin
    email: albert.lash@savonix.com
    date: 06/26/2007 09:09:23 AM
    text: >
      Time to update the BIOS! Just posted this to the m0n0wall list as a follow-up to my many rants about the net4501 + m0n0:<br/><br/><blockquote>I knew I wasn't crazy! Soren introduced a bug into the bios of the most recent net4501 batch circa June 07, and has released an updated bios.<br/><br/>More info on this thread:<br/><br/><a href="http://readlist.com/lists/lists.soekris.com/soekris-tech/0/2128.html" rel="nofollow">http://readlist.com/lists/lists.soekris.com/soekris-tech/0/2128.html</a><br/><br/>I've updated one of my net4501's and plan to do the other today. Haven't done any real testing yet, but will post details when possible.</blockquote>
  - author: admin
    email: albert.lash@savonix.com
    date: 07/01/2007 09:10:20 PM
    text: >
      Actually - I think I figured out the problem here. The dropped ssh connections were caused by "enable filtered bridge" in the advanced menu. I thought I had to have this enabled to accomplish the bridge mode, but I don't - the filtering is only necessary if you plan to have firewall rules on the bridge, and I don't.
date: 2007-06-17
tags: m0n0wall,soekris,vpn
---

If I ssh into a shell through a vpn running on a WRAP behind a filtered bridge running on a net4501 and then run dmesg, ps -A, or ifconfig, the buffer outputs 2 lines, then dies.

However, if I ssh into that same machine behind the filtered bridge without going through the WRAP, I can run those commands without issue.

I think that the net4501 is having problems passing ipsec packets. Not sure if the problem is with the net4501 or with m0n0wall.

Someone on the m0n0wall mailing list suggested I try lowering the MTU, but I lowered it all the way to 1000 with no success.

<a href="http://osdir.com/ml/security.firewalls.m0n0wall/2004-04/msg00029.html">http://osdir.com/ml/security.firewalls.m0n0wall/2004-04/msg00029.html</a>

I also noticed there is a button for allow fragmented packets on the firewall rules. Maybe that is it? Testing now...

Searching for:

m0n0wall ipsec packets filtered bridge

I'm also thinking it could be the magic traffic shaper. I'll turn that off and see if it helps. In about 10 minutes. The webGUI on the net4501 takes about 1 minutes for each click. Is this normal?

AHA! I didn't even have to. Turning on allow fragmented packets on the opt1 interface (which is bridged with wan) fixed the problem. Interesting. Since m0n0wall says that allowing fragmented packets on the firewall is not desired and not likely necessary due to higher load and potential dos attacks, I wanted to not use this option.

I remembered that I had turned on allow fragmented ipsec packets without reason on the vpn WRAPs, so I turned it off, and then turned off the allow fragmented packets on the firewalls, and everything still seems alright. Good!

UPDATE: Actually the problem is still happening, so I'm again going to turn on allowing fragmented packets on the firewall WAN interface and see if it goes away again. I turned it on the OPT1 port but no go.

UPDATE 2: I've confirmed that it is the fragmented packets on the WAN port.

#### <div id="net501-slowness"><strong>net4501 Slowness</strong></div>:

system.php takes 1 minutes 15 seconds to load with current settings.

Factory defaults: 25 seconds. Wonder what it is about my config that is making it go so slow?

When OPT1 is added, system.php takes 50 seconds. After bridging with WAN, time seemed to decrease. Now I'm thinking it had something to do with the hardware watchdog or the device polling, both of which are now disabled.

I think that the slowness has something to do with the fact that I have a VPN setup through a filtered bridge. This will cause a shell to drop when I run commands like dmesg, ifconfig, or ps -A. This likely causes fragmented packets, which I guess are harder for the firewall to manage. I was able to improve the responsiveness of the net4501, but then the shell drops appeared again. I then restored to an earlier configuration,  and the shells are fine again, but the responsiveness is slow slow slow, around 1 minute per page load.

Just sent the about to the m0n0wall mailing list, plus this:

<blockquote>Unfortunately I don't have the time to more rigorously test the setup to find out where the hangup is, but my personal conclusion is that I have two options:

* faster net4501 that can't handle a vpn connection across two bridged interfaces

* slower net4501 that can handle a vpn connection across two bridged interfaces

Obviously I chose the latter, as I don't use the net4501 webgui everyday. Furthermore, I just purchased a couple net4801's, and I'll replace the filtered bridge with the 4801 so it can handle the fragmented packets better.

The net4501 is still a great box for the price, I just won't use it as a filtered bridge.

Lastly, I definitely retract what I said about the slowness being due to a php upgrade on the latest monowall, that definitely wasn't it!</blockquote>

¥

