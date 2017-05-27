---
title: Getting Fancy with CSS and PNGs to Soften Edges
date: 2009-10-11
tags: css,javascript,jquery,mtos,pngs
---
I've been using a new ImageMagick script I wrote to make repetitive patterns.

I use the resulting patterns to create backgrounds for websites, but then I realized that the overlays cause some edges. I now want to soften the edges so I decided to use the transparent capabilities of PNG files.

I'll add more notes once I complete the process, but here's the gist of it:

* overflow: auto;
* background: transparent;
* $("#left-fade").css("height",$("#container-inner").css("height"));
* $("#left-fade-img").css("height",$("#container-inner").css("height"));

The div tags are important and relate to the structure put forth by MovableType Open Source.

