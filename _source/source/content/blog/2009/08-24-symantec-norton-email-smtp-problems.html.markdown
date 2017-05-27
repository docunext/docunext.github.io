---
title: Symantec Norton Email SMTP Problems
date: 2009-08-24
tags: norton,postfix,smtp
---
Two of my email hosting customers have experienced errors from their anti-virus software running on Windows machines when trying to send email over port 25 to our SASL authenticated Postfix email servers. Disabling the anti-virus software caused the error to go away.

I'm not sure what the problem is, but I've done a little research on the problem:

<pre class="sh_log">
Aug 24 17:28:11 pro-132-gl postfix/smtpd[5488]: too many errors after RSET from pool-**-**-**-**.region.fios.verizon.net[**.**.**.**]
Aug 24 17:28:11 pro-132-gl postfix/smtpd[5488]: disconnect from pool-[**-**-**-**.region.fios.verizon.net[**.**.**.**]
Aug 24 17:29:24 pro-132-gl postfix/smtpd[5658]: connect from pool-**-**-**-**.region.fios.verizon.net[**.**.**.**]
</pre>

Too many **errors after RSET**. Hmm. For one of my clients, disabling the anti-virus software was not an option, so we tried port 587. That resolved the problem for him.

It appears that Symantec or Norton intercepts outgoing connections and mangles it somehow in a way that is problematic. At first I thought it might be issuing a verify command, so I set postfix to:

<pre class="sh_sh">
disable_vrfy_command = no
</pre>

but that didn't seem to help.

What about Saslauthd? /var/log/auth.log:

<pre class="sh_log">
Aug 24 16:28:56 pro-132-gl saslauthd[18886]: do_auth         : auth failure: [user=email@example.com] [service=smtp] [realm=example.com] [mech=rimap] [reason=[ALERT] Unexpected response from remote authentication server]
</pre>

But that's as far as I get. The only other thing I can think of is that saslauthd is running out of connections, or that it is unable to connect to the imap server to authentication. Maybe I should run an IMAP proxy for it.

OK, I've set that up. Hopefully that will help. What's up with saslauthd options configuration using a forward-slash (/) for port selection instead of the colon (:)?

On an unrelated matter, I wonder how Symantec and friends feel about Microsoft finally talking about making their operating system more secure. Its a quagmire of a conundrum. If Microsoft continues to make software that is plagued with viruses and malware, they might lose their customers. If those viruses and malware programs go away, they risk losing partners like Symantec. I wrote a little about a new program I heard about <a href="http://www.weendoze.com/blog/2009/07/avast-antivirus.html">here</a>.

