---
title: DLI SS20 via minicom
date: 2007-07-05
tags: serial,terminal,usb
---
This is a cool device but it takes a little getting used to. Here are my notes:

Used a null modem cable with a gender changer null modem adapter to go from the console machine (the controller) to the SS20. From there, I used straight through cables with straight through gender changers to connect to the target machines.

The serial port settings are a little annoying, but that's how serial connections are. For my soekris, I use these:

<pre class="sh_sh">
Serial Switch Unit Name: Serial Switch
+-----------------------------------------------------------------------+
| A -    Serial Device      : /dev/ttyS0                                |
| B - Lockfile Location     : /var/lock                                 |
| C -   Callin Program      :                                           |
| D -  Callout Program      :                                           |
| E -    Bps/Par/Bits       : 19200 8N1                                 |
| F - Hardware Flow Control : Yes                                       |
| G - Software Flow Control : No                                        |
|    Change which setting?                                              |
+-----------------------------------------------------------------------+
</pre>

For a standard machine, I use these:

<pre class="sh_sh">
Serial Switch Unit Name: Serial Switch
+-----------------------------------------------------------------------+
| A -    Serial Device      : /dev/ttyS0                                |
| B - Lockfile Location     : /var/lock                                 |
| C -   Callin Program      :                                           |
| D -  Callout Program      :                                           |
| E -    Bps/Par/Bits       : 38400 8N1                                 |
| F - Hardware Flow Control : Yes                                       |
| G - Software Flow Control : No                                        |
|                                                                       |
|    Change which setting?                                              |
+-----------------------------------------------------------------------+
</pre>

The machines:

* A - vmserver, for hosting virtual machines, 4GB RAM, start up and shutdown via ACPI, can use WOL to start. Gigabyte AM2 Motherboard - 38400 8N1 Hardware Flow Control
* R - PC Engines WRAP - 38400 8N1 Hardware Flow Control - running m0n0wall
* S - Soekris - 19200 8N1

(Settings confirmed March 2010)

You toggle the control screen with "~~".

UPDATE:

Now I'm using a USB-to-DB9 adapter, and I need to have both software and hardware flow control on to talk to m0n0wall at 38400-8N1. Weird. The adapter I'm using is a Rosewill with the prolific chipset which has drivers for Mac and linux:

<pre class="sh_sh">
[  363.740000] pl2303 1-2:1.0: pl2303 converter detected
[  363.744000] usb 1-2: pl2303 converter now attached to ttyUSB0
</pre>

The device itself is now set to 19200 8N1, no, yes, but I have to restart minicom to get access to it. Odd. I *think* most linux / unix machines use a standard of 9600 baud, so I might default it to that speed. At least that's what pfsense uses, and I've been using that more and more these days.

UPDATE: I'm now going to use "screen" instead of minicom. I type:

<pre class="sh_sh">
screen /dev/ttyUSB0 9600
</pre>

to access the console switch (I changed the rate to 9600), and if I want to access other ports at different rates, I exit screen and open a new connection to the device using a different speed.

