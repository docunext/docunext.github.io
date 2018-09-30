---
title: Debian Power Management
date: 2006-05-14
---
See what capabilities are available:

<pre>
box:/# cat /proc/acpi/processor/CPU0/power

active state:            C2

max_cstate:              C8

bus master activity:     00000000

states:    C1:                  type[C1] promotion[C2] demotion[--] latency[000] usage[00002220]   *C2:                  type[C2] promotion[--] demotion[C1] latency[090] usage[00152026]</pre>

