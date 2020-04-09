---
title: PHP CSS and XML
date: 2009-03-29
tags: none
author: Albert Lash
---
I'm experimenting with PHP, CSS, and XML, trying to come up with some sort of css2xml script, while considering the idea of mangling classes and identifiers to prevent collisions when creating mashups.

<pre class="php"><?php

require_once 'HTML/CSS.php';

require_once 'XML/Serializer.php';$mycss = file_get_contents('test.css');//$mycss = preg_replace('/#/','id___',$mycss);//$mycss = preg_replace('/\n\./','class___',$mycss);$css = new HTML_CSS();$css->parseString($mycss);//$arr = $css->toArray();//var_export($arr);

ob_start();$css->display();$converted = ob_get_contents();

ob_end_clean();//echo $converted;//exit;$mycss = preg_replace('/\n#/','id___',$converted);$mycss = preg_replace('/\n\./','class___',$mycss);$css->parseString($mycss);$arr = $css->toArray();//echo $converted;//echo $mycss;//exit;$options = array(  XML_SERIALIZER_OPTION_INDENT        => '    ',  XML_SERIALIZER_OPTION_RETURN_RESULT => true);$serializer = &new XML_Serializer($options);$result = $serializer->serialize($arr);

echo $result;?></pre>

Note, this code is just a sketch, and I don't expect it to function well.

Also, of the post I made recently about <a href="http://www.docunext.com/2009/03/25/css-parsers/">css parsers</a>, <a href="http://rubyforge.org/projects/cssparser/">this one in ruby</a> again caught my attention.

Lastly, I found <a href="http://appro.mit.jyu.fi/tools/csstoxml/">csstoxml</a>. Its written in java, so I'm a little hesitant to try it out due to my lack of experience with java.
