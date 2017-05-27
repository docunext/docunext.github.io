---
title: Markdown to ODT PDF to Doc
date: 2011-03-09
---
This is an interesting challenge - and I love interesting challenges! How can I convert markdown to an openoffice document, or a PDF to a Word Doc? Easy! I use markdown as my source format when writing documents that I plan to present in a professional manner.

*I know what you are thinking, "Markdown? For documents?"*

YES!! Thanks to the awesomeness of John Macfarlane's **[Pandoc](http://johnmacfarlane.net/pandoc/)**! Thanks to this terrific project, I'm able to use Markdown for simple stuff, and LaTeX for complex stuff (its a balance).

That solution works *really* well, for generating PDFs... but what about other formats? Like converting from **pdf** to **odt**, even **doc** (yuck).

Last night I worked on this challenge for quite some time. I tried several methods, including <tt>mk4ht oolatex mydoc.mdwn</tt>, but there was always something clunky going on.

Eventually I stumbled upon **latex2rtf**. How's that work? Again, thanks to Pandoc, I'm able to convert a markdown / LaTeX document to straight LaTeX, allowing me to then use latex2rtf. That was the fastest and simplest, so even though there were still some formatting issues, I decided it was my best option.

Eventually to make everything work, I had to simplify my LaTeX commands, excluding some really sweet packages, like tabularx and fancyhdr, and even seemingly standard ones like parskip! 'Sup with that??

So thanks much to the folks behind markdown, Pandoc, LaTeX, openoffice, and latex2rtf!

Here's a snibbet of how I've got the script set up:

<pre class="terminal">
pandoc --template=../../../.pandoc/templates/odt.template my_markdown_doc.txt -s -o my_markdown_doc.tex
latex2rtf my_markdown_doc.tex
mv *.rtf $TARGET/my_markdown_doc.rtf
</pre>

#### References:

* <http://moldyn.blogspot.com/2009/04/latex-to-odt-conversion-tips.html>
* <http://ubuntuforums.org/showthread.php?t=1033441>

