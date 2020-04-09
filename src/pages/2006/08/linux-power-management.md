---
title: Linux Power Management
comments:
  - author: SmokinJoe
    email: joe.greer@aarcorp.com
    url: http://www.aarcorp.com
    date: 12/01/2007 02:46:12 PM
    text: >
      I am trying to get power management to work on the HP T5135 thin clients.  HP is no help at all.  The OS S1ST0031 has a 10 minute timeout to blank the display and then like a 30 minute time out to put the display to sleep.  The thin client never goes to sleep, just keeps burning 10 watts of power.  In sleep mode these thin clients should only take 1 watt of power.<br/><br/>Have you ever had the T5135 wake up without crashing?  From searching with Google it sounds like crashing after sleep is common with the via Eden processor. :-(<br/><br/>I see you are using quite a few of these terminals. :-)  I am also looking at trying to use a USB phone on these clients.
  - author: Albert
    date: 12/01/2007 04:17:55 PM
    text: >
      Hey SmokinJoe - Thanks for commenting with your questions. Good to hear that more people are trying to take advantage of computer power controls to save some cash on energy costs. Unfortunately, I don't think the t5135 has the ability to sleep. What do your BIOS look like? On mine, I'm able to wake up from S5, but not S3, at least in debian linux. What OS you running?<br/><br/>Well, actually maybe you can sleep, but can't wakeup by LAN, that's probably why I never pursued the possibility.
date: 2006-08-08
---
<h3 id="toc0">Save energy by reducing the processor speed of your computers when not in use. </h3><p>I've tried lots of different power management techniques with linux. I was successful in getting hibernate to work with suspend2 sources on my Toshiba laptop (howto to come) and finally I got Power Now to work!</p>
<p>For my system, I loaded the following kernel modules:</p>

<ul>    <li>powernow_k8</li>    <li>thermal</li>    <li>cpufreq_conservative</li>    <li>processor</li></ul><p>Though I guess I don't need it, I could not modprobe acpi-cpufreq:

<pre>
FATAL: Error inserting acpi_cpufreq (/lib/modules/2.6.17.1/kernel/arch/i386/kernel/cpu/cpufreq/acpi-cpufreq.ko): Device or resource busy</pre></p>
<p>Unfortunately, the lower processor setting only saves a few watts. Better than nothing. Especially for a machine that is on 24/7/365!</p><hr /><p>I am also trying to get my UPS into the loop. I have an APC Back UPS 500, connected via USB 2 Ethernet, so I'm going to try apcupsd. I did get apcupsd to install and run. I'm very impressed so far!</p>
<p><a href="http://www.docunext.com/2006/08/apcupsd-notes/" onclick="window.open(this.href, '_blank'); return false;">http://www.docunext.com/2006/08/12/apcupsd-notes/</a></p><hr /><p>This machine uses a software raid, and the performance is amazing. However, since this machine is on 24/7/365, I'd like to save a little juice at night. I was weary about using hdparm for sata drives configured in a raid, but it seems kosher. I DO NOT ADVISE YOU TO TRY IT! These are just my thoughts.</p>
<p><a href="http://freshmeat.net/projects/hdparm/" onclick="window.open(this.href, '_blank'); return false;">http://freshmeat.net/projects/hdparm/</a></p>
<p><a href="http://kangry.com/topics/viewcomment.php?index=227" onclick="window.open(this.href, '_blank'); return false;">http://kangry.com/topics/viewcomment.php?index=227</a></p>
<p>Laptop Mode Tools FAQ is helpful:

<a href="http://www.xs4all.nl/~bsamwel/laptop_mode/tools/faq.html" onclick="window.open(this.href, '_blank'); return false;">http://www.xs4all.nl/~bsamwel/laptop_mode/tools/faq.html</a></p>
<p>Using the trusty Kill-A-Watt meter, I was able to check the difference between standby disks and active disks, and it is over 20 watts. I'm definitely going to set that up. Right now I can't because we run Asterisk and Nagios on the same server, which writes to the drive fairly often. I did set the commit time for the ext3 filesystem to 7200 (two hours), and am also using laptop-mode-tools. I think this is doable.</p>
<p>Many sites have explained that constantly spinning down and spinning up your drives causes them to fail faster. I agree with this statement, but seeing that heat can also hurt computer components, spinning down the drives once a day should be fine. I would shut down the computer alltogether, but that would then prevent me from being able to access the server if I need to.</p><hr /><p>These websites were very helpful for ACPI:</p>
<p><a href="http://ubuntu.wordpress.com/2005/11/04/enabling-cpu-frequency-scaling/" onclick="window.open(this.href, '_blank'); return false;">http://ubuntu.wordpress.com/2005/11/04/enabling-cpu-frequency-scaling/</a></p>
<p><a href="http://forums.gentoo.org/viewtopic.php?p=1970584" onclick="window.open(this.href, '_blank'); return false;">http://forums.gentoo.org/viewtopic.php?p=1970584</a></p>
<p><a href="http://gentoo-wiki.com/HOWTO_PowerNow%21" onclick="window.open(this.href, '_blank'); return false;">http://gentoo-wiki.com/HOWTO_PowerNow%21</a></p>
<p><a href="http://www.tldp.org/HOWTO/html_single/ACPI-HOWTO/" onclick="window.open(this.href, '_blank'); return false;">http://www.tldp.org/HOWTO/html_single/ACPI-HOWTO/</a></p>
<p><a href="http://www.columbia.edu/~ariel/acpi/acpi_howto.txt" onclick="window.open(this.href, '_blank'); return false;">http://www.columbia.edu/~ariel/acpi/acpi_howto.txt</a></p>
<p>And this one for apcupsd:

<a href="http://www.apcupsd.org/manual/" onclick="window.open(this.href, '_blank'); return false;">http://www.apcupsd.org/manual/</a></p>

¥

