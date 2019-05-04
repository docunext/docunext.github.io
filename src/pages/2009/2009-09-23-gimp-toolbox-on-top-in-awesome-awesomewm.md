---
title: Gimp Toolbox On Top in Awesome awesomewm 
comments:
  - author: Ravm
    email: sietse.van.der.molen@gmail.com
    ip: 83.161.221.244
    url:
    date: 01/28/2010 08:26:01 PM
    text: >
      Thanks, this helped me out. :)
date: 2009-09-23
tags: awesome,awesomewm,gimp
---
<pre class="sh_lua">
ontopapps =
{
    ["Toolbox"] = true
}
</pre>

<pre class="sh_lua">
    local nme = c.name
    if ontopapps[cls] or ontopapps[inst] or ontopapps[nme] then
        c.ontop = true
    end
</pre>

¥

