---
title: Security Analysis Tools nmap versus havij
date: 2010-12-24
tags: apache,nmap,security
---
I've heard complaints about tools like <tt>nmap</tt> stating that they cause problems because they can be used to identify security holes, and thus contributes to nefarious causes. I totally disagree. True, it can definitely be used to identify security holes, it is certainly not designed to take advantage of them.

While nmap is self-described as a "Free Security Scanner For Network Exploration & Security Audits", I feel its strength is in its exploration and reporting capacities.

Compare that to the "Havij" tool. Havij is described as :an automated SQL Injection tool that helps penetration testers to find and exploit SQL Injection vulnerabilities on a web page".

I have never used havij, but I have defended against its use, and I even take issue with its description. While it sounds benevolent to state that is "helps penetration testers", there is really no good reason for it to "exploit SQL injection vulnerabilities". Yes, there is a big difference between *finding* and *exploiting*. What's worse, SQL injection exploitation can cause **serious** problems. Yikes!

Thankfully the creators of Havij set the software to include its name as the user-agent HTTP header. That makes it much easier to defend against, though presumably it would not be too difficult to alter the user-agent to mimic Firefox or Internet Explorer.

In my experience with Havij, I needed to defend against it because its automated usage was effectively causing a denial-of-service. All it took was a simple Apache access control configuration, like so:

<pre class="sh_xml">
SetEnvIf User-Agent Havij badbot
&lt;Directory /docroot>
Order Allow,Deny
Allow from all
Deny from env=badbot
&lt;/Directory>
</pre>

I can't remember if the user-agent string is case-sensitive, but I'm guessing it is.

See also:

* [Apache2 mod\_authz\_host](http://httpd.apache.org/docs/2.2/mod/mod_authz_host.html)

