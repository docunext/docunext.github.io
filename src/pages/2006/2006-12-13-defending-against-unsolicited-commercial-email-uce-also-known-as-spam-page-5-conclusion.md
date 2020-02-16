---
title: Defending against Unsolicited Commercial Email UCE also known as Spam Page 5 Conclusion
date: 2006-12-13
tags: fail2ban,spam
---
In conclusion, spam is bad, and I don't like it. But seriously though, I hope you've found this information entertaining enough to read through to here. If you have, good! I still have a few tidbits to share!

## <b>Fail2ban</b>

Fail2ban is a log watching daemon that searches for brute force attacks. I use it to scan for repeat offenders against dnsbls, and after a certain number of failures, I block the ip from connecting on port 25. This process is equivalent to maintaining a client access hash table, similar to the UCE Protect dnsbl which you can download and store on your own machine. I've considered converting the UCE Protect dnsbl into iptables format, but due to its size and the requirements to syncronize, convert, and reload, not to mention the size of the iptables chain, I've refrained. In the fail2ban case, the chain is small, and usually only contains a couple hundred blocked ip addresses at any given time. Furthermore, it doesn't eat up a lot of resources, has an easily adjustable refresh rate / blacklist expiration, and supports whitelists by ignoring certain ips or cidr blocks.

##<b>Web-based Forms, Javascript-Required Email Addresses, Email Obfuscation, and a Freemail Account</b>

While not direct defenses against spam, these techniques are more proactive. The general idea here is to keep your email private, while still allowing people to contact you. Since it is email, the sender has access to the internet and can access your website if you have one. If you do, don't post your email on it. Instead use a form for the sender to submit their message through.  <b>IMPORTANT</b> Make sure the "to" field is not a hidden field in the form, and is hard coded (put it in a private script). Otherwise, spammers will still be able to find your address, or potentially use your form to spam other people!

Javascript and obfuscation are other techniques used to hide email addresses from email harvesters, bots that scour the web for email addresses to send spam to. I've never used this method but from what I've seen on the web, it is a popular, and thus probably effective measure. The idea is that a human being (or real browser) can decode the address and then be able to send to it.

A freemail account from Google is a great idea for many reasons, like receiving unimportant mail. You can use it for shopping online, mailing lists, and whenever you are giving out your email address. Then you can keep your professional email address private. Don't go crazy here, I recommend only having two or three emails, at most. While branding might seem like a good reason to have more, I doubt the value.

General references:

* <a href="http://blog.dkorunic.net/2006/09/01/round-one-fight/">Round One: Fight!</a>
* <a href="http://www.documentroot.com/sender-domain-validate.in">Another commonly forged domain list</a>
* <a href="http://www.securitysage.com/antispam/">Security Sage Spam Resources</a>
* <a href="http://www.suso.org/opensource/docs/courier/maildrop_virtual_permissions.php">http://www.suso.org/opensource/docs/courier/maildrop_virtual_permissions.php
</a>
