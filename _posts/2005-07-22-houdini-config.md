---
title: Houdini Config
date: 2005-07-22
---
<p>Rebuild Objective: a fast, secure, easy to maintain server, with minimum services running: apache, mysql, and sshd</p>
<p>Software:</p>

<ul>    <li>Use syslog-ng, vixie-cron</li>    <li>Firewall</li>    <li>ext3 partition</li>    <li>hardened-sources (they are now 2.6)</li>    <li>PaX , PIE?, and grsecurity with gradm - NO! Only PAX, not grsecurity2. grsecurity is for complex, multi-use machines that run many many services.</li></ul><p>!!The Rebuild Process:</p><ol>    <li>Start with SELinux minimal CD</li>    <li>Boot commands: permissive-nofb nodetect doscsi</li>    <li>modprobe e100</li>    <li>passwd</li>    <li>ifconfig</li>    <li>/etc/init.d/sshd start</li>    <li>fdisk</li>    <li>mount</li>    <li>continue following the Gentoo SELinux Guide...</li>    <li>make.conf: USE=&quot;-X -acpi -mp3 -pcmcia -svga pic hardened ssl mysql samba vhosts&quot;</li>    <li>Configured New Houdini Kernel with HTB, eepro100, scsi, and cdrom</li>    <li>Completed SELinux Guide</li>    <li>Updating world, looks so far like this setup is _really_ solid. Should be perfect for the other two servers. Wow, that took a long time. </li>    <li>emerge apache mysql, add apache to default runlevel, /usr/bin/mysql_install_db, start mysql, /usr/bin/mysql_secure_installation</li>    <li>Now on to PHP5 with Ming, used Nexista php5 build script from tigris.org, adapted slightly for ming CVS and php as a module</li>    <li>Edited /etc/apache2/conf/apache2.conf to addtype php</li>    <li>Taking suggestion of PHP group to turn off Apache2 MPM: <a href="http://httpd.apache.org/docs-2.0/mod/worker.html" onclick="window.open(this.href, '_blank'); return false;">http://httpd.apache.org/docs-2.0/mod/worker.html</a> (already done)</li>    <li>First compiled PHP using apxs, then tried for several hours to get it compiled as a CGI binary to no avail. Finally got it, you have to do them (CGI and module) separately. </li>    <li>Then the trick was to create a binary called php.cgi in the www document root: cgi/php.cgi that links to libraries and real cgi binary (wherever it was installed - /usr/local/php5/ is a good idea), and then create an .htaccess file to call it when .php files are loaded. </li></ol><p>!July 16, 2005</p>

<ul>    <li>Upgraded to Mysql 4.1.x </li></ul><p>!July 21, 2005</p>

Adding Postfix 2.x+ to houdini, to serve both web and email from a single server, hopefully

* Policy has not been loaded.  It is strongly suggested
* that the policy be loaded before continuing!!
* Automatic policy loading can be enabled by adding
* &quot;loadpolicy&quot; to the FEATURES in make.conf.
* This version include a -r option for saslauthd to instruct it to reassemble
 * realm and username into a username of user@realm form.
* If you are still using postfix-&gt;sasl-&gt;saslauthd-&gt;pam-&gt;mysql for
 * authentication, please edit /etc/conf.d/saslauthd to read:
 * SASLAUTHD_OPTS=&quot;${SASLAUTH_MECH} -a pam -r&quot;
 * Don't forget to restart the service: `/etc/init.d/saslauthd restart`.

#### SQUIRRELMAIL

QA Notice: USE Flag 'bootstrap' not in IUSE for sec-policy/selinux-base-policy-20050618
* Removing invalid backup copies of critical config files...
* This is the base policy for SELinux on Gentoo.  This policy
* package only covers the applications in the system profile.
* More policy may need to be added according to your requirements.

* It is STRONGLY suggested that you evaluate and merge the
* policy changes.  If any of the file contexts (*.fc) have
* changed, you should also relabel.

* Please check the Changelog, there may be important information.
* Checking for deprecated policy...
* /etc/security/selinux/src/policy/macros/program/ypbind_macros.te
* The above policy file(s) should be removed if possible.

<blockquote><p>Regenerating /etc/ld.so.cache...

sec-policy/selinux-base-policy-20050618 merged.</p>
</blockquote>

