---
title: secret service operation failed Activation of org.freedesktop.secrets timed out
date: 2010-05-04
tags: awesomewm,gnome-keyring-daemon
---
Something I updated today or recently caused nm-applet to no longer work. It was disappearing from my panel, but was apparently trying to run. I was getting syslogs like this:

<pre class="sh_sh">
May  3 23:54:28 wrk-240-gr kernel: [  840.493921] wlan0: authenticated
May  3 23:54:28 wrk-240-gr kernel: [  840.493928] wlan0: associate with AP 00:1d:73:18:12:fc
May  3 23:54:28 wrk-240-gr kernel: [  840.496123] wlan0: RX ReassocResp from 00:1d:73:18:12:fc (capab=0x401 status=0 aid=2)
May  3 23:54:28 wrk-240-gr kernel: [  840.496130] wlan0: associated
May  3 23:54:28 wrk-240-gr kernel: [  840.497211] wlan0: disassociating by local choice (reason=3)
May  3 23:54:28 wrk-240-gr wpa_supplicant[2066]: No network configuration found for the current AP
</pre>

First it hung when awesomewm's rc.lua tried to launch it via:

<pre class="sh_sh">
os.execute("nm-applet &")
</pre>

So I killed that process and tried starting it manually... major hangs! First I was getting this:

<pre class="sh_sh">
** (process:3564): WARNING **: error: failed to read connections from org.freedesktop.NetworkManagerUserSettings:
    The name org.freedesktop.NetworkManagerUserSettings was not provided by any .service files
</pre>

Then I figured out that nm-applet now uses consolekit (or policykit?) to authenticate. I had previously held back consolekit from upgrading so I manually upgraded it, as well as network-manager-gnome.

This seemed to take me a little further, as when I'd try manually launching nm-applet, it would eventually respond with this notice:

<pre class="sh_sh">
secret service operation failed: Activation of org.freedesktop.secrets timed out
</pre>

OK, well, I found this file **/usr/share/dbus-1/services/org.freedesktop.secrets.service**:

<pre class="sh_sh">
[D-BUS Service]
Name=org.freedesktop.secrets
Exec=/usr/bin/gnome-keyring-daemon --start --foreground --components=secrets
</pre>

So I took a shot in the dark and started gnome-keyring-daemon manually, and then when I tried nm-applet, it prompted me for a password. Sweet!

What next? I decided to start gnome-keyring-daemon via awesome's rc.lua:

<pre class="sh_sh">
#ck-launch-session
#gnome-settings-daemon &
gnome-keyring-daemon &
#gnome-power-manager &
set -a
. /etc/environment
wmname LG3D
xsetroot -cursor_name dmz
exec awesome
</pre>

After that, at least when I logged in, it would prompt me to unlock the default keychain. Thankfully, when I expanded the details section, I was able to click a box that allowed me to always unlock that keychain upon login.

Notes:

* I use Debian
* I run AwesomeWM, launched via xdm
* I use hal
* I'm in the netdev group

Links:

* [cnetworkmanager dbus config prevents nm-applet from asking about password](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=578408)
* [nm-applet does not show up](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=572714)

