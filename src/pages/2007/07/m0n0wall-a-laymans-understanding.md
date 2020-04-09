---
title: M0n0wall A layman s understanding
date: 2007-07-20
tags: none
author: Albert Lash
---
Where to start. M0n0wall is an embedded firewall <del>operating system</del> that can be installed on a machine. It uses the FreeBSD operating system. This machine can then be accessed via a GUI (graphical User Interface) kind of like how one would talk to their wireless modem, via a web browser. Currently in order to <del>run a program on</del> build customized variations of m0n0wall you have to be something of a mad scientist, even though the process could be simplified to a great extent.

To build custom m0n0wall appliances, you have to have a machine to run the M0n0wall OS on. You can do this by creating a virtual machine using QeMU. From there you have to load your configurations and software required by the application onto the new machine. Once you do this and save it to a disk image. You can access the program using the webguie in a browser. This process merges the content of your configuration with the great platform which is used to run the m0n0wall machine. In doing so your program takes on certain characteristics of the m0n0wall project - stability, portability, and quality. It's security for instance, which are different from a normal operating system. <del>A normal firewall is just a program, so everything is allowed access to your computer, before it can be accepted or rejected by the program. M0n0wall's firewall capabilities act like a shield because it is part of the OS, nothing gets in without clearance.</del>

The creation outlined above is a chimera of sorts. It has the characteristics of both the program installed and the M0n0wall's security plus its other features.

The current problem with M0n0wall is it's difficult for a lay user like myself to leverage its underbelly for other appliances. After a one hour conversation I can begin to grasp the ideas of it, but could not set it up myself. Our current goal is to create a stand alone webgui for M0n0wall, that is then capable of being dropped into a m0n0wall variation, so that folks like myself could access it easily.

The underbelly of M0n0wall makes it possible to create a freestanding system capable of running an application like <a href="http://www.pbooks.org/">pBooks</a>.

The FreeBSD embeded tool chain contains a mini_httpd webserver, although this could be any web server, such as lighttpd or apache. This is what connects the webgui with the machine itself - the console is quite limited. The kind folks at m0n0.ch put together some pretty cool concepts by marrying php with the shell and init scripts. And we think we can use these concepts to build a myriad of applications. Want to control your "<a href="http://www.textfiles.com/magazines/DBC/">Durex Blender</a>" from the internet? Use a m0n0wall variation.

Real examples of m0n0wall variations include:

<a href="http://askozia.com/pbx">Askozia PBX - an amazing pbx for use with VOIP</a>

<a href="http://www.freenas.org/">FreeNAS - a similarly amazing NAS for use with just about anything!</a>
