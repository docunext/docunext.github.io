---
title: Awesomewm Titlebar 3.4 1 Update
date: 2009-11-09
tags: awesomewm,gimp
---
I've updated to 3.4-1 and among the rc.lua configurations that broke, I missed my titlebars the most.

I think I figured it out though:
<pre class="sh_lua">
    if awful.rules.match( c, { class = "Gimp" } ) then
        awful.titlebar.add(c, { modkey = modkey })
    end
</pre>

Unfortunately, writing "gimp" with a lowercase "g" didn't work. It had to be "g", even though:

<pre class="sh_sh">WM_CLASS(STRING) = "gimp", "Gimp"</pre>

