---
title: AWChat EJabberd Upgrade and DJAbberd Tests
comments:
  - author: Mickaël Rémond
    email: mremond@process-one.net
    url: http://www.process-one.net/
    date: 02/25/2008 12:17:32 PM
    text: >
      Hello,<br/><br/>Usually, when you use an LDAP, it is because you handle your userbase with some other central applications.<br/>We have not found any need for register support with LDAP (and more than that all our users would forbid it anyway.
  - author: Albert
    date: 02/25/2008 01:48:50 PM
    text: >
      Hi Mickaël, I am going to use LDAP so that the userbase is more portable. However, it is a good point about using another app for managing users, a web registration form could be used.
date: 2008-02-20
tags: djabberd,jabber,xmpp
---
I just tried out awchat - works fine, but the interface is a little quirky. I'm looking forward to using it alongside pidgin. I'm currently using it with ejabberd, but I'm also evaluating djabberd.

While on the subject, I tried out ldap authentication with ejabberd - it works! I can't get register to work though, so I'm upgrading to 1.1.4, hopefully nothing breaks in the process. :-)

Good, nothing broke, but I don't think its possible to register when using LDAP authentication. Oh well.

I found these links helpful:

<a href="http://graveyard.martinjansen.com/2006/08/06/djabberd.html">http://graveyard.martinjansen.com/2006/08/06/djabberd.html</a>

<a href="http://search.cpan.org/search?query=djabberd&mode=all">http://search.cpan.org/search?query=djabberd&mode=all</a>

I also emailed this to Martin:

<blockquote>
Thanks for your djabberd instructions, worked great for me. I installed DJabberd via CPAN on debian, so my start script looked like this:

<pre>d_start() {
  start-stop-daemon --start --quiet --pidfile $PIDFILE -m \
  -d /usr/local/share/perl/5.8.8/DJabberd \
  --chuid djabberd \
  --background \
  --exec $DAEMON -- $OPTS
}</pre>

and I had to chown djabberd.log /var/log/djabberd.log (after having previously starting djabberd as root to debug).  You probably already know this, but maybe it will help your readers. </blockquote>

Can't seem to get djabberd to authenticate with LDAP for some reason...
<pre>
DEBUG DJabberd.Connection.XML.ClientIn         1 &gt;&lt;?xml version="1.0" encoding="UTF-8"?>&lt;stream:stream from='blah.savonix.com' id="16493c54fcd56b291d9250db1499397d080c1ddb" version='1.0'  xmlns:stream="http://etherx.jabber.org/streams" xmlns="jabber:client">&lt;stream:features>&lt;auth xmlns='http://jabber.org/features/iq-auth'/>&lt;/stream:features>

DEBUG DJabberd.Connection.XML.ClientIn         1 &lt; &lt;iq type='get' id='purplec35090bf'>&lt;query xmlns='jabber:iq:auth'>&lt;username>albert&lt;/username>&lt;/query>&lt;/iq>

INFO  DJabberd.Connection.XML.ClientIn         &ltiq  type='result' id='purplec35090bf'>&lt;query xmlns='jabber:iq:auth'>&lt;username>albert&lt;/username>&lt;password/>&lt;resource/>&lt;/query>&lt;/iq>

DEBUG DJabberd.Connection.XML.ClientIn         1 &lt; &lt;iq type='set' id='purplec35090c0'>&lt;query xmlns='jabber:iq:auth'>&lt;username>albert&lt;/username>&lt;resource>Home&lt;/resource>&lt;password/>&lt;/query>&lt;/iq>

INFO  DJabberd.Authen.LDAP                     Searching (&(objectClass=simpleSecurityObject)(uid=albert)) on ou=jabbers,dc=savonix,dc=com

INFO  DJabberd.Authen.LDAP                     Account albert not found.

DEBUG DJabberd.Connection.ClientIn             DISCONNECT: 1</pre>

UPDATE: See <a href="http://www.docunext.com/">DJabberd on Debian</a>

¥

