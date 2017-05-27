---
title: Putting Varnish to the Test
date: 2009-05-29
tags: none
author: Albert Lash
---
Yesterday one of my clients had a major spike in traffic to their site. They usually have a steady flow of substantial traffic, but yesterday say at least a 400% surge in visitors.

If there was ever an opportunity for me to see Varnish work its magic - yesterday was the day.

I'm so pleased to report that it worked incredibly well. During the surge, several hundred gigabytes were served and our pipes over several networks were pretty much maxed out. Since we also use pfSense to manage some our networks, the traffic shaper helped keep things under control, but it was Varnish which worked the magic. Here's an RRD graph of the bandwidth usage (only one content delivery point):


And of course the analytics graph:


I'm eager to continue working with Varnish and providing its great capabilities to our clients!

