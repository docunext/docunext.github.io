---
title: NRPE port
date: 2007-02-05
tags: nagios
---
Now I'm trying to configure nrpe to work with nagios2, this follows-up on some prior work a consultant did for us. I think the only thing I need to do is open up a port on the firewall which I think it port 5666. That port was already open for use with our asterisk server, but only to our sip server. I've opened it up to the Nagios server and now I'll wait to see if I get another warning.

Yes! That did the trick. Just got this Nagios notification email:

<pre class="sh_sh">***** Nagios  *****
Notification Type: RECOVERY
Service: RAID Status
Host: hostname
Address: example.com
State: OK
Date/Time: Mon Feb 5 09:21:06 EST 2007
Additional Info:
All md devices Ok.
</pre>

[Email edited for publishing.]

