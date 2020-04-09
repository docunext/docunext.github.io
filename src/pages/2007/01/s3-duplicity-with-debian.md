---
title: Setting up Duplicity for use with Amazon s S3 on Debian GNU Linux to backup on Dreamhost
date: 2007-01-29
tags: open source
---
To review the last post of backing up to dreamhost and s3 with duplicity, here is  clearer summary of what is necessary to get duplicity working with s3, as I figured it out on the fly and I'm sure my notes are confusing.
<h3>Howto get Duplicity with S3 working on Debian</h3><ol><li>Install rdiff-backup</li>

<pre>apt-get install rdiff-backup</pre><li>Install bitbucket</li>

<pre>cd /usr/src/

wget http://cheeseshop.python.org/packages/source/B/BitBucket/BitBucket-0.4a.tar.gz

tar -xzvf BitBucket-0.4a.tar.gz

cd BitBucket-0.4a

python setup.py install</pre><li>Get CVS checkout of duplicity</li>

<pre>cd /usr/src/

cvs -z3 -d:pserver:anonymous@cvs.savannah.nongnu.org:/sources/duplicity co duplicity

cd duplicity</pre><li>Copy _librsync.so to duplicity folder (or if you can compile it with what is provided in the CVS source, I couldn't get it to compile)</li>

<pre>cp /var/lib/python-support/python2.4/rdiff_backup/_librsync.so /usr/src/duplicity/duplicity/</pre><li>Then create a bash script to put it all together. I used the script provided by <a href="http://labora.harnvi.net/?p=34">Labora</a>:</li></ol>

<blockquote>#!/bin/sh

export S3KEY=[key]

export S3SECRET=[secret]/usr/local/share/duplicity/duplicity-bin --include-filelist="backuplist.txt" / s3+http://my-bucket</blockquote>

Thanks again labora - your post got this all started!

Author's notes:

<ul><li>It is assumed you have an S3 account, if not go to <a href="http://aws.amazon.com">Amazon's Web Services Page</a> and sign up.</li><li>It is assumed you are comfortable with linux and debian.</li><li>I download and install new software into /usr/src/ and so the code above uses those path prefixes, you can install to a different location if your environment requirements dictate it.</li><li>I have uploaded the packages referenced in this article just in case the others are for some reason unavailable to you. Unfortunately, I don't know how to sign the files (yet) with an MD5 hash so you'll either have to trust me, be able to check their integrity on your own, or not use them.</li></ul>
<h3>Duplicity Files:</h3><del>bitbucket-0.4a.tar.gz</del><del>duplicity.zip</del> (includes _librysnc.so for x86, 32-bit platforms)

UPDATE November 2007: Files removed, I never used them again.

