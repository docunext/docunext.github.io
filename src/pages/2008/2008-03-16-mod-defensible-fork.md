---
title: mod defensible fork
date: 2008-03-16
tags: debian,modules,spam
---
I've been working on some change's to jd's mod_defensible Apache module, and I just emailed him about it:

<blockquote class="svxlb"><pre>
Hi Julien,

This email is from Albert Lash. I emailed you awhile back about mod_defensible with a cheesy attempt to fix the udns timeout, as well as an idea to use an environment variable setting instead of an outright denial response.

I've done some more work and am happy where its going and was wondering where you are with it. My newer changes are against your 1.4 version. The changes remove udns, decline checks for get method requests, and only set an environment variable ("DEFENSIBLE") when there is a block list match.

I realize that such changes veer from your original design, but I made them with reliability and minimal impact to performance in mind. The use of udns was nice for maintaining performance, but the risk of misconfiguration and infinite timeouts is too great for me.

I also used your debian source package to make a new debian package for my changes and it works great.

Thanks again for this module. Let me know if you are interested in my work.

Best Regards,

Albert
</pre></blockquote>

