---
title: FreeNAS and Disk Standby
date: 2008-07-27
---
FreeNAS is a great "network attached storage" project, based off m0n0wall. I've been testing it out for quite some time, but haven't felt comfortable enough to use it in production yet.

My most successful test has been on the i386-embedded on VIA C3 Samuel 2 running at 800 MHz platform. I have 1000Mbit nic card in it, but since it is a PCI card, and can't achieve maximum gigE speeds, I have it set to 100Mbit to save energy. It uses the realtek re0 driver.

In some of my other tests, I've had some trouble with disk power management and standby. Now that the VIA C3 has gone for 80 days of uptime, I'm turning on standby and power management. I hope everything continues to go smoothly!

