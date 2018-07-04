---
title: Intel D201GLY Little Valley Photos and Height
comments:
  - author: Ales.P
    email: ales@pirec.info
    ip: 194.152.8.51
    url: http://www.pirec.info
    date: 06/28/2007 02:04:51 PM
    text: >
      Thanks for the pics. Now I'm even more sure then i was before - I am so going to get this baby :)<br/><br/>As for the nickname, I like your suggestion but i think Little Valley is more of a "bling bling" name that goes with this board and is therefor better.<br/><br/>Did you by any chance try it out? :)
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 06/28/2007 07:07:36 PM
    text: >
      I did try it out - it works fine. It does use more power than I would like to see: around 25 watts. You can easily get cheaper motherboards that use less power, but they aren't mini-itx.
  - author: Komissar
    email: info@ibworm.com
    ip: 207.81.20.76
    url:
    date: 06/29/2007 09:54:09 AM
    text: >
      I'm putting together a desktop cnc machine, and I'm planning to use this unit because of its size and it has a parallel port. Linux Ubuntu will be the os of choice. However I'm not sure about the processor, can it be swapped out with a faster cpu, and if it can which would you recommend?
  - author: Gary
    email: garretto@all2easy.com
    ip: 68.107.11.175
    url:
    date: 06/29/2007 01:46:30 PM
    text: >
      From the specs I understand that the S3 (sleep) state is not supported on the Little Valley board. Anyone tested this yet?
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 06/29/2007 03:42:04 PM
    text: >
      I just checked the bios and yep, s3 is not there. It only has S5.
  - author: Gary
    email: garretto@all2easy.com
    ip: 68.107.11.175
    url:
    date: 06/29/2007 04:14:08 PM
    text: >
      Thanks admin for the confirmation. I also note that the graphics supports directx 7 and not 9. For my app this is not turning out to be a bargain.
  - author: admin
    email: albert.lash@savonix.com
    ip: 72.70.66.205
    url:
    date: 06/30/2007 11:58:13 AM
    text: >
      No problem Gary. This board has no bells and whistles - but that's why I like it!! :-) Do you need mini-itx for your application? What about noise level, does it need to be silent? What about networking? Are you building a set top box? MythTV? Gaming cube?<br/><br/>For me, I need good networking and low power consumption. I've also used the VIA EPIA-EN12000EG with good results, but I found out too late that the onboard nic, the via VT6122 doesn't support the ALTQ queueing algorithm (as used in pfsense). But it is supported by FreeBSD so I can at least use it with m0n0wall. That board is 3X as expensive as the little valley.
  - author: Greg
    email: gregjo@yahoo.com
    ip: 208.187.239.19
    url:
    date: 06/30/2007 12:13:34 PM
    text: >
      Admin, earlier you said:<br/>"You can easily get cheaper motherboards that use less power, but they aren’t mini-itx."<br/><br/>Can you elaborate on that a little. Size doesn't matter to me. I want to set up a low-volume web server. I just need fairly low power and low cost is good too. The "DUGLY" looks enticing....but I can go with a larger form-factor. What can you recommend?
  - author: Gary
    email: garretto@all2easy.com
    ip: 68.107.11.175
    url:
    date: 06/30/2007 06:11:08 PM
    text: >
      Admin, my app power budget is 12 watts average, noise &amp; fans ok, minimal networking and tough environmentals. Any bd with VIA chipsets conflict with my PCI bd. I'm entering sleep state to get low average power, hibernate reboots too slow. Good thing I read the DUGLY specs closely. Maybe Intel will get the word and improve this bd to fill some of the holes.
  - author: admin
    email: albert.lash@savonix.com
    ip: 72.70.66.205
    url:
    date: 06/30/2007 06:31:21 PM
    text: >
      12 watts is tough without a VIA chipset. What about the Soekris boards? It might be difficult to find a case for one of those and a pci card, though the soekris case is designed to fit some pci cards.<br/><br/><a href="http://www.soekris.com/" rel="nofollow">http://www.soekris.com/</a><br/><br/>The Soekris boards are a little pricey, but are well designed for their purpose.<br/><br/>Another idea would be the intel D915PCYL, available from Centrix International. I've done a lot of business with them and find them to be reliable.<br/><br/><a href="http://centrix-intl.com/details.asp?productid=2608" rel="nofollow">http://centrix-intl.com/details.asp?productid=2608</a><br/><br/>I haven't used this board yet, but plan to give it a try at some point. I doubt you'd be able to find a processor for it that can go under 12 watts, so you'd have to use sleep to save power.
  - author: admin
    email: albert.lash@savonix.com
    ip: 72.70.66.205
    url:
    date: 06/30/2007 06:46:12 PM
    text: >
      Oh and another possibility is the HP t5720 or t5725. It has an AMD Geode and uses very little power. It also has a PCI expansion option.
  - author: Ales.P
    email: ales@pirec.info
    ip: 194.152.8.51
    url: http://www.pirec.info
    date: 07/05/2007 03:48:57 PM
    text: >
      I got a question for you. Does the board have any kind of setting in the bios for the RAM, s that you could set a lower voltage and frequency or anything...<br/><br/>I am wondering if a DDR2-800 2.1V 1GB stick would work with DUGLY...
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/05/2007 06:54:35 PM
    text: >
      Gary - I'm having decent luck with the DUGLY booting from S5 with wake-on-lan, and otherwise am having a heck of a time finding any board that will successfully boot from wake on lan from S3. If you find one, let me know!!
  - author: Gary
    email: garretto@all2easy.com
    ip: 72.197.224.192
    url:
    date: 07/06/2007 01:09:15 AM
    text: >
      Admin - how long does it take to go from hibernate (s5) to full operation with wake-on-lan?
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.92.61.253
    url:
    date: 07/08/2007 06:07:09 AM
    text: >
      Approximately 45 seconds. The machine I just tested is running debian, and it took about 40 seconds to appear on the LAN. I was scanning the network repeatedly using nmap -sP 192.168.0.0/24, and then once it appeared I tried to login via ssh and was successful.
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.92.61.253
    url:
    date: 07/08/2007 06:09:50 AM
    text: >
      Ales.P - about the memory, I've only tried 533 and 600 DDR2 - but the little valley's bios are pretty limited anyway:<br/><br/><a href="http://www.docunext.com/blog/2007/07/d201gly-little-valley-bios.html" rel="nofollow">http://www.docunext.com/blog/2007/07/d201gly-little-valley-bios.html</a>
  - author: Ales.P
    email: ales@pirec.info
    ip: 194.152.8.51
    url: http://www.pirec.info
    date: 07/10/2007 01:14:17 PM
    text: >
      I just got the board and tried it out. It's not that bad :) And it has some memory settings. you can adjust speed (up to 800) and timings, so i have no problem with my stick i mentioned earlier :) And it isn't that loud, considering the little fan on the board.
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/10/2007 03:23:11 PM
    text: >
      Cool! Glad you like the board and thanks for sharing what you found about the memory speed settings. I agree - the fan really isn't too loud.
  - author: Kreed
    email: ncc288@yahoo.com.au
    ip: 202.135.97.163
    url:
    date: 07/11/2007 07:55:52 AM
    text: >
      Have you tried playing DivX/Xvid encoded media with this board?  How well does it perform?  I am not expecting it to play 1080p H.264 encoded media, but am hoping it will do well with standard DivX/Xvid.  I am thinking of getting one to serve as a DivX/Xvid player with MythTV.
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/11/2007 12:29:04 PM
    text: >
      I haven't tried encoding or decoding video, but in general I'm doubtful this board will be appropriate for MythTV. It only has a VGA out - no DVI or S-Video. :-(
  - author: Ales.P
    email: ales@pirec.info
    ip: 194.152.8.51
    url: http://www.pirec.info
    date: 07/11/2007 12:46:09 PM
    text: >
      i guess i was a little wrong. In BIOS it does have the option of setting a 800MHz speed of RAM, but unfortunately it doesn't work. 667MHz works thou. I'm guessing it's the max voltage (of RAM) limitation of the board. But, hey, as long as it works... ;)<br/><br/>P.S.<br/>After a few benchmarks, i found the performance of the board to be somehow in the range of Athlon XP and a motherboard with nForce2 chipset. I'd say that's pretty cool for the price of the board.<br/><br/>Although, the integrated graphic card is a class of it's own :) (DX7 Not-FTW)<br/><br/>But I still love the "little valley" board ;)
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.92.61.253
    url:
    date: 07/11/2007 08:31:58 PM
    text: >
      That's too bad about the 800MHz speed RAM. This board does have a lot of potential for the price, size, and power consumption. My favorite thing is the 512kb L2 cache!
  - author: Gorkem Cetin
    email: gorkem@gorkemcetin.com
    ip: 85.99.111.225
    url: http://www.gorkemcetin.com
    date: 08/09/2007 02:17:09 AM
    text: >
      Kreed: LV (Little Valley) does run Mythtv, and does this job well. I was able to play DivX/XVID videos either.  1080p is not possible I am afraid.<br/><br/>All in all, the performance is very good for such a nice card. I believe 512Mb cache makes a difference.
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 08/28/2007 01:29:02 PM
    text: >
      Gary - I just tested out the DG965SS, it sleeps fine in S3 and wakes up via WOL with a DSDT fix, 5 seconds to resume, 3 watts in sleep. Although its using 75 watts at idle, I've ordered a new cpu and plan to change the storage system.<br/><br/><a href="http://www.docunext.com/blog/2007/08/intel-dg965ss.html" rel="nofollow">http://www.docunext.com/blog/2007/08/intel-dg965ss.html</a>
  - author: chow
    email: chowanec@comcast.net
    ip: 67.188.38.224
    url: http://www.ourlittlehellraiser.com
    date: 09/30/2007 06:46:48 PM
    text: >
      i realize i am late to the party on this -- but I was thinking of picking this up and running ubuntu on it as a second (and hopefully very quiet) media pc.  the 'hdd' i am going to use is a 4gb flash drive installed on the ide slot on the board.  then i'll use nas to stream music (mostly, if not exclusively) to the system which will be connected to a stereo.  don't need any bells and whistles, to be honest... no monitor will even be used (i'll remote into it when i need to).<br/><br/>think it's safe to use this board?
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.92.61.253
    url:
    date: 09/30/2007 07:03:43 PM
    text: >
      Hi Chow - couple of notes:<br/><br/>* the little valley is quiet, but not silent<br/>* flash won't like too many writes, you are planning to store the media on another networked device?<br/>* 4GB is pricey for flash, you might try a different distro on a smaller flash drive - imedialinux, damnsmalllinux, or voyage linux<br/>* what interface are you planning to control the playback of the media?
  - author: chow
    email: chowanec@comcast.net
    ip: 67.188.38.224
    url: http://ourlittlehellraiser.com
    date: 09/30/2007 07:09:48 PM
    text: >
      -Planning to store the media somewhere else, yes.  Just streaming to it from the Little Valley machine.<br/>-Was going to VNC into the box when i need to setup playlists, etc.  Would use a second computer for that.<br/>-The flash disc was ONLY going to contain the operating system and relevant apps (media player, vnc mostly).  The 4gb is just for the OS.  I'm pretty sure I can get away with a 1gb flash for that, but I was 'future proofing."<br/><br/>LogicSupply.com has some relatively low-cost options: <a href="http://www.logicsupply.com/products/lv_5677" rel="nofollow">http://www.logicsupply.com/products/lv_5677</a><br/><br/>thanks.
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.92.61.253
    url:
    date: 09/30/2007 07:28:02 PM
    text: >
      Cool, all that sounds like good ideas. Logicsupply has great options, but I feel their prices are a little steep, deservedly so, their service is reliable.<br/><br/>The little valley is cheap, but you'll need a power supply and RAM too. I recently setup an ALIX board, which comes with 256mb of ram and an on board power supply. You can also use compact flash right on the alix board instead of having to get an adapter or use the more expensive disk-on-module. The issue is that most newer distros expect udma, which only some CF cards have.<br/><br/>Here's some info on the ALIX board I have running:<br/><a href="http://www.docunext.com/blog/2007/07/alix.html" rel="nofollow">http://www.docunext.com/blog/2007/07/alix.html</a><br/><br/>I should also mention the ALIX is completely silent, no fan is necessary, and it only uses 5 watts versus 25+ for the little valley. The little valley is much more powerful, but doesn't sound like you'll need it.
  - author: Urukum
    email: ilmanopola@yahoo.it
    ip: 88.213.155.42
    url:
    date: 10/15/2007 01:00:15 PM
    text: >
      what is the height of mainbord?
date: 2007-06-25
tags: d201gly,intel,mainboards
---

Here's a perspective shot of the Little Valley, with some common items nearby to get an idea of the relative size.



<h3>Little Valley Height</h3>

One thing I wanted to know about the Little Valley was its height. Its doesn't appear anywhere I could find in the intel docs, so I measured it. To the top of the heatsink / cooling fan it is 2". Because the CPU is actively cooled, meaning it uses the fan, you'll want to have the casing higher than that. How high? I don't know, it would depend on the application and ambient temperature.

<h3>Little Valley SATA</h3>

WHOA! I just noticed that there are spots for SATA plugs at the bottom of the board! That is very interesting indeed.
<h3>Little Valley Power Connectors</h3>

Other things of interest, the board does have a 4-pin power connector in addition to the 20 pin power supply connector, unlike some other mini-itx boards.

<h3>"DUGLY" - The D201GLY Nickname?</h3>

In the spirit of the mighty slug (aka Linksys NSLU2), I propose we nickname the D201GLY the "DUGLY". We have intel to thank for the terrific model number to build off of. :-)

¥

