---
title: OpenWRT Notes
date: 2006-08-06
---
<h3 id="toc0">OpenWRT on Buffalo AirStation WHR-G54S</h3><p>I just installed OpenWRT onto my Buffalo AirStation WHR-G54S and it rocks. The first thing that confused me was the default LAN IP: 192.168.<strong>11</strong>.1. After that everthing went smoothly.</p><h4 id="toc1">OpenWRT Goals reached: </h4>

<ul>    <li>The installation process was surprisingly simple. I highly recommend going for it if you have a compatible wireless router and haven't tried it yet. </li>    <li>I am able to SSH into the box. AWESOME!</li>    <li>I was able to install ip and tc packages from the repository. AWESOME!</li></ul><h4 id="toc2">OpenWRT Hurdles encountered: </h4>

<ul>    <li>Can't get WPA PSK working, but WEP works easily. I finally got WPA working, I had to install wpa-supplicant and nas. wpa-supplicant also installed openssl.</li>    <li>It was tough to get OS X to recognize that it was asking for a WPA shared key. </li>    <li>It was also tricky to figure out how long the shared key should be, its supposed to be between 8 and 63 characters long. </li></ul><h4 id="toc3">OpenWRT To-Do: </h4>

<ul>    <li>Learn more about jffs and squashfs.</li>    <li>Get a QOS script with HTB (hierarchical token bucket) on it for VOIP and internet surfing to play nicely together. <a class="wikilink" href="/resources/blog/2006/08/06/qos-script-for-openwrt/">QOS Script for OpenWRT</a></li>    <li>Set it up at my home as a replacement for my Verizon provided Westell junker. </li></ul><h4 id="toc4">Wifi Interesting facts: </h4>

<ul>    <li>I now have a bunch of wireless routers: <ul>        <li>Apple Airport Extreme - unused.</li>        <li>Buffalo AirStation - to replace Westell at my house. </li>        <li>Netgear Rangemax Wireless Router - used in office.</li>        <li>D-Link Router (currently setup at my parent's house for when I visit)</li>        <li>Westell Wireless Router - to become unused. </li>    </ul></li>    <li>The Buffalo only uses .06 amps, or 4 Watts of power. That is AWESOME! I'm curious as to how that compares to the Westell. </li></ul><h4 id="toc5">Wifi Future plans: </h4><p>I would love to live close enough to my office so that we could be on the same network, connected wirelessly. I think that would be so cool.</p>
