---
title: Stanford s WebAuth
date: 2007-09-25
---

Last nice I came across Stanford's WebAuth site again, and this time took a second look at it. Couple of things I noticed:

<ul><li>Interfaces with Kerberos or Shibboleth (actually I think Kerberos might be needed on both)</li><li>Reminds me somewhat of OpenID - one "server" required, many "clients"</li><li>Uses cookies for "single sign-on" capabilities</li><li>Hooks / modules exist for Apache, LDAP, Cyrus SASL, and CURL</li></ul>

Questions to answer:

<ul><li>Do the "client sites" that hook back into the WebKDC need to networked to each other?</li><li>What does KDC stand for?</li></ul>

I use Cyrus SASL in my mail servers, and CURL in some of my PHP implementations, and I defintely use Apache all the time in many instances. I've experimented with LDAP and would love to get it more integrated with our operations, but I just haven't gotten a firm enough grasp of it. And from the community side, it seems to have solid but slightly waning support as a protocol - its respected but not widely popular. Why is that I wonder? Am I missing something?

<a href="http://www.stanford.edu/services/webauth/">stanford.edu/services/webauth/</a>
