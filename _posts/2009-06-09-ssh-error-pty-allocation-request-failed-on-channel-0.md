---
title: Ssh Error PTY allocation request failed on channel 0
comments:
  - author: Massimo
    email: mcanonic@libero.it
    ip: 193.206.55.34
    url:
    date: 06/29/2009 12:46:21 PM
    text: >
      Hi,<br/>example.com is the virtual machine hostname where you could no log in? So, you have to modify the /etc/fstab of your VM?<br/><br/>Thanks,<br/> M
  - author: Albert
    email: albert.lash@savonix.com
    ip: 71.163.55.98
    url:
    date: 06/29/2009 12:49:53 PM
    text: >
      Yes - example.com is the machine I was having trouble logging into, and the second command is issued on that machine.
  - author: andy
    email: andrewsun@m165.com
    ip: 221.122.61.226
    url:
    date: 12/01/2010 01:15:33 AM
    text: >
      It's useful
date: 2009-06-09
tags: none
author: Albert Lash
---
Whoops! After cleaning up some virtual machines, I went too aggressive on some normal machines and removed some necessary stuff. I think I'll be able to fix this though, as I'm still able to issue commands via ssh.

I reinstalled and re-enabled udev but I was still having problems, so I did this:

<pre>
ssh example.com "sudo bash -i"

echo "none /dev/pts devpts defaults 0 0" >> /etc/fstab

mount -a</pre>

Then I was able to login again.

¥

