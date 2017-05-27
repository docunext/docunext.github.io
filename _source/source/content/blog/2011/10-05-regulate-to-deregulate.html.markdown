---
title: Regulate to Deregulate
date: 2011-10-05
tags: engines,rails3
---
A few months ago I forked the regulate project on github. Its a rails 3 engine that provides git-wiki like editing capabilities of text blobs from a git repository.

Since I've done significant work with git-wiki and wanted to learn more about Rails 3 engines, I dove right in and noticed many things I wanted to change.

After a few tweaks here and there, I noticed some similarities with jekyll - a static website publisher written in Ruby. I was really getting into jekyll, so I decided to change regulate even more.

#### Front Matter
One of the larged changes I made to regulate was to switch to using YAML front matter instead of having an attributes.json metadata file. In this way, regulate would no longer create a directory in the git repository for every page to be managed.

Since that was such a large change, I wrote a Rake task to convert existing repositories to the new format. Its far from perfect, but it kind of works... sorta.

#### Parsers and Renders
Another component of regulate I changed is the way content is parsed and rendered. I tried to abstract it out so that different engines can be used, but that's far from perfect as well.

I can say that I chose RedCarpet to do the Markdown rendering - its a great gem and I'm glad to be using it.

As far as rendering goes, I would like to be able to generate static files, but I'm not exactly sure the best way to do that.

Rails can do great static file caching, so perhaps that's good enough. However, jekyll has done an amazing job of making static sites really shine, so I'd like see regulate be able to do that as well.

#### What's Next?
My fork of regulate is so different from the upstream repository that the name must be changed... to *deregulate*. I know, so original!

After that, I'd like to get other people involved. It would be great to add-in a WYSIWYG editor, further abstraction of the different components: the storage interface, parsers, and renders, support for different markdown / textile / etc. formats, even support for different revision systems would be nice to have. It would be great to improve the way git repositories are handled - why have a different repository for development and production? Why not just different branches that can be merged?

Anyway, collaboration on this project is much appreciated. I sent a couple messages to the original author but never heard back. **YOU** can make a difference! :-)

NOTE: Its liberally licensed under the MIT license, as was the original regulate.

