---
title: Ikiwiki How to Switch from Subversion to Git
date: 2010-03-16
tags: git,ikiwiki,perl,ruby,subversion
---
I setup a few wikis with Ikiwiki before I became zealous about Git and used Subversion instead.

I'll likely convert them over to git at some point, so I'm doing a little thinking / research on the topic.

I've definitely converted subversion repositories to git before, but no ikiwiki setups. I'm not entirely well versed with ikiwiki, but I know there is more going on that a simple repository.

#### **Why convert from Subversion to Git?**

I want to convert from Subversion to Git because Git is very efficient when it comes to storage, and I'm also interested in using Grit, the Ruby git library, to some degree. I sure have had a good time using [Git-wiki](http://www.docunext.com/wiki/Git-wiki)!

That might seem like a little ironic, seeing how Ikiwiki is written in Perl, but it really shouldn't matter.

#### One Wiki Converted!

I went ahead with the Neocarz.com wiki, but I didn't actual convert the svn repository to git, I just rebuilt it using the ikiwiki auto setup. There wasn't too much history, and I just wanted to get it done.

Actually, this was a very good exercise for me. Turns out that while Ikiwiki has some amazing capabilities, it can be a very simple wiki compiler, like how chronicle is for blogs. Cool!

#### More Ikiwiki Subversion to Git Conversion Notes

A testament to the quality design of Ikiwiki, the back-end doesn't really matter. Joey has setup Ikiwiki to support a version control system, but not require one. Once I manually converted the subversion repositories to a single git repository, I updated the ikiwiki configurations and was good to go.

More specifically, the ikiwiki configuration file specifies a repository url as well as a wiki source url. It assumes the wiki source is formatted as markdown.

#### UPDATE

I've converted a bunch of subversion based ikiwiki wikis and I'm way glad I did! I can actually use [git-wiki](http://www.docunext.com/wiki/Git-wiki) to edit them, and ikiwiki to publish them. How cool is that!!

