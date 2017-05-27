---
title: Markdown2pdf formatting
date: 2009-04-04
tags: none
author: Albert Lash
---
Markdown is a very simple syntax for stylizing documents. I really like it because it works for both plain text ASCII documents and when its converted to HTML or something similar.

I'm starting to use it for letter writing, something I enjoy doing very much. I write the letter using Markdown syntax and then convert the text file to PDF using, what else, markdown2pdf, part of pandoc. My first few letters were hardly formatted at all just using the resulting HTML layout features: paragraphs and line breaks.

Reading up on the pandoc tools, I decided I needed to learn about latex documents. That was the key - I was able to get a larger font size with this latex header:

<pre>\documentclass[12pt]{amsart}\setlength{\parindent}{0pt}\setlength{\parskip}{12pt plus 2pt minus 1pt}</pre>

and this command:

<pre>
markdown2pdf -C test.latex my_markdown_letter.txt</pre>

