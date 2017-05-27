---
title: RSA Encrypted Logins
date: 2008-03-11
---
Just returned from IRC where I asked #roundcube about jquery, just to double check they weren't mad against it. My inquiry received positive feedback, so I'm more comfortable now working on this RSA encrypted login the same way I had do so in <a href="http://www.phunkybb.docunext.com/blog/">phunkybb</a>.

To start, I'm adding these files to program/js/:
* rsa/rng.js
* rsa/prng4.js
* rsa/rsa.js
* rsa/base64.js
* rsa/jsbn.js
* jquery-1.2.1.min.js

Other stuff you need:
* key.pem
* modulus from key
* php with openssl support (most likely in there)

