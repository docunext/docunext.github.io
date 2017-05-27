---
title: XSL Optimization
date: 2008-07-05
---
I've been benchmarking XSL-powered applications quite a bit lately, and I've come up with a few tips which have helped improve the performance of my apps:

<ul><li>Avoid "//" - it requires scanning the entire tree
</li><li>Cache the parsed style sheet, if possible
</li><li>Reduce the size of the XML document
</li><li>Use keys, parameters, and variables as necessary to avoid repeating the same lookups</li></ul>
I've heard people say that including / importing stylesheets can have an adverse affect on performance, but I haven't noticed. It may cause a performance impact if the style sheets are not cached, but I'm caching mine and it doesn't make a difference.

It goes without saying that any dynamically generated content can be optimized through caching, and XSL is no exception.

