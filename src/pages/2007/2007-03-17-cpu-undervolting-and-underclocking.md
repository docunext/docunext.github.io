---
title: CPU Undervolting and Underclocking
date: 2007-03-17
tags: none
author: Albert Lash
---
In my continuing quest to reduce PC power consumption, I'm researching underclocking and undervolting. Underclocking in linux is fairly simple as it is handled by the cpufreq modules. On the otherhand, it appears that CPU undervolting is only possible through BIOS changes of the FSB frequency and multiplier.

Here are some good links I've found so far:

<a href="http://www.silentpcreview.com/article69-page1.html">List of undervoltable motherboards</a>

<a href="http://katherina.student.utwente.nl/~matthijs/cgi-bin/blosxom?-tags=Notebook">Undervolting your AMD Powernow Notebook</a>

<a href="https://www.dedigentoo.org/trac/linux-phc/">Linux-PHC Patch for Pentium M CPUs</a>

<a href="http://gentoo-wiki.com/HOWTO_Undervolt_a_Pentium_M_CPU#Configure_the_Kernel">Gentoo Wiki Guide for Underclocking a Pentium M</a>

<a href="http://www.techspot.com/vb/all/windows/t-70098-Help-me-figure-out-how-to-underclock-CPU.html">Thread on undervolting</a>

<a href="http://www.silentpcreview.com/article37-page1.html">Undervolting primer</a>

<a href="http://www.silentpcreview.com/article164-page1.html">Deep undervolt - 4.8Watts!</a>

<a href="http://www.legitreviews.com/article/375/5/">Undervolting the AMD A64 X2 4200+ AM2 Processor</a>

<a href="http://forum.notebookreview.com/showthread.php?s=826785f718618c79d09e8378102091a0&t=20249&page=11">Turion Undervolting</a>

I just got lm-sensors installed on Debian, and I get this output:

<pre>w83627hf-isa-0290

Adapter: ISA adapter

VCore 1:   +1.41 V  (min =  +0.00 V, max =  +4.08 V)

VCore 2:   +2.67 V  (min =  +0.00 V, max =  +4.08 V)              +3.3V:     +3.31 V  (min =  +2.82 V, max =  +3.79 V)              +5V:       +5.11 V  (min =  +5.08 V, max =  +6.64 V)              +12V:     +11.92 V  (min = +11.55 V, max = +15.20 V)              -12V:      -6.85 V  (min =  +5.40 V, max =  +5.40 V)       ALARM  -5V:       -3.84 V  (min =  +5.10 V, max =  +3.44 V)       ALARM

V5SB:      +5.56 V  (min =  +6.18 V, max =  +6.83 V)       ALARM

VBat:      +2.88 V  (min =  +3.47 V, max =  +2.67 V)       ALARM

fan1:     1875 RPM  (min =  332 RPM, div = 16)

fan2:     5625 RPM  (min =  332 RPM, div = 16)

fan3:        0 RPM  (min =  332 RPM, div = 16)              ALARM

temp1:       +36?C  (high =    -1?C, hyst =    -1?C)   sensor = thermistor   ALARM

temp2:     +27.0?C  (high =   +50?C, hyst =   +45?C)   sensor = diode

temp3:     +28.5?C  (high =   +50?C, hyst =   +45?C)   sensor = thermistor

vid:      +0.000 V  (VRM Version 2.4)

alarms:

beep_enable:          Sound alarm enabled</pre>

<a href="http://www.lm-sensors.org/browser/lm-sensors/trunk/doc/chips/w83627hf">w83627hf info at lm-sensors.org</a>

and:

<a href="http://www.lm-sensors.org/browser/lm-sensors/trunk/doc/chips/w83781d">w83781d</a>

Cool, this works:

<pre>echo "120" > /sys/bus/i2c/devices/9191-0290/pwm1</pre>

resulting in:

<pre>fan1:     2220 RPM  (min =  332 RPM, div = 16)  </pre>
