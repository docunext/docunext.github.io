---
title: Geode AES OpenSSL and Cryptodev for linux
comments:
  - author: Pankaj Singh
    email: psingh.ait@gmail.com
    date: 08/24/2009 06:15:31 AM
    text: >
      Hi,<br/>   I am trying to use this patch on 2.6.26 kernel giving the same error as above. I think CRYPTO_TFM_MODE_ECB macro is not present in crypto.h from 2.6.21. So, I am getting same error even after using Michal's code changes.<br/><br/>Could some buddy help me in this? May be i am missing some thing.<br/><br/>Thanks,<br/>~Pankaj Singh
date: 2009-02-14
tags: OCF,encryption,kernel,linux
---
I've used OCF linux before and it is very cool, however its BSD license taints the linux kernel.

<a href="http://www.logix.cz/michal/devel/cryptodev/index.xp?show_selected=1&amp;msgid=4534">http://www.logix.cz/michal/devel/cryptodev/index.xp?show_selected=1&amp;msgid=4534
</a>

Of course this patch is for 2.6.8 and I'm using 2.6.26, and am getting this error:

<pre class="sh_sh">crypto/cryptodev.c:74: error: CRYPTO_TFM_MODE_ECB undeclared here (not in a function)
crypto/cryptodev.c:74: error: array index in initializer not of integer type
crypto/cryptodev.c:74: error: (near initialization for crypto_cipher_modes)
crypto/cryptodev.c:75: error: CRYPTO_TFM_MODE_CBC undeclared here (not in a function)
crypto/cryptodev.c:75: error: array index in initializer not of integer type
crypto/cryptodev.c:75: error: (near initialization for crypto_cipher_modes)
crypto/cryptodev.c:76: error: CRYPTO_TFM_MODE_CFB undeclared here (not in a function)
crypto/cryptodev.c:76: error: array index in initializer not of integer type
crypto/cryptodev.c:76: error: (near initialization for crypto_cipher_modes)
crypto/cryptodev.c:77: error: CRYPTO_TFM_MODE_CTR undeclared here (not in a function)
crypto/cryptodev.c:77: error: array index in initializer not of integer type
crypto/cryptodev.c:77: error: (near initialization for crypto_cipher_modes)
</pre>

Obviously a lot has changed in the kernel from 2.6.8. I'm not sure how to proceed - maybe I should look at the 2.6.8 code, or I should just start editing the cryptodev.c / cryptodev.h.

There might be a chance that Michal's code gets adopted into the kernel. That would be awesome. More info:
<a href="http://www.docunext.com/wiki/Michal_Ludvig_Cryptodev">http://www.docunext.com/wiki/Michal_Ludvig_Cryptodev
</a>

¥

