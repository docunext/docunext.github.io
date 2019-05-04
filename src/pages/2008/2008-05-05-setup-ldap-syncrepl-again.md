---
title: Setup LDAP syncrepl again
comments:
  - author: Gavin Henry
    email: ghenry@OpenLDAP.org
    ip: 212.159.59.85
    url: http://www.openldap.org
    date: 05/06/2008 03:59:16 AM
    text: >
      Of course you did ;-)<br/><br/>The seaerchbase si for the syncrepl statement only.<br/><br/>You need to add dc=example,dc=com to your /etc/ldap.conf or /etc/openldap/ldap.conf depending on how you built OpenLDAP.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 05/06/2008 11:58:20 AM
    text: >
      Hi Gavin, thanks for the tip. I'll try that out. Also, I can never figure out where that file is supposed to live!
date: 2008-05-05
tags: ldap
---
I setup syncrepl for slapd on lisa132 today, its pretty easy, just have to add a couple of things to /etc/ldap/slapd.conf:

<pre lang="bash">rootdn ...
moduleload  syncprov
overlay syncprov
syncprov-checkpoint 100 10
syncprov-sessionlog 100
syncrepl rid=132        provider=ldap://255.255.255.255:389        type=refreshOnly        interval=00:00:01:00        searchbase="dc=example,dc=com"        filter="(objectClass=*)"        scope=sub</pre>

Note - after doing this, I checked my setup with ldapsearch. I still had to use the basedn flag:

<pre lang="sh_sh">ldapsearch -x -b dc=example,dc=com</pre>

¥

