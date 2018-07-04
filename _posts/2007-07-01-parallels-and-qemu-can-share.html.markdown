---
title: Parallels and QEMU can SHARE 
date: 2007-07-01
tags: parallels,qemu,vde,windows
---
Wow, this is really cool. I just realized that Parallels and QEMU can share virtual disk images. I'm sure there are issues with this, but the fact that it actually works is pretty awesome.

<strong>Parallels and QEMU can run virtual machines using the same disk images!</strong>

The image has to be in the raw format, which takes up more room, and I've only tried linux and FreeBSD so far, not going to bother with Windows as its lame anyway.

Here's how I'm doing it <ol><li>Use qemu-img or Parallels image tool to convert any compressed images to raw format.</li><li>Use a symlink to create a file with the right extension, either .raw or .hdd, depending on which program the drive was created in.</li><li>Simply select that file as the source for your new hard drive.</li></ol>

Like I said, there are issues, because the virtual machines are different. This is like taking a hard drive out of one machine and plugging it into a different one, and expecting everything to work. It usually doesn't, but it seems like the QEMU and Parallels machines are similar enought to not cause a catastrophe. This is really awesome for me because I'll be able to use the same image on my Macbook as well as my linux workstations and servers.

Parallels:


QEMU:


Now to figure out how to setup vde...

