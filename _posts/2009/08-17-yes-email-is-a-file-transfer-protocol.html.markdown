---
title: Yes Email is a File Transfer Protocol
date: 2009-08-17
tags: sendmail
---
As much as it wasn't designed as one, the convenience of email has led to its widespread use as a file transfer protocol.

I'm currently evaluating ways to leverage this fact more effectively (such as for blog posting), but in the meantime, I've found this little shell command to be very handy as a quick backup for text files:

<pre class="sh_sh">
cat test.rb | /usr/sbin/sendmail -t me@example.com
</pre>

It won't work for binary files; those require base64 encoding and attachment with mime data.

This page from shelldorado is awesome:

<a rel="nofollow"  href="http://www.shelldorado.com/articles/mailattachments.html">Sending e-mail using shell scripts</a>

Yes, metasend from the metamail package (available on debian) works perfectly:

<pre class="sh_sh">
metasend -b -t user.name@example.com -s "Testing metasend" -m image/jpeg -f kilotronix_1.jpg-thumb-210x109-1709.jpg
</pre>

To get the filename on the receiving side, I'm using the -D flag to set the content-description header.

<pre class="sh_sh">
metasend -b -t user.name@example.com -e base64 -s "Testing metasend" -m image/jpeg -D kilotronix_1.jpg-thumb-210x109-1709.jpg -f kilotronix_1.jpg-thumb-210x109-1709.jpg -n -m text/plain -f blah
</pre>

