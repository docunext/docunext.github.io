---
title: Fun with Pocoo 
date: 2008-01-19
tags: python,sql
---
I'm <a href="http://www.docunext.com/wiki/Pocoo">wrestling with Pocoo</a>. Maybe the well documented code isn't as good as I thought. The bugs I'm running into are probably due to some disorganization on mercurial / cheeseshop revision inconsistencies. Hmmm.

I have to give up on Pocoo for now. Not sure what the deal is... I tried both the built in webserver and the command line interface, and I keep getting errors about the request not having a user attribute, as well as jinja not being able to find the template.

UPDATE: Of course I couldn't give up. What was I thinking? Eventually I did get it to work. The main problem is that the installer script for setuptools appears to be wildly outdated. I manually installed the package.conf files for the core and forum packages, then installed used an updated pocoo.conf file, and it worked! I'm very pleased to have figured this out. :-) Doh! I didn't get too far, I just tried the login button and got another error. Oh well... but wait! It was just a missing configuration option.

All in all I have to say that pocoo looks pretty decent, once you get over the alpha state part. The code looks well thought out, and the trace backs have been fairly helpful. There seems to be some caching issues (which can be a problem when trying to manage all the headers without a well tested web server like apache), and I don't think my database is complete.

In regards to SQLAlchemy, it looks pretty cool but I get concerned when I can't get my hands on the SQL. I like SQL. Now that I've got Pocoo working, I get to see a lot more of how SQLAlchemy works, and I'm not really buying into it. There seems to be an incredible amount of key constraints, and I can't help but wonder why the database isn't doing this? And I also notice that pocoo stores marshalled data in the database, that's also something I'm not crazy about. I did get to view the interface from a browser and it really is nice though.
