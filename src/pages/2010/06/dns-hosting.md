---
title: DNS Hosting
date: 2010-06-16
tags: dns,linode,zerigo
---
I'm reviewing my DNS hosting configurations. Until recently, I'd used mostly NSD3 servers, plus one BIND9 server.

Then I started reading about [MaxMind's GeoIP database](http://www.docunext.com/2010/06/side-effects-of-maxminds-geolocation-database.html), and learned that the BIND9 that ships with Debian has support for it!

I also learned that for some reason, my NSD3 servers would not return glue for nameservers which were subdomains of other domains, but BIND9 would. For example, if example.com had ns1.example.net as a nameserver, this would cause an extra lookup with NSD3. Not a big deal, but it helped me make the decision to switch to BIND9.

So the first step was to convert my NSD3 servers to BIND9. Thankfully, its easy. They both use the same format.

As I was proceeding with this step, I realized how complicated my domain management setup was. I've use [YoDNSConf](http://www.yodnsconf.com/blog/) to manage my domains, a project I've been working on for a couple of years now, and it gets burdened by the number of domains I manage for myself and my clients.

So I started thinking about migrating some of my low-priority domains to external DNS services. Zerigo looked very cool, but in the end, it only looked cool, but it was actually hard to use. I found myself spending way too much time trying to find stuff on their website. I couldn't even find a way to get my key to their much noted restful API service. I'm sure they'll improve this eventually, but for now, I'll pass. Besides, the prices are actually a little steep once you get past a few domains! One really cool thing they do provide is custom nameserver domains.

I have an account with DynDns.com with three perpetual custom DNS zones available because I signed up with them such a long time ago. Their service is good, but its also expensive - $29 / year for each zone!

UltraDNS? Also expensive. $50 / month minimum for five domains.

So then I started to think about using registrar based DNS. Most registrars include this in the $10-$20 yearly registration fee, but I quickly remembered why I opted out of that in the first place - in my experience, its been impossible to manage in a programmatic manner.

So what other options are there? I recalled tinkering with Linode's DNS management system recently, so I checked it out and its really pretty good! They even support importing zones via AXFR as well as allowing outgoing AXFR. The major problem with Linode's DNS service is that it requires the use of their nameserver names. Its understandable, but to switch, I'd have to do a bunch of work in converting all my domain name name servers over.
