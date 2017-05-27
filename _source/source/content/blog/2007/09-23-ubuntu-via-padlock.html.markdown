---
title: Ubuntu VIA Padlock
date: 2007-09-23
tags: ubuntu,via
---
I'm testing out the VIA padlock with Ubuntu and openssl-0.9.8e. First off, I added gutsy to my sources list, then I installed the libssl-0.9.8e source, and installed gcc and g++ packages. Then I downloaded the patch:

<a href="http://www.logix.cz/michal/devel/padlock/contrib/openssl-0.9.8e-engine.diff">http://www.logix.cz/michal/devel/padlock/contrib/openssl-0.9.8e-engine.diff</a>

DOH! I get this error:

<pre>/tmp/ccJ8tDM2.s:589: Error: Incorrect register `%rax' used with `l' suffix</pre>

Tried running ./config to see if that helps. Nope, now trying to run ./Configure, but need perl. STrange. Installing perl and running ./config got it to compile, but I'm not seeing the padlock driver get used by default when calling openssl speed tests. Hmmm. Maybe its only when the padlock library gets called?

