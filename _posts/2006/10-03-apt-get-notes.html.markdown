---
title: apt get Notes
date: 2006-10-03
---
<h3 id="toc0">Introduction to dpkg ,  apt-get and .deb</h3><p>So, you're reading this because you want to know how to use Debian's awesome package management tool!</p>
<p>apt configuration is located at:
/etc/apt/</p>
<p>The most important file, is the /etc/apt/sources.list file. This tells apt where to grab it's packages, and what version you'd like to use (stable, unstable, or testing).


Our sources.lst looks like this:

<pre>
charlie:/boot# cat /etc/apt/sources.list#deb file:///cdrom/ sarge main

deb http://debian.lcs.mit.edu/debian/ unstable main contrib

deb-src http://debian.lcs.mit.edu/debian/ unstable main contrib

deb http://lug.mtu.edu/debian/ unstable main contrib

deb-src http://lug.mtu.edu/debian/ unstable main contrib

deb http://lyre.mit.edu/debian/ unstable main contrib

deb-src http://lyre.mit.edu/debian/ unstable main contrib

charlie:/boot#</pre>

We don't need to have the sources, but it's nice to have sometimes.</p>
<p>Q: How do I perform a system update?

A: apt-get update; apt-get upgrade</p>
<p>Q: How do I find out if a package is installed and what version?

A:

<pre>
charlie:/boot# dpkg --list ejabberd

Desired=Unknown/Install/Remove/Purge/Hold| Status=Not/Installed/Config-files/Unpacked/Failed-config/Half-installed|/ Err?=(none)/Hold/Reinst-required/X=both-problems (Status,Err: uppercase=bad)||/ Name                              Version                           Description+++-=================================-=================================-==================================================================================

ii  ejabberd                          1.0.0-2                           Distributed, fault-tolerant Jabber/XMPP server written in Erlang

charlie:/boot# dpkg --list asterisk

No packages found matching asterisk.

charlie:/boot#</pre>

Q: How do I remove a package?

A:

<pre>
dpkg --remove packagename (ex: dpkg --remove less)</pre></p>
<p>Q: How do I remove configuration files?

A:

<pre>
dpkg --purge less</pre></p><h3 id="toc1">Dpkg Summary:</h3><hr /><p>That's a brief summery of working with packages on Debian systems, to recap we've seen:</p>
<p>* apt-get update
          o Update the list of available packages on your system
    * apt-get install 'name of package'
          o Install the given package, and any required dependencies
    * apt-get upgrade
          o Update all the packages on your system for which there is a newer version available
    * dpkg --list 'name of package'
          o Show the state of the package given
    * dpkg --remove 'name of package'
          o Remove the package named.
    * dpkg --purge 'name of package'
          o Remove the given package and remove all configuration files, etc.</p>
<p>apt-get upgrade upgrades what you have on the system already but doesn't introduce new packages unless absolutely necessary.</p>
<p>apt-get dist-upgrade upgrades everything on your system and resolves any new dependancies as well, thus introducing more new stuff tou your system.</p>
<p>An Example of Broken DPKG:

I had this problem:

<a href="http://www.linuxquestions.org/questions/showthread.php?t=479978">Linksys NSLU2 update-modules problems</a></p>
<p>I then purged the update-modules package, it turns out its not a very important package, even though a bunch of kernel modules say that they depend on it.</p>

