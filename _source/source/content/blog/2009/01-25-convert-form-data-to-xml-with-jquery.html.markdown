---
title: Convert Form Data to XML with jQuery
date: 2009-01-25
tags: javascript,jquery,json,xml
---
It actually goes to JSON and then to XML, but here's an adaption of json2xml.js specifically for use with jQuery's serializeArray function:

<pre class="sh_javascript">

function json2xml(o, tab) {
  var toXml = function(v, name, ind) {
    var xml = "";
    if (typeof(v) == "object") {
      var hasChild = false;
      for (var m in v) {
        if (m.charAt(0) == "@") {
          xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
        } else {
          hasChild = true;
        }
      }
      if (hasChild) {
        for (var m in v) {
          if (m=="name") {
            xml += "&lt;" + v[m] + "&gt;" + v['value'] + "";
          }
        }
      }
    }
    return xml;
  }, xml="";
  for (var m in o) {
    xml += toXml(o[m], m, "");
  }

  return "<form>"+xml+"</form>";

}
</pre>

and then I call it like this:

<pre class="sh_javascript">
var formjson = $('form#myform').serializeArray();
//var formxml = $.compactJSON(mjson);
var formxml = json2xml(formjson);
alert(formxml);
$.post("/collect.cgi", { 'data': formxml }, function (data){ });
</pre>

