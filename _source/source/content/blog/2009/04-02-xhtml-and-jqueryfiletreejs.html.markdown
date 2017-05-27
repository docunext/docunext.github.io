---
title: XHTML and jquery.FileTree.js
date: 2009-04-02
---
I use the cool jQuery filetree plugin with the Established Sites Content Management System, but recently when I updated the output to be XHTML compliant, the plugin stopped working.

It turned out that the plugin uses a variation of innerHTML, which doesn't work with XHTML. I removed the calls to that function and voila - it works! If I notice people finding this page looking for a solution to this minor problem, I'll post a diff of the code so it will be easy to fix.

