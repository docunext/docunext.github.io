---
title: NoFunc Javascript onLoad
date: 2009-05-12
tags: none
author: Albert Lash
---
The jQuery document ready function is very nice, but for some applications it takes to long to trigger. On those occasions, I've started using the <a href="http://nofunc.org/" rel="nofollow">nofunc</a> onload script:

<pre>function $(v) { return(document.getElementById(v)); }
function init() { $('example').innerHTML=(time()-loadTime)+'ms'; }
function time() { return(new Date().getTime()); }
function quick() {
    if(!$('example')) {
        if(time()-loadTime&lt;=5000) setTimeout("quick()",50);
        else window.onload=init;
    }
    else init();
}

var loadTime=time();

setTimeout("quick()",10);</pre>I'm using it with the PHP image replacement script, but with gdofcgi as the back-end. To keep it compatible with jQuery I had to make some changes, but I think its an excellent replacement. You can view the changes I made here in the <a href="http://www.sketch99.com/blog/mt.js" rel="nofollow">mt.js file</a>.

