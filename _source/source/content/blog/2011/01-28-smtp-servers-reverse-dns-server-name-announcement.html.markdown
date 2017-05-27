---
title: SMTP Servers Reverse DNS Server Name Announcement
date: 2011-01-28
tags: dns,postfix
---
Thanks to our special friend **SPAM**, SMTP servers have special requirements. If you are setting up an STMP server, such as Exim, Postfix, or qmail, make sure to have these factors setup correctly:

* Static IP
* SMTP server host name DNS entry
* Reverse DNS entry, aka PTR record, for the static IP
* Matching server name announcement from the SMTP server itself - note bene - **the server name announcement must match the reverse DNS entry**

Here's the actual steps to confirm the DNS and server name components using *"dig"* and **telnet**. I perform these steps on a semi-regular schedule for my primary SMTP server, **vpn-glass.savonix.com**.

#### Static IP for SMTP Domain Record

<pre class="sh_sh">
dig vpn-glass.savonix.com @4.2.2.1

; <<>> DiG 9.7.1-P2 <<>> vpn-glass.savonix.com @4.2.2.1
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 30
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;vpn-glass.savonix.com.		IN	A

;; ANSWER SECTION:
vpn-glass.savonix.com.	28800	IN	A	71.184.118.13

;; Query time: 138 msec
;; SERVER: 4.2.2.1#53(4.2.2.1)
;; WHEN: Fri Jan 28 23:05:52 2011
;; MSG SIZE  rcvd: 55
</pre>

#### Reverse DNS Lookup

<pre class="sh_sh">

dig -x 71.184.118.13

; <<>> DiG 9.7.1-P2 <<>> -x 71.184.118.13
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 43033
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 4, ADDITIONAL: 0

;; QUESTION SECTION:
;13.118.184.71.in-addr.arpa.	IN	PTR

;; ANSWER SECTION:
13.118.184.71.in-addr.arpa. 86400 IN	PTR	vpn-glass.savonix.com.
</pre>

#### SMTP Server Name Announcement

<pre class="sh_sh">
telnet 71.184.118.13 587
Trying 71.184.118.13...
Connected to 71.184.118.13.
Escape character is '^]'.
220 vpn-glass.savonix.com ESMTP Postfix (Debian/GNU)
</pre>

Yay! Postfix knows its own name, and DNS publishes the correct name for both the hostname and the IP address!!

