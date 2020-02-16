---
title: m0n0wall development notes
date: 2007-07-15
tags: freebsd,m0n0dev,m0n0wall,pear,php
---
Here's my notes on the m0n0wall rootfs sources:

<ul><li>Webgui files are in /usr/local/www/</li><li>There are a bunch more php files in /etc/inc/ too, like config.inc and functions.inc</li><li>Page title is made from an array. </li><li>All webgui files include webgui.inc</li><li>I think m0n0wall uses mini_httpd to authenticate, but it also has an auth.inc file for denying unauthorized access.</li><li>Menus are created from arrays</li><li>Authentication <em>is</em> done by php, not by minihttpd. There is a function in /etc/inc/system.inc called "system_password_configure" which reads the htpasswd file. Errr, actually I guess there are two parts - one to access the web server at all, and then /usr/local/www/auth.inc decides which pages you can access. The http authentication is done by a symlink from /usr/local/www/.htpasswd to /var/run/htpasswd, which is created by /etc/inc/system.inc from the data contained in config.xml - very cool!</li></ul>

php.ini is nice and simple!

<pre>
magic_quotes_gpc = Off
magic_quotes_runtime = Off
max_execution_time = 0
max_input_time = 180
register_argc_argv = Off
file_uploads = On
upload_tmp_dir = /ftmp
upload_max_filesize = 8M
post_max_size = 10M
html_errors = Off
include_path = ".:/etc/inc:/usr/local/www:/usr/local/captiveportal"</pre>

I'm so glad to have read this page about <a href="http://doc.m0n0.ch/dev/image-guide-bootloader.html">preparing the bootloader</a>:

<blockquote>loader.rc is the file that the loader reads and interprets. For m0n0wall, it is used to disable ATA DMA (to increase compatibility with odd hardware, especially since CF/HD performance isn't very important in m0n0wall) and load the kernel and the MFS root file system.</blockquote>

I was hoping to find pf in the freebsd6 version of m0n0wall but I don't think its there. I was hoping that it might be possible to put slbd into m0n0wall. slbd is in pfsense, but I prefer m0n0wall for it simplicity, and I'm more comfortable with it after working with it for a few weeks.

M0n0wall is so much more than a firewall. With several other projects based on it already, I bet that m0n0wall will evolve into a platform for many, many more embedded appliances. <h3 id="m0n0wall-variants">m0n0wall variant notes:</h3>

While m0n0wall uses mini_httpd, the m0n0wall variants (freeNAS, <del>askoziaPBX</del> - askoziaPBX uses mini_httpd as well, and pfSense) all use lighttpd.  I've used lighttpd in the past and had a terrific time with it. I'm even considering using it on my mega servers. Furthermore, the stable version of m0n0wall runs on FreeBSD 4, which is great because its so tried and true. However, for my development purposes I may focus on the freeBSD6 version because it has support for more hardware and can use the slbd load balancer. I'm not sure whether or not to use lighttpd or mini_httpd. Seeing how its actually difficult to get small compact flash cards less that 32MB (or 512MB for that matter) and since larger sized compact flash cards are super cheap*, I don't see it being a very important factor to keep the distribution as small as possible. I'd be happy with a distribution that could fit on a 32MB volume. * Note - while most compact flash cards are 512MB or larger, disk-on-module IDE flash drives are less common, more expensive, and commonly available at 32MB for less than the price of a 512MB DOM. Check <a href="http://www.my-tech-deals.com/2007/07/dual-lan-mini-itx-router-firewall.html">this</a> out for more info.

Another thing I like about freeNAS is that they are using PHP 5.2. PHP5 has much much better support for XML and XSLT, and I'm a huge fan of XSLT. Again, I think its wise that m0n0wall kept it simple with PHP4, as PHP4 is a great engine too.

<h3 id="m0n0wall-freebsd6">m0n0wall freebsd6 branch</h3>

I'd like to stick with m0n0wall as the base for anything I experiment, as I think they'll done an excellent job at keeping things simple (unlike pfSense, which is a great project too but is currently suffering from project creep). Both AskoziaPBX and FreeNAS have also done a great job at keeping things simple, and retained the minimal m0n0wall interface, which I love. I feel strongly about simplicity and minimalism because I also suffer from ADHD - causing me to constantly over complicate things - just look at how poorly this blog is organized!!! :-)

<h3 id="m0n0wall-webgui">m0n0wall webGUI</h3>

As I already mentioned, I love the m0n0wall webgui. Its clean, simple, and effective. I can't say I'm crazy about how its built in the code, but I like the resulting interface. I guess it is effective and works without much of a problem. It is interesting to note that pfSense has enabled "skins" for its interface.  This is interesting to me because I would think that the m0n0wall would be difficult to customize or extend because of how it is built using includes in each php file. I prefer using one file and a sitemap to load every other file, but that's just me. Some people have a difficult time understanding how that works when url rewriting is used to urls look like they are hitting real files, so I've stopped using rewrites and instead pass a GET variable, like "index.php?page=jhkjhsfjkhgfdg".

OK so I just checked out FreeNAS and AskoziaPBX and they use the same methodology for building the interface. The skeleton is like this:

<pre>#!/usr/local/bin/php&lt;?php/*[File metadata, copyright notices, license information...]*/

require("guiconfig.inc");$pgtitle = array(gettext("Page Name"),gettext("Sub-Page Name"));&lt;?php include("fbegin.inc"); ?>[All the page-specific stuff here...]&lt;?php include("fend.inc"); ?></pre>

The above is from FreeNAS,  which uses gettext to do translations. I don't think m0n0wall or the other variants currently support i18n, but I think its in the works for Askozia. It is also interesting to note here that FreeNAS uses simply /www/ as the webgui root, rather than /usr/local/www/, which is used by m0n0wall. This could be the result of using lighttpd, but it could also be deliberate.

<h3>m0n0wall Configuration</h3>

It is also so very cool that m0n0wall uses a single XML file to configure the appliance. This fits in well with how I see things as I use <a href="http://www.nexista.org/">Nexista</a> which also uses xml files for configuration and runtime settings.

<h3>Empty m0n0wall</h3>

The first thing that needs to be done is to create an empty freeBSD template type repository which could be used to build any type of m0n0wall-derived embedded application. Wouldn't it be nice to have an ejabberd embedded appliance? I think so. :-) Also, how about a QEMU server based on FreeBSD? YES! That would be sweet.

Thanks to Askozia, I learned a lot about setting up a FreeBSD jail, and also found out about <a href="http://www.tinybsd.org/tinybsd">tinyBSD</a>, which I'm going to read more about right now. Also, thanks to ultradesic and their freebsd guides.

This <a href="https://neon1.net/misc/minibsd.html">post</a> is also very useful.

If you like, feel free to read about my efforts to build a <a href="http://www.docunext.com/wiki/M0n0jabber">m0n0wall-based ejabberd server</a>.

m0n0dev.php is another great php command line script. You don't find a lot of command line php scripts - but there is PEAR and symfony.

I've been thinking about editing m0n0dev.php to make it more configurable, like making the packages and stuff configurable. It appears that m0n0dev.php makes use of a couple of build scripts from the m0n0wall repository:

<ul><li>mklibs.pl</li><li>mkmini.pl</li></ul>

Perhaps the best thing would be to go through the ultradesic files, then through the m0n0wall files, then put that into perspective with the m0n0dev.php script.
