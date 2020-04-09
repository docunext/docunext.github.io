---
title: Awesomewm Sticky Windows Solved 
comments:
  - author: i5513
    email: javibarroso@gmail.com
    date: 09/10/2009 10:46:50 AM
    text: >
      Now it is: c.ontop = true<br/><br/>But it seems like doesn't work with ekiga :(
  - author: Albert
    email: albert.lash@savonix.com
    date: 09/23/2009 03:36:53 PM
    text: >
      Actually, sticky and ontop are different. Sticky will keep a window visible on all tags, while ontop will keep it the foremost window within one tag.<br/><br/>I'm using ontop for my gimp toolbox. :-)
date: 2009-07-12
tags: awesome
---
This took way longer to figure out that I would have liked, but oh well.

<b>The Goal</b>
Setting certain client windows to appear in all tag selections. This is also referred to as "show on all workspaces".

<b>The Solution</b>
I first tried to figure out how to specify that an application class should be associated with multiple tags, but I was never able to do so. I finally found an rc.lua file which contained the information I needed. I put this right after the "layouts" section:

<pre>stickyapps =
{
    -- by class
    ["x-terminal-emulator"] = true
    -- by instance
}</pre>

And this right after the "Check if the application should be floating" section:

<pre>    -- Check if the application should be sticky
    if stickyapps[cls] or stickyapps[inst] then
       c.sticky = true
    end
</pre>

UPDATE: Doh! This doesn't seem to work for the version of awesome in Debian's sid. :-(

¥

