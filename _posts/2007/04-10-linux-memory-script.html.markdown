---
title: Linux Memory Script
date: 2007-04-10
tags: linux
---
I found this code snibbet over at the VPSLink forums:

<pre class="sh_sh">#!/bin/bash
bean=`cat /proc/user_beancounters`
guar=`echo "$bean" | grep vmguar | awk '{ print $4;}'`
priv=`echo "$bean" | grep privvm | awk '{ print $2;}'`
let totl=guar/256
let used=priv/256
let free=$totl-$used
echo "VPS Memory:"
echo "  total: $totl mb   used: $used mb   free: $free mb"
</pre>

