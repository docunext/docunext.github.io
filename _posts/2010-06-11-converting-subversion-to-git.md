---
title: Converting Subversion to Git
date: 2010-06-11
tags: git,subversion
---
I'm finally writing a post about converting a Subversion repository to Git. I first learned about this from [Paul Dowman's blog](http://pauldowman.com/2008/07/26/how-to-convert-from-subversion-to-git/).

<pre class="sh_sh">
git svn clone &lt;svn repo url&gt; --no-metadata -A authors.txt -t tags -b branches -T trunk &lt;destination dir name&gt;
</pre>

Paul suggested doing this for each tag:

<pre class="sh_sh">
prompt&gt; git tag tagname tags/tagname
prompt&gt; git branch -r -d tags/tagname
</pre>

So I wrote a little command line "one liner" and posted it as a comment to Paul's blog post. Unfortunately, Wordpress does some smarty pants formatting on it, which makes it fairly useless. Besides, there was a mistake in my "one liner". This one is the latest version I'm using:

<pre class="sh_sh">
git branch -r | grep tags | sed -r "s/tags\///g" | awk '{ print "git tag "$1" tags/"$1 " && git branch -r -d tags/"$1 }'
</pre>

