---
title: PAM hooks and libpam http
date: 2008-02-02
---
This pluggable authentication module (PAM) which can run scripts upon login looks cool:

* <http://upsilon.cc/~zack/hacking/software/pam-hooks/>

as does this:

* <http://packages.debian.org/libpam-http>

Unfortunately, I'm having lots of problems with libpam-http. I can't get ssl to work at all. :-(

Ah wait - I think this is what I'm really looking for:

* <http://linux.bononline.nl/linux/pamscript/01/build.html>

Direct download link:

* <http://www.upfrontsystems.co.za/Members/izak/libpam-script_0.1.11.tar.gz>

DOH!:

<pre class="sh_sh">PAM [error: /lib/security/pam_script.so: undefined symbol: pam_getenv</pre>

UPDATE: Why was I taking notes on these libraries? See here:

<a href="http://www.docunext.com/">My Email Services Configurations</a>

