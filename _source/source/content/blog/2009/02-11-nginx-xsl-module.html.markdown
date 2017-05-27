---
title: The NGINX Web Server XSL Module Works Wonders
comments:
  - author: kjetil
    email: kjetil.midtlie@gmail.com
    ip: 81.167.79.153
    url: http://docstream.no
    date: 04/17/2010 02:58:33 AM
    text: >
      Witch XSLT impl is being used?
  - author: Albert
    email: albert.lash@savonix.com
    ip: 96.240.136.9
    url:
    date: 04/18/2010 08:43:22 PM
    text: >
      I'm pretty sure its libxslt.
date: 2009-02-11
tags: nginx,xsl
---
NGINX recently added support for XSL transformations, and it is AWESOME! In fact, its one of the coolest pieces of software I've used in a long time.

Its very simple. The extra cool part of the module is how the templates can be chained together, and it almost seems like a stream editor in a way. Its also very fast!

The example from the NGINX modules website:

<pre>
 location / {
     xml_entities       /site/dtd/entities.dtd;
     xslt_stylesheet    /site/xslt/one.xslt   param=value;
     xslt_stylesheet    /site/xslt/two.xslt;
 }
</pre>

This is so cool because you can dynamically combine and mesh all sorts of xml documents together. The xml documents can come from a variety of sources - local static XML files or remote dynamic files generated from a database.

This is really, really great!

UPDATE: What's even more amazing about this module is that it works with FastCGI output, like this:

<pre>        location = /cgi-bin/barf.cgi {
            xslt_types text/html;
            add_header     Cache-Control:  no-store;
            fastcgi_pass   unix:/tmp/fcgi.sock;
            fastcgi_param  DOCUMENT_ROOT     $document_root;
            fastcgi_param  SCRIPT_FILENAME   $document_root$fastcgi_script_name;
            fastcgi_param  SCRIPT_NAME       $fastcgi_script_name;
            fastcgi_param  QUERY_STRING      $query_string;
            fastcgi_param  REQUEST_METHOD    $request_method;
            fastcgi_param  CONTENT_TYPE      $content_type;
            fastcgi_param  CONTENT_LENGTH    $content_length;
            fastcgi_param  TARGET_FILENAME   $arg_TARGET_FILENAME;
            xslt_stylesheet /var/www/public/a/webop/templates/xsl/status_services.xsl mynid="$arg_nid";
        }
</pre>

This means I can use a scripting language like PHP, Perl, Python, Ruby, Tcl, Lua or really anything to generate XML, and then it will be transformed via the NGINX xslt module. Sooooo cooool!!!

Whoa! It also works with proxy_pass!!!!!

¥

