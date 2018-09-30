---
title: Bootstrapping CentOS
date: 2009-09-17
tags: centos,debian
---
I'm following Lucas Nussbaum's notes on [bootstrapping a CentOS system on Debian](http://www.lucas-nussbaum.net/blog/?p=385).

I am using /var/tmp instead of /tmp, and I'm planning on using this as an OpenVZ container.

My abridged procedure:
<pre class="sh_sh">
apt-get install yum rpm python-m2crypto
apt-get install -t experimental rpm
mkdir -p /var/tmp/centos/var/lib/rpm
rpm --root /var/tmp/centos --initdb
# http://rpm.pbone.net/index.php3/stat/4/idpl/12379189/com/centos-release-5-3.el5.centos.1.i386.rpm.html
wget ftp://ftp.muug.mb.ca/mirror/centos/5.3/os/i386/CentOS/centos-release-5-3.el5.centos.1.i386.rpm
rpm -ivh --force-debian --nodeps --root /tmp/centos centos-release*rpm
yum --installroot /var/tmp/centos/ install yum
ln -s /var/tmp/centos/etc/pki /etc/pki
yum --installroot /var/tmp/centos/ install yum
mount -t proc foo /var/tmp/centos/proc
mount -t sysfs foo /var/tmp/centos/sys
chroot /var/tmp/centos /bin/bash --login
cd /var/lib/rpm && rm *
echo "nameserver 4.2.2.1" &gt; /etc/resolv.conf
rpm --initdb
yum install yum
yum install vim-minimal less
yum clean all
exit
</pre>

After that, I followed the instructions on the [OpenVZ wiki for creating a CentOS 5 template](http://wiki.openvz.org/Creating_a_CentOS_5.0_Template).

With my own manual version of localepurge (and worse) thrown in for good measure.
<pre class="sh_sh">
cd /var/tmp/centos
umount proc/
umount sys/
cd usr/lib
mkdir locale_keep
mv locale/en_US* locale_keep
rm -rf locale/
mv locale_keep locale
cd ../share
mkdir locale_keep
mv locale/en_US locale_keep/
rm -rf locale
mv locale_keep locale
rm info/*
rm -rf man/*
rm -rf doc/*
cd ..
cat etc/rc.sysinit | sed "s/\/sbin\/start_udev/#\/sbin\/start_udev/" > /tmp/rc.sysinit && mv /tmp/rc.sysinit etc/rc.sysinit
mknod dev/ptmx c 5 2
mkdir dev/pts
/sbin/MAKEDEV -d dev ttyp ptyp
mknod dev/null c 1 3
mknod -m 644 dev/random c 1 8
mknod dev/urandom c 1 9
tar -czvf /vz/template/cache/centos-5.3-i386-minimal.tar.gz ./
</pre>

I'll probably add some of the procedures I developed from mindeb to this process, like clearing out unused locales.

That produces a 120MB container, and a 40MB compressed template cache. It could get smaller.

I love this type of stuff! I'm definitely going to add this as a build target for [NODOWS](http://www.nodows.com/blog/)!

If I mess up in this process, I do this:
<pre>
rm /vz/template/cache/centos-5.3-i386-minimal.tar.gz
tar -czvf /vz/template/cache/centos-5.3-i386-minimal.tar.gz ./
</pre>

NOTE: I still can't get this working right. Seems to be a problem with udev and ptys.

UPDATE: Thanks to some follow-up comments on the original post by Lucas, I learned about [mach](http://packages.debian.org/squeeze/mach). Time to give that a try.

