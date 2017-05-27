---
title: Escape from Outlook PST Files to IMAP Maildirs
date: 2009-12-31
tags: imap,outlook,thunderbird
---
I'm midway through a huge (~20GB) "PST2IMAP" conversion for a client and I've decided to share my notes about the process.

#### **Outlook 2007 PST**
My client uses Outlook 2007 on Windows XP, and while he uses the IMAP protocol, his Outlook configuration was somehow setup so that he organized all his emails in his "Local Folders". I've been recommending we migrate his emails back to the IMAP server for the following, non-exhaustive reasons:

* IMAP stores messages on a server my company manages for his company. The email storage is powered by a RAID array in a secure facility with uninterruptible power supplies. His laptop has one drive which could fail, resulting in data loss. His laptop could also be stolen.
* In the event his laptop breaks or is for whatever reason out of reach, the IMAP server can be accessed via the web.
* IMAP clients can synchronize with the server.
* IMAP servers using the Maildir format can scale to hundreds of thousands, if not hundreds of millions of emails, serving untold volumes of data.

He just bought a new laptop running Windows 7. And his emails had to get from one computer to the other, so now was obviously the right time to move the emails to the IMAP server, and then synchronize Outlook on the new laptop with the IMAP server.

If you've ever tried something like this, you know its not as easy as it might seem it should be. I've often compared my experiences with Microsoft software to what I imagine it might be like for lobsters that find themselves in lobster traps: it seemed like such a good idea to give it a try, only to discover its impossible to get out!

#### **Getting Started**
I copied his PST files onto an external drive with an NTFS formatted partition and am using Windows Vista Premium with a trial version of Outlook 2007 and Thunderbird 3.0 on it, as well two Debian GNU/Linux machines (one is using the Squeeze version, the other is using Lenny) with readpst and Thunderbird 3.0 from Mozilla (Icedove is still at version 2.0). The imap server I'm using runs Courier on Debian GNU/Linux.

I've tried a couple of different methods and this is the one I've come up with that seems to work the best, though it does take time.

#### **Method of Choice**


1. I convert Outlook 2007 Personal Files Directories to Outlook 2002 format by creating a new data file of that type, and moving the emails over. The "gotcha" here is that Outlook 2002 files cannot be larger than 2GB. Its interesting because the client has two old archives which hit the 2GB limit, so in all I'm migrating 12GB of "new" mail, and 2 x 2GB of archived mail, all to IMAP, then merging all the folders together. Thankfully the client is very organized so the merging of folders is not as complicated as it needed to be.
2. I then copy the Outlook 2002 PST files to a linux machine and use readpst to convert the Outlook 2002 version pst file to mbox format. This seems to work very well, though at first I thought it was a bust because it exports to an mbox format that is different than what Thunderbird uses. I figured out a "find" command to sort of get it to where Thunderbird wants the mbox files, but was a little stumped as how to proceed from there. Thankfully I found this helpful post: [colby.id.au/node/14](http://colby.id.au/node/14) which explains what to do next! <del>Note: I'm also using "find out -empty -type f -exec rm {} \;".</del> Actually that breaks folders that have sub-folders, but no emails.
3. After the mbox files are how they should be, I then use detox to clean up mbox file names, and also make some manual edits (no periods or forward slashes in the folder names).
4. The final step I use it to get Thunderbird to upload the files to IMAP. Why not just use Outlook to upload the files? I did use it for some emails, but it was very slow going - even on a data transfer basis, and I'm not sure why. On a 20Mbit connection, it would max out at 1.5Mbit upload speed, while Thunderbird 3.0 on my Debian GNU/Linux laptop was achieving 7-8Mbits. Any ideas what the bottleneck might be?

#### **Other Attempts**

* I tried uploading directly from Outlook to IMAP. It worked but was surprisingly slow (1.5Mbit on a 20Mbit connection), and would occasionally fail for reasons I could not track down.
* I tried using Thunderbird 3.0 on Windows to import directly from Outlook ( [see this article at mozllaZine.org about Thunderbird making SimpleMAPI calls](http://kb.mozillazine.org/Import_.pst_files) ) but it kept crashing on me, and Thunderbird 3.0 performance would plummet on folders with around 10,000 messages in them.
* I also tried the PST Import plugin which reportedly uses ReadPST. It didn't work for me on Windows or Linux and I don't know why.

#### **Additional Thoughts and Notes**

* I also thought about using offlineimap, but I was unfamiliar with how well mb2md works.
* I'm planning to use fdupes to check for duplicates after the final merge, on a copy of the top-level IMAP folder.
* Thunderbird 3.0 on GNU/Linux is very close to being awesome. I miss a couple of features that Outlook 2007 has though, one in particular - the ability to calculate folder size, including all sub-folders.
* Going through a lengthy process like this reminds me of two significant facts:

1. IMAP has never let me down.
2. I much prefer using open source software instead of Microsoft software.

Just in case Paul Colby's site goes down, here are the shell scripts it hosts:

<pre class="sh_sh">
find out -type d | tac | grep -v '^out$' | xargs -d '\n' -I{} mv {} {}.sbd
find out -name mbox -type f | xargs -d '\n' -I{} echo '"{}" "{}"' | sed -e 's/\.sbd\/mbox"$/"/' | xargs -L 1 mv
find out -empty -type d | xargs -d '\n' rmdir
</pre>

#### **Even More Thoughts**

* I've installed cygwin on the Windows Vista Premium machine and am going to try and find out if the bottleneck in uploading emails to the IMAP server is the machine itself, not Outlook 2007.
* IMAP folder "dot" hierarchies make it a bit difficult to merge similar trees. I wrote up a little shell script to try and make it easier to use rsync to merge two trees, but I decided to do the merge manually in this case to make sure nothing goes wrong, and think about automating the process later on:

<pre class="sh_sh">
ls -1a temp/ | grep old | sed -r 's/^(.*)$/\"\1\" \"_\1\"/g'  > command.sh
</pre>

and in Vim:
<pre class="sh_sh">
:%s/_\.old/.archive/g
</pre>

Also thanks to:

* <http://derekh.com/improve-outlook-2007-imap-performance/> for some ideas on how to deal with Outlook 2007 and IMAP

