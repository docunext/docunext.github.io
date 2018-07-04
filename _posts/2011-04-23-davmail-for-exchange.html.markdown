---
title: DavMail for Exchange
date: 2011-04-23
tags: exchange
---
I recently switched from Mac OS X to Debian at work, and one of the hurdles was accessing the Microsoft Exchange server.

I tried Empathy because it reportedly has support for Microsoft Exchange, but was stymied by the fact our server is running Microsoft Exchange 2007. Empathy supports 2003 out of the box, and there is a plug-in to support 2007, but only under certain circumstances; all I could get was an MAPI authentication error.

Thankfully, there is DavMail! Its a small java-based proxy that can connect any type of mail client that supports IMAP or POP to an Exchange server.

#### But Wait! There is MORE! iCal and LDAP are supported, too!

Yes, its true. Its quite nice that it can support basic e-mail (I'm using Thunderbird, actually Iceweasel since I'm on Debian), but with the Thunderbird Lightning extension, it also supports shared calendering!

On top of this, addressing of emails can be supported by LDAP, meaning auto-complete of emails known to ActiveDirectory, that is actually quite nice.

