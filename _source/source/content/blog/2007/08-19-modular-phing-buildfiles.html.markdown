---
title: Modular Phing Buildfiles
date: 2007-08-19
---
I've got the feeling that given to its own devices, the phing buildfile I've been working on for m0n0wall based builds could grow unwieldy. To combat this elaphantitis, I'm looking to split the buildfile up.

Then I got thinking, can I include external buildfiles in a main build.xml? Sort of, I can just use an exec task for calling another build file:

<pre><target name="otherbuild">  <exec command="phing -f otherbuildfile.xml"/></target></pre>

There is actually a target for exactly this: PhingTask.

