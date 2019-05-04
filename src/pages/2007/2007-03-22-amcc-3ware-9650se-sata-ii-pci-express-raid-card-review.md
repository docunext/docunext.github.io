---
title: AMCC 3Ware 9650SE SATA II PCI Express RAID Card Review
date: 2007-03-22
tags: 3ware,debian,hardware,ubuntu
---
<a href="http://www-sa.evenserver.com/s/img/2007/03/img_0138.JPG" title="AMCC 3Ware 9650SE SATA-II PCI-Express RAID Card" class="thickbox">
<img src="http://www-sa.evenserver.com/s/img/2007/03/img_0138.thumbnail.JPG" alt="AMCC 3Ware 9650SE SATA-II PCI-Express RAID Card" /></a><b>
</b><a href="http://www-sa.evenserver.com/s/img/2007/03/img_0138.JPG" title="AMCC 3Ware 9650SE SATA-II PCI-Express RAID Card"></a><b>
</b><div><b>The Desired Setup</b>
I bought the 2-port version of this card. It only supports RAID 0/1 or JBOD, RAID 0 being my desired setup with 2 500GB drives. I first installed it into an AOpen XC Cube EX761 with an AMD Turion MT-37 processor, and two gigs of RAM. I was aiming for a high performance, high efficiency, large storage device for running virtual machines, and pretty much whatever I could throw at it.
<b>
</b><div><b>Fiesty Fawn is a Go</b>
I did a little research and found that Fiesty Fawn Ubuntu would be the best distro, because it had drivers for the 3Ware card as well as the GigE Intel PCI card I installed next to the 3Ware. The install went great, from hardware to software, everything was pretty smooth. After the install, I put the cover on and booted it up again. No luck, the card was not getting detected. As I griped about in a previous post about the <a href="http://www.docunext.com/blog/2007/03/21/turion-64/">Turion 64</a>, AMCC put the card to market with this fatal flaw: <a href="http://www.3ware.com/KB/Article.aspx?id=14932">the 3Ware card is not detected on a cold boot, only upon a warm boot, or reboot</a>.<b>
</b><b>
</b><div><b>S'up with the cold boot dilly?</b>
In the end, I decided to keep the card considering the amount of time invested in it (yes, I'm stubborn!). The card is pretty sweet though: it has a nice sized cache and comes with 3Ware's continued attention to the linux market (hopefully its not fading!!!). In fact, I was pleasantly surprised to find that I was able to flash the firmware within linux (I recently bought some Syba Sata-II cards with the SiI chipset, but they required Windows to flash the latest firmware. Grrr.) The good feelings about 3Ware and linux didn't last long though, as the cold start problem remained after the firmware upgrade. Based on the confidence they expressed on their support website, I figured the problem was isolated to a few motherboards, like the old one in the AOpen XC Cube. After trying the card in an ASUS Vintage AE2, the same nasty problem reared its ugly head. Bummer. In my humble opinion, if two different motherboards cannot detect the same card on a cold start, but can on a warm one, the fault is with the card, not the motherboard. Maybe I'm biased because I don't see AOpen updating their XC Cube bios anytime soon. They are VERY limited to begin with, but surprisingly smart enough to detect and properly supply voltage to a unique chip like the Turion MT-37. Maybe not exactly the proper voltage, but pretty close.<b>
</b><b>
</b><div><b>Conclusion</b>
If not for the limited bios and the 3Ware problem, this setup would really be a powerful setup. A powerful, energy efficient beast of a machine, for file service, desktop, or general workhorse. In conclusion, had I knows about these issues, I would not have purchased the AMCC 3Ware 9650SE SATA-II PCI-Express RAID Card. The silver lining here is that I almost bought the 3Ware 4-port version of the same card as well! :-)

PS - One last thing about the AOpen - the display was crazy at 1280x1024 with wierd squiggly lines all over the place. Not sure if it was a driver or feedback, but 1024x768 worked fine.

<a href="http://www.3ware.com/products/sys_compatibility.asp" rel="nofollow">http://www.3ware.com/products/sys_compatibility.asp</a></div></div></div></div>

