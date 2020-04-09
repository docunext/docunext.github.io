---
title: ipw2200 WPA2 with pfSense and atheros
date: 2008-02-06
tags: atheros,security,wireless
---
I'm working to get my laptop to use WPA2 with the AES encryption algorithm so that it can use the Via C7 padlock acceleration.

* <http://www.ces.clemson.edu/linux/fc2-ipw2200.shtml>
* <http://bughost.org/bugzilla/show_bug.cgi?id=697>
* <http://bughost.org/bugzilla/show_bug.cgi?id=771>
* <http://ubuntuforums.org/archive/index.php/t-296790.html>
* <http://www.linux.com/feature/55617>

According to the Ubuntu link there, CCMP means AES. However, when I debug wpa_supplicant, I get this:

<pre>WPA: Key negotiation completed with ... [PTK=CCMP GTK=TKIP]</pre>

Now its working - I have it working. I had to explicitly set WPA Key Management Mode to "Both" instead of just "Pre-shared key", and I also set WPA Pairwise to "AES" only instead of "Both". For some reason it wouldn't work with it set to "Both".

