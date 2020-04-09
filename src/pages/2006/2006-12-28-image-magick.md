---
title: Image Magick
comments:
  - author: admin
    email: albert.lash@savonix.com
    date: 01/06/2007 07:30:42 AM
    text: >
      I just found these old notes:<br/>The best command I've found so far:<br/>convert −size 762x612 −compress LZW file.tif file.pdf<br/>convert −colorspace cmyk −compress LZW file.tif file.pdf<br/>Convert a PDF to a series of JPG files:<br/>convert −size 576x432 Mitchell.pdf −rotate 90 −resize 576x432! Slide.jpg<br/><br/>The −rotate 90 is for landscape pdfs.
date: 2006-12-28
---
This very cool technology. It allows you to edit drawings and pictures using command line.

Create an sh document to execute the commands. With in the document treat each command like a layer. If you know you need a black circle on top of a red one. You have to draw the red circle first.

To begin an image magick command:

<pre class="terminal">
convert-scale % changes the size of the pic you're working wih-compress JPG will compress the file-quality # changes the quality
</pre>

To select a color for an object:-fill red this lets the computer known anything drawn after this is red.

To create a circle and add it to the image use:-draw 'circle 0x,0y 1x,1y' The first set of coordinates is the center of the circle, while the last set of coordinates is an end point.

The following line of code takes the image copy.jpg - scales it by 50%- compresses the jpg file- changes the quality to 85- draws a white circle- saves the file as copy-sm.jpg

<pre class="terminal">
convert -scale 50% -compress JPEG -quality 85 -fill white -draw 'circle 100,100 130,130'  copy.jpg copy-sm.jpg
</pre>

¥

