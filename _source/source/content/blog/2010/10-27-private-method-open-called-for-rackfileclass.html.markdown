---
title: private method open called for Rack File Class
date: 2010-10-27
tags: class,rack
---
I'm trying to open a file from with a Ruby Rack extension I wrote called rack-xsl.

If I try "File.open(...)", it fails with this error:

<pre class="sh_ruby">
private method `open' called for Rack::File:Class
</pre>

Instead, I can use the double colon prefix, or colon colon class name, or ::File:

<pre class="sh_ruby">
      if @options[:reload] == true
        @xslt     = XML::XSLT.new()
        refreshxsl = ::File.open(@options[:xslfilename]) {|f| f.read }
        @xslt.xsl = REXML::Document.new refreshxsl
      end
</pre>

Sweet!

