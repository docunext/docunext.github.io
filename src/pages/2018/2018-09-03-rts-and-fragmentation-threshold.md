---
layout: post
title:  "RTS and Fragmentation Threshold for my Wifi issues"
date: 2018-09-03
---

My wifi was not performing well and I tried messing with many settings. The
ones that finally helped were the RTS and Fragmentation threshold. The fields in
openwrt were empty, and in Verizon FioS's quantumm modem they were 2346 for the
fragmentation threshold and 2347 for the RTS threshold.

I will try to improve this some more, but I went from 50Mbit/s to about
200Mbits. :-)
