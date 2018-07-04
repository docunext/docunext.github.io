---
title: Sil 3132 PCI Express SATA II Cards
comments:
  - author: ariel
    email: ariel@ezsolutions.com.ar
    ip: 190.189.233.217
    url:
    date: 05/21/2011 02:57:52 PM
    text: >
      hi!! i don't find this version of bios in the silicon image page support. where do you find it? many thank you so much!!
  - author: Albert
    email: albert.lash@savonix.com
    ip: 71.178.29.215
    url:
    date: 05/21/2011 03:30:45 PM
    text: >
      Hi Ariel, its been too long, I can't remember. Let me know if you do find it though. Thanks, Albert
date: 2007-06-12
tags: debian,firmware,sata,storage,troubleshooting
---
<strong>I finally got my PCI Express SATA II cards working with Debian GNU/Linux!</strong>

PCI Express and SATA II are relatively new technology, so support hasn't been fully established by the open source community. Still, these look to be solid technologies that will be around for awhile, so I've decided to get started with them now.

#### Troubleshooting

I had incorrectly upgraded them with the **7045.bin** file, which caused the system to freeze upon the Sil 3132 bios post. I re-flashed the cards with the **r7045.bin** file and now it posts fine and continues booting. :-)

These are really great cards for the price. **With a few minutes during the debian install you can build a really sweet raid5 system.** Very nice indeed.

FYI: I think these cards use either the sata_sil24 or siimage kernel modules, which are commonly available on linux.

¥

