---
title: Open Document Spreadsheet Format
date: 2009-02-14
tags: openoffice,xml
---
I'm working on exporting multi-worksheet documents from <a href="http://www.pbooks.org/">PBooks</a>. The Open Document Spreadsheet format is based in XML (which is awesome) so it shouldn't be too hard.

First thing I had to realize was that the .ods file I was reverse engineering was zipped. Kind of lame that they used the zip format instead of something like gzip, but oh well. Next up I tried re-zipping the content.xml file by itself. Trying to open that led to a corrupted file error message. After some trial and error, the archive needed content.xml and META-INF/manifest.xml. That's easy enough, since I know what a file manifest is. This is what the simplified manifest.xml looks like that I'm using:

<pre class="sh_xml">
&lt;?xml version="1.0" encoding="UTF-8"?>
&lt;manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"> &lt;manifest:file-entry manifest:media-type="application/vnd.oasis.opendocument.spreadsheet" manifest:full-path="/"/>
  &lt;manifest:file-entry manifest:media-type="text/xml" manifest:full-path="content.xml"/>
&lt;/manifest:manifest>
</pre>

The content.xml file I started with was fairly complicated, but thankfully I was able to remove a bunch of fluff and then add some indenting without causing any corruption:

<pre class="sh_xml">
&lt;?xml version="1.0" encoding="UTF-8"?>
&lt;office:document-content xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" office:version="1.1">
  &lt;office:body>
    &lt;office:spreadsheet>
      &lt;table:table table:name="Sheet1">
        &lt;table:table-row table:style-name="ro1">
          &lt;table:table-cell office:value-type="string">
            &lt;text:p>zxs333&lt;/text:p>
          &lt;/table:table-cell>
        &lt;/table:table-row>
      &lt;/table:table>
      &lt;table:table table:name="Sheet2">
        &lt;table:table-row table:style-name="ro1">
          &lt;table:table-cell office:value-type="string">
            &lt;text:p>abc222&lt;/text:p>
          &lt;/table:table-cell>
        &lt;/table:table-row>
      &lt;/table:table>
    &lt;/office:spreadsheet>
  &lt;/office:body>
&lt;/office:document-content>
</pre>

I removed all the namespaces to see what would happen, and it broke the file. Oh well, I'm not sure if the type of data I have in the spreadsheet will cause any problems, but all I really need to support is CVS data with multiple worksheets. Thankfully the ods format makes handling multiple sheets as easy as creating multiple tables. Awesome.

