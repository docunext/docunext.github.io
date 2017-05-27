---
title: Howto Run the Regulate Rails3 CMS engine on GitModel a Rails3 ActiveModel ORM using Git
date: 2011-10-27
tags: git,json
---
#### GitModel Rocks!

Tonight I've been working on GitModel, an ActiveModel powered ORM that uses Git as its storage mechanism.

#### Serializers

It originally used Yajl as its serialization layer, but I abstracted it out into a configurable module that can use json, yaml, or a custom interface I created to serialize to yaml front matter (similar to how Jekyll does it, and ikiwiki has a [plugin](http://ikiwiki.info/plugins/contrib/ymlfront/) for it, too).

The code is surprisingly simple and working on it was a breeze. The test coverage was pretty good, too, but I expanded it a bit.

#### Regulate

I plan to next use GitModel with regulate, which implements its own Git-powered ORM in a manner quite similar to GitModel.

#### Indexing

After that, if I have time, I'd like to look at improving the way the indexing is done in GitModel, exploring and evaluating some different options - including marshalling the index, as it doesn't need to be human editable.

I'm also considering making a simple index with something like CDB, Tokyo Cabinet, or QDBM - maybe Memcache, too - its already included in GitModel for some components.

#### Relations

Beyond that I'd really like to have the syntax mimic that of Mongoid, and potentially even add relations like embeds\_many and embedded\_in. That would be a much more significant undertaking, obviously, and would require a bunch more indexing capabilities.

#### Questions

#### Folder Structure

I still can't decide whether I want the storage files to be enclosed in a folder with a generic name like 'attributes.json', or have them stored in a file with the name of the object's id. I used to want to have the plain file, but then I read the page on the ikiwiki site: [switching to usedirs](http://ikiwiki.info/tips/switching_to_usedirs/). That's made me reconsider, however I think that argument refers to the rendering of the site, not necessarily the repository.

#### Integration Beyond (De-)Regulate

It would be really interesting if GitModel could integrate with something like jekyll or octopress. I'd also like to see an implementation of git-wiki using it, made with Rails of course. I've done a bunch of work on a git wiki fork, mainly trying to make it compatible with ikiwiki, which I was able to do.

I emailed the original author of GitModel earlier today:

<blockquote><pre>
Hi,

I have been working on a fork of regulate:

https://github.com/docunext/regulate

which is kind of like your balisong app. While the original regulate by quickleft also uses the attributes.json method, I switched to using front matter (sort of like yaml) after trying out jekyll.

Anyway, regulate implements a git interface that could probably be replaced by gitmodel, but it would need some flexibility as to the serialization process - i.e. making the database structure configurable so that the user could choose between json or yaml, and the database structure - either my-awesome-folder-name/attributes.serialized or my-awesome-filename.serialized.

If the latter sounds wacky, not to fret - Joey Hess of Debian awesomeness implemented the same in Ikiwiki.

Is this something you'd consider in the mainline? I've already done the conversion for regulate (and made it somewhat configurable). Abstracting the git interface out is something on the to-do list.

Albert
</pre></blockquote>

Hopefully we can collaborate, though I'd like to remove blob support, and I'm not sure the original author would be open to that.

#### The Source!

* <https://github.com/docunext/regulate>
* <https://github.com/docunext/gitmodel>

NOTE: Use of gitmodel from regulate is done through the "gitmodel" branch of regulate.
Both are on GitHub, but note that regulate has a branch for gitmodel; master uses an internal interface.

