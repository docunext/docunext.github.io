---
title: LaBrea Tarpit
comments:
  - author: John Hardin
    email: jhardin@impsec.org
    ip: 63.64.41.2
    url: http://www.impsec.org/~jhardin/
    date: 12/17/2007 11:55:40 AM
    text: >
      Running a tarpit is generally not intended to enhance your own security - firewalling does that as effectively as a tarpit, especially if you firewall a scanning host reactively.<br/><br/>There are two general reasons to run a tarpit:<br/><br/>(1) to help protect the Internet in general against vulnerability scanners - if the scanner is stuck in your tarpit, he isn't scanning your (possibly vulnerable) neighbor. If enough people do this, then auto-propagating worms are slowed enough for (hopefully) countermeasures and patches to be developed.<br/><br/>(2) to counterattack the attacker by starving his resources. This assumes the attacker has limited connection resources to work with.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 12/17/2007 12:28:45 PM
    text: >
      Right on, I thought that might be the case. I like the idea of slowing down knuckle heads.<br/><br/>PS - Congratulations to Ron Paul on his recent fundraising accomplishments. I'm very impressed! I run another website with a little info on the upcoming elections:<br/><br/><a href="http://www.2008-presidential-election.info/blog/" rel="nofollow">http://www.2008-presidential-election.info/blog/</a>
date: 2007-11-19
tags: debian,nmap
---

I finally got around to testing out labrea last night. It works as described, though I didn't test it out too extensively. I ran it on a debian machine, and had it listen on a two different ips. Nmap didn't seem to have much trouble with it, but trying to access that virtual ip with ssh or a web client would result in an incredible long timeout. That is very interesting.

I got to thinking whether it really was a useful mechanism though. Would a well designed firewall ruleset do the trick? It might be more useful if you have a ton of IP addresses which can be used as a tarpit, but in my case where I only have a few, it might not make sense.

¥

