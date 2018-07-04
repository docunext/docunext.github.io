---
title: POtrace
date: 2006-12-07
---
Awhile back I was helping my fiance with a poster presentation, and I wanted to convert some logos of her hospital and university to vector. I was going to use Adobe Illustrator or Adobe Photoshop, but I searched for a tutorial on how to do it and couldn't find much, so I searched for a new program.

I found potrace, which worked perfectly!

<a href="http://potrace.sourceforge.net/">http://potrace.sourceforge.net/</a>

I also just found these notes from a 2004 notebook:

<strong>Converting from a bitmap to a vector</strong>

For technical drawings: increase in size up to about 3200x2400, then convert to bitmap black and white 1 bit

image, then use autotrace:

autotrace −output−format ai −output−file Pfau3.ai −centerline −preserve−width −line−threshold .01 −

This actually worked very well. Final step was to import into Illustrator, then reduce to 24%, change line

weight to .75, and export to Flash.

