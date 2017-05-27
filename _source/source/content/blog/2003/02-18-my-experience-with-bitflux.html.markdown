---
title: My Experience with Bitflux
date: 2003-02-18
tags: open source
---
The way cmsdemo operates is very straightforward. You can move it from host to host with a couple of directives:

1. Its path.
2. The path to bitlib
3. The include_dirs
4. the path to prepend.inc
5. The db dns
6. You need to install the db

AFAIK, creating a "new" site that uses bitlib is quite a task. Even using the shell of cmsdemo to make a new site will be an undertaking. I need to explore admin/power more before I make this step. Furthermore, I do  believe it is wise to strip down cmsdemo, create an entirely new version of it, complete with new interface, then try one from scratch.

Now, a few weeks later, I'm finding that the admin console, bitlib, and the cmsdemo are tightly integrated unfortunately. I don't see why the admin is part of the cmsdemo, well kind of I do. It appears the best way to create a site using bitflux is to use the existing hierarchy, xsl, xml, etc, and tailor it for your needs. Its really a tight system and if I designed the interface myself, I would probably do it the same way. My first experience building my own site using bitflux was fun and easy. How can you beat that? The first problem I ran in to involved the structural capabilities they have given the tool. I wanted to include a picture along with the sub section navigation panel and it seems like that will be a tough one. However conceptually it doesn't seem that bad, and over the next few weeks I will keep working on it.

