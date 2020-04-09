---
title: fail2ban is making waves
comments:
  - author: yarikoptic
    email: site-docunext@onerussian.com
    date: 12/04/2006 03:49:52 PM
    text: >
      Tried to email back to your email but<br/>" mail for docunext.com loops back to myself"<br/>My reply was<br/><br/>actually we have already some similar rules<br/>in postfix.conf.<br/>Could you please describe a bit more on when a given error code is reported, and may be if there is sense to merge them all into 1 filter?
  - author: admin
    email: albert.lash@savonix.com
    date: 12/04/2006 04:10:19 PM
    text: >
      Absolutely. Thanks for the heads up re document email.
  - author: admin
    email: albert.lash@savonix.com
    date: 12/13/2006 11:00:20 AM
    text: >
      Just wrote back to yarikoptik:<br/><br/>Thanks for your response. The idea behind these rules is to use fail2ban as a dnsrbl "cache" of sorts. There are some spammers who keep on attempting to email our servers even though they are denied again and again. Therefore, I give them a few times to figure it out, then block them for 24 hours, reducing  load on the server and the remote dnsbl server.<br/><br/>The other important one is the unknown user, to prevent dictionary spams, which go through everyname@example.com. This is very different because many times legitimate senders will get the email wrong several times in a row. Therefore, the number of errors is much higher than usual. Also, the timeout is much shorter.<br/><br/>What's nice about this is there is also the ability to easily "whitelist" ip blocks using ignore.<br/><br/>Neither of these appropriate for locking out legitimate users, so I don't know if they can be combined. But that may be because of my lack of fail2ban knowledge. I'm very impressed with the software and like it very much.
date: 2006-12-02
tags: debian,fail2ban,spam
---
I'm really starting to like fail2ban. It just when through a major overhaul, and while I was pulling my hair out for awhile trying to figure out the new layout, it makes a lot of sense. I'm adjusting my custom rulesets to the new layout. These are designed to prevent continous dnsrbl rejects, unknown domain rejects, and brute force attempts to send spam, all from the same IP. Will they ever learn? Doubtful.

Here's what I've come up with:

/etc/fail2ban/filter.d/pstdns.local:
<pre>failregex = NOQUEUE: reject: RCPT from \S*\[(?P&lt;host>\S+)\]: 554&lt;/host></pre>

/etc/fail2ban/filter.d/pstdom.local:
<pre>failregex = NOQUEUE: reject: RCPT from \S*\[(?P&lt;host>\S+)\]: 450&lt;/host></pre>

/etc/fail2ban/filter.d/pstnorcpt.local:
<pre>failregex = NOQUEUE: reject: RCPT from \S*\[(?P&lt;host>\S+)\]: 550&lt;/host></pre>

I'm going to submit these rules to the debian maintainer to see if they are interested in using them.

Important thing to note here, is that the first one is based upon using realtime black lists to block proxy and open relays, which are infamous for sending spam. There are a few amazing free services, like sorbs, which provide this service. My thoughts are that an IP will likely get blocked for longer than an hour, or even a few, so it doesn't make sense to simply keep querying the dnsbl to ask if the ip is blacklisted. Therefore, if it is blacklisted, and the offender keeps trying because their bot is too dumb to give up, then their packets get dropped. Logical? I think so.

The other rules for non-existent "from domains" and recipients have to be much more lenient, but still help the worst offenders.

My email to the package maintainer:

<blockquote>Hi,

Here are some rules I use on Debian for fail2ban to block relentless spammers. This is not for protection against password crack attempts, but more for reducing traffic and generally blocking bad ips. I've posted more information here:

<a href="http://www.docunext.com/blog/2006/12/fail2ban-is-making-waves.html">fail2ban is making waves</a>

Thanks,

Docunext Staff</blockquote>

¥

