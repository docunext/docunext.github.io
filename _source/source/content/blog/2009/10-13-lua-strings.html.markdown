---
title: Lua Strings
date: 2009-10-13
tags: lua,strings
---
I had to work with strings in Lua today, and found that there was some significant differences between 5.0 and 5.1.

The [Lua Wiki](http://lua-users.org/wiki/StringRecipes) was quite helpful, except I found one code snibbet which didn't work for me, it was missing "then" at the end of line two in after the if statement:

<pre class="sh_lua">
function url_encode(str)
  if (str) then
    str = string.gsub (str, "\n", "\r\n")
    str = string.gsub (str, "([^%w ])",
        function (c) return string.format ("%%%02X", string.byte(c)) end)
    str = string.gsub (str, " ", "+")
  end
  return str
end
local hi = url_encode("blah")
print(hi)
</pre>

