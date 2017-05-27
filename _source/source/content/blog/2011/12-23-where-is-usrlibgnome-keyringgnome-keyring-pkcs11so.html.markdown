---
title: Where is usr lib gnome keyring gnome keyring pkcs11.so 
date: 2011-12-23
tags: debian,gnome,ubuntu
---
I've been wrestling with Gnome Keyring during the transition to Gnome 3 on Debian, and Ubuntu 11 (all with Awesome WM).

One interesting snag was the relocation of **/usr/lib/gnome-keyring/gnome-keyring-pkcs11.so** to **/usr/lib/pkcs11/gnome-keyring-pkcs11.so**.

<pre>
root@asee-mm-02:/usr/lib/gnome-keyring# ln -s /usr/lib/pkcs11/gnome-keyring-pkcs11.so ./
</pre>

I don't like to do these types of workarounds, but a softlink isn't too bad.

I got fed up with gnome keyring sufficiently that I again installed keychain. Perhaps its what's caused [this](http://www.docunext.com/blog/2011/12/gnome-keyring-daemon1907-unsupported-key-algorithm-in-certificate-128401004521.html)?

