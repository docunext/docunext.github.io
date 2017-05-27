---
title: Setting up AWStats on Debian
date: 2008-04-11
tags: apache,debian
---
To setup AWStats on Debian with Apache, I followed these steps.

<pre class="sh_sh">
apt-get install awstats
</pre>

I read through the examples in /usr/share/doc/awstats/examples/, and I edited /etc/awstats.conf to have SiteDomain="*" and:

<pre class="sh_sh">
LogFormat = "%other %host %time1 %methodurl %code %bytesd %uaquot"
</pre>

as I use a custom log format.

Then I ran:

<pre class="sh_sh">
/usr/lib/cgi-bin/awstats.pl -config=/etc/awstats/awstats.conf
</pre>

Copied /usr/share/doc/examples/apache.conf to conf.d and we're good to go!

