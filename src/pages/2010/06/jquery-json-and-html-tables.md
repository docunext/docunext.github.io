---
title: jQuery JSON and HTML Tables
date: 2010-06-12
tags: DOM,html,jquery,json
---
Some people can't stand HTML tables. Certainly, they are misused from time to time - like the times I have used them for positioning and layouts - but they are very useful for displaying organized data, and they can be remarkably useful when made interactive for browsing, filtering, and manipulating.

Besides my faux pas with using tables for aesthetics, I have developed some sweet setups with tables. My first use was before I discovered jQuery and the famed tablesorter plugin, so I manually constructed pagination with PHP, SQL and and XSL - what fun! It worked quite well, surprisingly, even with single column sorting. :-)

After discovering jQuery and tablesorter, I switched up my game, or upgraded it I should say, and its really be a major improvement.

However, I've recently run into a situation with YoDNSConf where the number of rows I'm working with is so large that my browser pretty much freezes my entire computer while tablesorter works its magic. I've tried some hacks:

* Loading the rows separately from the HTML page via AJAX
* Appending more rows with AJAX during pagination
* Hiding the table until tablesorter is done, then showing it

None worked very well - but now that I'm significantly reworking YoDNSConf, I figured I'd take another go at it.

This time I'm building the table using DOM scripting, using JSON data. I was sure there had to be a jQuery plugin for building tables from JSON data, and in fact there are, but none are as simple as I'd hoped.

The one that caught my attention the most is called chain and it seemed to hold a lot of promise, but in the end wasn't quite what I was looking for - though I did like that it wasn't a template engine. Seems like a lot of the JSON2DOM scripts were template engines.

OK - guess that was the key to my search: **json2dom**! I just found this very cool, simple jQuery plugin which may just do what I want:

<pre class="sh_javascript">
/**
 @param: je (dictionary) - json element description
  key (string) - html tag name
  value - one of:
   * String: text content
   * Array: array of child elements as json
   * JQuery: html content
   * Dictionary: jquery methods.
         key: method name.
         value: parameters (single value or array)
*/
function json2dom(je){
    // get tag name and content
    var tag,content;
    for(var key in je){
	if(tag)
	    throw "dictionary must have a single item";
	tag = key;
	content = je[key];
    }

    // create tag element
    var element = $(document.createElement(tag));

    // add content
    // string (text content)
    if(typeof content == "string"){
	element.text(content);
    }

    // array (child elements)
    else if(content instanceof Array){
	for(var i=0,max=content.length;i<max;i++){
	    element.append(json2dom(content[i]));
	}
    }

    // dom element or jQuery object (html content)
    else if(content instanceof jQuery){
	element.html(content);
    }

    // dictionary
    else{
	for(var method in content){
	    if(content[method] instanceof Array)
		element[method].apply(element,content[method]);
	    else
		element[method].call(element,content[method]);
	}
    }

    return element;
}

jQuery.extend({json2dom:json2dom});
</pre>

Its still not exactly what I'm looking for, but finding it has definitely helped me figure out what I'm trying to accomplish, and how others have tried to do something similar by creating a jQuery plugin. Ideally - I'd like to deal only with JSON arrays (no html elements included), as well as avoid using templates.

OT: While searching, I also found [treeTable](http://plugins.jquery.com/project/treetable), which isn't at all what I was looking for, but it does look cool!

