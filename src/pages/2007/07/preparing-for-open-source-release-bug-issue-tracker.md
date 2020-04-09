---
title: Preparing for Open Source Release Bug Issue Tracker
date: 2007-07-31
tags: none
author: Albert Lash
---
In preparing for the open source release of PBooks, I'm adding more components to the support infrastructure, including:

<ul><li>Bug reporting tool using Bugzilla or Flyspray</li><li>Publicly accessible code repository via subversion</li><li>User support system via Request Tracker or DITrack</li><li>Developer and user emailing lists</li></ul>

I'm currently evaluating Bugzilla, and it seems a bit unwieldy, so I'm going to review Flyspray again. I've seen it before and it seemed to work OK. I'm open to suggestions!

Also in the running are PHPBT, <a href="http://www.ditrack.org/">DITrack</a>, Roundup, and Mantis. Mantis actually looks really good! It appears to be a full "issue" tracking service, which can support general customer support requests, like <a href="http://bestpractical.com/rt">RT, or request tracker</a>.

Actually DITrack looks really really good. It uses Subversion as its storage mechanism, and they say this on their website:

<blockquote>We do need your help, really. Right now the weakest part of the project is its documentation. We are good at coding, but not in writing texts for humans (let alone we are not native English speakers). If someone could help us out with this, that'd be awesome.</blockquote>

They also mention that DITrack is specifically designed for small developer groups (10 or less) which is how I foresee the core team of PBooks to be. Which leads me to think about Trac, a source code and project management system. Both DITrack and Trac use Python and subversion for data storage (actually it looks like Trac also uses an RDMS like SQLite, Postgres, or MySQL - though MySQL support is experimental). I've seen a lot of projects use trac, but I've also seen a lot of those trac systems get overwhelmed by spam too. Reading more of their documentation reveals that the project management component may simply be a timeline, a wiki, and an issue tracker. In that case, I believe I will forego Trac in lieu of MediaWiki (already setup for PBooks), DITrack, and plain old Subversion for source code management (and websvn for browsing).

I'm a big fan of MediaWiki, and PBooks can also use it for a FAQ, development notes, and user guides. It is fast (memcached support!), flexible, and has a great developer community.

I also want to note here that <a href="http://roundup.sourceforge.net/index.html">Roundup</a> looks really interesting too, somewhere between DITrack and Bugzilla. Simple, but very flexible, with a lot of configurable options. I'll definitely keep that project in mind for projects with more complex needs. The documentation is also very good.

Features I'd like to have for a bug tracking system for PBooks:

<ul><li>Bug creation, retrieval, updates, and deletion</li><li>Custom categories for bugs <ul><li>GUI</li><li>installation</li><li>database</li><li>functionality</li></ul></li><li>Bug priorities<ul><li>critical</li><li>security</li><li>low</li><li>idea</li></ul></li><li>RSS syndication of activity - email gets messy</li><li>Assignment of items to specific developers</li></ul>

Hmmm. DITrack is command line only, and Roundup is a mess frankly - it isn't very debian friendly and it really suffers from functionality overkill. I'm dumbfounded that they include their own web server. Grrr.

On to mantis.... skipping mantis due to its size and complexity, now found etraxis, which looks really good! Took a little wrestling and installation of dbx, but I've got eTraxis running, and although the database model doesn't make much sense to me know, everything about this project looks good: simple, clean, and clear.

Whoa, etraxis is a bit difficult to get configured. The process is vague, seemingly arbitrary, and quite round-about, but I think I figured it out. Here's the short cut: <ol><li>Create project</li><li>Create template</li><li>Edit template states</li><li>Create new template state</li><li>Add fields to state</li><li>Make state "initial"</li></ol>

All that just to create a record. Ugh. Beyond the initial hurdle, etraxis is pretty amazing and surprisingly flexible. I'm just going to review phpbt real quick before I commit. Well shoot, I wish I had tried PHPBT first. Its easy and ready to go. Although it hasn't been updated in awhile (2005) it works fine with PHP5, and seems pretty quick. A little more review and I think I'll go with PHPBT.

While PHPBT doesn't satisfy all of the functionality I wanted in a BTS (like RSS feeds), it performs the main function of tracking bugs really well.
