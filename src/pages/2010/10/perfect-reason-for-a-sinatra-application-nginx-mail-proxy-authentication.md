---
title: Perfect Reason for a Sinatra Application NGINX Mail Proxy Authentication
comments:
  - author: Gabriel Evans
    email: gabriel@codeconcoction.com
    url: http://codeconcoction.com
    date: 03/19/2011 03:44:35 AM
    text: >
      You should link to a Gist of your Sinatra app or add a Ruby example to the Nginx wiki. I've been doing some reading on Nginx's mail authentication and this would definitely save me some time.
  - author: Albert
    date: 03/19/2011 12:10:53 PM
    text: >
      Gabriel, thanks for commenting. Its been awhile, and I can't remember where I was doing my testing, but I do remember thinking that it would be more efficient to simply start over with a goal in mind, than try to retain and glean any value from my experiments.<br/><br/>Also, regarding Sinatra - I recently read through the codebase again and was surprised how much it has grown over the past year. I loved how bare and low-level it was! I haven't actually used the newer version yet, but given how modular Rails 3 is now, I might just use that instead, because I'm doing a lot more Rails development in general these days.<br/><br/>If the NGINX authentication script could be done very simply, I might just create it using the Ruby FastCGI library. Here's an example:<br/><br/><a href="http://www.docunext.com/wiki/Example_Ruby_FastCGI_Script" rel="nofollow">http://www.docunext.com/wiki/Example_Ruby_FastCGI_Script</a>
date: 2010-10-05
tags: apache,cram-md5,imap,mysql,nginx,postgres,proxies,sasl,sinatra,sqlite
---
I am a big fan of Sinatra, the adept development framework for building small and tight web applications.

So recently when I was setting up [Dovecot](http://www.docunext.com/wiki/Dovecot) with LDAP authentication on an [OpenVZ virtual server](http://www.docunext.com/wiki/OpenVZ), I gave the [NGINX](http://www.docunext.com/wiki/NGINX) IMAP proxy a try.

While I got it working, I found the authentication module a bit clunky at first. It passes credentials from the user to an authentication system using HTTP, expecting HTTP headers back about whether the users' credentials were legitimate and where to proxy their connection.

After I tried out an example PHP authentication mechanism, it made more sense. NGINX is a web server, too! Its super simple, and I wouldn't mind seeing more authentication mechanisms like this. Here's how it works (examples are from the NGINX wiki):

**Request**:

<pre class="sh_sh">
GET /auth HTTP/1.0
Host: auth.server.hostname
Auth-Method: plain
Auth-User: user
Auth-Pass: password
Auth-Protocol: imap
Auth-Login-Attempt: 1
Client-IP: 192.168.1.1
</pre>

**Response**:
<pre class="sh_sh">
HTTP/1.0 200 OK
Auth-Status: OK
Auth-Server: 192.168.1.10
Auth-Port: 143
Auth-User: newname
Auth-Pass: newpassword
</pre>

Seeing how much I dig Sinatra, how about a Sinatra application that proxies this simple HTTP authentication mechanism to a SASL mechanism?

The NGINX mail authentication mechanism is actually more sophisticated than the basic HTTP authentication module because it supports CRAM-MD5 which some e-mail clients support.

If only NGINX supported authorization via digest authentication like this using an HTTP request to handle the actual authentication - that would be so cool!! It might even compete with the fact that Apache can use digest authentication via a MySQL/Postgres/SQLite backend!

¥

