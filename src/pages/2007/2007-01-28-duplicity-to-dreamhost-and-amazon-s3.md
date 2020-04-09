---
title: Duplicity to dreamhost and Amazon S3
comments:
  - author: neurophyre
    email: spambox@evernex.com
    date: 10/26/2007 09:47:26 PM
    text: >
      Dreamhost has officially disallowed the use of its servers for backup purposes:<br/><br/><a href="http://www.dreamhoststatus.com/2007/10/17/policy-clarification-personal-storage-back-ups" rel="nofollow">http://www.dreamhoststatus.com/2007/10/17/policy-clarification-personal-storage-back-ups</a><br/><br/>Also, slightly unrelated but anyone who may be considering using the JetS3t tool for S3 backups should be aware that it uses weak 56-bit DES encryption by default and that the authors do not currently intend to fix it.
  - author: admin
    email: albert.lash@savonix.com
    date: 10/27/2007 12:10:55 AM
    text: >
      Thanks for the heads up neurophyre, I'm not too keen on dreamhost these days anyway.
  - author: weakish
    email: weakish@gmail.com
    url: http://weakish.pigro.net
    date: 07/10/2010 02:03:06 AM
    text: >
      Dreamhost offers 50GB space for backup, which supports duplicity.<br/><br/><a href="http://feelslikeburning.com/2009/01/23/using-duplicity-to-make-encrypted-incremental-backups-to-dreamhost/" rel="nofollow">http://feelslikeburning.com/2009/01/23/using-duplicity-to-make-encrypted-incremental-backups-to-dreamhost/</a>
date: 2007-01-28
tags: open source
---
Howto use duplicity to back to dreamhost.com accounts and Amazon S3:
<h3>Dreamhost</h3>

Dreamhost has some amazing offerings, one of which is a huge amount of storage, that increases over time! Using duplicity there is easy because you can simply ssh, or even better: scp, into it.

From the manual page of duplicity (i.e. "man duplicity") :

<pre>duplicity --full /home/me scp://uid@other.host/some_dir</pre>

Put your username in where it has "uid", making sure you have shell access at dreamhost for that user. Put your domain name which you host at dreamhost, such as example.com. Make sure whatever directory you choose exists in your home directory at dreamhost. I chose duplicity_backups so it would be easy to recognize.

Duplicity will then ask you for a gpg passphrase. Make it a good one. Since the first full backup will take awhile, I started the session by typing "screen", that way I could exit the shell with CNTL-a-d, and go on to other things. To return to that terminal session, just type "screen -r".

Strange thing though is the low throughput rates. On a tier-1 backbone connection, I'm only getting top speeds of 50KB/s, which is only about 400kbps. What gives? I should be at least getting two to three times that speed. Oh well, perhaps dreamhost.com does some ingress throttling to dampen any adverse network latency effects.

<strong>Word to the wise:</strong> Start small, if during your initial "first" backup, the transfer fails, you will have to start all over. To me that it is rediculous, but I guess its the cost of encryption.
<h3>Amazon S3</h3>

This isn't so easy. I'm trying duplicity with BitBucket, with directions from here:

<a href="http://labora.harnvi.net/?p=34">http://labora.harnvi.net/?p=34</a>

But I'm getting these errors when I try to run duplicity-bin.

<pre>ImportError: No module named _librsync</pre>

Ugh that's just not going to work.

OK, found this in CVS-Readme:

<pre>CVS README - Notes for people checking out of CVS-------------------------------------------------

Getting duplicity to run:-------------------------

If you want to run a version of duplicity checked out of CVS into your$DUP_ROOT directory, change to $DUP_ROOT/duplicity and run the./compilec.py file.  With any luck, a _librsync.so library will appear

in that directory.  Then run duplicity-bin, making sure that all the

files are in your PYTHONPATH:

PYTHONPATH=$DUP_ROOT duplicity-bin

or

PYTHONPATH=$DUP_ROOT rdiffdir

Running the unit tests:-----------------------

If you want to try some of tests, you first have to untar the

testfiles.tar.gz as root (the tarball contains device files, files

with various uid/gid, etc):

cd testing; tar -xvzf testfiles.tar.gz

Then run the various *test.py files, for instance:

cd testing; python lazytest.py</pre>

Except now I'm getting: error: command 'gcc' failed with exit status 1

Argh. OK so I couldn't get _librsync.so to compile, but I installed rdiff_backup with:

<pre>apt-get install rdiff_backup</pre>

and then copied the _librsync.so to the duplicity src directory.

<pre>cp /var/lib/python-support/python2.4/rdiff_backup/_librsync.so duplicity</pre>

Then got the bitbucket:

<pre>wget http://cheeseshop.python.org/packages/source/B/BitBucket/BitBucket-0.4a.tar.gz

tar -xzvf BitBucket-0.4a.tar.gz

cd BitBucket-0.4a

python setup.py install</pre>

Holy cow - it works! Gosh I do wish I could get it to show me how quickly the files are loading.

¥

