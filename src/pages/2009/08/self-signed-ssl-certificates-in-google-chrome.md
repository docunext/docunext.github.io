---
title: Self Signed SSL Certificates in Google Chrome
date: 2009-08-24
tags: chrome,google,ssl
---
Finally figured this out! I used certutil to add my own certificate authority to my database of trusted certificates:

<pre>certutil -d sql:$HOME/.pki/nssdb -A -t "C,," -n Savonix -i savonixCA.cert</pre>
Several pages helped:

<ul><li><a href="http://www.mozilla.org/projects/security/pki/nss/tools/certutil.html" rel="nofollow">Mozilla page on certutil</a></li><li><a href="http://code.google.com/p/chromium/wiki/LinuxCertManagement" rel="nofollow">Google Chromium Wiki about Linux Certificate Management</a></li></ul>

