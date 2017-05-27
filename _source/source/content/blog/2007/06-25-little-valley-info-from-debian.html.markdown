---
title: Little Valley Info from Debian
comments:
  - author: ajc
    email: ajc27_1979@yahoo.com
    ip: 81.179.164.62
    url:
    date: 06/26/2007 10:00:32 AM
    text: >
      Is the onboard NIC supported in Linux and and freebsd?<br/><br/>Can you post a dmesg output from debian?
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 06/26/2007 12:33:43 PM
    text: >
      Yes it is supported by linux and m0n0wall (which is freebsd). I should have captured a dmesg before I removed debian, but now its running m0n0wall.<br/><br/>Its a broadcom driver, though I couldn't find anything about it.
  - author: ajc
    email: ajc27_1979@yahoo.com
    ip: 81.179.164.62
    url:
    date: 06/26/2007 05:42:37 PM
    text: >
      Thanks ... good to know it works.
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 06/26/2007 07:06:56 PM
    text: >
      No problem - here's an update: it uses the sis0 driver on m0n0wall, which is good!
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/12/2007 11:06:50 AM
    text: >
      An update to my comments about power - it appears that the AC-DC external power converter has a big effect on the power consumption. I'm using a different one now and it's only consuming 23 watts at full power. I'm also using a USB stick instead of compact flash, which could have an effect, though I doubt it.
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/12/2007 11:31:01 AM
    text: >
      I think the p4-clockmod driver only scales the cpu frequency, not the voltage.<br/><br/><blockquote><br/>                       "The speedstep-ich or acpi cpufreq modules offer "<br/>                       "voltage scaling in addition of frequency scaling. "<br/>                       "You should use either one instead of p4-clockmod, "<br/>                       "if possible.\n");<br/></blockquote><br/><br/>It might help in the reduction of heat however.
  - author: mykhal
    email: mykhal@centrum.cz
    ip: 147.33.1.151
    url:
    date: 07/30/2007 05:36:23 AM
    text: >
      I wonder how does the the picture look on LCD display. Is it sharp ?
  - author: mykhal
    email: mykhal@centrum.cz
    ip: 147.33.1.151
    url:
    date: 07/30/2007 06:00:38 AM
    text: >
      .. and did you try using acpi-cpufreq module instead of p4-clockmod ?
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/30/2007 10:44:18 AM
    text: >
      I can't really say, because I've mainly used it for console output,  meaning that all I see is a command line interface, no graphical user interface. I have no complaints about the console video output.<br/><br/>When it first boots, there is an intel splash screen displaying a fade and a couple of intel logos, that looks good too.<br/><br/>What type of graphics are you referring to mykhal?
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/30/2007 02:10:03 PM
    text: >
      And yes I did try using acpi-cpufreq with no luck. It might be that the board is too new and the acpi-cpufreq driver will support it in the future.
  - author: mykhal
    email: mykhal@centrum.cz
    ip: 147.33.1.151
    url:
    date: 07/31/2007 03:59:28 AM
    text: >
      &gt; What type of graphics are you referring to mykhal?<br/><br/>I am only interested in quality of the integrated video in general - some integrated video cards may have blurry or unstable picture and are not appropriate for using on desktop.
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/31/2007 01:54:27 PM
    text: >
      Gotcha, I've seen that too on an <a href="http://www.docunext.com/blog/2007/03/22/amcc-3ware-9650se-sata-ii-pci-express-raid-card-review/" rel="nofollow">AOpen machine I built with a 3Ware RAID card, wasn't sure what the issue was but I think it was because the onboard video was analog and was too close to the power supply</a>.<br/><br/>On the Intel D201GLY, I haven't had any such problems at all, the screen is clear for me and not wavy or fuzzy at all.
  - author: John
    email: johns@ks.uiuc.edu
    ip: 74.134.246.53
    url:
    date: 09/03/2007 05:36:16 AM
    text: >
      What power supply are you using that allows you to get down to 23 watts?<br/>With a run-of-the-mill desktop PSU, mine is using 40 watts.  I'd love to get it down to 23!
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.92.61.253
    url:
    date: 09/03/2007 07:11:38 AM
    text: >
      I'm using a DC-DC power supply, the picoPSU. It is very efficient.<br/><br/><a href="http://www.mini-box.com/s.nl/it.A/id.417/.f" rel="nofollow">http://www.mini-box.com/s.nl/it.A/id.417/.f</a><br/><br/>You'll need a AC-DC adapter, and I use a molex to 4-pin motherboard cable, but those only cost about a buck or so.
