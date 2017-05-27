---
title: Geode AES OCF Cryptodev OpenSSL
comments:
  - author: mello
    email: mello73@gmail.com
    ip: 83.103.75.254
    url:
    date: 01/09/2008 05:18:24 AM
    text: >
      Hi i followed your instruction on ubuntu gutsy and created patched deb for:<br/>libssl0.9.8_0.9.8e-5ubuntu3.1_i386.deb<br/>linux-image-2.6.22-14-generic_2.6.22-14.46_i386.deb<br/>openssh-client_4.6p1-5build1_i386.deb<br/>openssh-server_4.6p1-5build1_i386.deb<br/><br/>with openssl all was fine but with ssh under heavy traffic i got "CORRUPTED MAC", too. (all was fine, but slow, if i removed geode_aes module)<br/>Googling around i found another person with the same problem (on different crypto hardware), and the problem was driver of crypto device not waiting when busy.<br/>So i searched on crypto list and found many submitted patch to geode_aes module, one in particular was interesting:<br/><a href="http://www.mail-archive.com/linux-crypto@vger.kernel.org/msg01214.html" rel="nofollow">http://www.mail-archive.com/linux-crypto@vger.kernel.org/msg01214.html</a><br/><br/>So i downloaded last source from git (be careful that you need the new aes.h under include/crypto/) and recompiled geode_aes (and geode_rng too).<br/>Now ALL WORKS!!!!
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 01/09/2008 11:32:27 AM
    text: >
      Thanks for that mello - awesome! I'm very interested in getting ssh to work without that corrupted mac issue. I wrote into the list about it but the maintainer was about to go on vacation... glad to hear its been resolved.
  - author: Ulrich Müller
    email: um@gregory.sax.de
    ip: 91.14.237.122
    url: http://hackshack.dyndns.dk
    date: 02/07/2008 03:51:15 AM
    text: >
      I'm not sure if I got the same problem with the buggy geode_aes while crypting the harddrive. Using geode_aes the filesystem gets crippled. I'm using Ubuntu 7.10. server on an alix1c board. May be I will give the patches a chance ...
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 02/07/2008 11:09:31 AM
    text: >
      Hi Ulrich - which method are you using to crypt the file system? Luks? dm-crypt? I just setup an encrypted home for the first time with a Via C7, so I'll try out my ALIXC1 board and see if I have the same results as you.
  - author: Ben
    email: b@benj.cc
    ip: 65.48.36.4
    url:
    date: 02/15/2008 12:12:38 PM
    text: >
      I have all of this working which is great, but how do you get OpenVPN to utilize cryptodev?
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 02/15/2008 11:56:15 PM
    text: >
      Hi Ben - I believe OpenVPN uses OpenSSL - so if you can set that up to use cryptodev, openvpn should do the same. Are you using a C7?
  - author: Ben
    email: b@benj.cc
    ip: 69.135.182.206
    url:
    date: 02/16/2008 10:27:50 AM
    text: >
      Recompiling OpenVPN with the new OpenSSL libs was all it required to get it to show up in OpenVPN's supported engines - however i'm seeing "cryptosoft: setkey failed -22 (crt_flags=0x200000)" when testing OpenVPN (when using aes-128), and i noticed the message also appears when doing the openssl test despite the noticeable speed increase during the test.  the difference is that OpenVPN temporarily locks the machine when that string appears in dmesg.
  - author: Ulrich Müller
    email: um@gregory.sax.de
    ip: 91.14.244.105
    url: http://hackshack.dyndns.dk
    date: 02/17/2008 04:19:37 AM
    text: >
      * rmmod aes-i586<br/>* modprobe geode-aes<br/>* cryptsetup -c aes -s 128 -h sha256 luksFormat /dev/hda6<br/>* cryptsetup luksOpen /dev/hda6 cryptohome  -- I'm using luks<br/>* mkfs.ext3 /dev/mapper/cryptohome<br/>* mount /dev/mapper/cryptohome /home<br/>   Sometimes problemes already started here! Superblocks werde damaged right after the fs was created.<br/>* If I could mount, copying some larger files definitivly killed the fs.<br/><br/>I'm using Ubuntu 7.10
  - author: Ulrich Müller
    email: um@gregory.sax.de
    ip: 91.14.244.105
    url: http://hackshack.dyndns.dk
    date: 02/17/2008 04:22:33 AM
    text: >
      # rmmod aes-i586<br/># modprobe geode-aes<br/># cryptsetup -c aes -s 128 -h sha256 luksFormat /dev/hda6<br/># cryptsetup luksOpen /dev/hda6 cryptohome<br/># mkfs.ext3 /dev/mapper/cryptohome<br/># mount /dev/mapper/cryptohome /home<br/><br/>Sometimes even mounting right after the mkfs didn't work because of a corrupted superblock. Copying several larger files kill the fs anyway.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 02/19/2008 11:41:50 AM
    text: >
      This is a real problem - it appears that every use of the geode-aes module results in problems. Its very hard to say where the problem lies, but my gut is pointing me towards OpenBSD so that I can try out their driver. I just pasted the man page here:<br/><br/><a href="http://www.docunext.com/wiki/Geode_LX_AES_Security_Block" rel="nofollow">http://www.docunext.com/wiki/Geode_LX_AES_Security_Block</a>
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 02/19/2008 11:42:15 AM
    text: >
      Looks like some folks are having problems with that too:<br/><br/><a href="http://kerneltrap.org/mailarchive/openbsd-misc/2007/11/10/402146" rel="nofollow">http://kerneltrap.org/mailarchive/openbsd-misc/2007/11/10/402146</a>
  - author: Mark
    email: iceage1@gmail.com
    ip: 84.74.90.154
    url:
    date: 04/18/2008 01:48:51 AM
    text: >
      Has anybody ported the ocf-linux patch to 2.6.24?<br/>It seems that there has been some recent refactoring work<br/>done in the scratchlist area (sg_page)
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 04/18/2008 10:29:14 AM
    text: >
      I just checked the ocf-linux page and it says the patch set will work with most 2.4 and 2.6 kernels up to and include 2.4.34 and 2.6.23. Unless the website needs to be updated, looks like it hasn't happened yet.
  - author: Mark
    email: iceage1@gmail.com
    ip: 84.74.90.154
    url:
    date: 04/27/2008 11:39:17 AM
    text: >
      ...there is an interim patch available which allows you to use ocf-linux on more recent kernels. Check the ocf-linux mailing list.
date: 2007-09-25
tags: alix
---
Just finished up some more tests of the Geode security block using OCF-linux, cryptodev, and OpenSSL. The results are awesome. Check 'em out on the Docunext Wiki:

<a href="http://www.docunext.com/wiki/My_Notes_on_Patching_2.6.22_with_OCF#The_Results">Geode AES + OCF + Cryptodev + OpenSSL = Wicked fast encryption</a>

¥

