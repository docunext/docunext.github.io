---
title: GRE Tunnels with iproute
date: 2010-05-23
tags: pfsense,tap,tun
---
Marco wrote a useful post yesterday about some [less widely known features of iproute](http://blog.bofh.it/debian/id_379).

I didn't know about the dummy interface:

<pre class="sh_sh">
ip link add mydummy type dummy
</pre>

but I've definitely used the tun/tap driver before. I always forget the syntax so I'll jot it here for reference:

<pre class="sh_sh">
ip tuntap add dev mytap mode tap user albertlash
</pre>

Also mentioned is one of my all-time favorite iproute features: GRE tunnels!

<pre class="sh_sh">
ip link add blah type gretap remote 192.168.8.1
ip link add barf type gretap help
</pre>

I'm thrilled that [pfsense will soon include GRE tunneling support](http://www.informednetworking.com/blog/2008/10/gre-tunnels-in-pfsense.html)!

