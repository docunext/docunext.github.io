---
title: I m Running Puppet
date: 2009-01-18
tags: none
author: Albert Lash
---
Finally! I've taken the plunge with a configuration management system. I chose Puppet after taking a looong time to mill over the choices: bcfg2, CFEngine, and a home grown method.

Why did I choose puppet? I felt that bcfg2 was more than I needed, and it appeared that puppet had an active and growing community - so important to open source projects.

So far I've only managed to setup a puppetmaster and a puppet, and following the tutorials on the Reductive Labs website, I was able to create a module, and finally get the client to update its files when they updated on the puppet fileserver. Sweet!

I still get to create some home grown components, too. From what I can tell, puppet doesn't have a web interface for generating configuration data, which is where I can help. I'm actually already working on a configuration data management and configuration file rendering system called <a href="http://www.hypermagnet.com/blog/">Hypermagnet</a>. It still has a ways to go, but I think the two can work well together.

Here's a link to <a href="http://www.docunext.com/">my notes on starting with puppet</a>.

