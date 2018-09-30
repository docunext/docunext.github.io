---
title: Analytics on MovableType OpenSource
date: 2009-05-30
tags: analytics,google,"movable type"
---
I'm using this template to add the javascript required to call out to Google Analytics:

<pre class="sh_xml">
&lt;mt:If name="analytics_code"&gt;&lt;mt:If name="analytics_cookie_path"&gt;&lt;mt:Else&gt;&lt;MTSetVar name="analytics_cookie_path" value="/blog/"&gt;&lt;/mt:If&gt;&lt;script src="http://www.google-analytics.com/ga.js" type="text/javascript"&gt;&lt;/script&gt;&lt;script type="text/javascript"&gt;
try {
var pageTracker = _gat._getTracker("&lt;MTGetVar name="analytics_code"&gt;");
pageTracker._setCookiePath("&lt;MTGetVar name="analytics_cookie_path"&gt;");&lt;mt:If name="analytics_cookie_domain"&gt;
pageTracker._setDomainName("&lt;MTGetVar name="analytics_cookie_domain"&gt;");&lt;/mt:If&gt;
pageTracker._trackPageview();} catch(err) {}&lt;/script&gt;&lt;/mt:If&gt;
</pre>

