---
title: Unbound DNS Server
comments:
  - author: kab
    email: kevin@bortis.ch
    date: 07/27/2008 09:58:28 AM
    text: >
      You can specify more than one interface: directive in your config. This way you can bind unbound to loopback and a public interface.<br/><br/>Bind to all available addresses use:<br/><br/>interface: 0.0.0.0<br/><br/>Bind to localhost and public server address 192.168.1.2<br/><br/>interface: 127.0.0.1<br/>interface: 192.168.1.2<br/><br/>The same goes for IPv6 and dualstack setups.
date: 2008-07-09
---
In the wake of another DNS security flaw discovery, I'm trying out <a href="http://www.unbound.net/index.html">unbound</a>, the new security-enhanced, open source, validating DNS server.

So far so good. Its in Debian's Lenny (testing) distro, so I installed it on my testing server, bart, and gave it a go. Bart is a ve, and unbound had issues with its network setup, so I had to specify the ip address of the ve. I'm also trying out power dns on that machine, so I stopped it during my tests of unbound.
<h4>Unbound Gotchas</h4>

When I set the ip address in the unbound conf file to the interface address instead of the loopback address, I was unable to use dig to query the server. Instead it reported this:

<pre>;; global options:  printcmd;; Got answer:;; ->>HEADER<<- opcode: QUERY, status: REFUSED, id: 26353;; flags: qr rd; QUERY: 0, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 0;; WARNING: recursion requested but not available;; Query time: 0 msec;; SERVER: 192.168.8.111#53(192.168.8.111);; WHEN: Wed Jul  9 09:34:42 2008;; MSG SIZE  rcvd: 12</pre>
<h4>Resolver or Server?</h4>

Looks like Unbound is mainly a resolver, like a front-end for a DNS management system backend. I could see how it would make sense to have unbound of the front lines, and something like Power DNS of MyDNS on the back end.

Changing it to 127.0.0.1 and pointing the dig to localhost did the trick. I'm surprised by that, if I end up using this new server, I'll have to figure out how to publish the service to an interface besides the loopback.

Still not sure, but I think the answer is that it is designed to be used as both a server and caching resolver.
<h4>Off Topic</h4>

<a href="http://www.jigsawmusicgroup.com/blog/2008/07/09/crystal-method/">Bound too long by the Crystal Method is a great song!</a>

UPDATE: I'm now using <a href="http://www.docunext.com/wiki/NSD">NSD3</a>, and it is excellent!

¥

