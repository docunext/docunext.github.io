---
title: Stunnel HTTPS Proxy
date: 2008-02-08
tags: security,stunnel
---
This is very cool:

* <http://www.stunnel.org/examples/https_client.html>

I'm trying it out to see how it works. This works GREAT! Stunnel even has an option for selecting which engine to use - so I choose padlock! This is something I'm definitely going to enjoy using.

Note: its not a transparent proxy. I'm only using it to offload my encryption needs when connecting to my webmail server and intranet. Why am I doing this? My VIA C7 has the ACE; Iceweasel can't use it, but stunnel can. :-)

Problem:

<pre>SSL routines:SSL3_GET_RECORD:bad decompression</pre>

If I use TLSv1 instead of SSL3 it works much better, and I don't get those errors anymore.

Also, I was having some serious issues with CircleBox, but in the end the problem was that I hadn't provided enough bandwidth for ACKs in the pfSense traffic shaper ruleset. Doh! With HTTP and AJAX, there are LOTS of ACKs going on.

I don't think the problem was with Circlebox, but instead the TCP stack on my local system. While watching the Apache logs, I could see that the data was being sent, but just wasn't getting delivered all the way to Iceweasel. After tweaking about everything I could think of on Apache (Keepalives), pfSense, and stunnel, I finally tried out some sysctl tcp settings, specifically tcp_sack, tcp_timestamps, and tcp_window_scaling. Turning off tcp_window_scaling fixed the problem. I'm not sure if there is a bug in stunnel, Apache, pfSense, or the linux tcp stack, or if I'm somehow violating the RFC with what I'm trying, but something funky is going on.

Here's more of my notes:

TLSv1 works better

no tcp scaling, no sack, no timestamp on lo

I thought it was on the server, but without stunnel it worked ok.

also disabled app.js keepalive

adjusted pfSense traffic shaper

edited stunnel.conf quite a bit

I *think* it was the tcp sack - turned it off and its working OK

Nope, it was the tcp window scaling, I turned that back on and the problem started again.

Helpful:

* <http://www.psc.edu/networking/projects/tcptune/>

