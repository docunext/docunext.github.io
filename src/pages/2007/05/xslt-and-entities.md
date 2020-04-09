---
title: XSLT and Entities
date: 2007-05-03
---
The XML and XSLT functions in PHP handle entities in the following manner: <ol><li>DOM document loads the actual XSL as an XML document first. As this point, the DOM object can substituteEntities declared in the doctype for you.</li><li>After that, the XsltProcessor will not substitute entities without a DTD handy.</li><li>When the XsltProcessor encounters an import or include function, it will load the additional xsl stylesheet, but if it encounters an entity that has not been declared via a DTD, it will throw a fatal error.</li></ol>

Therefore, don't put entities in your included stylesheets. There may be a way that I am unaware of, and I'm pretty much posting this as a reminder to myself.

Related Info:

PHP.net comments <a href="http://www.php.net/manual/en/ref.dom.php#54777">54777 (XML Catalogs for speedy DTD Resolution)</a>, <a href="http://www.php.net/manual/en/ref.dom.php#57274">57274 (Local storage of XML entity catalogs)</a>, and <a href="http://www.whump.com/moreLikeThis/link/03815">Whump.com XML Catalogs are very important - great post - references not only Marc Liyanage, but also Christian Stocker</a> (even though Marc's name is spelled wrong!).
