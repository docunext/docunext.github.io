---
title: Some PHP Notes
date: 2006-09-26
tags: none
author: Albert Lash
---
<h3 id="toc0">I've been working with PHP for about 8 years now, and here are my notes about php and php5. </h3><p>As far as languages go, I don't find there to be much benefit to one versus the other. However, and it a big however when used here, the user base for PHP is incredible. In addition to a great user base, PHP has a lot of other things going for it:</p>

<ul>    <li>Great documentation</li>    <li>Simple syntax</li>    <li>Great server support<ul>        <li>Apache</li>        <li>Lighttpd</li>        <li>Microsoft IIS</li>    </ul></li></ul><p>mod_rewrite seems to freak out when you use an Apache Directory directive, where it maps the %{REQUEST_URI} all the way back to the root of the filesystem. I've also noticed similar unexpeced behaviour in Apache when it uses the mod_vhost_alias VirtualDocumentRoot variable, the php $_SERVER['DOCUMENT_ROOT'] variable doesn't include the virtual host hostname. Ugh. <strong>I guess mod_rewrite and wildcard Directory directives do not work.</strong></p>
