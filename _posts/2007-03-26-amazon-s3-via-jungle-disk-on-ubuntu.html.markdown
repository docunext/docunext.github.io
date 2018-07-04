---
title: Amazon S3 via Jungle Disk on Ubuntu
date: 2007-03-26
tags: none
author: Albert Lash
---
We wrote an article about Amazon S3 ( <a href="http://www.docunext.com/blog/2007/01/29/s3-duplicity-with-debian/">Amazon S3 Duplicity with Debian</a> ) awhile back and I'm again looking into it as a way to store backups remotely.

JungleDisk remains the best way to connect to S3 (in my opinion). To install on ubuntu, download the tarfile from jungledisk, and you'll need libssl0.9.7 installed so:

<pre>apt-get install libssl0.9.7</pre>

I'm running a remote desktop via Freenx, and I'm not sure if the installer is working right. Hmmm. Aha, just had to run the command from the "Run command" dialogue box rather than a terminal.

Then this post helped me get connected from within xfce (my favorite windowing environment!):

<a href="http://forum.jungledisk.com/viewtopic.php?t=343">webdav via xfce</a>

You also have to install davfs2:

<pre>apt-get install davfs2</pre>

Works good!

