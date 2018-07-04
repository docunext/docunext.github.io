---
title: Linux Notes
date: 2006-10-29
---
<p><strong>Stat</strong>

<pre>
stat -f &quot;%Sc&quot; -t &quot;%Y%m%d&quot; filename</pre></p>
<p><strong>Rename Files</strong>

<pre>
for i in *; do mv &quot;$i&quot; &quot;${i/whatsinheregoesaway/andisreplacedbythis}&quot;; done

for i in *; do mv &quot;$i&quot; &quot;${i}.doc&quot;; done</pre></p>
<p>Make your swap partitions twice the size of your RAM amount.</p>
<p>df - how much space is being used on storage devices</p>
<p>A good filesystem benchmark: IOZone</p>
<p>!Cool Linux Command:

ps aux --forest</p>
<p>!To change mode of only files or directories - DO NOT USE THESE LIGHTLY!!!!:
&lt;verbatim&gt;</p>
<p>Remove .DS_Store files:

find . -name '.DS_Store' -exec rm {} \;</p>
<p>Get all the users in a group:

grep &quot;groupname&quot; /etc/group | awk -F: '{print $4}'</p>
<p>Remove command history:

ln -s /dev/null $HOME/.mysql_history

or

ln -s /dev/null $HOME/.bash_history</p>
<p>Count # of files:

ls -1Ra | wc | awk '{printf(&quot;There are %s files in this directory!\n&quot;,$1-2)}'</p>
<p>Define the following function, skill, aka &quot;Super  Kill&quot; in your .bashrc file. It finds the programs and terminate all the programs containing the give name!!
          skill ()
          {
             kill -9 `ps ax | grep $1 | grep -v grep | awk '{print $1}'`
          }


For example, skill netscape will terminate all the  Netscape related programs. Use this command with care. skill xterm will terminate all the running &quot;xterm&quot;s.  If you are scared, you can replace the first &quot;$1&quot; with a program  name you need to kill frequently, such as &quot;netscape&quot;, and name the  function as &quot;killnet&quot;. Here is an example.
          killnet ()
          {
             kill -9 `ps ax | grep netscape | grep -v grep | awk '{print $1}'`
          }

&lt;/verbatim&gt;</p>
<p>!Patches:

diff -Naur old_dirorfile newdirorfile &gt; name_of_patch.patch

patch -p0 &lt; patch-file-name-here</p>
<p>!Find

find ./ -type d -exec chmod 0700 {} \;</p>
<p>!No Space:

for f in *; do
     file=$(echo $f | tr A-Z a-z | tr -d '-')
     mv &quot;$f&quot; $file

done</p>
<p>!Detox

Useful for truncating and normalizing filenames</p>
<p>!Untar to specific directory:
  tar -C /var -xzf var-backup.tar.gz</p>
<p>!RESUME

rsync --progress --partial -e ssh</p>
<p>!mount Samba share on linux:

mount -t smbfs //hostname/share /targetdir/</p>
<p><strong>Mac, Linux, and Windows Compatibility</strong></p>

<ul>    <li>Apparently Linux supports HFS+ as a kernel module, it also supports AFP and Samba, which makes it very useful for transferring files between different types of hosts. </li>    <li>Mac saves ._* resource forks on non-HFS volumes, that is pretty lame. It might make sense to have an HFS+ filesystem on the LAN for Mac access, which is shared via Samba to PCs, and AFP to Macs. </li></ul><p><strong>The role of Partitions</strong></p>

<ul>    <li>Partitions are very useful: you can have multiple OS's, and install the OS on a small partition for easier backup. Same with / and /boot/, you can back those up too. And just like the Gentoo manual says, you can have a partition for mail, or web, without worrying about the OS partition running out of room for basic functions like logging. </li></ul><p>mysqldump -u hostname -ppassword dbname | gzip -c | ssh -c blowfish username@hostname &quot;gunzip -c | mysql -u username -ppassword dbname&quot;</p>

