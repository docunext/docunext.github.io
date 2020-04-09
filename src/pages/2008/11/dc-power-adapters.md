---
title: DC Power Adapters
date: 2008-11-28
tags: none
author: Albert Lash
---
I did a bunch of research and development into the reduction of computer power consumption to save electricity and reduce heat. In the process, I discovered some very interesting (to me) things. Many were probably well known by computer manufacturers and electrical engineers, but they were new to me, and that's how I like to learn.

One discovery that especially surprised me was the amount of energy that is consumed simply by converting line voltage of 120 alternating current to 12 and 5 volts of direct current - aka the power supply. Certainly there are power supplies which are more efficient than others, but in general, they consume energy.

I tried to remove this part from the energy consumption equation, and did to a certain degree by switching to laptop style AC-to-DC power adapters, and then using solid state DC-to-DC power supplies specially designed for embedded computer systems. These setups used less energy, and I liked that.

However, over the 12 or so months that I've been running this setup on a few machines, I've discovered that the AC-to-DC power supplies I've been using are less reliable and more failure prone than the larger more common computer power supplies readily available at most computer and electronics supply retailers. Why the difference? I really don't know... maybe its the ones that I've been using, an anomaly, the temperatures of the equipment, or.... any suggestions?

Another setup I've experimented with was the idea of using a single, efficient computer power supply to power multiple embedded devices. That actually works quite well, but there are issues with that as well. My setup was messy and could probably fail - its been running for several months but I still don't feel safe running any production systems on it.
