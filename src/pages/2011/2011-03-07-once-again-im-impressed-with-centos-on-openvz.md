---
title: Once Again I m Impressed with CentOS on OpenVZ
comments:
  - author: Boris
    email: boris.simkovich@light-kr.com
    date: 04/20/2011 05:15:52 PM
    text: >
      I think I saw somewhere else that you play around with Varnish sometimes.  Did you ever try to install Varnish on the Centos OpenVZ partition?  And, if so, did you have any success?<br/><br/>My colleagues have been trying to get Varnish to work on an OpenVZ Centos partition, and it doesn't seem to work.  We tried a stack setting fix that was mentioned somewhere else on the Internet by someone working with Varnish on a Debian OpenVZ VPS, but the fix didn't help.  So I'm curious if you had any luck.<br/><br/>Thanks!
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/23/2011 10:33:25 AM
    text: >
      Hi Boris, thanks for commenting. I do use varnish extensively, but haven't ever on CentOS. I'm not even sure if its available by the standard YUM repos or via EPEL.<br/><br/>Nor actually have I used it within a container, and I'm not sure I'd want to, but maybe a virtual machine - like Xen or VMWare. Varnish does a terrific job of taking advantage of modern kernel capabilities, so I'd want it to be as close to a kernel as possible.<br/><br/>Good luck! Please let me know if you figure it out!
date: 2011-03-07
tags: centos,gpg,memory,openvz,templates
---
Today I downloaded a pre-built template from OpenVZ.org based upon CentOS. After downloading the archive, I verified the signature, then created a container.

<pre class="terminal">
hamilton:/var/lib/vz/template/cache# gpg --verify centos-5-x86.tar.gz.asc
gpg: Signature made Fri 12 Nov 2010 06:54:37 AM EST using DSA key ID A7A1D4B6
gpg: Can't check signature: public key not found
hamilton:/var/lib/vz/template/cache# gpg --search A7A1D4B6
gpg: keyring `/root/.gnupg/secring.gpg' created
gpg: searching for "A7A1D4B6" from hkp server keys.gnupg.net
(1)	OpenVZ Project <security@openvz.org>
	  1024 bit DSA key A7A1D4B6, created: 2005-09-14
Keys 1-1 of 1 for "A7A1D4B6".  Enter number(s), N)ext, or Q)uit > 1
gpg: requesting key A7A1D4B6 from hkp server keys.gnupg.net
gpg: /root/.gnupg/trustdb.gpg: trustdb created
gpg: key A7A1D4B6: public key "OpenVZ Project <security@openvz.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
hamilton:/var/lib/vz/template/cache# gpg --verify centos-5-x86.tar.gz.asc
gpg: Signature made Fri 12 Nov 2010 06:54:37 AM EST using DSA key ID A7A1D4B6
gpg: Good signature from "OpenVZ Project <security@openvz.org>"
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: DEAB A031 F0A1 8848 9D71  01D2 92A6 0DA6 A7A1 D4B6
</pre>

Yes, gpg is a bit alarmist!

I set the hostname, ip address, and nameservers via vzctl:

<pre class="terminal">
vzctl set 1234 --hostname centos-dev --save
vzctl set 1234 --nameserver 192.168.1.1 --save
vzctl set 1234 --ipadd 192.168.1.177 --save
</pre>

Then I started it up, waited a few moments, then entered it:

<pre class="terminal">
vzctl start 1234
vzctl enter 1234
</pre>

Nothing too fancy about all that, eh? What really impressed me is the meager memory usage: only about 24MB, *including* an active Apache2 process. Sweet! And that was the x86_64 version. I bet the plain x86 version is even more lightweight - I'm trying that version out now!

Still, yum has got nothing on apt! :-)

¥

