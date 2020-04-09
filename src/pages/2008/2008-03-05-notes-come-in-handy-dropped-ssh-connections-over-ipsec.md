---
title: Notes Come in Handy Dropped SSH Connections Over IPSEC
comments:
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/26/2008 03:43:37 PM
    text: >
      This also happened when I have the PF Scrubbing disabled.
date: 2008-03-05
tags: fios,m0n0wall,network,pfsense,ssh
---
I just got <a href="http://www.cabotplace.net/blog/2008/03/fios-is-in-the-place.html">FIOS at my office</a> and I'm trying to debug an ssh problem with a **VPN** I've setup between my office and my home.

<a href="http://www.docunext.com/blog/2007/06/soekris-net4501-m0n0wall-error.html">Soekris net4501 m0n0wall error</a>

"It is happening again."  (Fast forward to 4:33)

<object width="425" height="355"><param name="movie" value="http://www.youtube.com/v/i0kEjttb2mE"></param><param name="wmode" value="transparent"></param><embed src="http://www.youtube.com/v/i0kEjttb2mE" type="application/x-shockwave-flash" wmode="transparent" width="425" height="355"></embed></object>

Darn it. I need to get to the bottom of this before it drives me crazy. Here's a recap of what happens. I login to a shell through an IPSEC connection, type dmesg, and the connection dies. I connect through another machine through IPSEC, then connect through another IPSEC tunnel to the same machine as the first try, type dmesg, and it works fine.

#### <b>Clear DF Bit</b>

I'm trying to set the clear DF big instead of dropping it option in pfSense advanced.

<blockquote>
Workaround for operating systems that generate fragmented packets with the don't fragment (DF) bit set. Linux NFS is known to do this. This will cause the filter to not drop such packets but instead clear the don't fragment bit. The filter will also randomize the IP identification field of outgoing packets with this option on, to compensate for operating systems that set the DF bit but set a zero IP identification header field.
</blockquote>

The link I provided at first describes my attempts to fix this under m0n0wall, where I believe the problem was caused by my allowing fragmented ipsec packets. This option isn't available in pfSense, so I'm trying some new techniques. Nope, that didn't work.

#### <b>sysctl?</b>

I tried this:

<pre>
sysctl -a | grep ipsec
</pre>

to see if that would shed some light on the matter but not much:

<pre>
$ sysctl -a | grep ipsec  ipsecpolicy    64    16K       -     5578  256 ipsecrequest     4     1K       -       20  128   ipsec-misc    24     1K       -      132  32    ipsec-saq     0     0K       -        6  128    ipsec-reg     3     1K       -        6  16
net.inet.ipsec.def_policy: 1
net.inet.ipsec.esp_trans_deflev: 1
net.inet.ipsec.esp_net_deflev: 1
net.inet.ipsec.ah_trans_deflev: 1
net.inet.ipsec.ah_net_deflev: 1
net.inet.ipsec.ah_cleartos: 1
net.inet.ipsec.ah_offsetmask: 0
net.inet.ipsec.dfbit: 0
net.inet.ipsec.ecn: 0
net.inet.ipsec.debug: 0
net.inet.ipsec.esp_randpad: -1
net.inet.ipsec.crypto_support: 0
net.inet6.ipsec6.def_policy: 1
net.inet6.ipsec6.esp_trans_deflev: 1
net.inet6.ipsec6.esp_net_deflev: 1
net.inet6.ipsec6.ah_trans_deflev: 1
net.inet6.ipsec6.ah_net_deflev: 1
net.inet6.ipsec6.ecn: 0
net.inet6.ipsec6.debug: 0
net.inet6.ipsec6.esp_randpad: -1
</pre>

Both machines have the same settings. Hmmm.

Aha! I just remembered I had some wacky tcp settings on the machine I was connecting to, I just commented them out of the sysctl.conf  file, maybe that will fix it? Rebooting now...

<pre>
#net.ipv4.tcp_fin_timeout = 30
#net.ipv4.tcp_timestamps = 0
#net.ipv4.tcp_keepalive_time = 1800
#net.ipv4.tcp_max_tw_buckets = 1440000
#net.ipv4.tcp_max_syn_backlog = 1024
#net.ipv4.tcp_syncookies = 1
#net.core.rmem_max = 16777216
#net.core.wmem_max = 16777216
#net.ipv4.tcp_mem = 4096 65536 16777216
#net.ipv4.tcp_rmem = 4096 87380 16777216
#net.ipv4.tcp_wmem = 4096 65536 16777216
#net.ipv4.tcp_no_metrics_save = 1</pre>

Nope, still happens.

#### <b>Maximum Transmission Unit (MTU)</b>

I just found this document about <a href="http://www.linuxsecurity.com/resource_files/cryptography/FreeSWAN-HOWTO/background.html">FreeSWAN, fragmented packets, and MTU</a> and I was reminded of the advice shared by Chris B. and the pfSense / m0n0wall folks when I first ran into this problem. They recommended reducing the MTU, so I just tried doing that now, and it worked! In fact for whatever reason, by setting it to 1500 on both firewalls, the problem has gone away. Cool. Actually no I have to take that back, after changing to 1500 and re-logging in, the problem persisted, however I just found this on Verizon's network:

<blockquote>
MTU (Maximum Transmission Units) - The MTU defines the largest single unit of data that can be transmitted over your connection. The FiOS network requires an MTU of 1492 bytes.
</blockquote>

So in a nutshell, I believe that the 1492 MTU minus the IPSEC headers would equal the **MTU** I need to set as the WAN device connected to FIOS. I don't know what size those headers are, and I believe they vary depending upon the encryption type and IPSEC configuration, so I'm going to go with 1400 as a safe bet.

¥

