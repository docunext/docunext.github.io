---
title: Joomla versus Drupal and Wordpress
date: 2010-09-29
tags: drupal,wordpress
pictures:
---
I'm investigating Joomla and Drupal, as well as the differences between the two.

#### First step: what does the Debian community think?

Hmmm... not so good. I agree with their main point:

* Installing a software manually is not recommended (because you have to track
  security updates yourself every day, then manually install/update the software
  quickly)

However, I'm not sure if I agree with the decision not to create a Joomla
package. Hopefully that is not a permanent decision, and I doubt it is, because
for a long time there wasn't a Wordpress package, but when it grew up, it got
packaged!

Joomla definitely seems popular enough to stay alive, and if enough people are
using it, Debian will most likely package it. As if there aren't a bunch of
outdated, unused packages in the Debian repositories!

But back to the review of Joomla and Drupal... its interesting that all these
three are coded in PHP.

#### Access Control Lists

After taking some serious time digging into Joomla 1.5, there is a glaring
limitation:

<h4 style="text-align: center; font-weight: bold; font-style: italic;">Access Controls are Extremely Limited in Joomla 1.5</h4>

I witnessed this first hand when trying to limit read-access to an article in
Joomla and had to rely on the **special** access group, which equates to users
given author rights and above, as well as the <a
href="http://www.theartofjoomla.com/extensions/control.html" rel="nofollow">JX
Control extension</a> to add another group.

Thankfully, the ACL architecture of Joomla has reportedly been totally revamped
in 1.6!

I haven't wrapped my brain around the ACL capabilities in Drupal, but I've heard
good things.

#### Wordpress Access Controls

Even these three software projects, I'm most familiar with Wordpress. However,
the last version of Wordpress I used was from a couple years ago, so I need to
try out the latest version. Nevertheless, based on my experience with Wordpress,
it seems to me that Wordpress is much more focused on blogging than content
management, so access controls are likely not a major concern.

Still, I have to try out the latest version to confirm that opinion.
