---
title: PDF2SWF SWF2PDF
date: 2006-12-20
---
I scoured the web looking for a swf2pdf converter, or vice-versa, a pdf2swf converter, which I did eventually find thanks to <a href="http://www.swftools.org/">SWF Tools pdf2swf</a> package. I ultimately did not find anything which fit my needs, so I opted instead for this technique:

1. Use PDF as the source file

2. Convert to hi-res (288 dpi/ppi) ppm using xpdf pdftoppm package

3. Convert ppm to web resolution (72 dpi) jpeg file

4. Import jpeg into a swf file- there are several ways to do this

The crazy thing about all this is how these two technologies (pdf and swf) seem to have been purposely made to <em>not</em> be compatible. This makes sense because of the competition between Macromedia and Adobe. Now that they have merged, I've got to wonder what the future holds for these formats. Adobe had been working on SVG, but it never got any traction, and I have to ask what the future of that format will be.

Rumor has it that Apollo will be a browser-like platform for both pdf's and swfs, but who knows. You can read more about <a href="http://labs.adobe.com/wiki/index.php/Apollo">Apollo at the Adobe Labs</a> page. It features a link to <a href="http://knowledge.wharton.upenn.edu/article.cfm?articleid=1524&specialid=55">Kevin Lynch on Adobe's Plans for a New Generation of Software</a>, hosted at Wharton.

Enough of the corporate strategy nonsense, I was pleased to learn about the Flash bitmap api as part of the process I described above. To me, it feels like the encapsulation of Photoshop into the Flash plugin, which is pretty exciting. I also learned about <pre>object.registerclass</pre>, which has really helped me grasp the idea of object oriented programming in actionscript.

Speaking of object oriented actionscript, I use ming and the php ming wrapper to dynamically author swf files, but mtasc and swfmill caught my eye recently. No plans to switch anytime soon, but I'm glad that there is an alternative.
