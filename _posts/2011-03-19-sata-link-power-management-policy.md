---
title: SATA Link Power Management Policy
date: 2011-03-19
tags: power,sata
---
When I try to change the link power management policy of my sata controller, it does not work. What's up with that?

Check it out:

<pre class="sh_sh">
echo min_power > /sys/class/scsi_host/host0/link_power_management_policy && cat /sys/class/scsi_host/host0/link_power_management_policy
max_performance
</pre>

It always stays min\_power! ARGH! If I try something other than min\_power, it throws an error, so I'm confused:

<pre class="sh_sh">
echo min_performance > /sys/class/scsi_host/host0/link_power_management_policy
bash: echo: write error: Invalid argument
</pre>

Same thing happens on host1. I wonder what is up with this?

Based on some quick research, it seems like some hardware doesn't support min\_power, or that the drivers for them just aren't set up right yet.

For what its worth, I was wondering what other options might apply here and found medium\_power; that doesn't work for me either.

