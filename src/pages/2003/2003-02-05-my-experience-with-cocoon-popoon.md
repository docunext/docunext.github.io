---
title: My Experience with Cocoon Popoon
date: 2003-02-05
---
Sitemap

Still not sure what this does. Thinking that it controls the way cpopoon behaves for a certain filesystem tree.

Judging by the name, it may define that tree, and there was a reference to it being inspired by the .htaccess file

of Apache.

This is the include for using popoon in any way. In the bitflux demo webpage, the first line regarding popoon

is:

<pre class="php">$sitemap = new popoon ("../sitemap/sitemap.xml",$_SERVER?"REQUEST_URI",
array("sm2php_xsl"=>BX_BITLIB_DIR."php/popoon/sitemap/sitemap2php.xsl", "cacheDir"=>BX_PROJECT_DIR."/tmp/popoon/")
then goes on to instantiate the object with: $sitemap = new popoon ("../sitemap/sitemap.xml");</pre>

I am under the impression that you can nest these in an hierarchical manner. The bitflux page has one sitemap

that references a simple.xml file that simple provides the structure. Everything else is inside the db.

Seems like the simple.xml file structure definition may be hardcoded.

More General Concepts

Actions − Database & Sessions

Generators − starting point, there are lots of generators, although Chregu says he's not sure if popoon
needs it?

Matchers − deal with uri's

Readers − readers are useful for delivering binary data

Schemes

Selectors − similar to matchers...

Serializers

Transformers − central point in a sitemap pipeline. ???

SAX − Cocoon uses SAX, Popoon may use its own API. Popoon doesn't use SAX. Preferred method
is via domxml objects.

