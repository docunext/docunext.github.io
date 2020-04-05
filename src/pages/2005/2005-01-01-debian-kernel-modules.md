---
title: Debian kernel modules
date: 2005-01-01
---
I've got a Linksys NSLU2 (aka slug) running debian and I'm trying to use it as a caching server, plus ad blocker. I'm running into the problem that the kernel doesn't have support for the various iptables capabilities, namely filter. Now I'm trying to find out if I can enable a kernel modules without having to compile a new kernel.

I think I got it, you can download the kernel image, and then update the modules. See this post on Google groups: <a href="http://groups.google.com/group/linux.debian.user/browse_frm/thread/8bb9df5e09bc7c2b/443d21df0131c2ea%23443d21df0131c2ea">getting netfilter working</a>.

Actually that's wrong, you have to download the ipkg files and manually install them. Find your platform and slug version here:

<a href="http://ipkg.nslu2-linux.org/feeds/">http://ipkg.nslu2-linux.org/feeds/</a>

Thanks to:

<a href="http://www.chukhang.com/francis/?page=Geek/slug_iptables">

http://www.chukhang.com/francis/?page=Geek/slug_iptables</a>

and

<a href="http://www.debonaras.org/wiki/HowTo/InstallModules">http://www.debonaras.org/wiki/HowTo/InstallModules</a>