date: 2007-06-25
tags: acpi,d201gly,energy
---
## <strong>Even More Information About the Intel D201gly</strong>

Note: If you are interested in buy a bunch of these, check out the post on my-tech-deals.com for the <a href="http://www.my-tech-deals.com/blog/2007/06/best-deal-on-the-little-valley.html">best deal on the  Little Valley D201GLY 10-pack</a>.

Now, back to our regular programming of heavy-duty technical information:

<pre class="sh_sh">cat /proc/cpuinfo
processor       : 0
vendor_id       : GenuineIntel
cpu family      : 6
model           : 14
model name      : Intel(R) Celeron(R) CPU          215  @ 1.33GHz
stepping        : 8
cpu MHz         : 1333.427
cache size      : 512 KB
fdiv_bug        : no
hlt_bug         : no
f00f_bug        : no
coma_bug        : no
fpu             : yes
fpu_exception   : yes
cpuid level     : 10
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca
cmov pat clflush dts acpi mmx fxsr sse sse2 ss tm pbe nx constant_tsc up
pni monitor tm2 xtpr
bogomips        : 2668.56
clflush size    : 64</pre>

<pre class="sh_sh">cat /proc/acpi/processor/CPU0/info
processor id:            0
acpi id:                 1
bus mastering control:   yes
power management:        no
throttling control:      yes
limit interface:         yes</pre>

Able to use the p4-clockmod cpufreq driver, but it doesn't seem to do much.

When the frequency is at 167Mhz, the bogomips is still 2600. :-|

<pre class="sh_sh"># cpufreq-info
cpufrequtils 002: cpufreq-info (C) Dominik Brodowski 2004-2006
Report errors and bugs to linux@brodo.de, please.
analyzing CPU 0:  driver: p4-clockmod  CPUs which need to switch frequency at the same time: 0  hardware limits: 167 MHz - 1.33 GHz  available frequency steps: 167 MHz, 333 MHz, 500 MHz, 667 MHz, 833 MHz,
1000 MHz, 1.17 GHz, 1.33 GHz  available cpufreq governors: powersave, conservative, performance  current policy: frequency should be within 167 MHz and 1.33 GHz.                  The governor "performance" may decide which speed to use                  within this range.  current CPU frequency is 1.33 GHz (asserted by call to hardware).</pre>

<pre class="sh_sh">cpufreq-info
cpufrequtils 002: cpufreq-info (C) Dominik Brodowski 2004-2006
Report errors and bugs to linux@brodo.de, please.
analyzing CPU 0:  driver: p4-clockmod  CPUs which need to switch frequency at the same time: 0  hardware limits: 167 MHz - 1.33 GHz  available frequency steps: 167 MHz, 333 MHz, 500 MHz, 667 MHz, 833 MHz,
1000 MHz, 1.17 GHz, 1.33 GHz  available cpufreq governors: powersave, conservative, performance  current policy: frequency should be within 167 MHz and 1.33 GHz.                  The governor "powersave" may decide which speed to use                  within this range.  current CPU frequency is 167 MHz (asserted by call to hardware).</pre>

<pre class="sh_sh"># cat /proc/cpuinfo
processor       : 0
vendor_id       : GenuineIntel
cpu family      : 6
model           : 14
model name      : Intel(R) Celeron(R) CPU          215  @ 1.33GHz
stepping        : 8
cpu MHz         : 166.666
cache size      : 512 KB
fdiv_bug        : no
hlt_bug         : no
f00f_bug        : no
coma_bug        : no
fpu             : yes
fpu_exception   : yes
cpuid level     : 10
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca
cmov pat clflush dts acpi mmx fxsr sse sse2 ss tm pbe nx constant_tsc up
pni monitor tm2 xtpr
bogomips        : 2668.56
clflush size    : 64</pre>

Seems like no matter what the cpu is set to, it consumes 27 watts of power, and that is with a USB flash drive. Not bad, not great.

¥

