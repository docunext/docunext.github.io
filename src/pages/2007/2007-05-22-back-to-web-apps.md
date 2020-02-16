---
title: Back to Web Apps
date: 2007-05-22
tags: none
author: Albert Lash
---
<a href="http://www.pbooks.org/">

I'm working on the PBooks codebase, preparing it to be released as AGPL, and I'm scratching my head wondering whether I should release the first version with so much XSL and XML uncertainty. I've recently made some changes to how Nexista handles entities and I'm not sure it make sense to release the codebase until that's squared away. I think the important part at this point is the data model anyway.

I'd also like to make the authentication system as interchangeable as possible. If the investment is being made to use XML and XSL to structure the interface and data model logic, it should also make sense to make sure that it isn't "stuck" or "hard-coded" to the default nexista user admin.

Possible alternative authentication candidates include PAM, <a href="http://pear.php.net/package/LiveUser">PEAR's LiveUser</a>, or <a href="http://pear.php.net/package/Auth">PEAR AUTH</a>. I'm not too familiar with the PEAR authentication schemes, but I'm sure I can get acquainted with them easily enough. Both projects seem to have good documentation with is a BIG help.
