---
title: My Iptables Script
date: 2009-06-05
---
I've updated the iptables script that I use, although it varies from machine to machine, here's the basic outline:

<pre class="bash">*filter:INPUT DROP [0:0]:FORWARD DROP [0:0]:OUTPUT ACCEPT [0:0]-N logdrop-A logdrop -j DROP-N limitlogdrop-A limitlogdrop -j DROP-N logok-A logok -j ACCEPT-N HASHLIMIT-A HASHLIMIT -m hashlimit --hashlimit 2/hour --hashlimit-burst 1 --hashlimit-mode srcip --hashlimit-name ssh4 --hashlimit-htable-expire=300000 -j logok-A HASHLIMIT -j limitlogdrop-A INPUT -i eth0 -f -j logdrop-A INPUT -m state --state INVALID -j logdrop-A INPUT -s 127.0.0.0/255.0.0.0 ! -i lo -j logdrop-A INPUT -i lo -j ACCEPT-A INPUT -p tcp -m tcp --tcp-flags FIN,SYN,RST,PSH,ACK,URG FIN,SYN,RST,PSH,ACK,URG -j logdrop-A INPUT -p tcp -m tcp --tcp-flags FIN,SYN,RST,PSH,ACK,URG NONE -j logdrop-A INPUT -p tcp -m tcp --tcp-flags FIN,SYN FIN,SYN -j logdrop-A INPUT -p tcp -m tcp --tcp-flags SYN,RST SYN,RST -j logdrop-A INPUT -p tcp -m tcp --tcp-flags FIN,RST FIN,RST -j logdrop-A INPUT -p tcp -m tcp --tcp-flags FIN,ACK FIN -j logdrop-A INPUT -p tcp -m tcp --tcp-flags PSH,ACK PSH -j logdrop-A INPUT -p tcp -m tcp --tcp-flags ACK,URG URG -j logdrop# Rejected ports# This is used for nolisting, real SMTP servers would have this open.-A INPUT -p tcp -d 192.0.2.0 --dport 25 -j REJECT --reject-with tcp-reset# Private access ports - trusted sources-A INPUT -s 192.0.2.1 -p tcp --tcp-flags SYN,RST,ACK SYN --dport 22 -j ACCEPT# Public ports - DNS, Ping, and HTTP-A INPUT -p tcp --tcp-flags SYN,RST,ACK SYN --dport 22 -j HASHLIMIT-A INPUT -p tcp -m tcp --tcp-flags SYN,RST,ACK SYN --dport 53 -j ACCEPT-A INPUT -p udp --dport 53 -j ACCEPT-A INPUT -p icmp -m limit --limit 100/sec --limit-burst 100 -j ACCEPT-A INPUT -p tcp -m tcp --tcp-flags SYN,RST,ACK SYN --dport 80 -j ACCEPT# Accept good connections-A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT# Drop the rest-A INPUT -j logdrop# Output filters-A OUTPUT -o lo -j ACCEPT-A OUTPUT -p tcp -m state --state NEW,ESTABLISHED -j ACCEPT-A OUTPUT -p udp -m state --state NEW,ESTABLISHED -j ACCEPT-A OUTPUT -p icmp -m state --state NEW,RELATED,ESTABLISHED -j ACCEPT
COMMIT</pre>

Not all the servers I use support hashtables, so those rules aren't on all of them. I'm using hastables on kernels that support it because it provides more convenient access, and also foils brute force hack attempts which are just a nuisance.

Since I run debian, I put this into /etc/rc.local:

<pre class="bash">/sbin/iptables-restore /etc/iptables.sh</pre>

<a href="http://www.docunext.com/wiki/Iptables">Docunext Iptables Page</a>

<a href="http://www.docunext.com/wiki/Iptables_hashtable">Docunext Iptables Hashtable Page</a>
