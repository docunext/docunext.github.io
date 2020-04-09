---
title: VIA Processors and cpufreq
comments:
  - author: admin
    email: albert.lash@savonix.com
    date: 06/02/2007 01:30:00 PM
    text: >
      I just emailed MadTux to ask if the Vector Linux machine they are selling with the VIA C7 supports frequency scaling:<br/><br/><blockquote>I'm interested in purchasing a few of your Vector Linux VL-100 Affordable Performance PCs. When installed with Vector Linux, do they support CPU frequency scaling?</blockquote>
  - author: admin
    email: albert.lash@savonix.com
    date: 06/05/2007 12:36:10 PM
    text: >
      They emailed me back right away (good stuff) and said that the frequency is pegged at 1.5, but since it is a new chip, the acpi for linux project might support more frequencies in the future.
  - author: Anonymous
    email:
    date: 11/20/2010 05:51:13 AM
    text: >
      Debian 5.0<br/><br/>The following list of commands configure the "ondemand" power menagement system. You must load the e_powersaver to control the VIA C7 CPU.<br/>I am sorry but the printout on cpufreq-info command use the italian language.<br/><br/>root> apt-get install cpufrequtils sysfsutils<br/>root> modprobe e_powersaver<br/>[  855.936697] eps: Detected VIA Model D C7-M<br/>[  855.947448] eps: Current voltage = 796mV<br/>[  855.959421] eps: Current multiplier = 6<br/>[  855.970113] eps: Highest voltage = 844mV<br/>[  855.980672] eps: Highest multiplier = 12<br/>[  855.991248] eps: Lowest voltage = 796mV<br/>[  856.001787] eps: Lowest multiplier = 4<br/>root> echo "e_powersaver" >> /etc/modules<br/>root> echo -e "\ndevices/system/cpu/cpu0/cpufreq/scaling_governor = ondemand\n" >>/etc/sysfs.conf<br/>root>/etc/init.d/sysfsutils restart<br/>root>cpufreq-info<br/>cpufrequtils 004: cpufreq-info (C) Dominik Brodowski 2004-2006<br/>Per favore, comunicare errori e malfunzionamenti a cpufreq@lists.linux.org.uk.<br/>analisi della CPU 0:<br/>  modulo e_powersaver<br/>  CPU per le quali e` necessario cambiare la frequenza contemporaneamente: 0<br/>  limiti hardware: 400 MHz - 1.20 GHz<br/>  frequenze disponibili: 400 MHz, 500 MHz, 600 MHz, 700 MHz, 800 MHz, 900 MHz, 1.00 GHz, 1.10 GHz, 1.20 GHz<br/>  gestori disponibili: conservative, powersave, ondemand, userspace, performance<br/>  gestore corrente: la frequenza deve mantenersi tra 400 MHz e 1.20 GHz.<br/>                   Il gestore "ondemand" puo` decidere quale velocita` usare<br/>                  in questo intervallo.<br/>  la frequenza attuale della CPU e` 400 MHz (ottenuta da una chiamata diretta all'hardware).<br/> statistiche cpufreq:400 MHz:0,40%, 500 MHz:0,00%, 600 MHz:0,00%, 700 MHz:0,00%, 800 MHz:0,00%, 900 MHz:0,00%, 1.00 GHz:0,00%, 1.10 GHz:0,00%, 1.20 GHz:99,60%  (2)<br/>
date: 2007-05-21
tags: acpi
---
The more I learn about the VIA C3, C7, and EDEN cpu chips, the more I like them. I've been trying to figure out more about how to get acpi processor frequency scaling with them. Here's been my experience so far. <b>C3</b>

I've heard that the longhaul driver works for the ASUS Terminator C3. Unfortunately I just tried it and it didn't work:

<pre>insmod /lib/modules/2.6.15-28-386/kernel/arch/i386/kernel/cpu/cpufreq/longrun.ko

insmod: error inserting '.../longrun.ko': -1 No such device</pre>

Duh. I just spent the afternoon compiling longhaul, but then try to insmod longrun. I just insmodded longhaul and it works! :-) Unfortunately, when the processor is at its lowest frequency (400Mhz) I get this high pitched whine coming from the computer. I just installed powertweak to see if I can omit that cpu frequency from the cpu frequency adjusting daemon. If that doesn't work, I'll try to modify the scaling_available_frequencies file (though I'll probably have to do that every restart?). Powertweakd is a lot more than I need to simply alter the available frequencies. I'm instead using the cpufrequtils file in /etc/default to raise the minimum frequency to 532000 so that the cpu won't emit that annoying high pitched whine. <b>C7</b>

There is some new code for the C7 in the testing linux kernel, but for me, the acpi-cpufreq driver worked on my Everex NC1500 notebook. I think the C7 version is actually "e_powersaver.ko". Hmmm, doesn't seem like that one is supported by the C7-D. Grrr.

<a href="http://web.telia.com/~u18801979/">http://web.telia.com/~u18801979/</a>

<a href="http://forums.viaarena.com/messageview.aspx?catid=28&threadid=77689&enterthread=y">No frequency scaling for C7?</a>

<a href="http://forums.viaarena.com/messageview.aspx?catid=28&threadid=76102&highlight_key=y&keyword1=cpufreq">Supposed longhaul driver fix for C7</a>

<a href="http://article.gmane.org/gmane.linux.kernel.cpufreq/5139" rel="nofollow">GMANE message about 65Mhz VIA bug</a>

<a href="http://osdir.com/ml/kernel.cpufreq/2007-01/msg00073.html">acpi-cpufreq reports 65mhz</a>

<a href="http://bugzilla.kernel.org/show_bug.cgi?id=7880">acpi-cpufreq reports wrong frequency bug report at kernel.org bugzilla</a>

<a href="http://forums.viaarena.com/messageview.aspx?catid=28&threadid=77144&highlight_key=y&keyword1=c7-d">Freq scaling possible through p-states?</a>

<a href="http://forums.viaarena.com/messageview.aspx?catid=32&threadid=74486&enterthread=y">VIA C7 Uses ACPI P-States to vary frequecncy</a>

Now I'm trying to install gutsy gibbons, see if that helps any. For what its worth, here's a screenshot of the PC Chips motherboard BIOS:


I guess the kernel just isn't quite ready for the C7. From the stuff I've found, it looks like there are three potential candidates for cpufreq drivers for the C7:

<ul><li>acpi-cpufreq (hasn't worked for me) read reports it would work</li><li>longhaul - again, didn't work for me, got an error saying C3 Esther doesn't support frequency scaling. ???</li><li>e_powersave - read somewhere that this won't work with the C7-D</li></ul><b>EDEN</b>

I have a few C7 EDEN chips to try this out on, but haven't yet: <a href="http://www.swintabletennis.com/blog/?p=22">VIA EPIA EN 12000EG Linux kernel compile on Ubuntu</a>. I installed debian on my Eden machines, not ubuntu, but the two are so similar I hope the directions with work for both.

¥

