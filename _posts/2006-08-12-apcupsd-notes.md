---
title: apcupsd Notes
date: 2006-08-12
tags: power,ups
---
After trying out a few uninterruptible power supplies from two manufacturers:

* Cyber Power
* APC

I definitely like APC better. Their apcupsd tool is awesome, and its open source. However, I've been trying to figure out how to monitor energy usage, and I can't seem to come up with any info on this. I'd like to see the current wattage or amperage that is getting used.

apcaccess dumps a bunch of info to my screen, but none of it includes what I'm looking for. See here:

<pre class="sh_sh">
APC      : 001,035,0947
DATE     : Sat Aug 12 08:21:59 EDT 2006
HOSTNAME : localhost
RELEASE  : 3.12.3
VERSION  : 3.12.3 (26 April 2006) debian
UPSNAME  : localhost
CABLE    : USB Cable
MODEL    : Back-UPS ES 500
UPSMODE  : Stand Alone
STARTTIME: Wed Aug 09 18:15:11 EDT 2006
STATUS   : ONLINE
LINEV    : 119.0 Volts
LOADPCT  :  37.0 Percent Load Capacity
BCHARGE  : 100.0 Percent
TIMELEFT :  21.8 Minutes
MBATTCHG : 5 Percent
MINTIMEL : 3 Minutes
MAXTIME  : 0 Seconds
LOTRANS  : 088.0 Volts
HITRANS  : 138.0 Volts
ALARMDEL : Always
BATTV    : 13.5 Volts
LASTXFER : Unacceptable line voltage changes
NUMXFERS : 1
XONBATT  : Fri Aug 11 18:13:21 EDT 2006
TONBATT  : 0 seconds
CUMONBATT: 7 seconds
XOFFBATT : Fri Aug 11 18:13:28 EDT 2006
STATFLAG : 0x07000008 Status Flag
MANDATE  : 2005-04-12
SERIALNO : JB0516011587
BATTDATE : 2000-00-00
NOMBATTV :  12.0
FIRMWARE : 01.e5.D USB FW:e5
APCMODEL : Back-UPS ES 500
END APC  : Sat Aug 12 08:22:37 EDT 2006
</pre>


