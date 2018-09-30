---
title: FreeNAS RAID Drive Swap
date: 2008-05-07
tags: none
author: Albert Lash
---
I was getting DMA timeout errors on a FreeNAS server setup yesterday, so I "forgot" the drive, then removed it from the array, and today I've just swapped out the physical drive.

Strange, but I can't format the new drive, so now I'm "inserting" it into the existing one drive RAID 1 array. Hmmm, something about unable to store metadata. I might have to start over. Isn't that why its good to have RAID 1 in the first place, so you don't have to start over?

It appears that my SATA drives do not play well with power management, <strong>*at all*</strong>. Whenever I would try to format a drive, it would get kicked out and disappear entirely.


Also turns out that I had to completely format the old RAID1 member before creating a new one, it kept on finding the old RAID and trying to set that one up. I think I've run into that problem before...

Thanks:

http://web.vee.net/noise/2006/10/freebsd6-raid1.html

http://www.freebsd.org/cgi/man.cgi?query=gmirror

http://lantech.geekvenue.net/chucktips/jason/chuck/1175552464/index_html

