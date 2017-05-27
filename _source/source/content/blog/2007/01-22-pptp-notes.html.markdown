---
title: PPTP Notes
date: 2007-01-22
---
<h3 id="toc0">PPTP install guide for Gentoo Linux</h3><p><strong>Step 1)</strong> Kernel
 Device Drivers --&gt;
    Networking Support --&gt;
       Networking options --&gt;
          &lt;M&gt; IP: GRE tunnels over IP</p>
<p>Kernel 2.6.15+:</p>
<p>Device Drivers ---&gt;
  Network device support ---&gt;
   &lt;M&gt; PPP (point-to-point protocol) support
     &lt;M&gt; PPP support for async serial ports
     &lt;M&gt; PPP support for sync tty ports
     &lt;M&gt; PPP Deflate compression
     &lt;M&gt; PPP BSD-Compress compression
     &lt;M&gt; PPP MPPE compression (encryption) (EXPERIMENTAL)
 Cryptographic options  ---&gt;
  [*] Cryptographic API
  [*]   HMAC support
  &lt;M&gt;   MD5 digest algorithm
  &lt;M&gt;   SHA1 digest algorithm #this one is required
  &lt;M&gt;   SHA256 digest algorithm
  &lt;M&gt;   SHA384 and SHA512 digest algorithms
  &lt;M&gt;   DES and Triple DES EDE cipher algorithms ####this one is commonplace too (recommended)
  &lt;M&gt;   ARC4 cipher algorithm #this one is required</p>
<p><strong>Step 3)</strong>

Add the following modules to /etc/modules.autoload.d/kernel-2.6</p>
<p>ppp_synctty

ppp_async

crc_ccitt

ppp_async

ppp_generic

ppp_synctty

ppp_async

slhc

arc4

md5

sha1

ppp_mppe</p>
<p><strong>Step 4)</strong> Emerge! :)</p>
<p>emerge net-dialup/pptpd</p>
<p><strong>Step 5)</strong> Recompile the kernel, edit bootloader configuration, and reboot!</p>
<p><strong>Step 6)</strong> configuration</p>
<p>We'll add more to this once we refine our configuration. However, the core files are /etc/pptpd.conf and the files in /etc/ppp/</p>
<p>Note: /etc/ppp/chap-secrets stores passwords in CLEAR TEXT! CONSIDER YOURSELF WARNED. chmod 0600 /etc/ppp/chap-secrets to ensure some level of security. :x</p>
<p><strong>Step 7)</strong> Firewall Configuration</p>
<p>These are the lines we used for our firewall (see our office topology to better understand if these will work in your situation):</p>
<p>iptables -A INPUT -p tcp -i ${WAN} --dport 1723 -j ACCEPT

iptables -A INPUT -p 47 -m state --state NEW,ESTABLISHED,RELATED -j ACCEPT

iptables -A INPUT -p 47 -j ACCEPT</p>
<p>NOTE: Adjust -i ${WAN} for the interface you'd like connections to come in on.</p>
<p><strong>Step 8)</strong> Start PPTP</p>
<p>/etc/init.d/pptpd start</p>
<p><strong>Step 9)</strong> Attempt to connect with a remote machine!</p>
<p>Windows XP: Network Connections -&gt; Create a new connection -&gt; Next -&gt; Connect to the network at my workplace -&gt; Virtual Private Network connection -&gt; Company Name (input: Savonix) -&gt; If you have another connection setup, this screen will ask you if you'd like to automatically dial an inital connection. You should not have to do this in most cases unless your machine is configured for corporate use. Select &quot;Do not dial the inital connection&quot; -&gt; Hostname stoughton.savonix.com -&gt; This will finish it up. -&gt; The connection will be in your Network places, select it and enter in your provided UserID and password then hit connect! -&gt; Welcome to our network.</p><hr />

<strong>Notes</strong><ul>    <li>/etc/ppp/chap-secrets stores passwords in plain text. This is not good for many reasons. One option could </li>    <li>You could authenticate pptp clients via radius, which has a myriad of plugins to user storage facilities, such as MySQL.</li>    <li>Another alternative to this, would be to use Apache + mod_dav + ssl to provide cross-platform secure file shares. See <a class="wikilink" href="https://www.savonix.com/acc/nxwiki/view/Apache%20Documentation.html">Apache Documentation</a>. </li></ul><p><strong>External Links</strong>

<a rel="nofollow" href="http://www.frontios.com/freeradius.html">http://www.frontios.com/freeradius.html</a>

<a rel="nofollow" href="http://www.freeradius.org/">http://www.freeradius.org/</a>

<a rel="nofollow" href="http://www.phparchitecture.com/howto_show.php?id=3">http://www.phparchitecture.com/howto_show.php?id=3</a>

<a rel="nofollow" href="http://www.maclive.net/sid/132">http://www.maclive.net/sid/132</a>

<a rel="nofollow" href="http://poptop.sourceforge.net/dox/radius_mysql.html">http://poptop.sourceforge.net/dox/radius_mysql.html</a>

<a rel="nofollow" href="http://www.freeradius.org/related/">http://www.freeradius.org/related/</a></p></td></tr></table>

