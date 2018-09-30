---
title: Turion on the desktop 
date: 2007-06-04
tags: acpi,amd,energy,power
---
<pre>[18225.904000] powernow-k8: error - out of sync, fix 0xa 0xc, vid 0x8 0x8
[18226.016000] powernow-k8: Hardware error - pending bit very stuck - no further pstate changes possible
[18226.016000] powernow-k8: transition frequency failed
[18226.016000] powernow-k8: failing targ, change pending bit set
[18292.004000] powernow-k8: error - out of sync, fix 0xc 0xa, vid 0x8 0x8
[18292.004000] powernow-k8: ph2 null fid transition 0xa
[18316.928000] powernow-k8: Hardware error - pending bit very stuck - no further pstate changes possible
[18316.928000] powernow-k8: transition frequency failed
[18324.640000] powernow-k8: error - out of sync, fix 0xa 0x8, vid 0xc 0xc
[18324.780000] powernow-k8: Hardware error - pending bit very stuck - no further pstate changes possible
[18324.780000] powernow-k8: transition frequency failed
[18326.020000] powernow-k8: error - out of sync, fix 0x8 0x0, vid 0xc 0xc
[18326.020000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18326.020000] powernow-k8: transition frequency failed
[18327.120000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18327.124000] powernow-k8: transition frequency failed
[18328.368000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18328.368000] powernow-k8: transition frequency failed
[18329.600000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18329.600000] powernow-k8: transition frequency failed
[18330.840000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18330.840000] powernow-k8: transition frequency failed
[18332.080000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18332.080000] powernow-k8: transition frequency failed
[18333.320000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18333.320000] powernow-k8: transition frequency failed
[18334.560000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18334.560000] powernow-k8: transition frequency failed
[18335.800000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18335.800000] powernow-k8: transition frequency failed
[18337.040000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18337.040000] powernow-k8: transition frequency failed
[18338.280000] powernow-k8: ignoring illegal change in lo freq table-0 to 0x0
[18338.280000] powernow-k8: transition frequency failed</pre>

Uh-oh. Maybe a faulty dsdt? I'll try <a href="http://www.unix.privat.t-online.de/acpi.html">this</a> and <a href="http://www.cpqlinux.com/acpi-howto.html#fix_broken_dsdt">this</a>:

<pre>iasl -tc dsdt.dsl
Intel ACPI Component Architecture
ASL Optimizing Compiler version 20060912
[Dec  6 2006]
Copyright (C) 2000 - 2006 Intel Corporation
Supports ACPI Specification Revision 3.0a
dsdt.dsl   293:     Method (\_WAK, 1, NotSerialized)
Warning  1079 -                 ^ Reserved method must return a value (_WAK)
dsdt.dsl   358:             Store (Local0, Local0)
Error    4049 -                         ^ Method local variable is not initialized (Local0)
dsdt.dsl   363:             Store (Local0, Local0)
Error    4049 -                         ^ Method local variable is not initialized (Local0)
dsdt.dsl  3841:             Method (\_SB.PCI0.USB0._PRW, 0, NotSerialized)
Warning  1086 -  Not all control paths return a value ^  (\_SB.PCI0.USB0._PRW)
dsdt.dsl  3841:             Method (\_SB.PCI0.USB0._PRW, 0, NotSerialized)
Warning  1079 -   Reserved method must return a value ^  (_PRW)
dsdt.dsl  3871:             Method (\_SB.PCI0.USB1._PRW, 0, NotSerialized)
Warning  1086 -  Not all control paths return a value ^  (\_SB.PCI0.USB1._PRW)
dsdt.dsl  3871:             Method (\_SB.PCI0.USB1._PRW, 0, NotSerialized)
Warning  1079 -   Reserved method must return a value ^  (_PRW)
dsdt.dsl  3901:             Method (\_SB.PCI0.USB2._PRW, 0, NotSerialized)
Warning  1086 -  Not all control paths return a value ^  (\_SB.PCI0.USB2._PRW)
dsdt.dsl  3901:             Method (\_SB.PCI0.USB2._PRW, 0, NotSerialized)
Warning  1079 -   Reserved method must return a value ^  (_PRW)
dsdt.dsl  3931:             Method (\_SB.PCI0.USB3._PRW, 0, NotSerialized)
Warning  1086 -  Not all control paths return a value ^  (\_SB.PCI0.USB3._PRW)
dsdt.dsl  3931:             Method (\_SB.PCI0.USB3._PRW, 0, NotSerialized)
Warning  1079 -   Reserved method must return a value ^  (_PRW)
ASL Input:  dsdt.dsl - 4323 lines, 142611 bytes, 1602 keywords
Compilation complete. 2 Errors, 9 Warnings, 0 Remarks, 562 Optimizations</pre>

More debug output:

<pre>
[ 2695.648000] powernow-k8: Found 1 AMD Turion(tm) 64 Mobile Technology MT-37 processors (version 2.00.00)

[ 2695.652000] powernow-k8:
  0 : fid 0xc (2000 MHz), vid 0xa
[ 2695.652000] powernow-k8:
  1 : fid 0xa (1800 MHz), vid 0xc
[ 2695.652000] powernow-k8:
  2 : fid 0x8 (1600 MHz), vid 0xe
[ 2695.652000] powernow-k8:
  3 : fid 0x0 (800 MHz), vid 0x16
[ 2695.932000] powernow-k8:

Hardware error - pending bit very stuck - no further pstate changes possible

[ 2695.932000]powernow-k8: transition frequency failed

[ 2695.932000] powernow-k8: failing targ, change pending bit set</pre>

Strange, but it actually seems like it is working. At least I can control the frequency governor more easily now using cpufreq-set.

<pre>
cpufreq-info
cpufrequtils 002: cpufreq-info (C) Dominik Brodowski 2004-2006
Report errors and bugs to linux@brodo.de, please.

analyzing CPU 0:  driver: powernow-k8
CPUs which need to switch frequency at the same time: 0
hardware limits: 800 MHz - 2.00 GHz
available frequency steps: 2.00 GHz, 1.80 GHz, 1.60 GHz, 800 MHz
available cpufreq governors: ondemand, powersave, conservative, userspace, performance
current policy: frequency should be within 800 MHz and 2.00 GHz.                  The governor "powersave" may decide which speed to use
within this range.  current CPU frequency is 800 MHz (asserted by call to hardware).</pre>

<pre>
cpufreq-info
cpufrequtils 002: cpufreq-info (C) Dominik Brodowski 2004-2006
Report errors and bugs to linux@brodo.de, please.
analyzing CPU 0:  driver: powernow-k8
CPUs which need to switch frequency at the same time: 0
hardware limits: 800 MHz - 2.00 GHz
available frequency steps: 2.00 GHz, 1.80 GHz, 1.60 GHz, 800 MHz
available cpufreq governors: ondemand, powersave, conservative, userspace, performance
current policy: frequency should be within 800 MHz and 2.00 GHz.                  The governor "performance" may decide which speed to use
within this range.  current CPU frequency is 2.00 GHz (asserted by call to hardware).</pre>

I think the problem frequency might be the 1.6Ghz, as I've never seen the processor in that state. Haven't seen this one before:

<pre>powernow-k8: ph2 null fid transition 0xc</pre>

