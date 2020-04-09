---
title: xmlns map Sitemap versus Topology or
date: 2007-05-06
tags: none
author: Albert Lash
---
In my review of Roy Fielding's REST dissertation, I came across the term topology and how it relates to the term sitemap. This encounter led to a little sniffing around Cocoon and Popoon; projects which also use the term sitemap. In appreciation of standardization, I wanted to find out how similar or different each of these sitemaps document type definitions are.
<h3>Cocoon Sitemap</h3>

Kudos to the guys at bitflux for aligning popoon's sitemap dtd with cocoon's! Here's the example sitemap.xml included for slideml:

<pre><?xml version="1.0"?><map:sitemap xmlns:map="http://apache.org/cocoon/sitemap/1.0">    <map:pipelines>        <map:pipeline>            <map:generate type="xmlfile" src="slideml.xml"/>            <map:match type="uri" pattern="slide_*.html">                <map:transform type="libxslt" src="2html_ext_css.xsl">                    <map:parameter name="page" value="{1}"/>                    <map:parameter name="position" value="{1}"/>                </map:transform>                <map:transform type="phpsource" match="//code[@language='php']"/>            </map:match>            <map:match type="uri" pattern="toc.html">                <map:transform type="libxslt" src="2html_ext_css.xsl">                    <map:parameter name="page" value="toc"/>                    <map:parameter name="position" value="0"/>                </map:transform>            </map:match>            <map:match type="uri" pattern="#(title\.html|index\.php|/?$)#" matchtype="regex">                <map:transform type="libxslt" src="2html_ext_css.xsl">                    <map:parameter name="page" value="title"/>                    <map:parameter name="position" value="0"/>                </map:transform>            </map:match>            <map:serialize type="html"/>        </map:pipeline>    </map:pipelines></map:sitemap></pre>
<h3>Nexista Sitemap Example</h3>

Nexista sitemap:

<pre><?xml version="1.0"?><map:sitemap xmlns:map="http://www.nexista.com/sitemap">     <map:prepend>        <map:script src="../../lib/php/runtime.php"/>        <map:set name="version" value="0.1"/>    </map:prepend>      <map:gate name="welcome" role="pb_admin">		<map:xsl src="templates/xsl/welcome.xsl"/>    </map:gate></map:sitemap></pre>

It is easy to note that this is syntactically very different from the Nexista sitemap dtd, which is frustrating to me, and something I'll want to fix in the coming months. However, I will probably suggest to Cocoon and Popoon that they reconsider their namespace in future versions, to something like site_topology. Sitemap is waaay to ambiguous for this type of critical entity. Maybe topology isn't the best term either, perhaps siteplan would work.
<h3>Various uses of the term Sitemap in the context of the World Wide Web</h3>

<ul><li>Web page(s) containing a list or index of links connecting to various pages within the same site, formatted for human visitors to observe and and interact with - sometime referred by two words instead of one, "site map".</li><li>An XML document containing a list of pages contained at a website for reference by search engines - see <a href="http://www.sitemaps.org/">http://www.sitemaps.org/</a>.</li><li>An XML document used in web development to specify uris, resources, settings, as well as many other specifications for a web development framework to assemble, build, or otherwise process during different phases of the website or application, for example configuration or runtime.</li></ul>

The last entry there needs your help, and there are possibly other uses of the term sitemap. Those different uses alone are reason enough to try and clarify.
<h3>Sitemaps Standardized</h3>

Whether or not sitemaps gets clarified, it would be nice to have it standardized between nexista and cocoon. I'll check out some of the differences and estimate how feasible and time consuming that would be, and whether or not changing to the Apache Cocoon model would be an improvement. I've already noted some personal preferences in Cocoon's syntax:

<ul><li>Cocoon's sitemap uses <pre><map:match type="uri" pattern="toc.html"></pre>, whereas Nexista uses <pre><map:gate name="toc.html"  role="my_role"></pre>.</li></ul>

as well as some preferences to Nexista's sitemap syntax:

<ul><li><pre><map:action type="redirect" params="toc.html"/></pre></li></ul>

Related:

<a href="http://en.wikipedia.org/wiki/Site_map">http://en.wikipedia.org/wiki/Site_map</a>

<a href="http://cocoon.apache.org/2.0/userdocs/concepts/sitemap.html">http://cocoon.apache.org/2.0/userdocs/concepts/sitemap.html</a>
