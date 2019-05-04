---
title: No Problem with Debian Roundcube
date: 2008-05-16
---
The RoundCube debian package ships with its own customized version of Net_SMTP, which gets used by other non-Roundcube applications, even if there is a PEAR Net_SMTP package installed. That's no good. :-(

I kept getting "undisclosed-recipients:, " in the to field of emails I was testing out, and when I search for it, up came RoundCube. Hmmm.

UPDATE! The title used to say Problem with Debian Roundcube, but I was wrong, there is no problem, but I still can't figure out why Net_SMTP won't take the recipient!

