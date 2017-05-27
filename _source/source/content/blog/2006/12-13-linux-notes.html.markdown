---
title: Linux File Management Notes
date: 2006-12-13
---
<p><strong>Stat</strong>

<pre>
stat -f &quot;%Sc&quot; -t &quot;%Y%m%d&quot; filename</pre></p>

<pre>$string = preg_replace("/(\S*)(:\/\/)(\S*)/","<a href=\"\\1\\2\\3\">\\1\\2\\3</a>",$string);</pre><p><strong>Rename Files</strong>

<pre>
for i in *; do mv &quot;$i&quot; &quot;${i/whatsinheregoesaway/andisreplacedbythis}&quot;; done

for i in *; do mv &quot;$i&quot; &quot;${i}.doc&quot;; done</pre></p>
<p>Make your swap partitions twice the size of your RAM amount.</p>
<p>df - how much space is being used on storage devices</p>
<p>A good filesystem benchmark: IOZone</p><b>Cool Linux Command:</b>

<pre>ps aux --forest</pre><b>To change mode of only files or directories - DO NOT USE THESE LIGHTLY!!!!:</b>

Remove .DS_Store files:

<pre>find . -name '.DS_Store' -exec rm {} \;</pre>

Get all the users in a group:

<pre>grep "groupname" /etc/group | awk -F: '{print $4}'</pre><p>Remove command history:

ln -s /dev/null $HOME/.mysql_history

or

ln -s /dev/null $HOME/.bash_history</p><b>Count # of files: </b>

<pre>ls -1Ra | wc | awk '{printf(&quot;There are %s files in this directory!\n&quot;,$1-2)}'</pre><p>Define the following function, skill, aka &quot;Super  Kill&quot; in your .bashrc file. It finds the programs and terminate all the programs containing the give name!!
          skill ()
          {
             kill -9 `ps ax | grep $1 | grep -v grep | awk '{print $1}'`
          }


For example, skill netscape will terminate all the  Netscape related programs. Use this command with care. skill xterm will terminate all the running &quot;xterm&quot;s.  If you are scared, you can replace the first &quot;$1&quot; with a program  name you need to kill frequently, such as &quot;netscape&quot;, and name the  function as &quot;killnet&quot;. Here is an example.
          killnet ()
          {
             kill -9 `ps ax | grep netscape | grep -v grep | awk '{print $1}'`
          }

&lt;/verbatim&gt;</p><b>Patches: </b>

<pre>diff -Naur old_dirorfile newdirorfile > name_of_patch.patch

patch -p0 < patch-file-name-here</pre><b>Find</b>

<pre>find ./ -type d -exec chmod 0700 {} \;</pre><b>No Space: </b>

<pre>for f in *; do     file=$(echo $f | tr A-Z a-z | tr -d '-')     mv &quot;$f&quot; $file

done</pre><b>Detox</b>

Useful for truncating and normalizing filenames</p><b>Untar to specific directory: </b>

<pre>tar -C /var -xzf var-backup.tar.gz</pre><b>RESUME</b>

<pre>rsync --progress --partial -e ssh ...</pre><b>mount Samba share on linux: </b>

<pre>mount -t smbfs //hostname/share /targetdir/</pre><p><strong>Mac, Linux, and Windows Compatibility</strong></p>

<ul>    <li>Apparently Linux supports HFS+ as a kernel module, it also supports AFP and Samba, which makes it very useful for transferring files between different types of hosts. </li>    <li>Mac saves ._* resource forks on non-HFS volumes, that is pretty lame. It might make sense to have an HFS+ filesystem on the LAN for Mac access, which is shared via Samba to PCs, and AFP to Macs. </li></ul><p><strong>The role of Partitions</strong></p>

<ul>    <li>Partitions are very useful: you can have multiple OS's, and install the OS on a small partition for easier backup. Same with / and /boot/, you can back those up too. And just like the Gentoo manual says, you can have a partition for mail, or web, without worrying about the OS partition running out of room for basic functions like logging. </li></ul>

<pre>mysqldump -u hostname -ppassword dbname | gzip -c | ssh -c blowfish username@hostname "gunzip -c | mysql -u username -ppassword dbname"</pre>

