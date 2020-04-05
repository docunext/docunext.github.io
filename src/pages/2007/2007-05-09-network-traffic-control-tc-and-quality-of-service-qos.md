---
title: Network Traffic Control tc and Quality of Service QoS 
date: 2007-05-09
tags: debian,networking
---
I love tinkering with traffic control and queuing disciplines. It all goes back to my days at Tufts when I took "Stochastic Modeling" and the concept of supervision entered my mind's eye.

Back to reality, I'm setting up some VPNs (mostly m0n0wall, one debian) and want to use wondershaper on the Debian vpn server.

<pre>apt-get install wondershaper</pre>

OK, its in, but nothing happened and there are no init scripts. How do I activate it? From the <a href="http://packages.debian.org/unstable/net/wondershaper">Debian Wondershaper Package Page</a>:

<blockquote>After installing this package, read highly the detailed instructions: /usr/share/doc/wondershaper/README.Debian</blockquote>

It was gzipped, so I first gunzipped it:

<pre>gunzip /usr/share/doc/wondershaper/README.Debian.gz</pre>

To enable wondershaper on debian,  add hooks to it from either the /etc/network/interfaces file, or add files to the /etc/network/if-* directories (one for up and one for down).

<http://www.linuxdevcenter.com/pub/a/linux/2000/08/24/LinuxAdmin.html>
