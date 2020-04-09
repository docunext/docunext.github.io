---
title: jQuery Post XML Response Parsing
comments:
  - author: Rey Bango
    email: reybango@gmail.com
    date: 03/06/2008 08:24:48 PM
    text: >
      Hi Albert. Xpath is actually available via plugin. <a href="http://docs.jquery.com/Release:jQuery_1.2#XPath_Compatibility_Plugin" rel="nofollow">http://docs.jquery.com/Release:jQuery_1.2#XPath_Compatibility_Plugin</a><br/><br/>HTH.<br/><br/>Rey<br/>jQuery Team
  - author: Albert
    date: 03/06/2008 09:27:11 PM
    text: >
      Hi Rey, thanks! I'll check it out.
  - author: Albert
    date: 03/06/2008 09:27:39 PM
    text: >
      The plugins for jQuery look terrific, I'll have dig more into there.
  - author: Luis
    email: luis@luis.com
    date: 06/07/2010 08:56:09 PM
    text: >
      Thank You !!!!!!!!!!!
date: 2008-03-06
tags: jquery,xml
---
Finally figured this out... something obvious as usual. I had to set the content type to text/xml for that the post request was receiving. Duh, after that, it was easy. I also read somewhere that jQuery dropped support for xpath, I'm fine with that, the DOM seems to fit better with client side work.

I'm sticking with XML because I'm such a huge fan of it. JSON looks cool, but I'm happy with XML. Anyway, here's the code I got working:

<pre class="sh_javascript">
$.post("http://www.example.com/blah",
{
  'barfy': 'blah'
},
function (data){
  alert( ($("menu",data).attr("id")));
});
</pre>

Then the magnificient XML document which is sent to the jQuery ajax client:

<pre class="sh_xml">
&lt;menu id="hi">    blah&lt;/menu>
</pre>

This will result in "hi" getting alerted. For the "blah" value, you'd use ($("menu",data).text()) as the DOM locator. The "data" text is in the jQuery ()'s because it is "context" of the reference, otherwise the query would be looking for menu in the existing page.

¥

