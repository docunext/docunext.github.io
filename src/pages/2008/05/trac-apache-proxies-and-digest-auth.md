---
title: Trac Apache Proxies and Digest Auth
comments:
  - author: Jonas
    email: jonas.carlstedt@ericsson.com
    date: 07/18/2008 04:50:46 AM
    text: >
      Can you publish how you solved this? I've been trying to achieve what you have done in your solution, but can only get the digest authentication to work for all the pages and not the selected few that I'm looking to have authentication on. It seems like Apache doesn't give me the Digest Domain parameters back.<br/><br/>Thanks.
  - author: Albert
    date: 07/20/2008 10:27:03 PM
    text: >
      Hi Jonas,<br/><br/>I was only able to get the digest authentication working when the proxy url location is the same as the url on the proxied-to server.<br/><br/>For example:<br/><br/>www.example.com/proxy/<br/><br/>www.example.net/proxied-to/<br/><br/>didn't work for me, but this did:<br/><br/>www.example.com/example/ (proxy server)<br/><br/>www.example.net/example/ (proxied-to server)<br/><br/>Is this what you are faced with?
date: 2008-05-28
tags: apache,authentication,proxies
---
A message popped up on the Apache modules-dev list which was a follow-up to a post I made way back when about using digest auth with proxies AND different paths. The spec seemed to suggest it was possible, but I couldn't to get it to work properly. I just wrote this back to the list for what its worth:

<blockquote>
If this is indeed a follow-up to my question way back when about mod_rewrite, mod_proxy, and digest authentication, I was unable to find a real solution. What I ended up doing was excluding the digest authentication from proxying, and instead doing it on the forward facing server (the one doing the proxying).

This worked because the back-end pages were accessible without authentication, but they used http_auth values to identify users for non-apache based authorization.
</blockquote>

¥

