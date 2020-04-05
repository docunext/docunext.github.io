---
title: Reverse Engineering Debian
date: 2008-04-27
tags: none
author: Albert Lash
---
Its funny to think about reverse engineering something that spells it all out for you. Debian has some incredible documentation, but I guess I'm so used to being presented with poor documentation when trying to decipher how something works I've become quite skilled at reverse engineering things.

My process involves a mix of experimentation, guesswork, and taking notes when things don't work right, and paying attention to what changes affect the results. But that's not really important - the point here is that with debian, I'm starting to meet halfway.

The meeting place is the debian policy manual, and I'm taking another shot at it. What prompted this? My interest started when I decided that I wanted to use XSL to manage configuration files. That led me to debconf, which led me to the policy manual.

What have I learned so far? Some cool stuff:* Debconf has experimental support for using LDAP as a backend* I can't make heads or tails of the debconf files - I tried picking them apart, but there is a lot of information there

Then I remembered that debconf isn't always used when a package is installed, but when I modify a configuration file, and then upgrade the package, apt or dpkg is aware that I have modified the script. But where does the package maintainer's configuration file come from? The package of course, and is debconf involved? Not necessarily. So in that case, debconf isn't the best choice.

Back to square one - I'm reminding myself that my focus needs to be on the maintainer scripts.

FAI looks great too!
