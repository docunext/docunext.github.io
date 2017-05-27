---
title: Making a JPEG Mask with Ming setMaskLevel or Flash BitmapData API
date: 2006-12-17
tags: none
author: Albert Lash
---
I'm trying to use setMaskLevel in Ming, to mask a jpeg, unfortunately I can't find anything useful on the subject. Best bet was gazb's site, but so far I can't understand anything. I don't think this function does what I need it to, I think it simply allows you to set a mask shape from a sprite, but has nothing to do with bitmaps.

Thankfully, Flash 8 has the power. I've been hacking away at it for awhile, getting totally stumped by the 16 and 32 bit color value syntax. Here are a couple of examples:

<strong>32-bit hexadecimal</strong>

0x00000000 - transparent value

0xFFFFFFFFF - white

0xFF000000 - black

0xFFFFCC00 - red

<strong>24-bit hexadecimal</strong>

0xFFCC00 - yellow

<strong>16-bit hexadecimal</strong>#FFFFFF - white

In the 32-bit hexadecimal color syntax used by Flash 8's bitmap api, the first two characters 0x are just a flag identifier. The next 8 characters are alpha (transparency), red, green, and blue; two characters for each index.

<a href="http://www.adobe.com/devnet/flash/articles/image_api_02.html">Adobe's Flash API article on pixel color.</a>

<a href="http://en.wikipedia.org/wiki/Web_colors">Wikipedia Web Colors Guide</a>

<strong>Reducing JPEG Artifacts when using transparenct</strong>

I'm really excited about the new bitmap features in Flash. Very cool stuff. One thing I like is the ability to convert a jpeg into a generic bitmap, and then set the alpha channel of the pixels within it. This works very well, but due to the way jpegs optimize images, they do not mesh well with alpha layers. To work around this, I've devised a strategy for images on white backgrounds with the goal of making the white transparent.

1. Make all the pure white fully transparent.

2. Create a loop to scroll through several "close to white" values, setting the alpha layer for each color value.

3. Starting at 100%, reduce the transparency the further away from pure white the values go.

This doesn't result in a perfect anti-aliased solution, but it does work well for its simplicity.

http://theflashblog.com/?p=47

http://www.osflash.org/flashcoders/undocumented/flash8#bitmap_display

http://www.quasimondo.com/archives/000116.php

http://www.quasimondo.com/archives/000594.php

http://www.adobe.com/devnet/flash/articles/image_api_05.html

http://www.adobe.com/devnet/flash/articles/image_api_02.html

http://www.nunomira.com/tutorials/removing_movie_clips.php#authoring

http://www.actionscript.org/resources/articles/72/1/OOP-and-inheritance-in-Flash/Page1.html

