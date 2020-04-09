---
title: AOpen Machine Rebuild
date: 2007-06-11
tags: aopen,energy,hardware
---
I'm rebuilding my AOpen small footprint PC which I had originally setup as a fast, low power NAS device. It didn't work out that way. I'm replacing the Turion with a low-cost Athlon 64, as well as removing the 3Ware 9650 2 port SATA card.

Previously the rig used around 80 watts of power at idle, and I had many many issues with frequency scaling of the Turion. I think the motherboard in the AOpen just didn't support the Turion, though it seemed to at first.

The barebones box is an "AOpen XC Cube EX761", and here are the drivers for it:

<a href="http://download.aopen.com.tw/Default.aspx">AOpen Drivers</a> (You have to navigate, they don't have a direct link! :-()

Here's the <a href="http://www.docunext.com/2007/06/linux-bios-update.html">instructions I used to update the bios when running the linux operating system</a>.

After replacing the chip, I was still getting the ACPI errors. Great. I just checked the AOpen site and there are new BIOS. While they don't mention my problem exactly, hopefully it will be fixed with the update. Amazing, the bios update worked. I'm no longer getting errors. Should I re-install the Turion? Errr, not today. 75 watts is a lot, but bearable I guess.

<a href="http://www.docunext.com/2007/06/turion-on-the-desktop.html">Turion 64 on the Desktop</a>

<a href="http://www.docunext.com/2007/03/amcc-3ware-9650se-sata-ii-pci-express-raid-card-review.html">3Ware 9650 Review</a>

<a href="http://www.docunext.com/2007/03/turion-64.html">Turion 64 Review</a>

<a href="http://www.docunext.com/2007/03/cpu-undervolting-and-underclocking.html">CPU Undervolting and underclocking</a>

