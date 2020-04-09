---
title: No more DRBD
comments:
  - author: Harvey
    email: acidforums@aol.com
    date: 11/26/2007 03:50:25 PM
    text: >
      well after reading ur review on how freenas went i tried it for myself too,<br/>i had a old dell poweredge i thought i'll give it a try onit first and if it runs better then naslite i'll switch over and after minute i was up and running i really do like this version, much better then using naslite and another major difference is naslite cost money to download and freenas doesnt.......<br/>i have already wipe my other system and installed freenas onto it,<br/>still to try all the featurs but sooooooooooooooooooooo far very very good..........<br/>by the way anyone want a free copy of naslite before i throw it where it belongs in the BIN!!!<br/>FREENAS RULES!!!
  - author: Albert
    email: albert.lash@savonix.com
    date: 11/26/2007 03:53:54 PM
    text: >
      Hey Harvey! If you like Freenas, you might also like m0n0wall, pfsense, and askoziaPBX. All good stuff. Thanks for commenting...
date: 2007-07-17
---
I stopped my highly available DRBD server setup today. The way I had it setup wasn't optimal, but it was a worthwhile effort and experiment. I had my system setup as a primary / secondary, which I don't believe is as optimal as a primary / primary setup. I found the delay time between the transfer to be slow, and recovery to be problematic with my configuration. Perhaps I set it up wrong, but it wasn't worth having two machines up 24/7.

As an alternative, I plan to use FreeNAS, which I believe to be incredibly stable due to the fact that it uses FreeBSD and compact flash as its OS storage mechanism.

UPDATE: I installed the latest version of FreeNAS today and I'm really impressed with the improvements over just the last beta version (I think they may have even <a href="http://www.docunext.com/blog/2007/06/19/freenas-on-a-asus-terminator-c3/">fixed the NFS bug</a>). Its a terrific product, if you haven't tried it - download it today! Another thing I noticed in the newer version of FreeNAS is that the console sets up the LAN ip to have an IPv6 address - I gotta try it out. I've been meaning to start using IPv6 but hadn't had a good excuse yet.

¥

