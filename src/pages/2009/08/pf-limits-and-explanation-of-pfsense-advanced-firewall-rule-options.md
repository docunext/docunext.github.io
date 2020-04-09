---
title: pf Limits and Explanation of pfSense Advanced Firewall Rule Options
comments:
  - author: Albert
    date: 08/20/2009 06:44:49 PM
    text: >
      ACK! My initial settings were horrendously bad. I've removed the timeouts as that was not a good idea. I'm planning another follow-up post to this very soon.<br/><br/>In related news, I was very surprised to learn that Heroku put NGINX in-front of Varnish. Interesting, very interesting.
  - author: Cedric
    email: djnicofun@hotmail.com
    date: 01/12/2010 06:12:36 PM
    text: >
      Hi,<br/><br/>Are find a perfect configuration to limit http request ?<br/><br/>Best regard.
date: 2009-08-18
tags: firewalls,pfsense,security
---
Last night I finally took the time to learn what the "advanced" options are in the pfsense firewall rule form. You know the ones, these guys:

<span style="display: inline;">

I finally got fed up after one too many misbehaving bot caused one of my Apache servers to spawn way too many instances.

Basically, all I learned is thanks to: <a href="https://calomel.org/pf_config.html">https://calomel.org/pf_config.html</a> and a little from <a href="http://www.openbsd.org/faq/pf/config.html">http://www.openbsd.org/faq/pf/config.html</a>.

To make the connection between the calomel explanations and the pfsense descriptions, I ran pfctl -sr and gathered this information:

<pre>max-src-states 120, max-src-conn-rate 30/100, max-src-nodes 10000 overload &lt;virusprot&gt; flush global, tcp.established 5, src.track 100</pre>

The following is a rough idea of the settings I'm using, with additional notes of mine in bold to remind me of why I set the numbers the way I did. Also, based on the recommendation of calomel, I'm using synproxy state. I should also mention that this is just an HTTP rule!

Advanced Options

Simultaneous client connection limit
10000 <b>number of ip addresses which can connect</b>

Maximum state entries per host
120
40 <b>established states at a time (3 per established roughly)</b>

Maximum new connections / per second
30 / 100 seconds
<b>this is per ip!?!</b>

State Timeout in seconds
5
<b>(Varnish default timeout)</b>

¥

