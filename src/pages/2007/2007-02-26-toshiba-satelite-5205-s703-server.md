---
title: Toshiba Satellite 5205 S703 Server
date: 2007-02-26
---
I'm trying to setup a multi-purpose server on a Toshiba Satelite 5205-S703. I've been using Knoppix to investigate the possibility so far, and I've been amazed at how difficult the machine has been to work with. First off, there are no "usual bios". It is a "legacy free" machine, meaning you have to use a Windows-based Toshiba tool to edit the machine information. Thanks Toshiba. Sheesh.

But, if you press F12 on startup, you can at least select from a few different options. Astoundingly, if you have removed your hard drive - the CD drive won't work either! Luckily I had an old 2GB 2.5" drive that is useless for anything besides a swap on a system like this.

Knoppix is a little over the top for me, so I've instead decided to go with Puppy Linux. The fact that the Satellite has a DVD burner in it makes it a lot cooler, so I plan to try using to keep updating a multisession Puppy Linux livecd. There are still a few kinks to work out:

<ul><li>sshd server</li><li>Auto-boot to CD</li></ul>

I found another Puppy distro called <a href="http://www.grafpup.com/">Grafpup</a>, which plans to be a graphics distribution. On their website, they mention including mysql in a future release. I was able to get mysql working incredibly easy thanks to <a href="http://www.apachefriends.org/en/xampp.html">Apachefriends.com XAMPP</a> install.
<h3>Installing XUbuntu on Compact Flash</h3>

The Satellite has a PCMCIA card, and I have an extra PCMCIA CF reader. In addition to that, the boot screen has an option for to boot off PCMCIA. Will it work? Only time will tell, the install is going a little slow and will finish in about a half an hour. Nope, not going to happen. I guess both Xubuntu and regular ubuntu both need more that 2GB of storage to operate.
<h3>Installing DSL on Compact Flash</h3>

While I like Puppy Linux for small installs, it can't support apt-get very well (non-presistent /var). The alternative is Damn Small Linux (DSL), which is based off knoppix, or Bonzai. DSL seems to have more of a support communty than Bonzai, so I'm trying DSL first. <a href="http://www.damnsmalllinux.org/dsl-hd-install.html">Damn Small Linux has the capability of running apt-get</a>. To install, it needs 200MB of storage - nice! It installed OK, but the Satellite refused to boot off it. Argh. One of the options when booting "install" from the DSL livecd is create a PCMCIA boot disk, so I guess it makes sense that it won't boot directly off it.
<h3>Back to Xubuntu, now on a hard drive</h3>

I took the 20GB hard drive that used to hold Windows 2000 for my Toshiba 2805-s203 (now running Puppy) and formatted it to hold Xubuntu. Thankfully, before I wiped the drive, <a href="http://www.docunext.com/blog/2007/02/17/move-an-existing-windows-2000-installation-to-a-virtual-machine-success/">I was able to migrate my Windows 2000 install to a Q virtual machine</a>. The goal here: install Puppy Linux to a DVD-R to setup a XAMPP server on it as a multisession CD. This will be a decent setup: dual boot between Puppy Linux and Xubuntu. <b>Reducing power consumption</b>

When installing Xubuntu, laptop-mode-tools to <a href="http://www.samwel.tk/laptop_mode/tools/faq.html">reduce notebook computer energy consumption when running linux</a> is automatically installed, along with kpowernowd. I set the governor to powersave mode, and also tweaked laptop mode tools using lm-profiler. The Pentium-M also supports power modes, so I <a href="http://acpi.sourceforge.net/wiki/index.php/WhyMyCxPowerStateIsNotUsed">unloaded two usb modules to enourage it to go into C3 as descriped on the ACPI for Linux pges</a>. From my occasional inspection of the Kill-A-Watt power meter, this setup runs at an average of 19 Watts. Phenomenal!
<h3>What I've learned</h3><b>Flash Media</b>

Booting off USB or PCMCIA on a notebook or laptop computer is incredibly annoying. I would like to try to do the same thing with a CF2IDE adapter, but the goal there isn't that great. Compact flash drives are very slow compared to regular old PATA and the newer SATA drives. <b>LiveCDs</b>

LiveCDs are AWESOME! while CD drives are also slow and annoyingly loud, they are cheap and so are CDs. <em>Puppy Linux</em>

Since Puppy Linux can load itself into a marginal amount of memory, you won't be bothered too much by the CD reads. And since Puppy Linux can update itself via multisession writes, it is an evolutionary remastering process, and the labor put into them is retained in the configurations and easily reusable. <em>Knoppix</em>

Knoppix is huge, not right for me to use very often, but turly amazing nonetheless, and a tool I absolutely want to have in my toolkit. <em>Damn Small Linux</em>

I've had good luck with the DSL LiveCD, but I haven't installed it on a hard drive yet, so I haven't been able to test out its apt-get abilities. <b>PXE Booting</b>

I'd like to explore the ability to run some diskless machines using PXE boot, and the Satellite might be the right machine to do that with. However, that's a pretty serious undertaking from what I can tell at this point.

http://slim.cs.hku.hk/

http://drbl.sourceforge.net/
