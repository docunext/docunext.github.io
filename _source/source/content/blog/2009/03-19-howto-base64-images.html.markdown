---
title: Howto Base64 Images
date: 2009-03-19
---
I've been embedded a lot of images into javascript blocks lately using Base64 encoding and I'm quite pleased with the results.

What does this mean? Let me explain: images (gifs, jpegs, pngs) are usually stored in binary format, and cannot be represented using textual characters. By encoding the file data into base64 format, it is possible to represent the image with textual characters. The file size is a little bigger, but for small images the difference isn't that great, and the text can be compressed.

What are the benefits? I'm doing this to simplify some web based software packages I've authored, managed, or use. I haven't done any testing, but I think that there may be performance benefits as well, due to reduced server requests for each image - only one request is needed for the javascript file which contains the base64 data.

How is it done? First the image needs to be converted into base64. I use a command line tool called, what else, base64. It goes like this:

 <pre class="sh_sh">base64 imagename.png
</pre>
The result looks something like this:

<pre>R0lGODlhDwAOAIIAAWpsYoy3oamMQdS9fDmJdP////9tcH98XywAAAAADwAOAAIDO1gl3KxQiajG
pDcOi2nZHDQZpBFliyeeReAeBSCxagrBZHEAsh7BNaACNnAFCIThr+a7MYW6g3RKVSQAADs=
</pre>
To use this data in HTML, the image tag looks like this:

<pre>&lt;img src="data:image/png;base64,iVBORw0KGgoA..." /&gt;
</pre>For my next post, I'll explain how I embed this data into javascript!

