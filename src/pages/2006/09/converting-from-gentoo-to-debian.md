---
title: Converting from Gentoo to Debian
date: 2006-09-29
---
<h3 id="toc0">Preface</h3><p>First off let me say that Gentoo is a truly fantastic distribution. It is high performance in so many ways, and it is an amazing teacher as well. The community rocks, the documentation rocks, and the concept rocks. However, inherent in the concept of &quot;rocking&quot; is an unstable nature. That is why, along with the social contract, our network administrator recommended switching to Debian for our production environment. See why we choose Debian<a class="" href="https://www.savonix.com/acc/nxwiki/new/why%20we%20choose%20Debian">?</a>.</p>
<p>I was hesitant at first because my experience with Gentoo has been positive and I am comfortable with it. Jason, our network administrator, was very helpful in teaching me how to use Debian, and its been fine so far. The only difficulty I've found has been in custom compiling, such as kernels and PHP, which in our case require many customizations. The plus side to this is that I've learned how to create Debian packages so that we don't have to compile, saving a lot of time and headaches in the process.</p>
<p>Thanks again to Jason for recommending the switch! Nice work.</p><h3 id="toc1">Conversion Notes</h3><p>To help others who may decide to make the switch, here's what I've learned about the differences between Gentoo and Debian:</p>

<ul>    <li>To compile a kernel, you need to at least install the gcc and ncurses-dev packages, probably others. This confused the hell out of me, but was easy to fix. </li>    <li>If you have many Apache virtual hosts, it should be easy to set them up in Debian. Just put them in /etc/apache2/sites-available/ (or presumably /etc/apache/sites-available/ if you are using Apache 1.x), then cd there, and  run: </li></ul>

<pre>
find ./* -exec a2ensite {} \;</pre>

I <strong>think</strong> Debian is stricter when it comes to VirtualHost directives, which is probably A Good Thing TM. They won't let you mix up NameVirtualHosts with port directives and without port directives, so if you have *:443 for SSL, you will have to have *:80 for non-SSL vhosts. <p>I'll post more as I make my way through the process.</p><h3 id="toc2">iptables / netfilter firewall script</h3><p>One thing I'd grown accustomed to on Gentoo was the iptables / netfilter firewall script setup. It was simple and straightforward, and the init script worked. IMHO, the best tutorial on setting it up on Gentoo is this:</p>
<p><a href="http://www.gentoo.org/doc/en/home-router-howto.xml" onclick="window.open(this.href, '_blank'); return false;">Gentoo iptables / netfilter home router howto</a></p>
<p>I guess for awhile the setup was the same for Debian, but then the iptables init script was deprecated. I kept on finding pages on how to create your own init script, or use the deprecated one, but I wanted the up-to-date information. I finally came across a great tutorial on this at Debian Administration yesterday.</p>
<p><a href="http://www.debian-administration.org/articles/23" onclick="window.open(this.href, '_blank'); return false;">Debian iptables / netfilter gateway router howto</a></p>
<p>Have fun!</p><h3 id="toc3">Postscript</h3><p>Gentoo rocks. We will continue to use Gentoo in non-production machines, such as workstations and lab machines for testing new packages, software, and techniques. Megaprops to Daniel Robbins and the entire Gentoo team!</p>
