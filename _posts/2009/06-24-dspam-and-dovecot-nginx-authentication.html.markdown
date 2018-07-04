---
title: DSpam and Dovecot NGINX Authentication
date: 2009-06-24
tags: dovecot,imap,ldap,nginx,sasl,smtp
---
#### **DSpam**

I've wanted to try DSpam for a long time. Well today I finally installed it. I still have to actually use it, but I'm taking one step at a time. I'm a little annoyed that it appears that I have to use clamav with it, but whatever. More detailed notes about my experience with DSpam can be found at the <a href="http://www.docunext.com/wiki/DSpam">DSpam page at Docunext</a>.

#### **Dovecot Authentication**

I've also wanted to try Dovecot for a long time. I've heard really good things about it, but I just haven't had enough problems with Courier-IMAP to make the full switch.

Recently when exploring redundant eSMTP servers, I realized that Postfix requires SASL authentication, and went looking for a lightweight, dynamic back-end for saslauthd. Saslauthd can use a variety of back-ends, such as LDAP and IMAP authentication. I chose IMAP authentication, and then selected Dovecot as the IMAP server because it has a very flexible authentication system.

As I'm writing this, I'm coming to realize that NGINX is actually a more appropriate solution. Its authentication system is extremely simple and therefore flexible. I'll have to try it out!

