---
title: More Virtualization
comments:
  - author: Vidar
    email: vidar@hokstad.com
    ip: 82.70.200.181
    url: http://www.hokstad.com/
    date: 02/22/2008 05:20:44 AM
    text: >
      It can run multiple kernels because the Xen hypervisor manages access to resources. In theory it's not that complicated - the main thing the hypervisor needs to do is to be able to interrupt the kernels to switch between them, and to be able to assign each of them access to the resources they need (i.e. a percentage of the RAM, device access etc.), ensure they can't access resources they shouldn't, and proxy certain things (provide access to virtualized block devices from the host system for example).<br/><br/>This makes it a lot heavier than OpenVz, since OpenVz "just" provides a layer of isolation within the single running kernel, but with the obvious advantage that you can run different OS's.<br/><br/>Xen and OpenVZ can actually co-exist on the same machine (and as libvirt progresses it'll hopefully become reasonably easy to manage with a single interface too), so if you like you can use OpenVz for lightweight virtualization when you can run on the same kernel, and use Xen only for the cases where you actually need to run a different kernel.<br/><br/>With para-virtualization (i.e. when running on any CPU that doesn't have hardware support for full virtualization) the kernels it runs needs to some support to cooperate with Xen, and that's the main difference with Qemu or VMWare for example. The upside of that is lower overhead. With proper virtualization support in the CPU's, that distinction is largely set to disappear between Xen and VMWare.<br/><br/>However QEmu is emulating the CPU too, which para-virtualization systems like Xen and VMware doesn't do. CPU emulation, even with dynamic translation comes at a cost, but of course gives you one more level of flexibility (being able to boot OS's for a different CPU).
date: 2008-02-20
tags: xen
---
I've been using OpenVZ quite happily to run multiple instances of linux, but now I'm checking out Xen and KVM as other virtualization options. I just read up on both, and at this point I'm going with Xen, mainly as my target system (the Intel Little Valley "1") doesn't support VT.

My goal here is to run debian as the base DomU, and then run additional linux instances on top of it, as well as FreeBSD. I'm curious as to how there can be multiple kernels on a single machine, and I'm wondering if Xen is at all like QEMU. I've also had a lot of success with QEMU, but I found that networking with VDE2 to be too confusing.

Speaking of which, I should probably look into Xen networking before I spend too much time on it. I just found <a href="http://wiki.xensource.com/xenwiki/XenNetworking">this page on Xen Networking</a> and it appears to be similar to OpenVZ, which I like, at least when you setup the virtual environments to use a virtual ethernet device.

¥

