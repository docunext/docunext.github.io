---
title: decTop Pic Arrival
comments:
  - author: Tai Viinikka
    email: tai@eastpole.ca
    ip: 38.99.179.162
    url: http://www.eastpole.ca
    date: 06/17/2008 01:19:57 PM
    text: >
      I'd love to hear what you are doing with your DecTops these days. I just got one and I love the silence.<br/><br/>One additional use I am hoping will pan out is as a low-performance log server. Hopefully my firewall etc. won't need to send more than ~ 4 Mbit/s of syslog messages.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 06/17/2008 09:36:34 PM
    text: >
      Hi Tai - yeah they are very cool little boxen. I'm running Xubuntu on one of mine, and the other one is in pieces, to be built again.<br/><br/>I keep getting frustrated by the lack of an ethernet port though. The USB 1.1 dongle just isn't that great. :-(
  - author: Fed
    email: fedarik@gmail.com
    ip: 127.0.0.1
    url:
    date: 08/11/2008 02:18:28 PM
    text: >
      Could you find a way to install Ubuntu in the hard disk itself??
date: 2007-06-22
tags: amd,dectop,energy,power
---
The two decTop PIC's I ordered arrived from FedEx today, and upon opening the box I was very disappointed to find that the "10/100 Ethernet" they advertised on the website is actually a USB dongle. And its USB 1.0! :-(

That pretty much ruins the whole thing for me, but it does come with enough schwag to make it not a total loss.

Here's a quick picture of the guts:


I'm installing debian to the locked drive right now. Not sure what locked drive means, but it hasn't hit me yet. When I try to reboot it will probably say "sorry, you can't boot this operating system!"

Seems like the entire device was really tied to Microsoft. There are so many stickers and notices about how the product is licensed and produced for use is such and such a way. Weirdness.

I only installed the base system and it took about 30-45 minutes.

This is what happens with a locked disk:


So I popped in a 80GB EIDE drive I had nearby. The fact that Seagate and AMD locked a drive is very disappointing to me, and I'm glad I've been using Western Digital drives and Intel chips more often these days.

Finally got debian installed, and now for the good stuff!

<pre>
cat /proc/cpuinfo
processor       : 0
vendor_id       : Geode by NSC
cpu family      : 5
model           : 5
model name      : Geode(TM) Integrated Processor by National Semi
stepping        : 2
cpu MHz         : 365.243
cache size      : 32 KB
fdiv_bug        : no
hlt_bug         : no
f00f_bug        : no
coma_bug        : no
fpu             : yes
fpu_exception   : yes
cpuid level     : 1
wp              : yes
flags           : fpu de pse tsc msr cx8 pge cmov mmx mmxext 3dnowext 3dnow
bogomips        : 731.79</pre>

Network dongle:

<pre>drivers/usb/net/rtl8150.c: eth0: allmulti set
drivers/usb/net/rtl8150.c: eth0: allmulti set</pre>

Various dmesg output:

<pre>107MB LOWMEM available.
On node 0 totalpages: 27619  DMA zone: 4096 pages, LIFO batch:0  Normal zone: 23523 pages, LIFO batch:3</pre>

Processor:
<pre>CPU: NSC Geode(TM) Integrated Processor by National Semi stepping 02</pre>

And the absolute best thing about the dectop:

The decTop only uses 9 Watts of power with an 80GB hard drive. :-)

The sad truth:

<pre>iperf -c 192.168.0.2------------------------------------------------------------
Client connecting to 192.168.0.2, TCP port 5001
TCP window size: 16.0 KByte (default)------------------------------------------------------------[  3] local 192.168.0.189 port 4055 connected with 192.168.0.2 port 5001[  3]  0.0-10.0 sec  4.38 MBytes  3.67 Mbits/sec</pre>

Compare that to an Everex Stepnote NC1502 running Ubuntu:

<pre>iperf -c 192.168.0.2------------------------------------------------------------
Client connecting to 192.168.0.2, TCP port 5001
TCP window size: 16.0 KByte (default)------------------------------------------------------------[  3] local 192.168.0.186 port 59190 connected with 192.168.0.2 port 5001[  3]  0.0-10.0 sec    102 MBytes  85.7 Mbits/sec</pre>

The Everex costs four times as much, but has much better resale value. That's it, because the Everex only uses 9 watts of power as well (not including the screen, around 13-22 with the screen).

I have another decTop which I'm going to install linux onto using a compact flash or disk-on-module chip.

With the specs as they are, this device is really only good for surfing the web. That being said, I believe I'm going to try and install puppy or dsl again. In the meantime, here are some <a href="http://www.docunext.com/blog/2007/06/dectop-debian-tips.html">decTop Debian Tips</a>

¥

