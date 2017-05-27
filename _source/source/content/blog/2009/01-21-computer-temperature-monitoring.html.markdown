---
title: Computer Temperature Monitoring
date: 2009-01-21
---
Just found some helpful utilities for monitoring computer temperatures:<ul><li>sensors</li><li>hddtemp</li></ul>

I install them on my debian machines like this:

<pre>apt-get install lm-sensors hddtemp</pre>

And on my newer intel machines, I use the coretemp driver:

<pre>modprobe coretemp</pre>

These command output:

<pre># sensorscoretemp-isa-0000

Adapter: ISA adapter

Core 0:      +60.0°C  (high = +80.0°C, crit = +100.0°C) # hddtemp /dev/sda/dev/sda: TOSHIBA MK6032GSX: 36°C</pre>

Cool, huh? I guess it depends on the temperature.

