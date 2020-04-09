---
title: Puppy Linux on Toshiba Satellite
comments:
  - author: Keith
    email: keithmary1@gmail.com
    date: 02/29/2008 06:39:05 PM
    text: >
      Hello, I have installed VectorLinux 5.9 on a Satellite 2805-201. I have been getting help at thier forum on the install and things are going fine except one thing. Do you know how to get the scroll buttons on this machine to work with this OS? The buttons I am referring to are the two small buttons above the two larger ones. Thank you, Keith
date: 2007-02-24
tags: open source
---
I've been tinkering around with my Toshiba Satellite 2805-S301 laptop and finding some interesting figures.

I removed the hard drive and the machine runs at about 20 Watts, much better. It still has 384MB of RAM, a 650 Mhz Pentium III. Instead of a haard drive, I am using a 512MB USB drive. The machine only has a USB 1.1 port, but hopefully the majority of necessary information will reside in the system RAM. If I turn off the screen, reduce the processor's power, I should be able to reduce the consumption down even lower.

I wonder how low the power can go? I bet I can get it under 10 watts. If I can do that, I would be pretty psyched. I even

have an old battery that I might be able to resurrect to make sure the system doesn't crash in the case of a power outtage. Bummer, the computer won't boot off of USB! Some searching reveals that Puppy Linux can make it happen. <b>Puppy Linux on a Toshiba Satellite 2805-S203</b>

I've got Puppy Linux going and I really like it a lot. It truly does "breath new life" into old laptops. On the Toshiba Satellite, Puppy consumes about 20 watts, and when the screen dims, about 12 watts. And since I recently found a power cord that can be used with the Toshiba that isn't covered in electrical tape, we've got a good computer to be used as a web surfing device. Unfortunately, the Satellite still consumes about 4 watts even when its turned off (for Wake-on-lan?), so I'll be putting it on a timer to save a few extra cents. <b>Puppy Linux on a Macbook via Paralles</b>

I've also installed Puppy Linux on my Macbook via Parallels. It is really awesome, incredibly fast and hardly takes up any room. (80MB for the CD, and 59.6MB for my "512MB" personal storage file). <b>Other ways to use Puppy</b>

Does it make sense to run computers like this more often? It is almost like putting a desktop on the network. The great part is how easily you can save hardware configurations, while maintaining a consistent and standardized software configuration. I have a feeling I'm going to be working with this a lot more!

Things to tinker with:

<ul><li>Printing</li><li>Filesharing - Samba, NFS, sshfs</li><li>Package management</li></ul><b>Next Puppy Install</b>

I have another Satellite with a Pentium M that is very energy efficient, but it is heavy as sin and is missing an "L" on the keyboard. Therefore, it doesn't make sense to use as a laptop or as a desktop replacement. My plan instead is to preserve its setup - the HD has Win XP Pro and Ubuntu setup and configured on it. I'll remove the HD and make an image of it, then  put it in storage. After that, I'll replace the missing HD with a compact flash drive, which will use less energy. I'd still like to use a live cd that loads itself into ram so that it doesn't constantly write to the flash memory as it has a lifespan.

Alternatively, a nice thing about Puppy Linux is that it can write setup information back to a multi-session CD-R, and the newer Satellite has a CD-R. That might be a better solution. It would obvioulsy run out of room eventually, but CD-RW's are much much cheaper than Flash drives, all things considered.

The point of all this would be to setup a low-power, high-performance network appliance, for some light-bandwidth but processor intensive services, like MySQL. This device would also not take up too much room and not create a lot of noise.

¥

