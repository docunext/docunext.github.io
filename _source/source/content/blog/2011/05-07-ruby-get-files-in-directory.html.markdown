---
title: Ruby Get Files In Directory
date: 2011-05-07
---
Using **Ruby**, I am able to get all the files in a directory, I use this code:

<pre class="sh_ruby">
myfiles = Dir.glob("*")
</pre>

To get the files in a certain path, I just include the path before the glob:

<pre class="sh_ruby">
myfiles = Dir.glob("/var/www/*")
</pre>

Since its a glob, I can choose an extension to filter with:

<pre class="sh_ruby">
myfiles = Dir.glob("*.png")
</pre>

