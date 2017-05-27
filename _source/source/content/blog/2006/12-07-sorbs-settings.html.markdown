---
title: Sorbs settings
comments:
  - author: Andras
    email: galosa@netinform.hu
    ip: 213.16.122.245
    url:
    date: 07/22/2007 07:11:47 AM
    text: >
      IMHO use of zen.spamhaus.org instead of sbl.spamhaus.org is better as <a href="http://www.spamhaus.org/zen/index.lasso" rel="nofollow">http://www.spamhaus.org/zen/index.lasso</a> says.
date: 2006-12-07
tags: spam
---
I use the terrific sorbs dnsbl to block spam from my mailservers, but I've been having some issues with the safe list being too aggressive lately, so I've switched to using these three instead:

<pre>reject_rhsbl_recipient relays.dnsbl.sorbs.net,

reject_rhsbl_recipient zombie.dnsbl.sorbs.net,

reject_rhsbl_recipient dul.dnsbl.sorbs.net</pre>

Hopefully that will help. For what its worth, here's my postfix UCE settings:

<pre># need to have this be liberal due to m$

smtpd_helo_restrictions =        reject_unauth_pipelining,        permit# Who is allowed to connect to smtpd??

smtpd_client_restrictions =        reject_unauth_pipelining,        permit_mynetworks,        permit_sasl_authenticated,        # this one is aggressive - no ptr, no connection.        #reject_unknown_client,        reject_rbl_client sbl.spamhaus.org,        reject_rbl_client list.dsbl.org,        reject_rbl_client relays.ordb.org,        reject_rbl_client relays.dnsbl.sorbs.net,        reject_rbl_client dnsbl.njabl.org,        permit# Who is allowed to send through smtpd

smtpd_sender_restrictions =        reject_unauth_pipelining,        reject_non_fqdn_sender,        reject_unknown_sender_domain,        reject_rhsbl_sender dsn.rfc-ignorant.org,        permit

smtpd_recipient_restrictions =        reject_unauth_pipelining,                                                                 reject_invalid_hostname,        reject_non_fqdn_recipient,        reject_unknown_recipient_domain,        permit_mynetworks,        permit_sasl_authenticated,        reject_unauth_destination,        reject_rhsbl_recipient sbl.spamhaus.org,        reject_rhsbl_recipient relays.dnsbl.sorbs.net,        reject_rhsbl_recipient zombie.dnsbl.sorbs.net,        reject_rhsbl_recipient dul.dnsbl.sorbs.net,        reject_rhsbl_recipient dnsbl.njabl.org,        reject_rhsbl_recipient dsn.rfc-ignorant.org,        check_policy_service inet:127.0.0.1:10030,        check_recipient_maps</pre>

¥

