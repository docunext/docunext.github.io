---
title: Caching Theory
date: 2006-07-08
---
Most web content is now dynamic content, preventing client and proxy caches from doing much good. However, if the dynamic content server is configured correctly, it will be able to at least validate content without resending and just as important regenerating the entire content body.</p>
<p><strong>The Problem</strong>

The &quot;million-dollar&quot; question here is thus: how to setup the dynamic server to appropriately, efficiently and correctly mark stale content as such? The question is complicated by the fact that these servers must cache the various components of content to be effective.</p>
<p><strong>Proposal</strong>

I suggest a hierarchical dependency structure of cache components. The lower in the hierarchy a cache component is, the greater the efficiency and effectiveness a cache component has, though conversely the more opportunities there are for its validity to expire. This technique can be achieved a myriad of ways, though I will likely use a string based approach, similar to common web uris. For example:</p>

<pre>
domain.com/path/to/resource.extension</pre><p>In this case, this cached resource is at the bottom of the hierarchy, meaning it is a complete cache component. If something &quot;global&quot; to domain.com were to change, all caches in that directory would be invalidated, cascading through the directories as such.</p>
<p><strong>Security for Private Content</strong>

Private content should not be cached on any proxy servers.</p>
<p>Filesystem protection offers standard security for caches. For most professional web servicing companies and applications, this is acceptable, as it is nearly equivalent to the security offered by the web application itself.</p>
<p>If the web application has an encryption layer, whereas on the password carrying user has access to their content, an encryption wrapper can be implemented for the cache with little impact.</p>
<p><strong>Dynamic Separation</strong>

Lastly a note about content creation: for content that is never cacheable, such as the current time, using javascript to push the process to the client provides a method to allow for caching and distributes processing requirements, which is always a good thing.</p>
