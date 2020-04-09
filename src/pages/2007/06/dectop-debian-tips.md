---
title: decTop Debian Tips
comments:
  - author: olarcheveque
    email: olivier.larcheveque@gmail.com
    date: 12/20/2007 11:04:32 AM
    text: >
      Nice tips!<br/>I have just bought one, and I am wondering what performances I can hope : actually, I would install subversion, trac, apache, mysql, so do you think I dream?
  - author: Albert
    date: 12/20/2007 07:04:06 PM
    text: >
      You should be OK, but you might run out of RAM, and take note that the USB - Ethernet dongle is USB 1.1, meaning it is really slow.
  - author: Christoph Flügel
    email: blog@fluegel.name
    url: http://blog.fluegel.name/christoph/
    date: 01/27/2008 01:16:56 PM
    text: >
      I will get my Dectop in the next few days. And I saw that you added the sound-modules to the blacklist file. Is there a sound support for the dectop yet?<br/><br/>I'll rant about my experience with the Dectop in my blog. (in german)  ;)
  - author: Christoph Flügel
    email: blog@fluegel.name
    url: http://blog.fluegel.name/christoph/
    date: 01/31/2008 03:18:28 PM
    text: >
      Ok after I played a bit around I can now see why you have added the sound modules to the blacklist ;) I have a few things on my todo list, but so far I am sure I can install the dectop into my car to do the dirty wlan/gps work for me.
  - author: Albert
    date: 01/31/2008 03:40:16 PM
    text: >
      Hi Christopher! That is a great idea for the dectop. What wlan / gps unit are you going to use? I guess it would have to be USB?
  - author: Christoph Flügel
    email: cfluegel@gmail.com
    url: http://blog.fluegel.name/christoph
    date: 03/09/2008 11:56:48 AM
    text: >
      Hi Albert. I will buy one from a tech dealer named Reichelt. I haven't looked for a particular one. I thought to use a bluetooth usb adapter to connect a bluetooth GPS unit and if possible at the same time a bluetooth enabled mobil phone.<br/><br/>I have some problems with the dectop. Firstly, the internal hard disk isn't powered down after the dectop shuts off. It keeps spinning till I remove the power plug. :/ Therefore I need some hardware solution to cut the power connection between the dectop and car battery, or otherwise my diesel wouldn't start the next time. (OkOK.. Only if i leave the dectop on for quite a while)
date: 2007-06-23
tags: acpi,dectop,memory,modules
---
## <strong>Here are some of my notes I took while installing Debian GNU/Linux on the dectop.</strong>

Edit /etc/default/acpid:

<pre># Specify options for acpid startup, Debian default is to enable the
# use of sockets at a non-default position
OPTIONS="-s /var/run/acpid.socket"
# Specify modules to load on acpid's startup
# MODULES may be uncommented to load "none", contain the string "all"
# to load all acpi related modules or simply a space seperated list
# of modules to be probed.#MODULES="battery ac processor button fan thermal"
MODULES="none"</pre>

Add to the bottom of /etc/modprobe.d/blacklist (this will remove sound!):

<pre>
blacklist snd
blacklist ipv6
blacklist snd_cs5535audio
blacklist snd_ac97_codec
blacklist snd_pcm
blacklist snd_timer
blacklist snd
blacklist battery
blacklist pcspkr
blacklist fan
blacklist processor
blacklist thermal</pre>

Remove device mapper from init scripts:

<pre>update-rc.d -f libdevmapper1.02 remove</pre>

Comment out the extra consoles in inittab, leaving one for general console access. Speaking of which, its too bad that the dectop doesn't have an rs232 / db9 serial connector. :-(

Even though the dectop doesn't have a fan, I've listed "none" in the acpid config, and have them blacklisted, fan, thermal, and processor are still loading upon boot. Not sure how to keep them from getting loaded short of stopping acpi altogether Any suggestions?

With those changes, debian only needs approximately 21MB of ram, leaving up to 80MB of ram for your other stuff!

<pre># free             total       used       free     shared    buffers     cached
Mem:        106756      21484      85272          0       2664      10828-/+ buffers/cache:       7992      98764
Swap:       305192          0     305192</pre>

<pre># ps -A  PID TTY          TIME CMD    1 ?        00:00:04 init    2 ?
00:00:00 ksoftirqd/0    3 ?
00:00:00 events/0    4 ?
00:00:00 khelper    5 ?
00:00:00 kthread    8 ?
00:00:00 kblockd/0    9 ?
00:00:00 kacpid   50 ?
00:00:00 kseriod   86 ?
00:00:00 pdflush   87 ?
00:00:00 pdflush   88 ?
00:00:00 kswapd0   89 ?
00:00:00 aio/0  532 ?
00:00:00 khubd  799 ?
00:00:00 kjournald  959 ?
00:00:00 udevd 1200 ?
00:00:00 kpsmoused 1727 ?
00:00:00 dhclient3 1741 ?
00:00:00 syslogd 1747 ?
00:00:00 klogd 1779 ?
00:00:00 acpid 1794 ?
00:00:00 sshd 1811 ?
00:00:00 cron 1835 tty1
00:00:00 getty 1842 ?
00:00:00 sshd 1846 ?
00:00:00 sshd 1847 pts/0
00:00:01 bash 1860 pts/0
00:00:00 su 1861 pts/0
00:00:00 bash 1864 pts/0
00:00:00 ps</pre>

Your could reduce it even more by turning off cron and syslog, but for now I'll keep those around.

ORIGINAL outputs for comparison:

<pre># free             total       used       free     shared    buffers     cached
Mem:        106756      23388      83368          0       2796      11320-/+ buffers/cache:       9272      97484
Swap:       305192          0     305192

# lsmod
Module                  Size  Used by
button                  6800  0
ac                      5252  0
battery                 9732  0
dm_snapshot            15644  0
dm_mirror              18000  0
dm_mod                 48952  2 dm_snapshot,dm_mirror
loop                   14216  0
tsdev                   7616  0
snd_cs5535audio        13628  0
snd_ac97_codec         82848  1 snd_cs5535audio
snd_ac97_bus            2432  1 snd_ac97_codec
rtc                    11572  0
rtl8150                11648  0
snd_pcm                65928  2 snd_cs5535audio,snd_ac97_codec
snd_timer              19972  1 snd_pcm
snd                    45412  4 snd_cs5535audio,snd_ac97_codec,snd_pcm,snd_timer
soundcore               8928  1 snd
snd_page_alloc          9736  2 snd_cs5535audio,snd_pcm
serio_raw               6532  0
cs5535                  4352  0 [permanent]
psmouse                34568  0
pcspkr                  2816  0
evdev                   9088  0
ext3                  116488  1
jbd                    47272  1 ext3
ide_disk               14848  3
ide_generic             1536  0 [permanent]
ohci_hcd               17540  0
usbcore               109444  3 rtl8150,ohci_hcd
generic                 5508  0 [permanent]
ide_core              107760  4 cs5535,ide_disk,ide_generic,generic
thermal                13576  0
processor              23724  1 thermal
fan                     4868  0</pre>

¥

