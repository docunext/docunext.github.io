---
title: Virtualization with Parallels on Mac OS X
date: 2007-02-14
---
Virtualization is on my top list of things to check out, and since I used a Mac I have two available options: Q and Parallels.
<h3>Q aka Q.app aka kju</h3>

I've used Q for quite some time and was highly satisfied with it. It is based on and used QEMU for processor emulation, meaning you can use it on other processor architectures other than x86 / i386, such as PowerPC. I use it on my Macbook which has an Intel processor, and the performance is decent. The developer of QEMU is working on a virtualization plug-in to acceleration virtualization on x86 processors, but unfortunately that's not available in Q yet.
<h3>Parallels</h3>

After an unsuccessful attempt to install Parallels on a friend's Macbook Pro, I gave up for awhile. Today I tried it again, and I love it. It is fast enough to make it seem like a native operating system. I installed debian in no time, though the busines-card installer woulnd't work. I had to use the next step up. Then I tried Windows, which was a breeze until Microsoft told me I had installed the version of Windows XP too many times! Too bad its the same machine, but virtualized differently.

<strong>Converting a Q hard disk image to a Parallels image</strong>

So now I'm trying to convert my Q image to a Parallels image. First I had to view the .qvm package contents to find the hard drive image ( I copied it out so I wouldn't screw up my Q virtual machine, and I'm glad I did, you might be too! ), then I was able to select that with Parallels as a hard drive. That causes a crash upon book, so then I tried fiddling with the drivers - no luck. Then I tried resizing the image with the Parallels image utility, which had the benefit of compressing and changing the image to a scalable drive, but still didn't work. Now I'm trying a repair install, based upon instructions from this page on <a href="http://www.michaelstevenstech.com/XPrepairinstall.htm">How to Perform a Windows XP Repair Install</a>. Hmmm, they did just ask me for my product key again so I'm feeling like they'll ask me to activate again and deny me again. Argh. Oh well. Maybe I'll try copying the orginal disk image again and see if I can try another technique.

<strong>Windows XP and Virtualization</strong>

Hmm, a repair install didn't work. Well it worked but they want me to reactivate. Annoying. There must be some architectural difference between the processor used in Q and in Parallels. Hmm. This is the notice I get from Microsoft about the difference:


I'm not going to give up yet! Hmm, looks like there is no help for this situation. That is pretty damn lame, if you ask me. Oh well, that's Microsoft for you.

So I've done a bunch of research on Windows licensing and I guess they defer these special cases to the telephone support team, rather than the online registration system. I'll try to give them a call tomorrow. Here's the page where I found the information I was looking for :

<a rel="nofollow" href="http://www.microsoft.com/piracy/activation_faq.mspx">Microsoft Product Activation Frequently Asked Questions</a>

Check out <a href="http://www.informedlicensing.com/">Informed Licensing</a> for more software licensing information.
