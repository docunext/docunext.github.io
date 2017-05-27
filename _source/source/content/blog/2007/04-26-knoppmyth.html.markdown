---
title: Knoppmyth
date: 2007-04-26
tags: none
author: Albert Lash
---
I just recently installed knoppmyth on a computer.  These are the steps I took to install the program.

1. First I went to www.knoppmyth.net and downloaded the iso.

2. Then I burned the iso image to a disc.

3. After I booted up the cd on the machine, I chose auto install.

4. Then I had to edit the settings such as timezone, date, etc.

It took around 20 minutes to install knoppmyth on the computer.  The installation process was pretty straightforward, as there weren't any areas I had trouble handling.
<h3>ID "c7" was respawning too fast: disabled for 5 minutes Error</h3>

Although, after I rebooted the computer, it said:

<pre>ID "c7" was respawning too fast: disabled for 5 minutes</pre>

I discovered that all you need to do to bypass this message is press enter.  Then it brings you to the root prompt. This error is preceded by the screen flashing a few times as the xserver is trying to start.

The KnoppMyth <a href="http://www.knoppmyth.net/pamphlet.html">Pamphlet</a> says the x11 should have started after the auto install, but for some reason it didn't.  Not sure why.  After that we tried a new graphics card (ATI XL/8M PCI), however upon rebooting we ran into the same problem.  The following message was displayed when we tried to manually "startx":

<pre>fatal server error: no screens found</pre>

We are attempting to get KnoppMyth to display a GUI (graphical user interface), which tells us that the program is running properly.  Now we are trying to update the installation to solve the problem.  <ol><li>Step one, installed xdebconfigurator (didn't work).</li><li>Step two, installed xvfb (didn't work).</li><li>Step Three xfce4 (still nothing).</li><li>Step four installed xserver-xorg</li><li>Step five was an apt-get upgrade for the entire distro</li></ol>

One thing we noticed was that the debian.geole.info source in /etc/apt/sources.list wasn't responding, so we commented it out. After the upgrade, we ran dpkg-reconfigure xserver-xorg and  then startx, and xfce4 appeared! :-)

Now comes the mythtv-setup process. We started this with the command:

<pre>mythtv-setup</pre>
<h3>Hardware Setup</h3>

The following is an overview of the hardware we used to build our mythtv settopbox:

<ul><li>Video card: ATI XL/8M PCI</li><li>TV Tuner Card:</li><li>Processor: </li><li>Mainboard:</li></ul>

