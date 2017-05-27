---
title: Toshiba 5205 s703 fan
date: 2007-03-01
---
I can't get the darn fan on my Toshiba notebook to turn off. Grrr.

<strong>CPU</strong> details:

<pre>cat /proc/acpi/processor/CPU0/power

active state:            C2

max_cstate:              C8

bus master activity:     00014001

states:    C1:                  type[C1] promotion[C2] demotion[--] latency[000] usage[00000010]   *C2:                  type[C2] promotion[C3] demotion[C1] latency[001] usage[00250922]    C3:                  type[C3] promotion[--] demotion[C2] latency[085] usage[00005829]</pre>

<strong>Fans</strong>:

<pre>cat /proc/acpi/fan/FAN0/state

status:                  off</pre>

<pre>cat /proc/acpi/fan/FAN1/state

status:                  off</pre>

<strong>Bios</strong>:

<pre>toshset -q machine id: 0xfca8    BIOS version: 1.20    SCI version: 55.132 toshset version: 1.71                  Toshiba Model: Satellite 5200-*, 5205-* HCI/SCI access mode: kernel            LCD backlight: on                      fan: off                               select bay: empty                      LAN controller: enabled                Video out: internal: LCD               flat panel:  1600x1200, 18 bit TFT     lcd intensity: 4/7                     cooling method: quiet                  boot method: hard disk->floppy->CDROM  wireless support: not present          wireless switch: unavailable

Bluetooth unavailable

user password: not registered

supervisor password: not registered   </pre>

Still purring away. :-(

<strong>Temp</strong>:

<pre>cat /proc/acpi/thermal_zone/THRM/temperature

temperature:             52 C</pre>

<strong>Trip points</strong> (this it?):

<pre>cat /proc/acpi/thermal_zone/THRM/trip_points

critical (S5):           110 C

passive:                 109 C: tc1=9 tc2=2 tsp=1800 devices=0xc14da420

active[0]:               109 C: devices=0xdffae780

active[1]:               109 C: devices=0xdffae700 </pre>

From what little I understand of the above, it looks like every state turns on at 109 degrees C.

I set new trip points using tips from the linux acpi pages, but nothing worked. I did try an old fashioned hack of putting a ice pack under the laptop, and once it got to 48C, the processor fan went off, and the machine got MUCH quieter. Got to figure out what was keeping it about 50C, and I think I know the answer. The adapter I was using was 15V at 2amps, but this model requires 4Amps, so the battery was constantly being charged while powering the device. Without the battery constantly being charged (and the heat generated alongside), the processor should be able to keep cooler. In addition to removing the battery, I've also removed the extra bay holder, to simply provide for more air flow for heat to escape. I also plan to raise the machine a little higher on small rubber "feet" so that their is more room between the bottom and the desk it is on. That should do it. Previously I was using about 21watts of power, and I'm curious to see what we're down to now. Though I can't unplug the adapter without the battery in it! With regards to power outages, I have a UPS for that.

And when I suspend the hard drive - the computer is COMPLETELY silent. Gotta love that. <b>Energy Update</b>

I've found that by putting the Toshiba on its side to get more cooling surface area, the fan doesn't run. I think the fan might be for the power supply and separately controlled outside of ACPI, but that's besides the point. The fan is now off for the most part, and I attached the power meter again:<strong> 18 watts of power!!!</strong> That's great. The hard drive spin down doesn't do much, so I'm wondering if there is anywhere else I can shave a few watts. I've removed the wireless mini-pci card. I'd like to disable / remove the firewire setup, but that's probably too much of a pain. Not really much else I can do. I could get a solid state hard drive, but that would require a $20 adapter and another large compact flash card which I'm not willing to buy for this machine. The hard drive doesn't seem to use that much juice anyway. Hmmmm.  <i>Graphics Power Management</i>

Looks like the Nvidia GeForce4 460 Go doesn't have power management in linux:

<a href="http://forums.majorgeeks.com/showthread.php?t=14895">http://forums.majorgeeks.com/showthread.php?t=14895</a><i>CD-ROM</i>

Surprisingly, CD-ROMs apparently consume 1 watt of power even when not in use. I will likely remove the one in my computer, and instead install it in my other toshiba, if possible.

Just removed hplip:

<pre>update-rc.d -f hplip remove</pre><i>PCMCIA</i>

<a href="http://infotage.net/?p=18">http://infotage.net/?p=18</a>

Links I found while researching this:

<a href="http://acpi.sourceforge.net/documentation/thermal.html">http://acpi.sourceforge.net/documentation/thermal.html</a>

<a href="http://tosh3k.sourceforge.net/linux_install/acpi.html">http://tosh3k.sourceforge.net/linux_install/acpi.html</a> - didn't use this but looks good.

<a href="http://www.janerob.com/rob/ts5100/index.shtml#acpi">http://www.janerob.com/rob/ts5100/index.shtml#acpi</a> - Ditto

<a href="http://www.mail-archive.com/linux-acpi@vger.kernel.org/msg04599.html">http://www.mail-archive.com/linux-acpi@vger.kernel.org/msg04599.html</a>

And more, laptop power pages:

<a href="http://www.codinghorror.com/blog/archives/000562.html">How Much Power Does My Laptop Really Use?</a>

<a href="http://www.crhc.uiuc.edu/~mahesri/classes/project_report_cs497yyz.pdf">Power consumption on a modern laptop</a> - great research report in PDF format.

<a href="http://www.thinkwiki.org/wiki/How_to_reduce_power_consumption">How to reduce computer power consumption in linux</a> GREAT RESOURCE!!

