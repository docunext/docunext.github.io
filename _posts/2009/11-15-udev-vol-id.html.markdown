---
title: udev vol id
date: 2009-11-15
tags: debian,udev
---

<div>For those missing vol_id (/sbin/vol_id): use blkid instead.</div>

<div>On debian lenny, the udev package has a binary named vol_id which can create some nice uuid's for block devices / volumes.</div>

On debian squeeze, the binary is gone! Eee gads! Not to worry, blkid will do the trick.

