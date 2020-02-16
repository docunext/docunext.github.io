---
title: Trends in Technical Syntax Hyphens and Underscores
date: 2009-07-23
tags: syntax
---
I always wrestle with annoyances. One annoyance I especially like to wrestle with is the choice between hyphens and underscores.

Let me cut to the chase and share what I've been noticing:

<ul><li>Hyphens and underscores are used as spaces in URLs, but for some reason, wikis (mediawiki, ikiwiki) tend to use underscores and blogs tend to use hyphens (MovableType, Wordpress).</li><li>Text editors usually treat hyphens as word separators, rather than parts of words. If a double click is made on a section of text that contains a hyphen, only the section of text which was clicked on is selected, whereas if it were a section of text containing an underscore, the entire span of text would be selected. I believe this is because regular expression processors consider the hyphen punctuation and the underscore actual text.
</li><li>CSS classes and identifiers usually use hyphens, I presume due to the fact that many selectors use hyphens, not underscores.</li><li>Domain names may contain hyphens, but not underscores.</li><li>Email addresses can contain both, but most often hyphens are used for hyphenated names, not as word separators. Underscores or periods are primarily used as word separators.
</li></ul>
And my personal practices:

<ul><li>For URLs and web accessible files, I try to use underscores on "real" files and paths, and hyphens on virtual paths. Inasmuch, I try to only use underscores within file names (as well as all lowercase, but that's besides the point).</li><li>I'm not a fan of camelCase, so I try to just stick with lowercase and underscore formatting for code as well, but it gets a little awkward when working with javascript and perl. In the case of perl, the capitalization of the first letter in module names is so prevalent I don't want to stray from the pack.</li></ul>Any thoughts to contribute? We'll talk about lowercase versus uppercase, and tabs versus spaces next time!
