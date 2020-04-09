---
title: Running a Web Server as Your Shell User ID
comments:
  - author: Russell Coker
    email: russell@coker.com.au
    url: http://etbe.coker.com.au
    date: 05/24/2010 07:13:01 PM
    text: >
      You can allow a user such as www-data to ssh to another system through the usual ssh mechanisms.  You can allow a cgi-bin script to run as a different user entirely which has ssh access.  You can create a new account for running your web server that has ssh access, there are kernel patches and user-space code that allows non-root processes to bind to low ports and you could use NAT to redirect port 80 connections to 1080 (or whatever) and then have a non-root web server bind to that high port.<br/><br/>But running a web server as your regular account which has access to do lots of things other than that which is needed to server web data is a bad idea.  It means that when (not if) a security flaw is discovered in your web server the potential damage is limited.<br/><br/>Also for such things you should consider the "command=" option in the authorized_keys file.
  - author: Albert
    email: albert.lash@savonix.com
    date: 05/24/2010 07:50:28 PM
    text: >
      Hi Russell, good point about the security issues - I should have noted that I'm only running it on the localhost of the machine I have physical access to.
date: 2010-05-22
tags: ssh,unicorn
---
There is a very nice side effect to running a web server process from a shell as one's own user id - it inherits the ability to use private keys to SSH!

I guess I've been aware of this for some time, but it only recently sunk in when I started using git-wiki to update an ikiwiki git repository and then Ruby's net/ssh capabilities to publish the ikiwiki on a remote machine - I can click a button on the web, and my user (which is running the webserver) runs the ssh process and can hook into the ssh-agent I already have running.

Its actually pretty amazing!

¥

