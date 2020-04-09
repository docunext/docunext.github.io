---
title: CPU Frequency Scaling on HP Thin Clients
comments:
  - author: CHOPPERGIRL
    email: cobrachoppergirl@yahoo.com
    url: http://choppergirl.air-war.org
    date: 05/13/2012 10:52:01 PM
    text: >
      How did you get it to work or what have you tried so far?   I'm running Tiny Core Linux ( Micro Core actually) off a 64gb USB-HDD drive...  on a 5135... as an apache and samba server... and I can't get cpu scaling to work.  It won't recognize the longhaul or acpi driver.  It stays at 400mghz all the time according to cpufreq-info<br/><br/>I installed cpufreq.tsz and cpufreq-utils.tsz with appbrowser (ab) and tried to set them to use various power plans... and tried the different drivers..  intel/amd even... it won't install longhaul or the fall back acpi driver...<br/><br/>The wiki on the 5135 states the Eden 400 mghz can do it (acpi / cpu scaling), and has 8 power states, but so far it won't load the driver for it.<br/><br/><a href="http://en.wikipedia.org/wiki/List_of_VIA_Eden_microprocessors" rel="nofollow">http://en.wikipedia.org/wiki/List_of_VIA_Eden_microprocessors</a><br/><br/>The thing kind of cooks even with all the side panels off, but I guess its alright.  Still would be nice if I could keep it cool as a cucumber, because I only need really 20%-25 of the CPU horsepower... or to set it at 80 mghz or 100 mghz, instead of 400...<br/><br/>With apache, samba, and telnetd running on it, it uses about 64 or so mbs of RAM... of a total of 108... the micro core linux supposedly only using 8mb of that.<br/><br/>Email if you ever play around with it again and find a solution or make any progress...<br/>
  - author: Albert
    email: albert.lash@savonix.com
    date: 05/19/2012 03:19:40 PM
    text: >
      Hi CHOPPERGIRL, unfortunately there are two components required for cpu scaling to work, the CPU has to support it, and the BIOS has to support it. Check your BIOS options, if you can turn it on, sweet, if not, even if the CPU supports it, AFAIK if will be impossible to activate it.
date: 2007-06-07
tags: acpi,c7,energy,hp,power,via
---
The HP thin clients use VIA processors, for low power goodness. I can use the longhaul cpufreq driver without a hitch on my t5000 as it uses the VIA C3 chip, but I can't get anything to work on my t5135, as is uses the newer VIA Ester C7 Eden chip.

I've done a bunch of research and some have said it might be available in 2.6.21, but its not there yet. The most promising candidates are longhaul and e_powersaver. I'm just looking to keep the temperature down when possible.

¥

