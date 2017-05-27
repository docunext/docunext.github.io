---
title: jQuery Selector Contexts
date: 2009-12-07
tags: jquery,selectors
---
Why did these elude me for so long? Not sure, but that's not important anyway.

What are jQuery Selector Contexts? They are more like scopes than contexts in my opinion. They restrict a selector to only look within an other selector.

For example, the selector could find all the span tags in thead elements, and add a css attribute to them, like this:

<pre class="sh_javascript">
$("span","thead").css("color","red");
</pre>

Nice, huh?

