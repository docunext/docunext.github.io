---
title: Debian and m0n0wall VPN
date: 2007-05-07
tags: debian,ipsec,security
---
I've got everything setup, but still phase 1 is not happening. GOT IT! It was the firewall on one of the servers. That is awesome.

I was able to ping the Debian machine from the m0n0wall machine, but then when I tried to ping the m0n0wall LAN, nothing. A route to the rescue:

<pre>ip route add 192.168.0.0/24 dev eth0 src 192.168.3.2</pre>

and

<pre>ip route add 192.168.0.0/24 via 192.168.3.2 dev eth0 src 192.168.3.3</pre>

also

<pre>-A FORWARD -s 192.168.0.0/23 -i eth0 -j ACCEPT-A FORWARD -i eth1 -j ACCEPT</pre>

I don't need the /23 right at the moment because I've only got one LAN link connected at the moment.

<a href="http://www.littleyojik.co.uk/computers/debian_vpn.html">http://www.littleyojik.co.uk/computers/debian_vpn.html</a>

<a href="http://doc.m0n0.ch/handbook/ipsec-tunnels.html">http://doc.m0n0.ch/handbook/ipsec-tunnels.html</a>

<a href="http://www.onlamp.com/pub/a/bsd/2003/01/09/FreeBSD_Basics.html?page=1">http://www.onlamp.com/pub/a/bsd/2003/01/09/FreeBSD_Basics.html?page=1</a>

<a href="http://linux-ip.net/html/tools-ip-route.html">http://linux-ip.net/html/tools-ip-route.html</a>

<a href="http://jodies.de/ipcalc">http://jodies.de/ipcalc</a>

How to get complex routes setup automatically:

<a href="http://www.debian-administration.org/articles/254#comment_26">http://www.debian-administration.org/articles/254#comment_26</a>

I decided to move the vpn to another server in that space so I could setup nat and have a two-sided network. I'm having problems with routing though. I can't seem to figure out how to get the routing table to separate the LAN traffic out and pass it throught vpn. On the VPN gateway it works fine, but not on any of the other lan members. When I try to ping the remote lan, I get this:

<pre>connect: No such process</pre> - found a good explanation:

<a href="http://216.239.51.104/search?q=cache:_gE3x6CCy08J:www.tlug.org.za/wiki/index.php%3Ftitle%3DIPSec%26printable%3Dyes+ping+%22connect:+no+such+process%22&hl=en&ct=clnk&cd=6&gl=us">here</a>

as well as <a href="http://www.datastat.com/sysadminjournal/remotegateway.html">here</a>

The "connect: no such process" is caused by the ipsec-tools security policy. If you google this you won't find much, and its due to a random sequence of events that I ran into it. As I mentioned, I installed racoon and ipsec-tools on one machine, then decided to move the vpn to another machine and setup a gateway. I did that, and left my security policies in place on the former machine. As one of those previous links put it:

<blockquote>"Well, my guess is that what is happening is that the kernel notes that it has to encrypt the data. So it goes of looking for an SA it can use. It doesn't find one, so it tries to contact userspace to initiate IKE (Internet Key Exchange), but since the racoon daemon isn't running this isn't possible. So it simply declares that the process isn't running and returns "No such process". Simple, effective, highly cryptic."</blockquote>

What did I do to fix this? I re-installed ipsec-tools, then commented out the sainfo in /etc/ipsec-tools.conf, and then restarted setkey:

<pre>/etc/init.d/setkey restart</pre>

After that, I double checked my routing table, and it worked like a charm! It is possible that another note I made about this error:

<pre>ping: sendmsg: Operation not permitted</pre>

was caused by the same thing...

In this setup, I have two networks, the wan and the lan, and I use the wan as the default gateway, and the vpn gateway to connect to the vpn lans. Works well. Now for the tuning.

Postscript:

I though I was looking for "policy routing", but that is more sophisticated than I need.

See <a href="/wiki/IPSec">the IPSec page on the Docunext Wiki</a> for more information.

