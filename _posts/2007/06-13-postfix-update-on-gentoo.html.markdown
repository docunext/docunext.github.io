---
title: Postfix Update on Gentoo
date: 2007-06-13
tags: email clients,spam
---
I updated one of our gentoo servers yesterday using portage / emerge. Since it runs gentoo, the upgrades can sometimes get a little hairy. Postfix was updated from 2.2.x to 2.3.x:

<pre class="sh_sh">* You are upgrading from a incompatible version.
* You MUST stop postfix BEFORE install it to your system.
* If you want a minimal downtime, emerge postfix with:
* `FORCE_UPGRADE=1 emerge --buildpkgonly postfix`; then
* `/etc/init.d/postfix stop && emerge --usepkgonly postfix`
* run etc-update or dispatch-conf and merge the configuration files.
* Next /etc/init.d/postfix start</pre>

I searched for other experiences and everyone seemed to have an okay time upgrading, so I did too, and it worked fine. Now we get to use the "sleep" function in main.cf. :-)

