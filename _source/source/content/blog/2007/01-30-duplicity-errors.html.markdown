---
title: Duplicity errors
date: 2007-01-30
---
I guess its time I learned python! I keep getting wacky errors when using duplicity:

<pre>Warning, found incomplete backup sets, probably left from aborted session</pre>

This option fixed it, no python required:

<pre>--cleanup</pre>

call it with the force option to actually delete the incomplete backup set:

<pre>--cleanup --force</pre>

