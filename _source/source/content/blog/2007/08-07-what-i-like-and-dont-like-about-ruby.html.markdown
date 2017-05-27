---
title: What I like and don t like about Ruby
date: 2007-08-07
tags: none
author: Albert Lash
---

<h3>Here's what I like about Ruby: </h3>

<strong>Great command line support </strong>- seems to be comfortable and capable on the command line. This one was thing I missed with PHP. Although its definitely command line capable, I wouldn't call PHP "CLI-friendly".

<strong>Active user community</strong> - seems like everyone and their <a href="http://www.healthybot.com/">mom</a> is using ruby!

<strong>Good documentation</strong>. Nuff said.
<h3>What I don't like about Ruby: </h3>

<strong>YAML</strong> - No! I won't buy into it! I'm sticking with XML!

<strong>Slow?</strong> - Am I doing something wrong? Ruby on Rails seems really slow to me. At first I thought it was webrick (see below), but now I'm running ruby with Apache2 and fastcgi (fcgid) and its still slow....

I just got going with retrospectiva, a software focused ticketing system. It includes a wiki and a blog system, but I prefer Wordpress and MediaWiki for those functions. Thankfully, retrospectiva includes a method to remove those extensions! What I like about retrospectiva is the way it integrates a ticketing system with source code management, similar to Trac. Both of these systems thus have milestones to help track your progress. That in itself is pretty sweet.

I ran into a glitch with retrospectiva because my subversion repository is an amalgamation of different external repositories. Retrospectiva can't access external repositories, so I created a new local one and it worked fine. Besides that, retrospectiva is kind of slow. It could be due to the fact that I was running it on the built in ruby webserver, "webrick". I'll try lighttpd next.

I also got confused trying to find out how to control guest access to the projects. Finally found it under "Groups -> Default". Hope that helps! You can control what the users have access to.

Urg - I'm still troubled by how slow my retrospectiva install is going. I'm trying out trac and its way faster. I think I might just go with trac. Trac is written in python and SQLite is recommended as a storage mechanism for it. So far I really like it. I was concerned that the wiki would be readily hackable, but you can make pages write only.

