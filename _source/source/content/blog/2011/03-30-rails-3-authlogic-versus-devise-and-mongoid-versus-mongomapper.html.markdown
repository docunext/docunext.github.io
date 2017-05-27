---
title: Rails 3 AuthLogic versus Devise and Mongoid versus MongoMapper
date: 2011-03-30
tags: authlogic,devise,rails3
---
I had the opportunity today to research a couple of matters, including the use of MongoDB with Rails 3, as well as the idea of tying in version control.

Of course, I wanted to go with git! However, even though this is a content management system, the documents will be highly structured, so something like grit or git-wiki would not be sufficient.

I started my review with MongoMapper. How very cool? Its an ORM wrapper to MongoDB. It worked for me right out of the box, and I found a really cool versioned plugin, so everything seemed to be rocking.

When I tried connecting MongoMapper with AuthLogic, I got really stuck. I hacked and hacked but finally gave in and looked for alternatives. Lo and behold, right there on the feature request for AuthLogic to support MongoMapper at Github was a comment about how Devise supported Mongoid. I'd read good things about Devise, so I decided to give Mongoid a try.

Getting Devise set up took about as long as AuthLogic did, and connecting it to Mongoid *could not have been quicker or simpler*!

Mongoid even includes a version module! It doesn't seem to be outrageously efficient when it comes to managing the space requirements of different versions, but that's not my goal here.

Working with Devise went very well, too. It seems to be as straightforward as AuthLogic, and I noticed many nice generators that came along with it. Since I am using Haml these days, I was a little disappointed to discover that Devise has dropped support for Haml templates in its generators. Not a big deal, I could override by speficifying -e "erb".

I've really just scratched the surface with these two gems and I've already found some really cool stuff!

