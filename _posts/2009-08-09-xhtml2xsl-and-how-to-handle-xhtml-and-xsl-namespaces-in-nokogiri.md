---
title: XHTML2XSL and how to Handle XHTML and XSL Namespaces in Nokogiri
date: 2009-08-09
tags: xml,xsl
---
For some time I've manually converted some existing (x)HTML I'd previously generated to an XSL stylesheet. Its a laborious and frankly an unpleasant task.

Today I was able to use Nokogiri to automate this process. Nokogiri (a Ruby library using libxml2 and libxslt) is a wonderful tool and perfectly suited to the task.

The biggest issue I ran into was the namespace differences between the source XSL and XHTML files I was using. To be more specific, here's how I am running the process:

<ol><li>Parse an existing, empty XSL file as XML</li><li>Parse an existing, complete xHTML file as HTML</li><li>After some minor adjustments and enhancements, the HTML doc root is added to the XML (xsl) doc, and when it is, it adopts its namespace, and the tags get prefixed with "xsl:"</li><li>Thanks to xmlplease.com, I was at least a little bit prepared for this. It took awhile, but here's what finally ended up working:</li></ol>
<pre class="sh_ruby">toxsl = doc.to_xhtml(:indent =&gt; 2, :encoding =&gt; 'UTF-8')
ok = toxsl.gsub(/&lt;!DOCTYPE html[^&lt;]+/,'')
final = Nokogiri::XML.parse(ok)
mytmp = Nokogiri::XML::Node.new('tmp',xsl)
mytmp.default_namespace="http://www.w3.org/1999/xhtml"
myns = mytmp.namespace
xsl.xpath("//xsl:variable[@name='states']").first.add_next_sibling(doc.root)
xsl.xpath("//xsl:html").each { |myhtmlnode|
    myhtmlnode.traverse { |allmynodebelongtous|
        if allmynodebelongtous.type == Nokogiri::XML::Node::ELEMENT_NODE
            allmynodebelongtous.namespace = myns
        end
    }
}
</pre>

Well, that probably doesn't make much sense on its own, so I'll try and explain it a little better. The toxsl referenced in the first line is the html output to xhtml (on its <i>way</i> to xsl...), the ok line just gets rid of the doctype. Then I create a temporary node, mytmp, and set the default namespace, then I get its Nokogiri::XML::Namespace object as myns.

Then I go ahead and add the toxsl... ha! I just notices I'm actually adding the original doc there. Guess I don't need to get rid of the DOCTYPE, and no wonder the gsubs I was doing to get rid of multiple line feeds wasn't working. Duh. Anyway, after the original html is added as part of the xsl template, I traverse all of it, changing the namespace of each element node to myns. It works! :-)

Yahh, so Nokogiri is pretty frickin' magnificent and remarkable.

