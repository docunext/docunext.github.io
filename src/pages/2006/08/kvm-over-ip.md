---
title: KVM Over IP
date: 2006-08-13
---
<p>We've been researching KVM over IP solutions, and here's what we came up with.</p>
<p><strong>Products in the $500 - $2000 Range</strong></p>

<ul>    <li>StarTech Server Remote Control SV1110IPEXT ~$600 - we bought one but the firmware was currupted and the item was dead on arrival. Thankfully we ordered from NewEgg and had no trouble returning it for a refund. We're actually going to give them another chance and buy a second one. I like this because it supports VNC and VNCS. Why go with closed protocols???</li>    <li>Raritan Dominion KX101 ~ $1000 - this one looks good, though it only has support for Java-based browser viewers, it is not exclusive to Windows, as many KVM over IP solutions are (I guess since they use ActiveX). Their website lists support for most browsers: Safari, Firefox, and IE. </li>    <li>Lantronix SLK1 ~ $1000 - this one looks the best for many reasons, but the one I really want is the SLK8. These also support VNC, but not VNCS. They also directly connect with their PDU units for simpler management. I have a demo scheduled with this company (by far I am VERY impressed with them) next week and I'm looking forward to it. I suggested VNCS and SSH connectivity on the SLK series and they agreed that those were good options. </li></ul><p>By far, the Startech has the best price and features. It has mixed reviews, but since money is an option in our case, we're going to go for it, again.</p>
<p><strong>Usage</strong>

We will use the KVM over IP to remotely manage our servers at the data center. Due to the complexity of our server configurations, it is possible that a network interface, network connectivity daemon, or operating system could fail. It is therefore a necessity to have a backup method of remote administration. KVM over IP fits the bill. An alternative is to use console redirect. This is definitely an option, however the labor involved with setup and configuration is more expensive than for the KVM over IP.</p>
<p><strong>Issues</strong></p>

<ul>    <li>We will need secure connections. This will be possible by using SSL, VNCS (which I believe requires the purchase of a licensed piece of software), or tunneling to a private IP block through another server and connecting via unencrypted VNC. The latter is probably the least favorable due to complexity and possible point of failure. What is amazing about the Startech device is that is supports SSH! I didn't realize that. Definitely a go. </li></ul>

<ul>    <li>Extending and daisy-chaining the KVM. We will need to control more than one remote server. We plan to use another normal KVM switch at the data center to switch between 4 host servers. The device is controllable via keystrokes and I'm keeping my fingers crossed that the devices are compatible. The KVM switch we already have is an IOGear. </li></ul>

<ul>    <li>User administration. We'll need to securely manager user names and pass phrases.</li></ul>

<ul>    <li>Alternate connections. I believe the Startech has a RJ11 jack for POTS (plain old telephone line) connectivity, as well as a serial port for console connections. </li></ul><p><strong>Experience</strong>

We'll post the results of our research and decision once we receive a functioning device and get it operational.</p>
<p><strong>Alternatives to KVM</strong>

I just installed Synergy and I'm totally dumbfounded at how amazing it is, and how incredibly easy it was to setup. I'm not even going to bother adding any documentation or instructions for it because it was so easy!</p>
