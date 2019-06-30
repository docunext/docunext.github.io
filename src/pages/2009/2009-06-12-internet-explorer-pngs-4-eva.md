---
title: Internet Explorer PNGs 4 EVA 
date: 2009-06-12
---
I finally got to use the png fix which I've heard about for Internet Explorer. I usually don't bother trying to support MSIE as I'd rather give users another reason to switch to Firefox or something powered by Webkit.

In this case it had to be done - it was for one of my clients and they do get some MSIE visitors. There is a slight delay when the images load, but at least they look good!

I'm using a 50% alpha channel on some backgrounds, and a 100% transparent background on another. The first issue I had was with the div background - I guess the CSS is pretty picky about it. This seems to work OK:

 <pre>#mydivid {
background:#000 url(/s/img/bkimg.jpg) no-repeat scroll left bottom;
width: 500px;
height: 375px;
background-color:transparent;
text-align: left;
}
</pre>Once I got that working, I tried to use a conditional for the CSS to include the iepngfix.htc, but that wasn't happening, so I just inserted it into the main stylesheet.
