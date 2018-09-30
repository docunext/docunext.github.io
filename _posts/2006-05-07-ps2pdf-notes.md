---
title: ps2pdf Notes
date: 2006-05-07
tags: none
author: Albert Lash
---
<p>Good overview page: <a href="http://www.cs.wisc.edu/~ghost/doc/cvs/Ps2pdf.htm" onclick="window.open(this.href, '_blank'); return false;">http://www.cs.wisc.edu/~ghost/doc/cvs/Ps2pdf.htm</a></p>
<p>CMYK: ps2pdf -dProcessColorModel=/DeviceCMYK</p>
<p>There are some presets to consider which adjust the right amount of compression for various mediums:</p>
<p><strong>-dCompressFonts=boolean</strong>

Defines whether ps2pdf will compress embedded fonts in the output.  The default value is true; the false setting is intended only for debugging.</p>
<p><strong>-dPDFSETTINGS=configuration</strong>

Presets the &quot;distiller parameters&quot; to one of four predefined settings:</p>

<ul>    <li>/screen selects low-resolution output similar to the Acrobat Distiller &quot;Screen Optimized&quot; setting.</li>    <li>/ebook selects medium-resolution output similar to the Acrobat Distiller &quot;eBook&quot; setting.</li>    <li>/printer selects output similar to the Acrobat Distiller &quot;Print Optimized&quot; setting.</li>    <li>/prepress selects output similar to Acrobat Distiller &quot;Prepress Optimized&quot; setting.</li>    <li>/default selects output intended to be useful across a wide variety of uses, possibly at the expense of a larger output file.</li></ul><p><strong>The best way to make a low file sized PDF is to print to postscript in Illustrator, then use this command to convert to PDF</strong>:

<pre>
ps2pdf -dPDFSETTINGS=/screen -dProcessColorModel=/DeviceCMYK filename.ai.ps</pre>

<strong>Even more interesting, the quality (fonts, etc) of the Postscript file will depend on the Postscript driver you use! Use the Apple Color Laser driver.</strong></p>
<p><strong>HTMLDOC</strong>

<pre>/usr/local/bin/htmldoc --book --no-links --no-title --compression=8 --gray --header &quot;...&quot; --no-toc -v -f _final_output.pdf *.html/usr/local/bin/htmldoc --book --no-links --no-title --tocheader &quot;...&quot; --toclevels 1 --compression=8 --gray --header &quot;...&quot; --toctitle &quot;ALL Journal&quot; -v -f _final_output.pdf *.html</pre>

