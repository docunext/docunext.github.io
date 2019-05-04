---
title: Some Example Lua Code
date: 2011-02-10
tags: lua
---
Lua is a perfect scripting language for quick and lightweight logic - for proxies, middleware applications, and application level routing.

I wrote this small lua script as a test for redirecting one domain host to another:

<pre class="sh_lua">
json = require("json")
testString = [[ { "example.com": "example.org" } ]]
o = json.decode(testString)
table.foreach(o,print)
myhost = lighty.request["Host"]
if (o[myhost]) then
    lighty.header["Location"] = "http://www." .. o[myhost]
    return 301
end
</pre>

