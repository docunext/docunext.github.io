---
title: Roundcube on Debian
date: 2007-08-14
tags: email clients
---
Trying out Roundcube - great docs, very clear and to the point. Follows this layout:

<pre>
REQUIREMENTS==========...

INSTALLATION=========...</pre>

That makes it super easy to install. The conf files are called main.inc.dist - which is a good idea for PBooks - I've been haunted by the config files getting stuck in svn!
<h3>Roundcube Installation</h3>

I of course installed this on debian, and here's what I did:

<pre>
mkdir /usr/share/roundcube/

cd /usr/share/roundcube/

wget ... ungzip ... untar ...</pre>

Followed instructions in INSTALL

<pre>
cd /var/www/

ln -s /usr/share/roundcube/ roundcube</pre>

I have my default umask set to 077 so I had to run:

<pre>find . -type f -exec sudo chmod 0664 {} \;

find . -type d -exec sudo chmod 0775 {} \;</pre>

in the /usr/share/roundcube directory.

I had held off on trying out Roundcube because it wasn't available in the debian package repository, but that could have been due to licensing conflicts. I suggest this as a cause because their website is highlighting that the newest release is a clean GPL code base. That's awesome, I think this project would do very well in the debian community and beyond.
<h3>Roundcube Review</h3>

I really like it so far, its fast, good looking, and very flexible - you can even specify what server you want to login to! That's pretty amazing. Alternatively, you can set the config file to a dedicated server, and even specify SSL ports for IMAP and SMTP. That's REALLY cool.

I just checked out the database, and I like what I see. Roundcube uses the database as a local cache of directories and messages to achieve the speeds it offers. This is the key to making roundcube a desktop client alternative.

But how well does Roundcube conform to the IMAP protocol? VERY WELL INDEED! The config files include variables for such things as Sent, Junk, and Trash folders, so that you can adjust these to your needs.
<h3>Roundcube Thoughts and Questions</h3>

<ul><li>Does the compact folder function affect the server, or just the db cache? Hard to say, I created a test folder, sent myself a test message, then compacted the folder, and couldn't tell what happened, if anything. I checked the DB, and the messages table only appears to store the basic message headers, not the body. </li><li>Does or can roundcube use http caching?</li><li>What about LDAP for address book use? I've set this up with Mail.app and it was very slow - albeit powered by a MySQL back-end, not sure if that had anything to do with it.</li></ul>

I first found out about Roundcube from the friendly folks at <a href="http://thirteen.net/">thirteen.net</a>.
